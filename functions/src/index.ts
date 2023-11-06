import * as functions from "firebase-functions";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

interface Settings {
  tools: {
    stove: boolean;
    oven: boolean;
    microwave: boolean;
    airFryer: boolean;
    blender: boolean;
    instantPot: boolean;
  };
  meals: {
    breakfast: boolean;
    lunchOrDinner: boolean;
    snack: boolean;
    dessert: boolean;
  };
  experience: number;
  pantry: string[];
  usePantry: boolean;
  mainIngredients: string[];
  useMainIngredients: boolean;
  exclude: string[];
  useExclude: boolean;
  servings: number;
  cookingTime: number;
}

function getTools(settings: Settings) {
  const usedAppliances = [];

  if (settings.tools.oven) {
    usedAppliances.push("oven");
  }
  if (settings.tools.stove) {
    usedAppliances.push("stove");
  }
  if (settings.tools.microwave) {
    usedAppliances.push("microwave");
  }
  if (settings.tools.airFryer) {
    usedAppliances.push("air fryer");
  }
  if (settings.tools.blender) {
    usedAppliances.push("blender");
  }
  if (settings.tools.instantPot) {
    usedAppliances.push("instant pot");
  }

  return (
    "You only create recipes that can be made with some or all of the following tools: " +
    usedAppliances.join(", ") +
    "."
  );
}

function getExperience(settings: Settings): string {
  switch (settings.experience) {
    case 0:
      return "Your generated recipes should be suitable for a beginner cook.";
    case 1:
      return "Your generated recipes should be suitable for an intermediate level cook.";
    default:
      return "Your generated recipes should be suitable for a highly-skilled cook.";
  }
}

function getMeals(settings: Settings): string {
  const meals = [];

  if (settings.meals.breakfast) {
    meals.push("breakfast");
  }
  if (settings.meals.lunchOrDinner) {
    meals.push("dinner");
  }
  if (settings.meals.snack) {
    meals.push("snack");
  }
  if (settings.meals.dessert) {
    meals.push("dessert");
  }

  let prompt: string;

  if (meals.length > 2) {
    const lastMeal = meals.pop(); // Remove the last meal from the array
    prompt = meals.join(", ") + ", or " + lastMeal;
  } else if (meals.length == 2) {
    prompt = meals.join(" or ");
  } else if (meals.length == 1) {
    prompt = meals[0];
  } else {
    prompt = "";
  }

  return prompt;
}

export const createRecipe = functions.https.onRequest(async (request, response) => {
  if (request.method !== "POST") {
    response.status(400).send("Please send a POST request");
    return;
  }

  const settings = request.body.settings as Settings;

  const tools = getTools(settings);
  const experience = getExperience(settings);
  const meals = getMeals(settings);
  let mainIngredients = "";
  let exclude = "";
  let pantry = "";

  if (settings.useExclude && settings.exclude.length > 0) {
    exclude = `\n\nUnder no circumstance are you allowed to include ingredients from the following list.
Ingredients to avoid:
${settings.exclude.join(", ")}`;
  }

  if (settings.useMainIngredients && settings.mainIngredients.length > 0) {
    mainIngredients = "\n\nIncorporate all of the following ingredients into " +
      `the recipe: ${settings.mainIngredients.join(
        ", "
      )}`;
  }

  if (settings.usePantry && settings.pantry.length > 0) {
    pantry = "\n\nCreate a recipe that incorporates some of the ingredients " +
      `from the ingredient list. Do not use ingredients that are not found in the ingredient list.
Ingredient List:
${settings.pantry.join(", ")}`;
  }

  const systemPrompt = "You are ChefAI. Your job is to help create " +
    `${meals} recipes that take less than ${settings.cookingTime} minutes to make. ${tools}`;

  const prompt = "Generate 1 recipe that yields " +
    `${settings.servings} servings. ${experience}${exclude}${pantry}${mainIngredients}
Try to use imperial units whenever possible (avoid grams, "cloves", "can", etc.)`;

  const jsonPrompt = "Convert the following recipe into one JSON object. " +
    "The fields for this recipe should be \"name\", \"ingredients\" (an array " +
    "of strings), and \"instructions\" (an array of strings). Do not use " +
    "nested objects. Do not include anything other than the JSON array. No prose. Do not confirm my request.";

  const model = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    modelName: "gpt-3.5-turbo",
    temperature: 1.2,
  });

  console.log("***PROMPT***");
  console.log(systemPrompt);
  console.log(prompt + "\n");

  const stringRes = (
    await model.call([new SystemChatMessage(systemPrompt), new HumanChatMessage(prompt)])
  ).text;

  console.log("***STRING RES***");
  console.log(stringRes + "\n");

  const jsonRes = (await model.call([new HumanChatMessage(jsonPrompt + "\n" + stringRes)])).text;

  console.log("***JSON RES***");
  console.log(jsonRes);

  response.send(JSON.parse(jsonRes));
});

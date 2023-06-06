import { OPENAI_API_KEY } from '$env/static/private';

import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanChatMessage, SystemChatMessage } from 'langchain/schema';
import { json } from '@sveltejs/kit';

const chefgpt =
  'Task:Create a meal recipe by strictly following these rules:1-Ingredients available: Apple,Avocado,Banana,Basil,Beef,Beer,Bell Peppers,Bread,Broccoli,Butter,Cabbage,Carrots,Celery,Cheese,Chicken. 2-Kitchen Tools Available:Oven,Microvawe Oven,Blender,Food Processor,Barbecue,Air Fryer,Stove Top.Slow Cooker.Pressure Cooker.Sous Vide Machine. 3-Cooking time: Less than 65 minutes. 4-Difficulty of execution: Easy. 5-Ingredients Usage: You can use ANY of the available ingredients at your discretion. DO NOT USE ANY INGREDIENT THAT IS NOT A COOKING INGREDIENT. 6- Always include Ingredients quantity as part of the STRING';

// export const prerender = false;

// const message1 = `You are ChefAI. Your job is to help create recipes that take less than an hour to make.
//                  Generate 1 recipe.
//                  Respond with one JSON object, with fields for name, ingredients (array), and instructions (array).
//                  Do not use nested objects. Do not include anything other than the JSON array. No prose. Do not confirm my request.
//                  Try to use imperial units whenever possible (avoid grams, "cloves", "can", etc.)`

// // Under no circumstance are you allowed to include ingredients from the following avoid list.
// // Ingredients to avoid:
// // quinoa, squash, pickles, lettuce, steak, beef, sweet potatoes, asparagus, tofu, spam

// // Only create recipes that incorporate ingredients from the ingredient list. Do not use ingredients that are not found in the ingredient list.
// // Ingredient List:
// // eggs, milk, flour, olive oil, garlic powder, ketchup, soy sauce, mayonnaise, bread, baking powder, potatos, honey, paprika, peanut butter, onion powder, italian seasoning, celery, avocado, spinach, cauliflower, mixed vegetables, lemons, bananas, pistachios, flax seed, parmesan, cream cheese, mozzarella, provolone, mexican cheese blend, pepper jack, greek yogurt, turkey bacon, chicken, turkey burgers, salmon, tilapia, tuna, shrimp, dried parsley flakes, honey, seasoned salt, salt, pepper, mustard powder, lemon pepper seasoning, poultry seasoning, steak seasoning, bread crumbs, pancake mix, brown rice, breakfast cereal, green beans, black beans, ramen noodles, tortillas, tortilla chips, pretzels, english muffins, soy sauce, hot sauce, bbq sauce, applesauce, pesto

// const message2 = `You are ChefAI. Your job is to help create recipes that take less than an hour to make.
// Generate 1 recipe for air fryer seasoned breakfast potatoes.

// Use only the following ingredients:
// russet potatoes
// olive oil
// salt
// onion powder
// paprika
// ground black pepper
// shredded cheese

// Respond with one JSON object, with fields for name, ingredients (array), and instructions (array).
// Do not use nested objects. Do not include anything other than the JSON array. No prose. Do not confirm my request.
// Try to use imperial units whenever possible (avoid grams, "cloves", "can", etc.)`

// const message3 = `You are ChefAI. Your job is to help create air fryer recipes that take less than an hour to make.
// Generate 1 recipe.
// Respond with one JSON object, with fields for name, ingredients (array), and instructions (array).
// Do not use nested objects. Do not include anything other than the JSON array. No prose. Do not confirm my request.
// Try to use imperial units whenever possible (avoid grams, "cloves", "can", etc.)`

// message = `hello`

// export const GET = async () => {

//   const model = new ChatOpenAI({
//     openAIApiKey: OPENAI_API_KEY,
//     // streaming: true,
//     modelName: 'gpt-3.5-turbo',
//     temperature: 1.2,
//     callbacks: [
//       // {
//       //   handleLLMNewToken(token) {
//       //     if (token.includes('\n')) token = token.replace('\n', '\\n');
//       //     // console.log(token);
//       //     // if (token.includes('\n') && token != '\n') {
//       //     //   console.log(token);
//       //     //   token.replace('\n', '\\n');
//       //     // }
//       //     controller.enqueue(`event: message\ndata: ${token}\n\n`);
//       //   },
//       // }
//     ]
//   });

//   const res = (await model.call([new HumanChatMessage(message3)])).text;

//   // const stream = new ReadableStream({
//   //   start(controller) {
//   //     const model = new ChatOpenAI({
//   //       openAIApiKey: OPENAI_API_KEY,
//   //       streaming: true,
//   //       modelName: 'gpt-3.5-turbo',
//   //       temperature: 1,
//   //       callbacks: [
//   //         {
//   //           handleLLMNewToken(token) {
//   //             if (token.includes('\n')) token = token.replace('\n', '\\n');
//   //             // console.log(token);
//   //             // console.log(token);
//   //             // if (token.includes('\n') && token != '\n') {
//   //             //   console.log(token);
//   //             //   token.replace('\n', '\\n');
//   //             // }
//   //             controller.enqueue(`event: message\ndata: ${token}\n\n`);
//   //           },
//   //         }
//   //       ]
//   //     });

//   //     model.call([new HumanChatMessage(message)])
//   //     // .then((msg) => console.log(JSON.parse(msg.text)))
//   //     // timer = setInterval(() => {
//   //     //   const current_time = new Date().toLocaleString();
//   //     //   const data = `event: message\ndata: ${current_time}\n\n`;
//   //     //   controller.enqueue(data);
//   //     // }, 1000);
//   //   },
//   //   cancel() {
//   //     //
//   //   }
//   // });

//   // return new Response(stream, {
//   //   headers: {
//   //     'Content-Type': 'text/event-stream'
//   //   },
//   // });
//   console.log(JSON.parse(res));
//   return json(JSON.parse(res));
// };

function getTools(settings: Settings) {
  const usedAppliances = [];

  if (settings.tools.oven) {
    usedAppliances.push('oven');
  }
  if (settings.tools.stove) {
    usedAppliances.push('stove');
  }
  if (settings.tools.microwave) {
    usedAppliances.push('microwave');
  }
  if (settings.tools.airFryer) {
    usedAppliances.push('air fryer');
  }
  if (settings.tools.blender) {
    usedAppliances.push('blender');
  }
  if (settings.tools.instantPot) {
    usedAppliances.push('instant pot');
  }

  return (
    'You only create recipes that can be made with some or all of the following tools: ' +
    usedAppliances.join(', ') +
    '.'
  );
}

function getExperience(settings: Settings): string {
  switch (settings.experience) {
    case 0:
      return 'Your generated recipes should be suitable for a beginner cook.';
    case 1:
      return 'Your generated recipes should be suitable for an intermediate level cook.';
    default:
      return 'Your generated recipes should be suitable for a highly-skilled cook.';
  }
}

function getMeals(settings: Settings): string {
  const meals = [];

  if (settings.meals.breakfast) {
    meals.push('breakfast');
  }
  if (settings.meals.lunchOrDinner) {
    meals.push('dinner');
  }
  if (settings.meals.snack) {
    meals.push('snack');
  }
  if (settings.meals.dessert) {
    meals.push('dessert');
  }

  let prompt: string;

  if (meals.length > 2) {
    const lastMeal = meals.pop(); // Remove the last meal from the array
    prompt = meals.join(', ') + ', or ' + lastMeal;
  } else if (meals.length == 2) {
    prompt = meals.join(' or ');
  } else if (meals.length == 1) {
    prompt = meals[0];
  } else {
    prompt = '';
  }

  return prompt;
}

export async function POST({ request }) {
  const { settings } = await request.json();

  const tools = getTools(settings);
  const experience = getExperience(settings);
  const meals = getMeals(settings);
  let mainIngredients = '';
  let exclude = '';
  let pantry = '';

  if (settings.useExclude && settings.exclude.length > 0) {
    exclude = `\n\nUnder no circumstance are you allowed to include ingredients from the following list.
Ingredients to avoid:
${settings.exclude.join(', ')}`;
  }

  console.log(settings.useMainIngredients);
  if (settings.useMainIngredients && settings.mainIngredients.length > 0) {
    mainIngredients = `\n\nIncorporate all of the following ingredients into the recipe: ${settings.mainIngredients.join(
      ', '
    )}`;
  }

  if (settings.usePantry && settings.pantry.length > 0) {
    pantry = `\n\nCreate a recipe that incorporates some of the ingredients from the ingredient list. Do not use ingredients that are not found in the ingredient list.
Ingredient List:
${settings.pantry.join(', ')}`;
  }

  const systemPrompt = `You are ChefAI. Your job is to help create ${meals} recipes that take less than ${settings.cookingTime} minutes to make. ${tools}`;

  //   const prompt = `You are ChefAI. Your job is to help create recipes that take less than ${settings.cookingTime} minutes to make.
  // Generate 1 recipe that yields ${settings.servings} servings.${exclude}${pantry}
  const prompt = `Generate 1 recipe that yields ${settings.servings} servings. ${experience}${exclude}${pantry}${mainIngredients}
Try to use imperial units whenever possible (avoid grams, "cloves", "can", etc.)`;
  // Respond with one JSON object, with fields for name, ingredients (array of strings), and instructions (array of strings).
  // Do not use nested objects. Do not include anything other than the JSON array. No prose. Do not confirm my request.`;

  // console.log(prompt);
  const jsonPrompt = `Convert the following recipe into one JSON object. The fields for this recipe should be "name", "ingredients" (an array of strings), and "instructions" (an array of strings). Do not use nested objects. Do not include anything other than the JSON array. No prose. Do not confirm my request.`;

  const model = new ChatOpenAI({
    openAIApiKey: OPENAI_API_KEY,
    modelName: 'gpt-3.5-turbo',
    temperature: 1.2
  });

  console.log(systemPrompt);
  console.log(prompt);

  const stringRes = (
    await model.call([new SystemChatMessage(systemPrompt), new HumanChatMessage(prompt)])
  ).text;

  const jsonRes = (await model.call([new HumanChatMessage(jsonPrompt + '\n' + stringRes)])).text;

  // console.log(JSON.parse(res2));

  // const ret = json({ str: res1, json: JSON.parse(res2) });

  return json(JSON.parse(jsonRes));
  // return ret;
}

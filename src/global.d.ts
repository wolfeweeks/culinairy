interface Recipe {
  id: string | undefined;
  name: string;
  ingredients: string[];
  instructions: string[];
}

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

import { writable, type Writable } from 'svelte/store';

export const SelectedRecipeStore: Writable<Recipe | null> = writable();

// export const GeneratedStore: Writable<string | undefined> = writable('nothing');

export const SettingsStore: Writable<Settings> = writable({
  tools: {
    stove: true,
    oven: true,
    microwave: true,
    blender: true,
    airFryer: false,
    instantPot: false
  },
  meals: {
    breakfast: true,
    lunchOrDinner: true,
    snack: false,
    dessert: false
  },
  experience: 0,
  useExclude: false,
  useMainIngredients: false,
  usePantry: false,
  cookingTime: 60,
  mainIngredients: [],
  pantry: [],
  exclude: [],
  servings: 1
});

export const RecipesStore: Writable<Recipe[]> = writable([]);

import { w as writable } from "./index3.js";
import { doc, collection, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
function docStore(firestore, ref, startWith) {
  let unsubscribe;
  if (!firestore || !globalThis.window) {
    console.warn("Firestore is not initialized or not in browser");
    const { subscribe: subscribe2 } = writable(startWith);
    return {
      subscribe: subscribe2,
      ref: null,
      id: ""
    };
  }
  const docRef = typeof ref === "string" ? doc(firestore, ref) : ref;
  const { subscribe } = writable(startWith, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set(snapshot.data() ?? null);
    });
    return () => unsubscribe();
  });
  return {
    subscribe,
    ref: docRef,
    id: docRef.id
  };
}
function collectionStore(firestore, ref, startWith = []) {
  let unsubscribe;
  if (!firestore || !globalThis.window) {
    console.warn("Firestore is not initialized or not in browser");
    const { subscribe: subscribe2 } = writable(startWith);
    return {
      subscribe: subscribe2,
      ref: null
    };
  }
  const colRef = typeof ref === "string" ? collection(firestore, ref) : ref;
  const { subscribe } = writable(startWith, (set) => {
    unsubscribe = onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((s) => {
        return { id: s.id, ref: s.ref, ...s.data() };
      });
      set(data);
    });
    return () => unsubscribe();
  });
  return {
    subscribe,
    ref: colRef
  };
}
function userStore(auth) {
  let unsubscribe;
  if (!auth || !globalThis.window) {
    console.warn("Auth is not initialized on not in browser");
    const { subscribe: subscribe2 } = writable(null);
    return {
      subscribe: subscribe2
    };
  }
  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });
    return () => unsubscribe();
  });
  return {
    subscribe
  };
}
const sdk = writable();
const SelectedRecipeStore = writable();
const SettingsStore = writable({
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
export {
  SettingsStore as S,
  SelectedRecipeStore as a,
  collectionStore as c,
  docStore as d,
  sdk as s,
  userStore as u
};

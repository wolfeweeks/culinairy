import { c as create_ssr_component, a as escape, h as add_attribute, l as add_styles, b as subscribe, e as each, v as validate_component } from "../../../../chunks/index2.js";
import "firebase/firestore";
import { U as User, C as Cookbook } from "../../../../chunks/Cookbook.js";
import { s as sdk, c as collectionStore, a as SelectedRecipeStore } from "../../../../chunks/stores.js";
import "firebase/auth";
import "../../../../chunks/firebase.js";
import "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const css = {
  code: ".animIndeterminate.svelte-meqa4r{transform-origin:0% 50%;animation:svelte-meqa4r-animIndeterminate 2s infinite linear}@keyframes svelte-meqa4r-animIndeterminate{0%{transform:translateX(0) scaleX(0)}40%{transform:translateX(0) scaleX(0.4)}100%{transform:translateX(100%) scaleX(0.5)}}",
  map: null
};
const cTrack = "w-full overflow-hidden";
const cMeter = "h-full";
const ProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fillPercent;
  let indeterminate;
  let classesIndeterminate;
  let classesTrack;
  let classesMeter;
  let { value = void 0 } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { height = "h-2" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  let { meter = "bg-surface-900-50-token" } = $$props;
  let { track = "bg-surface-200-700-token" } = $$props;
  let { labelledby = "" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.meter === void 0 && $$bindings.meter && meter !== void 0)
    $$bindings.meter(meter);
  if ($$props.track === void 0 && $$bindings.track && track !== void 0)
    $$bindings.track(track);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  $$result.css.add(css);
  fillPercent = value ? 100 * (value - min) / (max - min) : 0;
  indeterminate = value === void 0 || value < 0;
  classesIndeterminate = indeterminate ? "animIndeterminate" : "";
  classesTrack = `${cTrack} ${height} ${rounded} ${track} ${$$props.class ?? ""}`;
  classesMeter = `${cMeter} ${rounded} ${classesIndeterminate} ${meter}`;
  return `
<div class="${"progress-bar " + escape(classesTrack, true) + " svelte-meqa4r"}" data-testid="progress-bar" role="progressbar"${add_attribute("aria-labelledby", labelledby, 0)}${add_attribute("aria-valuenow", value, 0)}${add_attribute("aria-valuemin", min, 0)}${add_attribute("aria-valuemax", max - min, 0)}>
	<div class="${"progress-bar-meter " + escape(classesMeter, true) + " " + escape(classesMeter, true) + " svelte-meqa4r"}"${add_styles({
    "width": `${indeterminate ? 100 : fillPercent}%`
  })}></div>
</div>`;
});
const Collection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $sdk, $$unsubscribe_sdk;
  let $store, $$unsubscribe_store;
  $$unsubscribe_sdk = subscribe(sdk, (value) => $sdk = value);
  let { ref } = $$props;
  let { firestore = $sdk?.firestore } = $$props;
  let { startWith = void 0 } = $$props;
  let store = collectionStore(firestore, ref, startWith);
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.firestore === void 0 && $$bindings.firestore && firestore !== void 0)
    $$bindings.firestore(firestore);
  if ($$props.startWith === void 0 && $$bindings.startWith && startWith !== void 0)
    $$bindings.startWith(startWith);
  $$unsubscribe_sdk();
  $$unsubscribe_store();
  return `${$store !== void 0 ? `${slots.default ? slots.default({
    data: $store,
    ref: store.ref,
    count: $store?.length ?? 0
  }) : ``}` : `${slots.loading ? slots.loading({
    data: $store,
    ref: store.ref,
    count: $store?.length ?? 0
  }) : ``}`}`;
});
const Recipe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { recipe } = $$props;
  let { loading } = $$props;
  if ($$props.recipe === void 0 && $$bindings.recipe && recipe !== void 0)
    $$bindings.recipe(recipe);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  return `<div class="flex-1 h-full rounded-token">${!loading && recipe ? `<h1 class="h1 font-bold">${escape(recipe.name)}</h1>
		<br>

		<h3 class="h3 font-semibold">Ingredients:</h3>
		<div class="mb-1"></div>
		<ul class="grid lg:grid-cols-3 md:grid-cols-2 gap-2 md:w-[50%]">${each(recipe.ingredients, (ingredient) => {
    return `<li class="bg-surface-200 dark:bg-surface-700 border-token border-surface-200 dark:border-surface-100 rounded-token p-2 font-light">${escape(ingredient)}
				</li>`;
  })}</ul>
		<br>

		<h3 class="h3 font-semibold">Instructions:</h3>
		<ol class="list">${each(recipe.instructions, (instruction, i) => {
    return `<li class="p-3 bg-surface-200-700-token hover:bg-surface-300-600-token"><span class="text-lg font-semibold">${escape(i + 1)}.</span>
					<span class="flex-auto">${escape(instruction)}</span>
				</li>`;
  })}</ol>` : `
		<div class="fixed top-[4.6rem] inset-0 z-50 bg-black bg-opacity-20 dark:bg-opacity-10 flex items-center justify-center"><div class="flex flex-col items-center space-y-4"><h3 class="h3">Your recipe is generating. Please be patient.</h3>
				${validate_component(ProgressBar, "ProgressBar").$$render(
    $$result,
    {
      class: "w-1/2 mx-auto",
      meter: "bg-primary-500",
      track: "bg-primary-300"
    },
    {},
    {}
  )}
				${validate_component(ProgressBar, "ProgressBar").$$render(
    $$result,
    {
      class: "w-1/2 mx-auto",
      meter: "bg-secondary-500",
      track: "bg-secondary-300"
    },
    {},
    {}
  )}
				${validate_component(ProgressBar, "ProgressBar").$$render(
    $$result,
    {
      class: "w-1/2 mx-auto",
      meter: "bg-tertiary-500",
      track: "bg-tertiary-300"
    },
    {},
    {}
  )}</div></div>

		<div class="font-bold placeholder animate-pulse w-[75%] h-10"></div>
		<br>

		<div class="space-y-4"><div class="placeholder w-[300px] h-8 animate-pulse"></div>
			<div class="grid grid-cols-3 gap-4 w-[50%]"><div class="placeholder h-16 animate-pulse"></div>
				<div class="placeholder h-16 animate-pulse"></div>
				<div class="placeholder h-16 animate-pulse"></div>
				<div class="placeholder h-12 animate-pulse"></div>
				<div class="placeholder h-12 animate-pulse"></div>
				<div class="placeholder h-12 animate-pulse"></div>
				<div class="placeholder h-12 animate-pulse"></div></div>
			<br>
			<div class="placeholder w-[300px] h-8 animate-pulse"></div>
			<div class="grid grid-cols-1 gap-4"><div class="placeholder h-14 w-full animate-pulse"></div>
				<div class="placeholder h-14 w-full animate-pulse"></div>
				<div class="placeholder h-14 w-full animate-pulse"></div>
				<div class="placeholder h-14 w-full animate-pulse"></div>
				<div class="placeholder h-14 w-full animate-pulse"></div>
				<div class="placeholder h-14 w-full animate-pulse"></div></div></div>

		`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isSmallScreen;
  let $SelectedRecipeStore, $$unsubscribe_SelectedRecipeStore;
  $$unsubscribe_SelectedRecipeStore = subscribe(SelectedRecipeStore, (value) => $SelectedRecipeStore = value);
  SelectedRecipeStore.set(null);
  let innerWidth = 0;
  isSmallScreen = innerWidth < 1024;
  $$unsubscribe_SelectedRecipeStore();
  return `

${validate_component(User, "User").$$render($$result, {}, {}, {
    default: ({ user }) => {
      return `${validate_component(Collection, "Collection").$$render($$result, { ref: `users/${user.uid}/recipes` }, {}, {
        default: ({ data: recipes }) => {
          return `<div class="flex h-[calc(100vh-75px)] overflow-y-clip">${isSmallScreen ? `<button class="btn fixed bottom-4 right-4 px-4 py-2 bg-primary-400 text-black shadow-lg">Open Cookbook
				</button>` : `<div class="bg-surface-200-700-token overflow-y-scroll min-w-[300px]">${validate_component(Cookbook, "Cookbook").$$render($$result, { recipes }, {}, {})}</div>`}
			<div class="overflow-y-scroll w-full flex flex-col"><div class="p-4 flex-grow">${$SelectedRecipeStore ? `<div class="">${validate_component(Recipe, "Recipe").$$render(
            $$result,
            {
              recipe: $SelectedRecipeStore,
              loading: false
            },
            {},
            {}
          )}</div>` : `<p>Select a recipe from the sidebar or generate a new recipe.</p>`}</div>
				${$SelectedRecipeStore ? `<div class="ml-4 sm:mb-4 lg:mb-4 min-h-[75px] flex align-middle"><button class="btn px-4 py-2 my-4 bg-error-400 text-black">Delete this recipe
						</button></div>` : ``}
				</div></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};

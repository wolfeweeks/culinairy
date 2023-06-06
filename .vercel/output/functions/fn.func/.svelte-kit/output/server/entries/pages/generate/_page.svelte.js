import { c as create_ssr_component, d as compute_rest_props, f as createEventDispatcher, o as onMount, a as escape, h as add_attribute, e as each, b as subscribe, v as validate_component, i as set_store_value, n as noop } from "../../../chunks/index2.js";
import { S as SettingsStore, u as userStore, d as docStore } from "../../../chunks/stores.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { a as auth, d as db } from "../../../chunks/firebase.js";
import { collection } from "firebase/firestore";
const cBase = "textarea cursor-pointer";
const cInterface = "space-y-4";
const cChipList = "flex flex-wrap gap-2";
const cInputField = "unstyled bg-transparent border-0 !ring-0 p-0 w-full";
const InputChip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesInvalid;
  let classesBase;
  let classesInterface;
  let classesChipList;
  let classesInputField;
  let $$restProps = compute_rest_props($$props, [
    "input",
    "name",
    "value",
    "whitelist",
    "max",
    "minlength",
    "maxlength",
    "allowUpperCase",
    "allowDuplicates",
    "validation",
    "duration",
    "required",
    "chips",
    "invalid",
    "padding",
    "rounded"
  ]);
  createEventDispatcher();
  let { input = "" } = $$props;
  let { name } = $$props;
  let { value = [] } = $$props;
  let { whitelist = [] } = $$props;
  let { max = -1 } = $$props;
  let { minlength = -1 } = $$props;
  let { maxlength = -1 } = $$props;
  let { allowUpperCase = false } = $$props;
  let { allowDuplicates = false } = $$props;
  let { validation = () => true } = $$props;
  let { duration = 150 } = $$props;
  let { required = false } = $$props;
  let { chips = "variant-filled" } = $$props;
  let { invalid = "input-error" } = $$props;
  let { padding = "p-2" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let chipValues = value.map((val) => {
    return { val, id: Math.random() };
  });
  let selectElement;
  onMount(() => {
    if (!selectElement.form)
      return;
  });
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.whitelist === void 0 && $$bindings.whitelist && whitelist !== void 0)
    $$bindings.whitelist(whitelist);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.minlength === void 0 && $$bindings.minlength && minlength !== void 0)
    $$bindings.minlength(minlength);
  if ($$props.maxlength === void 0 && $$bindings.maxlength && maxlength !== void 0)
    $$bindings.maxlength(maxlength);
  if ($$props.allowUpperCase === void 0 && $$bindings.allowUpperCase && allowUpperCase !== void 0)
    $$bindings.allowUpperCase(allowUpperCase);
  if ($$props.allowDuplicates === void 0 && $$bindings.allowDuplicates && allowDuplicates !== void 0)
    $$bindings.allowDuplicates(allowDuplicates);
  if ($$props.validation === void 0 && $$bindings.validation && validation !== void 0)
    $$bindings.validation(validation);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.chips === void 0 && $$bindings.chips && chips !== void 0)
    $$bindings.chips(chips);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  classesInvalid = "";
  classesBase = `${cBase} ${padding} ${rounded} ${$$props.class ?? ""} ${classesInvalid}`;
  classesInterface = `${cInterface}`;
  classesChipList = `${cChipList}`;
  classesInputField = `${cInputField}`;
  chipValues = value.map((val, i) => {
    if (chipValues[i]?.val === val)
      return chipValues[i];
    return { id: Math.random(), val };
  });
  return `<div class="${[
    "input-chip " + escape(classesBase, true),
    $$restProps.disabled ? "opacity-50" : ""
  ].join(" ").trim()}">
	<div class="h-0 overflow-hidden"><select${add_attribute("name", name, 0)} multiple ${required ? "required" : ""} tabindex="-1"${add_attribute("this", selectElement, 0)}>${each(value, (option) => {
    return `<option${add_attribute("value", option, 0)}>${escape(option)}</option>`;
  })}</select></div>
	
	<div class="${"input-chip-interface " + escape(classesInterface, true)}">
		<form><input type="text"${add_attribute("placeholder", $$restProps.placeholder ?? "Enter values...", 0)} class="${"input-chip-field " + escape(classesInputField, true)}" ${$$restProps.disabled ? "disabled" : ""}${add_attribute("value", input, 0)}></form>
		
		${chipValues.length ? `<div class="${"input-chip-list " + escape(classesChipList, true)}">${each(chipValues, ({ id, val }, i) => {
    return `<div><button type="button" class="${"chip " + escape(chips, true)}"><span>${escape(val)}</span>
							<span>✕</span></button>
					</div>`;
  })}</div>` : ``}</div></div>`;
});
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let userDoc;
  let $SettingsStore, $$unsubscribe_SettingsStore;
  let $userDoc, $$unsubscribe_userDoc = noop, $$subscribe_userDoc = () => ($$unsubscribe_userDoc(), $$unsubscribe_userDoc = subscribe(userDoc, ($$value) => $userDoc = $$value), userDoc);
  let $user, $$unsubscribe_user;
  $$unsubscribe_SettingsStore = subscribe(SettingsStore, (value) => $SettingsStore = value);
  const user = userStore(auth);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$subscribe_userDoc(userDoc = docStore(db, `users/${$user?.uid}`));
    {
      if ($userDoc) {
        set_store_value(SettingsStore, $SettingsStore.pantry = $userDoc?.pantry.slice(), $SettingsStore);
        set_store_value(SettingsStore, $SettingsStore.exclude = $userDoc?.exclude.slice(), $SettingsStore);
      }
    }
    $$rendered = `<div class="bg-surface-100 dark:bg-surface-600 rounded-token p-4 flex flex-col items-center lg:xl:w-[50%] md:w-[75%] sm:w-[100%]"><div class="flex justify-center mb-4"><h2 class="h3 font-semibold">Customize your recipe&#39;s settings:</h2></div>

	<h3 class="h3 font-bold">Tools</h3>
	<div class="grid grid-cols-2 gap-x-4 gap-y-4"><label class="flex items-center space-x-2"><input type="checkbox" class="checkbox"${add_attribute("checked", $SettingsStore.tools.stove, 1)}>
			<p>Stove</p></label>
		<label class="flex items-center space-x-2"><input type="checkbox" class="checkbox"${add_attribute("checked", $SettingsStore.tools.oven, 1)}>
			<p>Oven</p></label>
		<label class="flex items-center space-x-2"><input type="checkbox" class="checkbox"${add_attribute("checked", $SettingsStore.tools.microwave, 1)}>
			<p>Microwave</p></label>
		<label class="flex items-center space-x-2"><input type="checkbox" class="checkbox"${add_attribute("checked", $SettingsStore.tools.blender, 1)}>
			<p>Blender</p></label>
		<label class="flex items-center space-x-2"><input type="checkbox" class="checkbox"${add_attribute("checked", $SettingsStore.tools.airFryer, 1)}>
			<p>Air Fryer</p></label>
		<label class="flex items-center space-x-2"><input type="checkbox" class="checkbox"${add_attribute("checked", $SettingsStore.tools.instantPot, 1)}>
			<p>Instant Pot</p></label></div>

	<br>

	<h3 class="h3 font-bold">Cooking Experience</h3>
	<select class="select w-[150px]"><option${add_attribute("value", 0, 0)}>Novice</option><option${add_attribute("value", 1, 0)}>Intermediate</option><option${add_attribute("value", 2, 0)}>Expert</option></select>

	<br>

	<h3 class="h3 font-bold">Meal Type</h3>
	<div class="md:flex md:space-x-4 grid grid-cols-2 gap-y-4"><label class="flex items-center space-x-2"><input type="checkbox" class="checkbox"${add_attribute("checked", $SettingsStore.meals.breakfast, 1)}>
			<p>Breakfast</p></label>
		<label class="flex items-center space-x-2"><input type="checkbox" class="checkbox"${add_attribute("checked", $SettingsStore.meals.lunchOrDinner, 1)}>
			<p>Lunch/Dinner</p></label>
		<label class="flex items-center space-x-2"><input type="checkbox" class="checkbox"${add_attribute("checked", $SettingsStore.meals.snack, 1)}>
			<p>Snack</p></label>
		<label class="flex items-center space-x-2"><input type="checkbox" class="checkbox"${add_attribute("checked", $SettingsStore.meals.dessert, 1)}>
			<p>Dessert</p></label></div>
	<br>

	<h3 class="h3 font-bold">Servings</h3>
	
	<p class="text-xl">${escape($SettingsStore.servings)}</p>
	<input class="w-2/3" type="range" min="1" max="6" step="1"${add_attribute("value", $SettingsStore.servings, 0)}>

	<br>

	<h3 class="h3 font-bold">Cooking time (minutes)</h3>
	
	<p class="text-xl">${$SettingsStore.cookingTime == 180 ? `All Day` : `${escape($SettingsStore.cookingTime)}`}</p>
	<input class="w-2/3" type="range" min="15" max="180" step="5"${add_attribute("value", $SettingsStore.cookingTime, 0)}>

	<br>

	<label class="flex items-center space-x-2"><input type="checkbox" class="checkbox"${add_attribute("checked", $SettingsStore.useMainIngredients, 1)}>
		<h3 class="h3 font-bold">Main Ingredients</h3></label>
	<p${add_attribute(
      "class",
      $SettingsStore.useMainIngredients ? "" : "text-surface-400",
      0
    )}>The generated recipe will consist of all of the ingredients listed
	</p>
	${validate_component(InputChip, "InputChip").$$render(
      $$result,
      {
        name: "chips",
        placeholder: "To add an ingredient, type the name and press enter",
        disabled: !$SettingsStore.useMainIngredients,
        value: $SettingsStore.mainIngredients
      },
      {
        value: ($$value) => {
          $SettingsStore.mainIngredients = $$value;
          $$settled = false;
        }
      },
      {}
    )}

	<br>

	<label class="flex items-center space-x-2"><input type="checkbox" class="checkbox"${add_attribute("checked", $SettingsStore.usePantry, 1)}>
		<h3 class="h3 font-bold">Use Pantry</h3></label>
	<p${add_attribute("class", $SettingsStore.usePantry ? "" : "text-surface-400", 0)}>The generated recipe will only consist of ingredients listed in your pantry
	</p>
	${validate_component(InputChip, "InputChip").$$render(
      $$result,
      {
        name: "chips",
        placeholder: "To add an ingredient, type the name and press enter",
        chips: "bg-primary-500/25 ring-1 ring-primary-500",
        disabled: !$SettingsStore.usePantry,
        value: $SettingsStore.pantry
      },
      {
        value: ($$value) => {
          $SettingsStore.pantry = $$value;
          $$settled = false;
        }
      },
      {}
    )}
	
	<div class="flex flex-col md:flex-row md:space-x-2"><button class="btn bg-surface-900 dark:bg-surface-100 mt-2 text-white dark:text-surface-900">Save This Pantry</button>
		<button class="btn bg-surface-900 dark:bg-surface-100 mt-2 text-white dark:text-surface-900">Reload Saved Pantry</button></div>

	<br>

	<label class="flex items-center space-x-2"><input type="checkbox" class="checkbox"${add_attribute("checked", $SettingsStore.useExclude, 1)}>
		<h3 class="h3 font-bold">Use Exclude List</h3></label>
	<p${add_attribute("class", $SettingsStore.useExclude ? "" : "text-surface-400", 0)}>The generated recipe will not consist of ingredients listed in your exclude list
	</p>
	${validate_component(InputChip, "InputChip").$$render(
      $$result,
      {
        name: "chips",
        placeholder: "To add an ingredient, type the name and press enter",
        chips: "bg-error-500/25 ring-1 ring-error-500",
        disabled: !$SettingsStore.useExclude,
        value: $SettingsStore.exclude
      },
      {
        value: ($$value) => {
          $SettingsStore.exclude = $$value;
          $$settled = false;
        }
      },
      {}
    )}
	<div class="flex flex-col md:flex-row md:space-x-2"><button class="btn bg-surface-900 dark:bg-surface-100 mt-2 text-white dark:text-surface-900">Save This Exclude List</button>
		<button class="btn bg-surface-900 dark:bg-surface-100 mt-2 text-white dark:text-surface-900">Reload Saved Exclude List</button></div>
	</div>`;
  } while (!$$settled);
  $$unsubscribe_SettingsStore();
  $$unsubscribe_userDoc();
  $$unsubscribe_user();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let userRecipesRef;
  let $user, $$unsubscribe_user;
  let $$unsubscribe_SettingsStore;
  $$unsubscribe_SettingsStore = subscribe(SettingsStore, (value) => value);
  let user = userStore(auth);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  userRecipesRef = $user ? collection(db, `users/${$user.uid}/recipes`) : void 0;
  {
    console.log(userRecipesRef?.path);
  }
  $$unsubscribe_user();
  $$unsubscribe_SettingsStore();
  return `<div class="m-4"><div>${`<div class="flex items-center justify-center h-full">${validate_component(Settings, "Settings").$$render($$result, {}, {}, {})}</div>`}</div>

	<div class="flex flex-col md:flex-row md:space-x-2 justify-center mt-4 pb-4">${``}
		${`<button class="${"btn variant-filled-secondary " + escape("", true) + " md:mt-0"}">Generate Recipe
			</button>`}
		${``}</div>
</div>`;
});
export {
  Page as default
};

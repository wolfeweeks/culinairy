import { c as create_ssr_component, m as setContext, a as escape, h as add_attribute, g as getContext, p as compute_slots, b as subscribe, v as validate_component, e as each } from "./index2.js";
import { s as sdk, u as userStore, a as SelectedRecipeStore } from "./stores.js";
import "./ProgressBar.svelte_svelte_type_style_lang.js";
const cBase$1 = "";
const ListBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { multiple = false } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { padding = "px-4 py-2" } = $$props;
  let { labelledby = "" } = $$props;
  setContext("multiple", multiple);
  setContext("rounded", rounded);
  setContext("active", active);
  setContext("hover", hover);
  setContext("padding", padding);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase$1} ${spacing} ${rounded} ${$$props.class ?? ""}`;
  return `<div class="${"listbox " + escape(classesBase, true)}" role="listbox"${add_attribute("aria-labelledby", labelledby, 0)} data-testid="listbox">${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase = "cursor-pointer -outline-offset-[3px]";
const cLabel = "flex items-center space-x-4";
const ListBoxItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let classesActive;
  let classesBase;
  let classesLabel;
  let $$slots = compute_slots(slots);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { multiple = getContext("multiple") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let checked;
  let elemInput;
  function updateCheckbox(group2) {
    checked = group2.indexOf(value) >= 0;
  }
  function updateGroup(checked2) {
    const index = group.indexOf(value);
    if (checked2) {
      if (index < 0) {
        group.push(value);
        group = group;
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1);
        group = group;
      }
    }
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  {
    if (multiple)
      updateCheckbox(group);
  }
  {
    if (multiple)
      updateGroup(checked);
  }
  selected = multiple ? group.includes(value) : group === value;
  classesActive = selected ? active : hover;
  classesBase = `${cBase} ${rounded} ${padding} ${classesActive} ${$$props.class ?? ""}`;
  classesLabel = `${cLabel}`;
  return `<label>
	<div class="${"listbox-item " + escape(classesBase, true)}" data-testid="listbox-item" role="option"${add_attribute("aria-selected", selected, 0)} tabindex="0">
		<div class="h-0 w-0 overflow-hidden">${multiple ? `<input type="checkbox"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} tabindex="-1"${add_attribute("this", elemInput, 0)}${add_attribute("checked", checked, 1)}>` : `<input type="radio"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} tabindex="-1"${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}>`}</div>
		
		<div class="${"listbox-label " + escape(classesLabel, true)}">
			${$$slots.lead ? `<div class="listbox-label-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}
			
			<div class="listbox-label-content flex-1">${slots.default ? slots.default({}) : ``}</div>
			
			${$$slots.trail ? `<div class="listbox-label-trail">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div></div></label>`;
});
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $sdk, $$unsubscribe_sdk;
  let $user, $$unsubscribe_user;
  $$unsubscribe_sdk = subscribe(sdk, (value) => $sdk = value);
  let { auth = $sdk?.auth } = $$props;
  const user = userStore(auth);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  if ($$props.auth === void 0 && $$bindings.auth && auth !== void 0)
    $$bindings.auth(auth);
  $$unsubscribe_sdk();
  $$unsubscribe_user();
  return `${$user ? `${slots.default ? slots.default({ user: $user }) : ``}` : `${slots.signedOut ? slots.signedOut({ user: $user }) : ``}`}`;
});
const Cookbook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $SelectedRecipeStore, $$unsubscribe_SelectedRecipeStore;
  $$unsubscribe_SelectedRecipeStore = subscribe(SelectedRecipeStore, (value) => $SelectedRecipeStore = value);
  let { recipes } = $$props;
  if ($$props.recipes === void 0 && $$bindings.recipes && recipes !== void 0)
    $$bindings.recipes(recipes);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="p-4"><h2 class="h2 font-bold text-surface-900-50-token text-center mb-2">My Recipes</h2>
	<div class="overflow-x-auto hide-scrollbar overflow-y-auto">${validate_component(ListBox, "ListBox").$$render($$result, { class: "space-y-2" }, {}, {
      default: () => {
        return `${each(recipes, (recipe) => {
          return `${validate_component(ListBoxItem, "ListBoxItem").$$render(
            $$result,
            {
              name: "medium",
              value: recipe,
              active: "bg-primary-500 dark:bg-primary-600 text-black",
              class: "flex items-center justify-center text-center " + (JSON.stringify(recipe) !== JSON.stringify($SelectedRecipeStore) ? `hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-black
          dark:hover:text-black bg-primary-500/25 ring-2 ring-primary-500 ring-inset` : "") + " h-[50px] min-w-[100%] w-[200px]",
              group: $SelectedRecipeStore
            },
            {
              group: ($$value) => {
                $SelectedRecipeStore = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<p class="line-clamp-2">${escape(recipe.name)}</p>
				`;
              }
            }
          )}`;
        })}`;
      }
    })}</div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_SelectedRecipeStore();
  return $$rendered;
});
export {
  Cookbook as C,
  User as U
};

import { c as create_ssr_component, e as each, a as escape } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let stuff = [];
  for (let i = 0; i < 50; i++) {
    stuff = [...stuff, "Lorem ipsum dolor"];
  }
  return `<div class="flex h-[calc(100vh-75px)] overflow-y-clip"><div class="bg-surface-200-700-token overflow-y-scroll min-w-[250px] px-2 py-2"><div class="align-middle justify-center flex m-2"><h2 class="h2 font-semibold">My Recipes</h2></div>
		<div class="flex flex-col space-y-2">${each(stuff, (thing) => {
    return `<button class="btn variant-filled-primary">${escape(thing)}</button>`;
  })}</div></div>
	<div class="overflow-y-auto w-full"><div class=""><p>temp</p></div></div>
</div>`;
});
export {
  Page as default
};

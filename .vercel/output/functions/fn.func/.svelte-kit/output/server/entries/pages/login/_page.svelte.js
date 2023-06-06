import { c as create_ssr_component, j as onDestroy, v as validate_component } from "../../../chunks/index2.js";
import "firebase/auth";
import "../../../chunks/firebase.js";
import "firebase/firestore";
const firebaseui = "";
const SignIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  onDestroy(async () => {
  });
  return `<div id="firebaseui-auth-container" class="h-full w-full border-token"></div>
<div id="loader">Loading...</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex justify-center items-center h-full"><div class="card p-4">${validate_component(SignIn, "SignIn").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};

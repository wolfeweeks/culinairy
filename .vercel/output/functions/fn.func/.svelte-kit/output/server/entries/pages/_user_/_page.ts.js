import { g as goto } from "../../../chunks/navigation.js";
const ssr = false;
async function load({ params }) {
  console.log("load user page");
  goto(`/${params.user}/cookbook`, { replaceState: true });
}
export {
  load,
  ssr
};

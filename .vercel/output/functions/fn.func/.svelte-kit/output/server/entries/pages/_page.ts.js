import { g as goto } from "../../chunks/navigation.js";
import { onAuthStateChanged } from "firebase/auth";
import { a as auth } from "../../chunks/firebase.js";
const ssr = false;
async function load() {
  console.log("load root");
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        goto(`/${user.uid}`, { replaceState: true });
      } else {
        resolve({});
      }
    });
  });
}
export {
  load,
  ssr
};

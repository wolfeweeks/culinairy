import { goto } from '$app/navigation';

export const ssr = false;

export async function load({ params }) {
  console.log('load user page');

  goto(`/${params.user}/cookbook`, { replaceState: true });
  //   // return new Promise((resolve) => {
  //   //   onAuthStateChanged(auth, (user) => {
  //   //     if (user) {
  //   //       // goto(`/${user.uid}`, { replaceState: true });
  //   //       resolve({});
  //   //     } else {
  //   //       resolve({});
  //   //     }
  //   //   })
  //   // });
}

import { goto } from '$app/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '$lib/firebase';

// export const prerender = true;
export const ssr = false;

export async function load() {
  console.log('load root');
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

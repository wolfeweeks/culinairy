// import { initializeFirebase } from '$lib/firebase';

// export const prerender = true;
// export async function load() {
// 	console.log('load root layout');
// 	// const authUser: User | boolean = await getAuthUser();

// 	// function getAuthUser(): Promise<User | boolean> {
// 	//   return new Promise(resolve => {
// 	//     onAuthStateChanged(auth, user => resolve(user ? user : false));
// 	//   })
// 	// }

// 	const { auth, db } = initializeFirebase();

// 	return {
// 		props: { auth, db }
// 	};
// 	//   // return new Promise((resolve) => {
// 	//   //   onAuthStateChanged(auth, (user) => {
// 	//   //     if (user) {
// 	//   //       // goto(`/${user.uid}`, { replaceState: true });
// 	//   //       resolve({});
// 	//   //     } else {
// 	//   //       resolve({});
// 	//   //     }
// 	//   //   })
// 	//   // });
// }

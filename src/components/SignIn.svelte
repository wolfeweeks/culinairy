<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { GoogleAuthProvider, type Auth } from 'firebase/auth';
	import { auth, db } from '$lib/firebase';
	import 'firebaseui/dist/firebaseui.css';
	import { User, userStore } from 'sveltefire';
	import { goto } from '$app/navigation';
	import type { Firestore } from 'firebase/firestore';

	// const user = userStore(auth);
	let ui: firebaseui.auth.AuthUI;

	onDestroy(async () => {
		ui?.delete();
	});

	onMount(async () => {
		const firebaseui = await import('firebaseui');
		ui = new firebaseui.auth.AuthUI(auth);
		ui.start('#firebaseui-auth-container', {
			signInOptions: [GoogleAuthProvider.PROVIDER_ID],
			callbacks: {
				signInSuccessWithAuthResult: function (authResult, redirectUrl) {
					// goto(`/${authResult.user.uid}`, { replaceState: true });
					return true;
				},

				uiShown: function () {
					document.getElementById('loader')!.style.display = 'none';
				}
			},
			signInSuccessUrl: `/`
		});
	});
</script>

<div id="firebaseui-auth-container" class="h-full w-full border-token" />
<div id="loader">Loading...</div>

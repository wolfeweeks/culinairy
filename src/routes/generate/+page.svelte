<script lang="ts">
	import { Doc, userStore } from 'sveltefire';
	import RecipeComponent from '../../components/Recipe.svelte';
	import Settings from '../../components/Settings.svelte';
	import { SettingsStore } from '../../stores';
	import { auth, db } from '$lib/firebase';
	import { doc, setDoc, collection, addDoc } from 'firebase/firestore';
	import { type ToastSettings, toastStore } from '@skeletonlabs/skeleton';

	let recipe: Recipe | undefined = undefined;
	// let initRecipe: string | undefined = undefined;

	let resLoading: boolean;
	let recipeSaved = false;

	$: settings = $SettingsStore;
	let user = userStore(auth);
	$: userRecipesRef = $user ? collection(db, `users/${$user.uid}/recipes`) : undefined;
	$: console.log(userRecipesRef?.path);

	async function generate() {
		recipe = undefined;
		resLoading = true;
		const resp = await fetch('/');
		recipe = (await resp.json()) as Recipe;
		resLoading = false;
	}

	async function generate2() {
		recipe = undefined;
		resLoading = true;
		recipeSaved = false;

		const res = await fetch('/generate', {
			method: 'POST',
			body: JSON.stringify({ settings }),
			headers: {
				'content-type': 'application/json'
			}
		});

		const response = await res.json();
		recipe = response as Recipe;

		const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

		// await delay(5000);

		resLoading = false;
	}

	async function saveToCookbook() {
		if (!userRecipesRef) {
			const ts: ToastSettings = {
				message: 'You must sign in to save recipes',
				timeout: 2000
			};
			toastStore.trigger(ts);
		} else {
			await addDoc(userRecipesRef, recipe);
			recipeSaved = true;
			const ts: ToastSettings = {
				background: '!bg-success-500',
				message: 'Recipe saved successfully',
				timeout: 2000
			};
			toastStore.trigger(ts);
		}
		// if (!$userDoc) {
		// 	const ts: ToastSettings = {
		// 		message: 'You must sign in to save your settings',
		// 		timeout: 2000
		// 	};
		// 	toastStore.trigger(ts);
		// } else {
		// 	await updateDoc(userDoc?.ref!, {
		// 		exclude: $SettingsStore.exclude
		// 	});
		// 	const ts: ToastSettings = {
		// 		background: '!bg-success-500',
		// 		message: 'Exclude list successfully updated',
		// 		timeout: 2000
		// 	};
		// 	toastStore.trigger(ts);
		// }
	}
</script>

<div class="m-4">
	<div>
		{#if !recipe && !resLoading}
			<div class="flex items-center justify-center h-full">
				<Settings />
			</div>
		{:else}
			<img src="" alt="" />
			<RecipeComponent loading={resLoading} {recipe} />
		{/if}
	</div>

	<div class="flex flex-col md:flex-row md:space-x-2 justify-center mt-4 pb-4">
		{#if recipe && !recipeSaved}
			<button class="btn variant-filled-primary" on:click={saveToCookbook}>Save to Cookbook</button>
		{/if}
		{#if !resLoading}
			<button
				class="btn variant-filled-secondary {recipe ? 'mt-2 md:mt-0' : ''} md:mt-0"
				on:click={generate2}
			>
				Generate Recipe
			</button>
		{/if}
		{#if recipe}
			<button class="btn variant-ghost-error mt-2 md:mt-0" on:click={() => (recipe = undefined)}>
				Clear Recipe
			</button>
		{/if}
	</div>
</div>

<style>
</style>

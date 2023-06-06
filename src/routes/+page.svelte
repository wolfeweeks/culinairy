<script lang="ts">
	// import Settings from '../components/Settings.svelte';
	// import { SettingsStore } from '../stores';

	// // export const prerender = false;

	// let recipe: Recipe | undefined = undefined;
	// let initRecipe: string | undefined = undefined;

	// let resLoading: boolean;

	// $: settings = $SettingsStore;

	// async function generate() {
	// 	recipe = undefined;
	// 	resLoading = true;
	// 	const resp = await fetch('/');
	// 	recipe = (await resp.json()) as Recipe;
	// 	resLoading = false;
	// }

	// async function generate2() {
	// 	recipe = undefined;
	// 	resLoading = true;

	// 	const res = await fetch('/', {
	// 		method: 'POST',
	// 		body: JSON.stringify({ settings }),
	// 		headers: {
	// 			'content-type': 'application/json'
	// 		}
	// 	});

	// 	const response = await res.json();
	// 	// initRecipe = response.str as string;
	// 	recipe = response as Recipe;
	// 	// console.log(initRecipe);

	// 	resLoading = false;
	// }
</script>

<!-- <div class="m-4">
	<div>
		{#if !recipe && resLoading}
			<p>Loading...</p>
		{:else if recipe && !resLoading}
			<img src="" alt="" />
			<div class="flex-1 h-full rounded-token">
				<h1 class="h1 font-bold">{recipe.name}</h1>
				<br />

				<h3 class="h3 font-semibold">Ingredients:</h3>
				<div class="mb-1" />
				<ul class="grid lg:grid-cols-3 md:grid-cols-2 gap-2 md:w-[50%]">
					{#each recipe.ingredients as ingredient}
						<li
							class="bg-surface-200 dark:bg-surface-700 border-token
              border-surface-200 dark:border-surface-100 rounded-token p-2 font-light"
						>
							{ingredient}
						</li>
					{/each}
				</ul>
				<br />

				<h3 class="h3 font-semibold">Instructions:</h3>
				<ol class="list">
					{#each recipe.instructions as instruction, i}
						<li class="p-3 bg-surface-200-700-token hover:bg-surface-300-600-token">
							<span class="text-lg font-semibold">{i + 1}.</span>
							<span class="flex-auto">{instruction}</span>
						</li>
					{/each}
				</ol>
			</div>
		{:else}
			<div class="flex items-center justify-center h-full">
				<Settings />
			</div>
		{/if}
	</div>

	<div class="fixed bottom-4 right-4">
		<button class="btn variant-filled-secondary" on:click={() => (recipe = undefined)}
			>Clear Recipe</button
		>
		<button class="btn variant-filled-primary" on:click={generate2}> Generate Recipe </button>
	</div>
</div> -->

<h1 class="h1">Home</h1>

<style>
</style>

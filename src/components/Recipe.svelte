<script lang="ts">
	import { ProgressBar } from '@skeletonlabs/skeleton';

	export let recipe: Recipe | undefined;
	export let loading: boolean;
</script>

<div class="flex-1 h-full rounded-token">
	{#if !loading && recipe}
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
	{:else}
		<!-- else content here -->
		<div
			class="fixed top-[4.6rem] inset-0 z-50 bg-black bg-opacity-20 dark:bg-opacity-10 flex items-center justify-center"
		>
			<div class="flex flex-col items-center space-y-4">
				<h3 class="h3">Your recipe is generating. Please be patient.</h3>
				<ProgressBar class="w-1/2 mx-auto" meter="bg-primary-500" track="bg-primary-300" />
				<ProgressBar class="w-1/2 mx-auto" meter="bg-secondary-500" track="bg-secondary-300" />
				<ProgressBar class="w-1/2 mx-auto" meter="bg-tertiary-500" track="bg-tertiary-300" />
			</div>
		</div>

		<div class="font-bold placeholder animate-pulse w-[75%] h-10" />
		<br />

		<div class="space-y-4">
			<div class="placeholder w-[300px] h-8 animate-pulse" />
			<div class="grid grid-cols-3 gap-4 w-[50%]">
				<div class="placeholder h-16 animate-pulse" />
				<div class="placeholder h-16 animate-pulse" />
				<div class="placeholder h-16 animate-pulse" />
				<div class="placeholder h-12 animate-pulse" />
				<div class="placeholder h-12 animate-pulse" />
				<div class="placeholder h-12 animate-pulse" />
				<div class="placeholder h-12 animate-pulse" />
			</div>
			<br />
			<div class="placeholder w-[300px] h-8 animate-pulse" />
			<div class="grid grid-cols-1 gap-4">
				<div class="placeholder h-14 w-full animate-pulse" />
				<div class="placeholder h-14 w-full animate-pulse" />
				<div class="placeholder h-14 w-full animate-pulse" />
				<div class="placeholder h-14 w-full animate-pulse" />
				<div class="placeholder h-14 w-full animate-pulse" />
				<div class="placeholder h-14 w-full animate-pulse" />
			</div>
		</div>

		<!-- <h3 class="h3 font-semibold">Ingredients:</h3>
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
		</ol> -->
	{/if}
</div>

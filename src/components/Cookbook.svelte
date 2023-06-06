<script lang="ts">
	import { AppRail, ListBox, ListBoxItem, drawerStore } from '@skeletonlabs/skeleton';
	import { RecipesStore, SelectedRecipeStore } from '../stores';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';

	export let recipes: Recipe[];
</script>

<div class="p-4">
	<h2 class="h2 font-bold text-surface-900-50-token text-center mb-2">My Recipes</h2>
	<div class="overflow-x-auto hide-scrollbar overflow-y-auto">
		<ListBox class="space-y-2">
			{#each recipes as recipe}
				<ListBoxItem
					bind:group={$SelectedRecipeStore}
					on:click={() => {
						SelectedRecipeStore.set(recipe);
						drawerStore.close();
					}}
					name="medium"
					value={recipe}
					active="bg-primary-500 dark:bg-primary-600 text-black"
					class="flex items-center justify-center text-center {JSON.stringify(recipe) !==
					JSON.stringify($SelectedRecipeStore)
						? `hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-black
          dark:hover:text-black bg-primary-500/25 ring-2 ring-primary-500 ring-inset`
						: ''} h-[50px] min-w-[100%] w-[200px]"
				>
					<p class="line-clamp-2">{recipe.name}</p>
				</ListBoxItem>
			{/each}
		</ListBox>
	</div>
</div>

<style>
</style>

<script lang="ts">
	import { AppShell, drawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	import { Collection, User } from 'sveltefire';
	import Cookbook from '../../../components/Cookbook.svelte';

	let innerWidth = 0;
	$: isSmallScreen = innerWidth < 1024;

	function showRecipeDrawer(recipes: Recipe[]) {
		const settings: DrawerSettings = {
			position: 'left',
			id: 'cookbook',
			width: 'w-[75%]',
			bgDrawer: 'bg-surface-100 dark:bg-surface-700',
			meta: { recipes: recipes }
		};
		drawerStore.open(settings);
	}
</script>

<svelte:window bind:innerWidth />

<!-- <AppShell slotSidebarLeft="lg:w-[20%] h-[100%]"> -->
<!-- <svelte:fragment slot="sidebarLeft"> -->
<!-- <User let:user> -->
<!-- <Collection ref={`users/${user.uid}/recipes`} let:data={recipes}> -->
<!-- <Cookbook {recipes} /> -->
<!-- {#if isSmallScreen} -->
<!-- <button
			class="btn fixed bottom-4 right-4 px-4 py-2 bg-primary-400 text-black shadow-lg"
			on:click={() => {
				showRecipeDrawer(recipes);
			}}>Open Cookbook</button
		> -->
<!-- {:else} -->
<!-- <Cookbook {recipes} /> -->
<!-- {/if} -->
<!-- </Collection> -->
<!-- </User> -->
<!-- </svelte:fragment> -->
<slot />
<!-- </AppShell> -->

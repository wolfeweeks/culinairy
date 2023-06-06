<script lang="ts">
	import { collection, doc, deleteDoc } from 'firebase/firestore';
	import Cookbook from '../../../components/Cookbook.svelte';
	import { RecipesStore, SelectedRecipeStore } from '../../../stores';
	import { Collection, Doc, User, userStore } from 'sveltefire';
	import { auth, db } from '$lib/firebase';
	import {
		drawerStore,
		type DrawerSettings,
		modalStore,
		type ModalSettings,
		type ToastSettings,
		toastStore
	} from '@skeletonlabs/skeleton';
	import Recipe from '../../../components/Recipe.svelte';

	SelectedRecipeStore.set(null);

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

	async function showConfirmationModal() {
		const answer = await new Promise<boolean>((resolve) => {
			const modal: ModalSettings = {
				modalClasses: 'dark:!bg-surface-700',
				type: 'confirm',
				title: 'Please Confirm',
				body: 'Are you sure you wish to proceed?',
				response: (r: boolean) => {
					resolve(r);
				}
			};
			modalStore.trigger(modal);
		});
		console.log('closed');
		return answer;
	}

	async function deleteRecipe(userId: string) {
		if (await showConfirmationModal()) {
			console.log(`users/${userId}/recipes/${$SelectedRecipeStore?.id}`);
			await deleteDoc(doc(db, `users/${userId}/recipes/${$SelectedRecipeStore?.id}`));

			SelectedRecipeStore.set(null);
			const ts: ToastSettings = {
				background: '!bg-success-500',
				message: 'Recipe successfully deleted',
				timeout: 2000
			};
			toastStore.trigger(ts);
		}
	}
</script>

<svelte:window bind:innerWidth />

<User let:user>
	<Collection ref={`users/${user.uid}/recipes`} let:data={recipes}>
		<div class="flex h-[calc(100vh-75px)] overflow-y-clip">
			{#if isSmallScreen}
				<button
					class="btn fixed bottom-4 right-4 px-4 py-2 bg-primary-400 text-black shadow-lg"
					on:click={() => {
						showRecipeDrawer(recipes);
					}}
				>
					Open Cookbook
				</button>
			{:else}
				<div class="bg-surface-200-700-token overflow-y-scroll min-w-[300px]">
					<Cookbook {recipes} />
				</div>
			{/if}
			<div class="overflow-y-scroll w-full flex flex-col">
				<div class="p-4 flex-grow">
					{#if $SelectedRecipeStore}
						<div class="">
							<Recipe recipe={$SelectedRecipeStore} loading={false} />
						</div>
					{:else}
						<p>Select a recipe from the sidebar or generate a new recipe.</p>
					{/if}
				</div>
				{#if $SelectedRecipeStore}
					<div class="ml-4 sm:mb-4 lg:mb-4 min-h-[75px] flex align-middle">
						<button
							class="btn px-4 py-2 my-4 bg-error-400 text-black"
							on:click={() => {
								deleteRecipe(user.uid);
							}}
						>
							Delete this recipe
						</button>
					</div>
				{/if}
				<!-- <div class="min-h-[60px]" /> -->
			</div>
		</div>
	</Collection>
</User>

<style>
</style>

<script lang="ts">
	import { onMount } from 'svelte';
	import { SettingsStore } from '../stores';
	import { InputChip, toastStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { userStore, docStore } from 'sveltefire';
	import { auth, db } from '$lib/firebase';
	import type { User } from 'firebase/auth';
	import { DocumentSnapshot, arrayUnion, updateDoc } from 'firebase/firestore';
	import type { Unsubscriber } from 'svelte/store';
	import { modalStore } from '@skeletonlabs/skeleton';

	const user = userStore(auth);

	$: userDoc = docStore(db, `users/${$user?.uid}`);
	$: if ($userDoc) {
		$SettingsStore.pantry = ($userDoc as any)?.pantry.slice();
		$SettingsStore.exclude = ($userDoc as any)?.exclude.slice();
	}

	function disableMainIngredients() {
		$SettingsStore.useMainIngredients = false;
	}
	function disablePantry() {
		$SettingsStore.usePantry = false;
	}

	async function showConfirmationModal() {
		const answer = await new Promise<boolean>((resolve) => {
			const modal: ModalSettings = {
				modalClasses: 'dark:!bg-warning-600 dark:!text-surface-900 !bg-warning-50',
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

	async function savePantry() {
		if (await showConfirmationModal()) {
			if (!$userDoc) {
				const ts: ToastSettings = {
					message: 'You must sign in to save your settings',
					timeout: 2000
				};
				toastStore.trigger(ts);
			} else {
				await updateDoc(userDoc?.ref!, {
					pantry: $SettingsStore.pantry
				});

				const ts: ToastSettings = {
					background: '!bg-success-500',
					message: 'Pantry successfully updated',
					timeout: 2000
				};
				toastStore.trigger(ts);
			}
		}
	}

	function refreshPantry() {
		if ($userDoc) {
			console.log($userDoc);
			SettingsStore.update((state) => ({ ...state, pantry: ($userDoc as any)?.pantry.slice() }));
		}
	}

	function refreshExclude() {
		if ($userDoc) {
			console.log($userDoc);
			SettingsStore.update((state) => ({ ...state, exclude: ($userDoc as any)?.exclude.slice() }));
		}
	}

	async function saveExclude() {
		if (await showConfirmationModal()) {
			if (!$userDoc) {
				const ts: ToastSettings = {
					message: 'You must sign in to save your settings',
					timeout: 2000
				};
				toastStore.trigger(ts);
			} else {
				await updateDoc(userDoc?.ref!, {
					exclude: $SettingsStore.exclude
				});

				const ts: ToastSettings = {
					background: '!bg-success-500',
					message: 'Exclude list successfully updated',
					timeout: 2000
				};
				toastStore.trigger(ts);
			}
		}
	}
</script>

<div
	class="bg-surface-100 dark:bg-surface-600 rounded-token p-4 flex flex-col items-center lg:xl:w-[50%] md:w-[75%] sm:w-[100%]"
>
	<div class="flex justify-center mb-4">
		<h2 class="h3 font-semibold">Customize your recipe's settings:</h2>
	</div>

	<h3 class="h3 font-bold">Tools</h3>
	<div class="grid grid-cols-2 gap-x-4 gap-y-4">
		<label class="flex items-center space-x-2">
			<input type="checkbox" class="checkbox" bind:checked={$SettingsStore.tools.stove} />
			<p>Stove</p>
		</label>
		<label class="flex items-center space-x-2">
			<input type="checkbox" class="checkbox" bind:checked={$SettingsStore.tools.oven} />
			<p>Oven</p>
		</label>
		<label class="flex items-center space-x-2">
			<input type="checkbox" class="checkbox" bind:checked={$SettingsStore.tools.microwave} />
			<p>Microwave</p>
		</label>
		<label class="flex items-center space-x-2">
			<input type="checkbox" class="checkbox" bind:checked={$SettingsStore.tools.blender} />
			<p>Blender</p>
		</label>
		<label class="flex items-center space-x-2">
			<input type="checkbox" class="checkbox" bind:checked={$SettingsStore.tools.airFryer} />
			<p>Air Fryer</p>
		</label>
		<label class="flex items-center space-x-2">
			<input type="checkbox" class="checkbox" bind:checked={$SettingsStore.tools.instantPot} />
			<p>Instant Pot</p>
		</label>
	</div>

	<br />

	<h3 class="h3 font-bold">Cooking Experience</h3>
	<select class="select w-[150px]" bind:value={$SettingsStore.experience}>
		<option value={0}>Novice</option>
		<option value={1}>Intermediate</option>
		<option value={2}>Expert</option>
	</select>

	<br />

	<h3 class="h3 font-bold">Meal Type</h3>
	<div class="md:flex md:space-x-4 grid grid-cols-2 gap-y-4">
		<label class="flex items-center space-x-2">
			<input type="checkbox" class="checkbox" bind:checked={$SettingsStore.meals.breakfast} />
			<p>Breakfast</p>
		</label>
		<label class="flex items-center space-x-2">
			<input type="checkbox" class="checkbox" bind:checked={$SettingsStore.meals.lunchOrDinner} />
			<p>Lunch/Dinner</p>
		</label>
		<label class="flex items-center space-x-2">
			<input type="checkbox" class="checkbox" bind:checked={$SettingsStore.meals.snack} />
			<p>Snack</p>
		</label>
		<label class="flex items-center space-x-2">
			<input type="checkbox" class="checkbox" bind:checked={$SettingsStore.meals.dessert} />
			<p>Dessert</p>
		</label>
	</div>
	<br />

	<h3 class="h3 font-bold">Servings</h3>
	<!-- <input
		type="number"
		class="input p-2 w-[70px] font-semibold"
		bind:value={$SettingsStore.servings}
	/> -->
	<p class="text-xl">{$SettingsStore.servings}</p>
	<input class="w-2/3" type="range" min="1" max="6" step="1" bind:value={$SettingsStore.servings} />

	<br />

	<h3 class="h3 font-bold">Cooking time (minutes)</h3>
	<!-- <input
		type="number"
		class="input p-2 w-[70px] font-semibold"
		bind:value={$SettingsStore.cookingTime}
	/> -->
	<p class="text-xl">
		{#if $SettingsStore.cookingTime == 180}
			All Day
		{:else}
			{$SettingsStore.cookingTime}
		{/if}
	</p>
	<input
		class="w-2/3"
		type="range"
		min="15"
		max="180"
		step="5"
		bind:value={$SettingsStore.cookingTime}
	/>

	<br />

	<label class="flex items-center space-x-2">
		<input
			type="checkbox"
			class="checkbox"
			bind:checked={$SettingsStore.useMainIngredients}
			on:change={(val) => {
				if (val) disablePantry();
			}}
		/>
		<h3 class="h3 font-bold">Main Ingredients</h3>
	</label>
	<p class={$SettingsStore.useMainIngredients ? '' : 'text-surface-400'}>
		The generated recipe will consist of all of the ingredients listed
	</p>
	<InputChip
		bind:value={$SettingsStore.mainIngredients}
		name="chips"
		placeholder="To add an ingredient, type the name and press enter"
		disabled={!$SettingsStore.useMainIngredients}
	/>

	<br />

	<label class="flex items-center space-x-2">
		<input
			type="checkbox"
			class="checkbox"
			bind:checked={$SettingsStore.usePantry}
			on:change={(val) => {
				if (val) disableMainIngredients();
			}}
		/>
		<h3 class="h3 font-bold">Use Pantry</h3>
	</label>
	<p class={$SettingsStore.usePantry ? '' : 'text-surface-400'}>
		The generated recipe will only consist of ingredients listed in your pantry
	</p>
	<InputChip
		bind:value={$SettingsStore.pantry}
		name="chips"
		placeholder="To add an ingredient, type the name and press enter"
		chips="bg-primary-500/25 ring-1 ring-primary-500"
		disabled={!$SettingsStore.usePantry}
	/>
	<!-- <textarea
		class="textarea p-2 mt-1"
		rows="4"
		bind:value={$SettingsStore.pantry}
		placeholder="Enter what you have in a comma separated list"
	/> -->
	<div class="flex flex-col md:flex-row md:space-x-2">
		<button
			class="btn bg-surface-900 dark:bg-surface-100 mt-2 text-white dark:text-surface-900"
			on:click={savePantry}>Save This Pantry</button
		>
		<button
			class="btn bg-surface-900 dark:bg-surface-100 mt-2 text-white dark:text-surface-900"
			on:click={refreshPantry}>Reload Saved Pantry</button
		>
	</div>

	<br />

	<label class="flex items-center space-x-2">
		<input type="checkbox" class="checkbox" bind:checked={$SettingsStore.useExclude} />
		<h3 class="h3 font-bold">Use Exclude List</h3>
	</label>
	<p class={$SettingsStore.useExclude ? '' : 'text-surface-400'}>
		The generated recipe will not consist of ingredients listed in your exclude list
	</p>
	<InputChip
		bind:value={$SettingsStore.exclude}
		name="chips"
		placeholder="To add an ingredient, type the name and press enter"
		chips="bg-error-500/25 ring-1 ring-error-500"
		disabled={!$SettingsStore.useExclude}
	/>
	<div class="flex flex-col md:flex-row md:space-x-2">
		<button
			class="btn bg-surface-900 dark:bg-surface-100 mt-2 text-white dark:text-surface-900"
			on:click={saveExclude}>Save This Exclude List</button
		>
		<button
			class="btn bg-surface-900 dark:bg-surface-100 mt-2 text-white dark:text-surface-900"
			on:click={refreshExclude}>Reload Saved Exclude List</button
		>
	</div>
	<!-- <textarea
		class="textarea p-2 mt-1"
		rows="4"
		bind:value={$SettingsStore.exclude}
		placeholder="Enter ingredients to never use in a comma separated list"
	/> -->
</div>

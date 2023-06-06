<script lang="ts">
	// Your selected Skeleton theme:
	import '../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	// NOTE: this will be renamed skeleton.css in the v2.x release.
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// // Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	import { AppShell, LightSwitch, Modal, Toast, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import { FirebaseApp } from 'sveltefire';
	import { goto } from '$app/navigation';
	import { User } from 'sveltefire';
	import { auth, db } from '$lib/firebase';
	import Cookbook from '../components/Cookbook.svelte';

	// export let data;
	// const auth = data.props.auth;
	// const db = data.props.db;
</script>

<Toast />
<Modal />
<Drawer>
	{#if $drawerStore.id == 'cookbook'}
		<Cookbook recipes={$drawerStore.meta.recipes} />
	{/if}
</Drawer>
<FirebaseApp firestore={db} {auth}>
	<AppShell
		slotHeader="bg-primary-500 dark:bg-primary-700 h-[75px]"
		slotFooter="fixed bottom-0 left-0 right-0 bg-primary-700 py-4"
		slotSidebarLeft=""
		slotPageContent="h-[calc(100vh-75px)]"
		class="h-screen "
	>
		<svelte:fragment slot="header">
			<div class="flex items-center justify-between p-4 h-full">
				<h3 class="h3 text-surface-900 dark:text-surface-50 text-center font-extrabold">
					<a data-sveltekit-preload-data="off" href="/">CULIN(AI)RY</a>
				</h3>
				<div class="ml-auto px-2">
					<User let:user>
						<button
							type="button"
							class="btn-sm rounded-token md:btn bg-secondary-400 text-surface-900"
						>
							<a href="/generate">Generate</a>
						</button>
						<!-- bg-secondary-400 text-surface-900 -->
						<button class="btn-sm rounded-token md:btn bg-primary-400 text-surface-900">
							<a href="/{user.uid}/cookbook">Cookbook</a>
						</button>

						<button
							class="btn-sm rounded-token md:btn bg-surface-100-800-token"
							on:click={async () => {
								await auth.signOut();
								goto('/', { replaceState: true });
							}}
						>
							Sign Out
						</button>

						<div slot="signedOut">
							<a href="login">
								<button
									class="btn-sm rounded-token md:btn bg-secondary-400 text-surface-900"
									on:click={() => {
										// goto('/login', { replaceState: false });
									}}
								>
									Sign In
								</button>
							</a>
						</div>
					</User>
				</div>
				<LightSwitch />
			</div>
		</svelte:fragment>

		<!-- Router Slot -->
		<slot />
	</AppShell>
</FirebaseApp>

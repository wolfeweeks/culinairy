<script lang="ts">
	let stuff: string[] = [];

	for (let i = 0; i < 50; i++) {
		stuff = [...stuff, 'Lorem ipsum dolor'];
	}
</script>

<div class="flex h-[calc(100vh-75px)] overflow-y-clip">
	<div class="bg-surface-200-700-token overflow-y-scroll min-w-[250px] px-2 py-2">
		<div class="align-middle justify-center flex m-2">
			<h2 class="h2 font-semibold">My Recipes</h2>
		</div>
		<div class="flex flex-col space-y-2">
			{#each stuff as thing}
				<button class="btn variant-filled-primary">{thing}</button>
			{/each}
		</div>
	</div>
	<div class="overflow-y-auto w-full">
		<div class="">
			<p>temp</p>
		</div>
	</div>
</div>

<style>
</style>

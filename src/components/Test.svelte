<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';

	export let groupValue: any;
	export let value: any;
	export let onChanged: ((value: any) => void) | undefined;
	export let text: string;
	export let width: number = 160;
	export let height: number = 40;

	const dispatch = createEventDispatcher();

	onMount(() => {
		if (groupValue === value) {
			dispatch('change', value);
		}
	});
</script>

<div
	style="
    width: {width}px;
    height: {height}px;
    padding: 10px;
    background-color: {groupValue === value ? 'yellow' : 'rgba(255, 255, 0, 0.25)'};
    border: 2px solid yellow;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
  "
	class="hover:cursor-pointer"
	on:click={() => onChanged && onChanged(value)}
>
	<h1
		style="
      font-size: 20px;
      color: {groupValue === value ? 'black' : 'yellow'};
      font-weight: bold;
    "
	>
		{text}
	</h1>
</div>

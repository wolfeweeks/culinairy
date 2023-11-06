<script lang="ts">
	import PickOne from '../../components/Test.svelte';

	let selectedValue: any;

	const handleChange = (value: any) => {
		selectedValue = value;
	};
</script>

<PickOne groupValue={selectedValue} value={1} onChanged={handleChange} text="Option 1" />
<PickOne groupValue={selectedValue} value={2} onChanged={handleChange} text="Option 2" />
<PickOne groupValue={selectedValue} value={3} onChanged={handleChange} text="Option 3" />

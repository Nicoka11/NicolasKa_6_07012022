<script>
	export let sortMedia;
	let sortOption;

	const handleSorting = () => {
		sortMedia(sortOption);
	};
</script>

<select bind:value={sortOption} on:select={handleSorting} name="sorting">
	<option value="popularity">popularité</option>
	<option value="date">date</option>
	<option value="title">titre</option>
</select>

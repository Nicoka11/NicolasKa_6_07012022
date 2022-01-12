<script>
	import { userMedia } from '../store';
	let sortOption;

	//Sorting
	$: sortMedia = (option) => {
		switch (option) {
			case 'popularity':
				userMedia.set($userMedia.sort((mediaA, mediaB) => mediaB.likes - mediaA.likes));
				break;
			case 'date':
				userMedia.set(
					$userMedia.sort(
						(mediaA, mediaB) => new Date(mediaA.date).getTime() - new Date(mediaB.date).getTime()
					)
				);
				break;
			case 'title':
				userMedia.set(
					$userMedia.sort((mediaA, mediaB) => mediaA.title.localeCompare(mediaB.title))
				);
				break;
		}
	};
</script>

<select bind:value={sortOption} on:change={sortMedia(sortOption)} name="sorting">
	<option value="popularity">popularité</option>
	<option value="date">date</option>
	<option value="title">titre</option>
</select>

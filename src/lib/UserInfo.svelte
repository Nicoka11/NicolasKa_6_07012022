<script>
import LikeCount from "./LikeCount.svelte";

export let likeCount, price;
</script>

<div class="user-info">
	<LikeCount count={likeCount}/>
    <p>{`${price}€ / jour`}</p>
</div>

<style>
    .user-info {
        display: flex;
        position: fixed;
        bottom: 0;
        right: 5rem;
        padding: 1rem;
        background-color: var(--c-main-light);
        border-radius: 5px 5px 0 0;
    }

    p {
        margin-left: 2rem;
    }
</style>
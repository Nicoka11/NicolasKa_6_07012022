<script>
	export let count;
</script>

<div class="likes-count">
    <p>{count}</p>
    <div class="icon">
        <i class="fas fa-heart" aria-label="likes"></i>
    </div>
</div>

<style>
    .likes-count {
        display: flex;
        gap: .2rem;
        cursor: pointer;
    }
</style>

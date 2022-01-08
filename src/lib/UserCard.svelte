<script>
    export let user;
</script>

<a href="/user/{user.id}">
    <article>
        <div class="image">
            <img src={`../../static/id/${user.portrait}`} alt={`${user.name} profile picture`}>
        </div>
        <h2 class="name">{user.name}</h2>
        <p class="location">{`${user.city}, ${user.country}`}</p>
        <p class="tagline">{user.tagline}</p>
        <p class="price">{`${user.price}/jour`}</p>
    </article>
</a>

<style lang="scss">
    a {
        text-decoration: none;
    }

    p {
        margin-bottom: .3rem;
    }

    article {
        text-align: center;
        margin: 1.5rem 0;
    }
    
    .image {
        width: 12.5rem;
        height: 12.5rem;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
        
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    
    .name {
        color: var(--c-title);
        font-size: 2.25rem;
        line-height: 1;
        margin-top: 1rem;
        margin-bottom: .5rem;
    }
    
    .location {
        color: var(--c-main);
        font-size: 0.813rem;
    }
    
    .tagline {
        color: var(--c-caption);
        font-size: 0.625rem;
    }

    .price {
        color: var(--c-detail);
        font-size: 0.563rem;
    }
</style>
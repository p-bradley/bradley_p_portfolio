export default {
    template: `
    <section id="notFound">
        <h1>[ yikes ]</h1>
        <img src="images/svgs/error.svg">
        <h2>That page doesn't exist.</h2>
        <h2>Try checking the URL spelling or tap <router-link class="notFoundHome" to="/">here</router-link> to return to the homepage.</h2>
    </section>
    `
}
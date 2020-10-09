import AboutCardComponent from './homeAbout/AboutCardComponent.js';

export default {
    // this template is for the about section, with a component being loaded specifically for the cards
    template: `
    <section id="about">
    <router-link to="/projEx">Example Project</router-link>
        <h1>[ about myself ]</h1>
        <figure class="stack">
            <aboutCard v-for="card in cards" :card="card" :key="card.id"></aboutCard>
        </figure>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </p>
    </section>
    `,

    data: function() {
        // this data is placeholder for when picture actually get put in
        return {
            cards: [
                {id: '1', name: 'card one', img: 'smallImg'},
                {id: '2', name: 'card two', img: 'smallImg'},
                {id: '3', name: 'card three', img: 'smallImg'},
            ]
        }
    },

    components: {
        aboutCard: AboutCardComponent
    }
}
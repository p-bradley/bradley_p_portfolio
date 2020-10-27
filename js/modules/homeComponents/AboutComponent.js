// import the components from their folders
// imports are always first
import AboutCardComponent from './homeAbout/AboutCardComponent.js';

export default {
    // this template is for the about section, with a component being loaded specifically for the cards
    template: `
    <section id="about">
        <h1>[ about myself ]</h1>
        <div class="aboutWrapper">
            <figure class="stack">
                <aboutCard v-for="card in cards" :card="card" :key="card.id"></aboutCard>
            </figure>
            <div class="aboutTextCon">
                <h2 class="aboutName">[ Patrick Bradley ]</h2>
                <h3>UX/UI Designer</h3>
                <p>Hey! I'm Patrick, a London, Ontario based UX/UI Designer that focuses on simplifying modern interfaces to produce unique, engaging user experiences for responsive websites and mobile applications.</p>
                <p>My interests (outside of design): hockey, swimming, thrifting, 90's and early 2000's Nintendo games, lofi-house, Stanley Kubrick and Quentin Tarantino movies, and photography!</p>
            </div>
        </div>
    </section>
    `,

    data: function() {
        // this data is placeholder for when picture actually get put in
        return {
            cards: [
                {id: '1', name: 'profile image 1', img: 'profilepic1'},
                {id: '2', name: 'profile image 2', img: 'profilepic2'},
                {id: '3', name: 'profile image 3', img: 'profilepic3'},
            ]
        }
    },

    mounted: function() {
        this.nameReplace();
        window.addEventListener("resize", this.nameReplace);
    },

    methods: {
        nameReplace() {
            let winHeight = window.screen.height,
                winWidth = screen.width,
                innerW = window.innerWidth;
                
                if (winWidth > 1199) {
                    console.log(window.screen.width);
                    $(".aboutName").text("Patrick Bradley");
                } else {
                    $(".aboutName").text("[ Patrick Bradley ]");
                }

                if (innerW > 1199) {
                    $(".aboutName").text("Patrick Bradley");
                } else {
                    $(".aboutName").text("[ Patrick Bradley ]");
                }
        }
    },
    
    // define what components are being used
    components: {
        aboutCard: AboutCardComponent
    }
}
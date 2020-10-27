export default {
    // this template is for the unique projects page that users are sent to when clicking a project
    // it takes the data that was grabbed from the database in the projects component and renders it selectively based on
    // what project was clicked. all of this data is grabbed specifically based on the id of the project clicked
    template: `
    <div>
    <meta name="robots" content="noindex, nofollow">
    <section v-if="this.$route.params.name" id="project">
        <h1>[ {{ this.$route.params.name }} ]</h1>
        <div class="projectTop">
            <img :class="this.$route.params.class" :src="'images/' + this.$route.params.previewImg + '.png'">
            <div class="roleToolCon">
                <span>
                    <h2>my role</h2>
                    <p>{{ this.$route.params.roleDesc }}</p>
                </span>
                <span>
                    <h2>Tools Used</h2>
                    <p id="projTools">
                        {{ this.$route.params.toolsDesc }}
                    </p>
                </span>
            </div>
        </div>
        <div class="projectIntro">
            <img :src="'images/' + this.$route.params.introImg + '.png'">
            <h2>{{ this.$route.params.introTitle }}</h2>
            <p>{{ this.$route.params.introPara }}</p>
        </div>
        <div class="projectMiddle">
            <img :src="'images/' + this.$route.params.middleImg + '.png'">
            <h2>{{ this.$route.params.middleTitle }}</h2>
            <p>{{ this.$route.params.middlePara1 }}</p>
        </div>
        <div class="projectOutro">
            <img :src="'images/' + this.$route.params.closingImg + '.png'">
            <h2>{{ this.$route.params.closingTitle }}</h2>
            <p>{{ this.$route.params.closingPara1 }}</p>
        </div>
        <router-link class="projBackBtn" v-on:click.native="scrollToWork()" :to="{ path: '../' }">back</router-link>
    </section>
    <section id="projErr" v-else>
        <h1>[ oops ]</h1>
        <h2>Looks like you tried refreshing a project.</h2>
        <p>The project you click doesn't actually have a set link, you create one when you click the project.</p>
        <p>Because of this, when you refresh the page, there isn't any data to load, because you didn't choose a project.</p>
        <P>This helps me save money on server storage and allows for extremely fast load times, unfortunately this is the downside.</p>
        <p>I am working on a fix for this, terribly sorry. Please <router-link to="/">Click Here</router-link> to go back to the home page.</p>
    </section>
    </div>
    `,

    created: function() {
    },

    mounted: function() {

        // transition to the top of the page when loaded
        $('html, body').animate({
            scrollTop: $("#project").offset().top -80
        }, 500);

        this.textReplace();


    },

    methods: {
        // because the page is completely dynamic, it doesnt exist outside of this page, it requires content loaded elsewhere
        // this is fine if navigated back to the home page, because that is where the content is loaded from, but refresh breaks it
        unload() {
            // this will send a popup when refreshing the page saying that data will be lost, or unsaved changes (whatever)
            // warning the user that if you reload, something will break
            window.onbeforeunload = function() {
                return 'Placeholder Text';
              };
        },

        // this scroll back to the top of the work section when clicking the back button on any project specific
        // TODO work on a way to get it to focus on the project that was clicked (probably match ids and animate to that on home)
        scrollToWork() {
            $('html, body').animate({
                scrollTop: $("#work").offset().top -80
            }, 500);
        },

        // this is checking for any commas in the project tools section, and replacing them with line breaks
        // this simplifies the front end for the content creator, and does not require a complicated SQL query or PHP script to fix
        textReplace() {
            let winHeight = window.screen.height,
                winWidth = screen.width,
                innerW = window.innerWidth;

            var toolsDesc = document.getElementById("projTools") ;
            setTimeout(function() {
                if (winWidth > 767) {
                    console.log(window.screen.width);
                    toolsDesc.innerHTML = toolsDesc.innerHTML.replace( /,/g,', ');
                } if (winWidth < 1365) {
                    toolsDesc.innerHTML = toolsDesc.innerHTML.replace( /,/g,'<br>');
                } else {
                    toolsDesc.innerHTML = toolsDesc.innerHTML.replace( /,/g,'<br>');
                }

                if (innerW > 767) {
                    console.log(window.screen.width);
                    toolsDesc.innerHTML = toolsDesc.innerHTML.replace( /,/g,', ');
                } if (innerW < 1365) {
                    toolsDesc.innerHTML = toolsDesc.innerHTML.replace( /,/g,'<br>');
                } else {
                    toolsDesc.innerHTML = toolsDesc.innerHTML.replace( /,/g,'<br>');
                }
            }, 100);
        }
    }
}
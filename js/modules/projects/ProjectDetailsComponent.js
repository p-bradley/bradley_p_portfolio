export default {
    // this template is for the unique projects page that users are sent to when clicking a project
    // it takes the data that was grabbed from the database in the projects component and renders it selectively based on
    // what project was clicked. all of this data is grabbed specifically based on the id of the project clicked
    template: `
    <div>
    <section v-if="this.$route.params.name" id="project">
        <h1>[ {{ this.$route.params.name }} ]</h1>
        <div class="projectTop">
            <img :src="'images/' + this.$route.params.previewImg + '.jpg'">
            <h2>my role</h2>
            <p>{{ this.$route.params.roleDesc }}</p>

            <span>
                <h2>Tools Used</h2>
                <span>
                    {{ this.$route.params.toolsDesc }}
                </span>
            </span>
        </div>
        <div class="projectIntro">
            <img :src="'images/' + this.$route.params.introImg + '.jpg'">
            <h2>{{ this.$route.params.introTitle }}</h2>
            <p>{{ this.$route.params.introPara }}</p>
        </div>
        <div class="projectMiddle">
            <img :src="'images/' + this.$route.params.middleImg + '.jpg'">
            <h2>{{ this.$route.params.middleTitle }}</h2>
            <p>{{ this.$route.params.middlePara1 }}</p>
            <p>{{ this.$route.params.middlePara1 }}</p>
        </div>
        <div class="projectOutro">
            <img :src="'images/' + this.$route.params.closingImg + '.jpg'">
            <h2>{{ this.$route.params.middleTitle }}</h2>
            <p>{{ this.$route.params.closingPara1 }}</p>
            <p>{{ this.$route.params.closingPara1 }}</p>
        </div>
        <router-link :to="{ path: '../' }">back</router-link>
    </section>
    <section v-else>
        <h1>Looks like you tried refreshing a project</h1>
        <h2>The project you click doesn't actually have a set link, you create one when you click the project</h2>
        <h2>Because of this, when you refresh the page, there isn't any data to load, because you didn't choose a project</h2>
        <h3>This helps me save money on server storage and allows for extremely fast load times, unfortunately this is the downside</h3>
        <h3>I am working on a fix for this, terribly sorry. <span><router-link to="/">Please Click Here</router-link></span> to go back to the home page</h3>
    </section>
    </div>
    `,

    mounted: function() {
        this.unload();

        // transition to the top of the page when loaded
        $('html, body').animate({
            scrollTop: $("#project").offset().top -80
        }, 500);

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
        }
    }
}
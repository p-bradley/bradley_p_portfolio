export default {
    template: `
    <section v-if="this.$route.params.name" id="project">
        <h1>Project: {{ this.$route.params.name }}</h1>
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
    `,

    mounted: function() {
        this.unload();

        $('html, body').animate({
            scrollTop: $("#project").offset().top -80
        }, 500);

    },

    methods: {
        unload() {
            window.onbeforeunload = function() {
                return 'Placeholder Text';
              };
        }
    }
}
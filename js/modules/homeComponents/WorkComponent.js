import HomeProjectComponent from './homeProject/HomeProjectComponent.js';

export default {
    template: `
    <section id="work">
        <h1>[ my work ]</h1>
        <div class="filterBtns">
            <div class="filterBtn filtBtn1" @click="hideItems1()"><span class="filtText">all</span><span class="underline underline1"></span></div>
            <div class="filterBtn filtBtn2" @click="hideItems2()"><span class="filtText">responsive</span><span class="underline underline2"></span></div>
            <div class="filterBtn filtBtn3" @click="hideItems3()"><span class="filtText">mobile</span><span class="underline underline3"></span></div>
        </div>
        <homeProject v-for="(project, index) in projects" :project="project" :key="project.id"></homeProject>
    </section>
    `,

    data: function() {
        return {
            projects: {}
        }
    },

    mounted: function() {
        this.fetchWork();
    },

    methods: {
        hideItems1() {
            $('.underline1').addClass("highlighted");
            $('.underline').not('.underline1').removeClass("highlighted");
        },

        hideItems2() {
            $('.underline2').addClass("highlighted");
            $('.responsive').removeClass("test");
            $('.responsive').addClass("test2");

            $('.project').not('.responsive').removeClass("test2");
            $('.project').not('.responsive').addClass("test");
            $('.underline').not('.underline2').removeClass("highlighted");
        },

        hideItems3() {
            $('.underline3').addClass("highlighted");

            $('.mobile').removeClass("test");
            $('.mobile').addClass("test2");

            $('.project').not('.mobile').removeClass("test2");
            $('.project').not('.mobile').addClass("test");
            $('.underline').not('.underline3').removeClass("highlighted");
        },

        fetchWork() {
            let url = `./includes/index.php?getWork=true`;

            // AJAX fetch call grabbing data and converting it to json
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.projects = data;
            })

            // Catch any errors
            .catch((err) => console.log(err))
        },
    },

    components: {
        homeProject: HomeProjectComponent
    }
}
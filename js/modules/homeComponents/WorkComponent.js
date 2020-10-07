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
            // the object array for the database content
            projects: {}
        }
    },

    mounted: function() {
        // call the function to load database info
        this.fetchWork();
    },

    methods: {
    // when clicking a filter button, hide the other objects that do not have the associated class
    // start of filter buttons {
        hideItems1() {
            if($('.underline1').hasClass("selected")) {
                return
            } else {
                $('.underline1').addClass("selected");

                $('.underline1').addClass("highlighted");
                $('.underline').not('.underline1').removeClass("highlighted");
                
                $('.project').addClass("test");
                $('.project').removeClass("test2");

                setTimeout(function() {
                    $('.project').addClass("test2");
                }, 150);

                $('.underline').not('.underline1').removeClass("selected");
        }
        },

        hideItems2() {
            if($('.underline2').hasClass("selected")) {
                return
            } else {
                $('.underline2').addClass("selected");

                $('.underline2').addClass("highlighted");
                $('.responsive').removeClass("test");
                $('.responsive').addClass("test2");

                $('.project').not('.responsive').removeClass("test2");
                $('.project').not('.responsive').addClass("test");
                $('.underline').not('.underline2').removeClass("highlighted");

                $('.filterBtn').not('.filterBtn2').removeClass("selected");

                $('.underline').not('.underline2').removeClass("selected");
            }
        },

        hideItems3() {
            if($('.underline3').hasClass("selected")) {
                return
            } else {
                $('.underline3').addClass("selected");

                $('.underline3').addClass("highlighted");

                $('.mobile').removeClass("test");
                $('.mobile').addClass("test2");

                $('.project').not('.mobile').removeClass("test2");
                $('.project').not('.mobile').addClass("test");
                $('.underline').not('.underline3').removeClass("highlighted");

                $('.underline').not('.underline3').removeClass("selected");
            }
        },
    // } end of filter buttons
        

        fetchWork() {
            // this URL is the link to the database content needed for each project
            let url = `./config/index.php?getWork=true`;

            // AJAX fetch call grabbing data and converting it to json
            fetch(url)
            .then(res => res.json())
            .then(data => {
                // set items array to the data grabbed
                // allowing it to be displayed and used elsewhere
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
export default {
    props: ['id'],
    // this template is for the unique projects page that users are sent to when clicking a project
    // it takes the data that was grabbed from the database in the projects component and renders it selectively based on
    // what project was clicked. all of this data is grabbed specifically based on the id of the project clicked
    template: `
    <div>
    <meta name="robots" content="noindex, nofollow">
    <section id="project">
        <h1>[ {{ project.name }} ]</h1>
        <div class="projectTop">
            <img :class="project.class" :src="'images/' + project.previewImg + '.png'">
            <div class="roleToolCon">
                <span>
                    <h2>my role</h2>
                    <p>{{ project.roleDesc }}</p>
                </span>
                <span>
                    <h2>Tools Used</h2>
                    <p id="projTools">
                        {{ project.toolsDesc }}
                    </p>
                </span>
            </div>
        </div>
        <div class="projectIntro">
            <img :src="'images/' + project.introImg + '.png'">
            <h2>{{ project.introTitle }}</h2>
            <p>{{ project.introPara }}</p>
            <p class="para2" id="introPara2">{{ project.introPara2 }}</p>
        </div>
        <div class="projectMiddle">
            <img :src="'images/' + project.middleImg + '.png'">
            <h2>{{ project.middleTitle }}</h2>
            <p>{{ project.middlePara1 }}</p>
            <p class="para2" id="middlePara2">{{ project.middlePara2 }}</p>
        </div>
        <div class="projectOutro">
            <img :src="'images/' + project.closingImg + '.png'">
            <h2>{{ project.closingTitle }}</h2>
            <p>{{ project.closingPara1 }}</p>
            <p class="para2" id="closingPara2">{{ project.closingPara2 }}</p>
        </div>
        <router-link class="projBackBtn" v-on:click.native="scrollToWork()" :to="{ path: '../' }">back</router-link>
    </section>
    </div>
    `,

    created: function() {
    },

    data() {
        return {
            project: {}
        }
    },

    mounted: function() {

        this.getData()

        // transition to the top of the page when loaded
        $('html, body').animate({
            scrollTop: $("#project").offset().top -80
        }, 500);

        this.textReplace();

        this.checkPara();
    },

    methods: {
        getData() {
                // this URL is the link to the database content needed for each project
                let url = `./config/index.php?getProject${this.id}=true`;
    
                // AJAX fetch call grabbing data and converting it to json
                fetch(url)
                .then(res => res.json())
                .then(data => {

                    // set items array to the data grabbed
                    // allowing it to be displayed and used elsewhere
                    this.project = data[0]
    
                })
    
                // Catch any errors
                .catch((err) => console.log(err))
        },

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
            let winWidth = screen.width,
                innerW = window.innerWidth;

            var toolsDesc = document.getElementById("projTools") ;
            setTimeout(function() {
                if (winWidth > 767) {
                    console.log(window.screen.width);
                    toolsDesc.innerHTML = toolsDesc.innerHTML.replace( /,/g,', ');
                }

                if (winWidth < 1365) {toolsDesc.innerHTML = toolsDesc.innerHTML.replace( /,/g,'<br>');} 
                else {toolsDesc.innerHTML = toolsDesc.innerHTML.replace( /,/g,'<br>');}

                if (innerW > 767) {
                    console.log(window.screen.width);
                    toolsDesc.innerHTML = toolsDesc.innerHTML.replace( /,/g,', ');} 
                
                if (innerW < 1365) { toolsDesc.innerHTML = toolsDesc.innerHTML.replace( /,/g,'<br>');} 
                else {toolsDesc.innerHTML = toolsDesc.innerHTML.replace( /,/g,'<br>');}
            }, 100);
        },

        checkPara() {
            let content1 = document.getElementById("introPara2").innerHTML,
                content2 = document.getElementById("middlePara2").innerHTML,
                content3 = document.getElementById("closingPara2").innerHTML;

            if (content1 == null || content1 == "") {
                $("#introPara2").hide();} else {return}

            if (content2 == null || content2 == "") {
                $("#middlePara2").hide();} else {return}

            if (content3 == null || content3 == "") {
                $("#closingPara").hide(); } else {return}
        }
    }
}
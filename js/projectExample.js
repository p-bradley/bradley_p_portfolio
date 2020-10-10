export default {
    // this template is for the unique projects page that users are sent to when clicking a project
    // it takes the data that was grabbed from the database in the projects component and renders it selectively based on
    // what project was clicked. all of this data is grabbed specifically based on the id of the project clicked
    template: `
    <div>
    <section id="project">
        <h1>[ Example Project ]</h1>
        <div class="projectTop">
            <img :src="'images/smallImg.jpg'">
            <h2>my role</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
            <span>
                <h2>Tools Used</h2>
                <p id="projTools">Pen + Paper,Photoshop,Figma</p>
            </span>
        </div>
        <div class="projectIntro">
            <img :src="'images/medImg.jpg'">
            <h2>Excepteur sint occaecat cupidatat</h2>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
        <div class="projectMiddle">
            <img :src="'images/largeImg.jpg'">
            <h2>Nemo enim ipsam</h2>
            <p>voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
        <div class="projectOutro">
            <img :src="'images/medImg.jpg'">
            <h2>quis nostrum</h2>
            <p>exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias</p>
        </div>
        <router-link :to="{ path: '../' }">back</router-link>
    </section>
    </div>
    `,

    mounted: function() {

        // transition to the top of the page when loaded
        $('html, body').animate({
            scrollTop: $("#project").offset().top -80
        }, 500);

        this.textReplace();

    },

    methods: {

        // this is checking for any commas in the project tools section, and replacing them with line breaks
        // this simplifies the front end for the content creator, and does not require a complicated SQL query or PHP script to fix
        textReplace() {
            setTimeout(function() {
                var toolsDesc = document.getElementById("projTools") ;
                toolsDesc.innerHTML = toolsDesc.innerHTML.replace( /,/g,'<br>') ;
            }, 100);
        }
    }
}
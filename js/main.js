// import the components from their folders
// imports are always first
import HomeComponent from './modules/HomeComponent.js';
import ProjectDetailsComponent from './modules/projects/ProjectDetailsComponent.js';
import MsgSentComponent from './modules/contact/MsgSentComponent.js';
import NotFoundComponent from './NotFoundComponent.js';

    // router is how new links are created. defining router means that the application can use it anywhere
    let router = new VueRouter({
        // mode: hash, it uses the URL hash to simulate a full URL so that the page won't be reloaded when the URL changes
        // to have the hash disappear, the server would need to support storing the data for the page
        mode: 'hash',

        // this is the array for every link on the site
        routes: [
            // "/" path is the root path, the home page
            {path: '/', component: HomeComponent, name: 'home'},

            // this path is for dynamic projects, reusing the same component to render dynamic data per project
            // without having to make a component for each project, or loading them all at once
            { path: "/projects/:id", name: "project-details", component: ProjectDetailsComponent, props: true },

            // 404 route, the route for when a defined route can't be found or if something goes wrong
            {path: '/404', name: "not-found", component: NotFoundComponent},

            // catch if a route is hit that isn't defined and redirect to the 404 route
            {path: '*', redirect: '/404'},
            {path: '/sent', name: "message-sent", component: MsgSentComponent}
        ]
    });

    // define the VueModel, this is how Vue takes control and allows for all of the great things like
    // components, static/dynamic data, localized functions and incredible load times
    const vm = new Vue({

        // created will fire anything inside of this function right when the site loads, before everything else apart from beforeCreate
        // the caveat is that since no content has really loaded in the DOM, you cant manipulate it or do normal things that JS does
        created: function() {
            
        },

        // methods is a container for defining JavaScript functions
        // anything set in this method cannot be called on by another component, but can use class'/ids' from other components
        methods: {
            // when clicking the hamburger menu icon, reveal the navigation menu
            // as well hide it when either a link is clicked, or the menu icon is clicked again
            toggleNav() {
                let topNav = document.querySelector(".mainHeader");
                topNav.classList.toggle("navToggle")
            },


        // start of navigation linking {
            locationAbout() {
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $("#about").offset().top -135
                    }, 500);
                }, 50)
            },

            locationWork() {
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $("#work").offset().top -90
                    }, 500);
                }, 50)
            },

            locationSkills() {
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $("#skills").offset().top -90
                    }, 500);
                }, 50)
            },

            locationContact() {
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $("#contact").offset().top -60
                    }, 500);
                }, 50)
            },
        // } end of navigation linking
        },

        // defining the router we are using from earlier
        router: router

        // mount basically means to put everything we do into the defined section, in this case #app
    }).$mount("#app");
import HomeComponent from './modules/HomeComponent.js';
import ProjectDetailsComponent from './modules/projects/ProjectDetailsComponent.js';
    
    let router = new VueRouter({
        mode: 'hash',
        routes: [
            // "/" path is the root path, the home page
            {path: '/', component: HomeComponent, name: 'home'},

            // this path is for dynamic projects, reusing the same component to render dynamic data per project
            // without having to make a component for each project, or loading them all at once
            { path: "/projects/:id", name: "project-details", component: ProjectDetailsComponent }
        ]
    });

    const vm = new Vue({
        created: function() {
            
        },

        methods: {
            // when clicking the hamburger menu icon, reveal the navigation menu
            // as well hide it when either a link is clicked, or the menu icon is clicked again
            toggleNav() {
                let topNav = document.querySelector(".mainHeader");
                topNav.classList.toggle("navToggle")
                console.log("test");
            },


        // start of navigation linking {
            locationAbout() {
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $("#about").offset().top -80
                    }, 500);
                }, 50)
            },

            locationWork() {
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $("#work").offset().top -80
                    }, 500);
                }, 50)
            },

            locationSkills() {
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $("#skills").offset().top -80
                    }, 500);
                }, 50)
            },

            locationContact() {
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $("#contact").offset().top -80
                    }, 500);
                }, 50)
            },
        // } end of navigation linking
        },

        router: router
    }).$mount("#app");
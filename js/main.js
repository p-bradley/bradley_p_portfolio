import HomeComponent from './modules/HomeComponent.js';
import ProjectDetailsComponent from './modules/projects/ProjectDetailsComponent.js';
    
    let router = new VueRouter({
        routes: [
            {path: '/', component: HomeComponent, name: 'home'},
            {
                path: "/projects/:id",
                name: "project-details",
                component: ProjectDetailsComponent
            }
        ]
    });

    const vm = new Vue({
        created: function() {
            console.log("Application Created");
        },

        methods: {
            toggleNav() {
                let topNav = document.querySelector(".mainHeader");
                topNav.classList.toggle("navToggle")
                console.log("test");
            },

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
        },

        router: router
    }).$mount("#app");
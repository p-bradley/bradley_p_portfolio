import HomeComponent from './modules/HomeComponent.js';
import ProjectComponent from './modules/ProjectComponent.js';
import ProjectDetailsComponent from './modules/projects/ProjectDetailsComponent.js'

(() => {
    let router = new VueRouter({
        routes: [
            {path: '/', component: HomeComponent},
            {path: '/projects', component: ProjectComponent, children: [
                {
                    path: "/projects/:id",
                    name: "project-details",
                    component: ProjectDetailsComponent
                }
            ]}
        ]
    });

    const vm = new Vue({
        created: function() {
            console.log("Application Created");
        },

        methods: {

        },

        router: router
    }).$mount("#app")
})();
export default {
    template: `
    <div>
    <ul>
    <li v-for="(item, index) in items" :key="$route.fullPath">
        <router-link :to="{
                name: 'project-details',
                params: {
                    id: project.id,
                    name: project.name,  
                    previewImg: project.previewImg,
                    roleDesc: project.roleDesc,
                    toolsDesc: project.toolsDesc,
                    introImg: project.introImg,
                    introTitle: project.introTitle,
                    introPara: project.introPara,
                    middleImg: project.middleImg,
                    middleTitle: project.middleTitle,
                    middlePara1: project.middlePara1,
                    middlePara2: project.middlePara2,
                    closingImg: project.closingImg,
                    closingTitle: project.closingTitle,
                    closingPara1: project.closingPara1,
                    closingPara2: project.closingPara2 
                    }
            }">
                {{item.name}}
        </router-link>
    </li>
</ul>
    <router-view></router-view>
    </div>
    `,

    data: function() {
        return {
            items: {}
        }
    },

    watch: {
        $route(to, from) {
            
        }
    },

    mounted: function() {
        this.fetchWork();
    },

    methods: {
        fetchWork() {
            let url = `./includes/index.php?getWork=true`;

            // AJAX fetch call grabbing data and converting it to json
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.items = data;
            })

            // Catch any errors
            .catch((err) => console.log(err))
        },
    }
}
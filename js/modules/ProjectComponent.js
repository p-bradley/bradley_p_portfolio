export default {
    template: `
    <div>
    <ul>
    <li v-for="(item, index) in items" :key="index">
        <router-link :to="{
                name: 'project-details',
                params: { name: item.name, id: index + 1, para1: item.para1, para2: item.para2 }
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
export default {
    template: `
    <div v-if="this.$route.params.name">
    <h1>Project: {{ this.$route.params.name }}</h1>
    <p>{{ this.$route.params.para1 }}</p>
    <p>{{ this.$route.params.para2 }}</p>
    </div>
    `
}
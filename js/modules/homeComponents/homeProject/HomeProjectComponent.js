export default {
    // props are custom attributes you can register on a component
    //  this prop is pulling data from the projects array in the work component and using it here
    props: ['project'],

    template:
    // this template is for each project, creating a unique project piece per item in database
    // when clicking a project, a new link is generated with pushed content based on the link clicked
     `
    <div class="project" :class="project.class" :id="'project' + project.id">
        <router-link :class="project.class" :to="'projects/' + project.id">
            <img :class="project.class" :src="'images/' + project.previewImg + '.png'">
        </router-link>
        <div class="projTextLink">
            <h2>{{ project.name }}</h2>
            <p>{{ project.previewDesc }}</p>
            <router-link class="projLink" :to="'projects/' + project.id">
                See More
            </router-link>
        </div>
    </div>
    `
}
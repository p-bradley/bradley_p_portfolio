export default {
    // props are custom attributes you can register on a component
    //  this prop is pulling data from the projects array in the work component and using it here
    props: ['project'],

    template:
    // this template is for each project, creating a unique project piece per item in database
    // when clicking a project, a new link is generated with pushed content based on the link clicked
     `
    <div class="project" :class="project.class" :id="'project' + project.id">
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
            <img :class="project.class" :src="'images/' + project.previewImg + '.png'">
        </router-link>
        <div class="projTextLink">
            <h2>{{ project.name }}</h2>
            <p>{{ project.previewDesc }}</p>
            <router-link class="projLink" :to="{
                name: 'project-details',
                params: {id: project.id,
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
                See More
            </router-link>
        </div>
    </div>
    `
}
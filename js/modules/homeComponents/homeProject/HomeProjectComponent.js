export default {
    props: ['project'],

    template: `
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
            <img :src="'images/' + project.previewImg + '.jpg'">
        </router-link>
        <h2>{{ project.name }}</h2>
        <p>{{ project.previewDesc }}</p>
        <router-link :to="{
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
    `
}
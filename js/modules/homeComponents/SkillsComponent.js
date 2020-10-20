// import the components from their folders
// imports are always first
import TechSkillsComponent from './homeSkills/TechSkillsComponent.js';
import HardSkillsComponent from './homeSkills/HardSkillsComponent.js';

export default {
    // this template is generating the skills section, but it is very clunky right now
    // the template contains the same content twice. one part is for mobile, in the format of sliders, the other is tablet and desktop as filters
    // the reason the content is loaded twice, is because it works while i look for a reliable way to switch from slide to filt
    template: `
    <section id="skills">
        <h1>[ my skills ]</h1>
        <div class="allSkillsCon">
            <div class="skillsCon techSkillCon">
                <h2>Tech Skills</h2>
                <div class="gallery js-flickity">
                    <techSkillsCon class="gallery-cell" v-for="(techSkill, index) in techSkills" :techSkill="techSkill" :key="index"></techSkillsCon>
                </div>
            </div>
            <div class="skillsCon hardSkillCon">
                <h2>Hard Skills</h2>
                <div class="gallery js-flickity">
                    <hardSkillsCon class="gallery-cell" v-for="(hardSkill, index) in hardSkills" :hardSkill="hardSkill" :key="index"></hardSkillsCon>
                </div>
            </div>
        </div>
        <div class="allSkillsConTab">
            <div class="skillsFilterBtns">
                <div class="skillFilterBtn skillFiltBtn1" @click="hideSkills1()"><span class="filtText">tech skills</span><span class="skillUnderline selected highlighted skillUnderline1"></span></div>
                <div class="skillsFilterBtn skillFiltBtn2" @click="hideSkills2()"><span class="filtText">hard skills</span><span class="skillUnderline skillUnderline2"></span></div>
            </div>
            <div class="skillsTabContainer">
                <div class="skillsConTab techSkillConTab">
                    <div class="galleryTab">
                        <techSkillsCon class="gallery-cell" v-for="(techSkill, index) in techSkills" :techSkill="techSkill" :key="index"></techSkillsCon>
                    </div>
                </div>
                <div class="skillsConTab hardSkillConTab">
                    <div class="galleryTab">
                        <hardSkillsCon class="gallery-cell" v-for="(hardSkill, index) in hardSkills" :hardSkill="hardSkill" :key="index"></hardSkillsCon>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,

    data: function() {
        // these are the arrays for each icon id, name and image
        // this content is static, meaning that it is not loaded or changed through a database
        return {
            // array for the tech skills
            techSkills: [
                {id: '1', name: 'Photoshop', img: 'photoshop'},
                {id: '2', name: 'Illustrator', img: 'illustrator'},
                {id: '3', name: 'Figma', img: 'figma'},
                {id: '4', name: 'InVision', img: 'invision'},
                {id: '5', name: 'Adobe XD', img: 'xd'},
                {id: '6', name: 'InDesign', img: 'indesign'},
            ],
            // array for the hard skills
            hardSkills: [
                {id: '1', name: 'Wireframing', img: 'wireframing'},
                {id: '2', name: 'Prototyping', img: 'prototyping'},
                {id: '3', name: 'UX Writing', img: 'uxwriting'},
                {id: '4', name: 'Typography', img: 'typography'},
                {id: '5', name: 'User Engagement', img: 'userengagement'},
                {id: '6', name: 'Branding', img: 'branding'},
            ],
        }
    },

    mounted: function() {
        // flickity is the package used for the carousel functionality
        // this initiates flickity and allows parameters to be set for how it works
        $('.gallery').flickity({
            // options
            cellAlign: 'center',
            contain: true,
            wrapAround: true,
          });
    },

    methods: {
        // when clicking a filter button, hide the other objects that do not have the associated class
        // start of filter buttons {
        hideSkills1() {
            if($('.skillUnderline1').hasClass("selected")) {
                return
            } else {
                $('.skillUnderline1').addClass("selected");

                $('.skillUnderline1').addClass("highlighted");

                $('.skillUnderline').not('.skillUnderline1').removeClass("highlighted");

                $('.skillFilterBtn').not('.skillFilterBtn1').removeClass("selected");

                $('.skillUnderline').not('.skillUnderline1').removeClass("selected");
                $('.skillsConTab').removeClass("skillTransitionLeft");
                $('.skillsConTab').addClass("skillTransitionRight");
            }
        },

        hideSkills2() {
            if($('.skillUnderline2').hasClass("selected")) {
                return
            } else {
                $('.skillUnderline2').addClass("selected");

                $('.skillUnderline2').addClass("highlighted");

                $('.skillsConTab').removeClass("skillTransitionRight");
                $('.skillsConTab').addClass("skillTransitionLeft");

                $('.skillUnderline').not('.skillUnderline2').removeClass("highlighted");

                $('.skillFilterBtn').not('.skillFilterBtn2').removeClass("selected");

                $('.skillUnderline').not('.skillUnderline2').removeClass("selected");
            }
        },
        // } end of filter buttons
    },
    
    // define what components are being used
    components: {
        techSkillsCon: TechSkillsComponent,
        hardSkillsCon: HardSkillsComponent
    }
}
import TechSkillsComponent from './homeSkills/TechSkillsComponent.js';
import HardSkillsComponent from './homeSkills/HardSkillsComponent.js';

export default {
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
            <div class="skillsConTab techSkillConTab">
            <div class="galleryTab">
                <techSkillsCon class="gallery-cell" v-for="(techSkill, index) in techSkills" :techSkill="techSkill" :key="index"></techSkillsCon>
            </div>
        </div>
        <div class="skillsConTab hardSkillConTab skillInactive">
            <div class="galleryTab">
                <hardSkillsCon class="gallery-cell" v-for="(hardSkill, index) in hardSkills" :hardSkill="hardSkill" :key="index"></hardSkillsCon>
            </div>
        </div>
        </div>
    </section>
    `,

    data: function() {
        // this data is placeholder, and will be pulled from a database table at some point
        return {
            techSkills: [
                {id: '1', name: 'Tech Skill 1', img: 'smallImg'},
                {id: '2', name: 'Tech Skill 2', img: 'medImg'},
                {id: '3', name: 'Tech Skill 3', img: 'smallImg'},
                {id: '4', name: 'Tech Skill 4', img: 'medImg'},
                {id: '5', name: 'Tech Skill 5', img: 'smallImg'},
                {id: '6', name: 'Tech Skill 6', img: 'medImg'},
            ],

            hardSkills: [
                {id: '1', name: 'Hard Skill 1', img: 'medImg'},
                {id: '2', name: 'Hard Skill 2', img: 'smallImg'},
                {id: '3', name: 'Hard Skill 3', img: 'medImg'},
                {id: '4', name: 'Hard Skill 4', img: 'smallImg'},
                {id: '5', name: 'Hard Skill 5', img: 'smallImg'},
                {id: '6', name: 'Hard Skill 6', img: 'medImg'},
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
            wrapAround: true
          });
    },

    methods: {
        hideSkills1() {
            if($('.skillUnderline1').hasClass("selected")) {
                return
            } else {
                $('.skillUnderline1').addClass("selected");

                $('.skillUnderline1').addClass("highlighted");
                $('.techSkillConTab').removeClass("skillInactive");
                $('.techSkillConTab').addClass("skillActive");

                $('.hardSkillConTab').removeClass("skillActive");
                $('.hardSkillConTab').addClass("skillInactive");
                $('.skillUnderline').not('.skillUnderline1').removeClass("highlighted");

                $('.skillFilterBtn').not('.skillFilterBtn1').removeClass("selected");

                $('.skillUnderline').not('.skillUnderline1').removeClass("selected");
            }
        },

        hideSkills2() {
            if($('.skillUnderline2').hasClass("selected")) {
                return
            } else {
                $('.skillUnderline2').addClass("selected");

                $('.skillUnderline2').addClass("highlighted");
                $('.hardSkillConTab').removeClass("skillInactive");
                $('.hardSkillConTab').addClass("skillActive");

                $('.techSkillConTab').removeClass("skillActive");
                $('.techSkillConTab').addClass("skillInactive");
                $('.skillUnderline').not('.skillUnderline2').removeClass("highlighted");

                $('.skillFilterBtn').not('.skillFilterBtn2').removeClass("selected");

                $('.skillUnderline').not('.skillUnderline2').removeClass("selected");
            }
        },
    },

    components: {
        techSkillsCon: TechSkillsComponent,
        hardSkillsCon: HardSkillsComponent
    }
}
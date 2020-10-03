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
    </section>
    `,

    data: function() {
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
        $('.gallery').flickity({
            // options
            cellAlign: 'center',
            contain: true,
            wrapAround: true
          });
    },

    components: {
        techSkillsCon: TechSkillsComponent,
        hardSkillsCon: HardSkillsComponent
    }
}
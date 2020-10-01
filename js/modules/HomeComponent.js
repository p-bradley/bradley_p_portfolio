import AboutComponent from './homeComponents/AboutComponent.js';
import WorkComponent from './homeComponents/WorkComponent.js';
import SkillsComponent from './homeComponents/SkillsComponent.js';
import ContactComponent from './homeComponents/ContactComponent.js';

export default {
    template: `
    <section id="home">
        <aboutComponent></aboutComponent>
        <workComponent></workComponent>
        <skillsComponent></skillsComponent>
        <contactComponent></contactComponent>
    </section>
    `,

    data: function() {
        return {
        }
    },

    components: {
        aboutComponent: AboutComponent,
        workComponent: WorkComponent,
        skillsComponent: SkillsComponent,
        contactComponent: ContactComponent,
    }
}
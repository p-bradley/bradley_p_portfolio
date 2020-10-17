// import the components from their folders
// imports are always first
import AboutComponent from './homeComponents/AboutComponent.js';
import WorkComponent from './homeComponents/WorkComponent.js';
import SkillsComponent from './homeComponents/SkillsComponent.js';
import ContactComponent from './homeComponents/ContactComponent.js';

export default {
    // this template is loading the home page and using components to populate the page
    template: `
    <div>
        <section id="home">
            <aboutComponent></aboutComponent>
            <workComponent></workComponent>
            <skillsComponent></skillsComponent>
            <contactComponent></contactComponent>
        </section>
    </div>
    `,
    
    // this data section is not being used, but normally is houses data that would be used elsewhere
    // data is where we define values, attributes or data, and then load it wherever it needs to be loaded
    // data here can also be used by any child components, meaning aboutComponent can use the data gained here, but data in aboutComponent cannot be used in this component
    data: function() {
        return {
        }
    },
    // define what components are being used
    components: {
        aboutComponent: AboutComponent,
        workComponent: WorkComponent,
        skillsComponent: SkillsComponent,
        contactComponent: ContactComponent,
    }
}
export default {
    // props are custom attributes you can register on a component
    //  this prop is pulling data from the techSkill array in the skills component and using it here
    props: ['techSkill'],

    template: 
    // this is the template format being used for each tech skill
    // this template will be used for as many techSkill entires there are in the database
    `
    <div>
            <img :src="'images/svgs/' + techSkill.img + '.svg'">
            <p>{{ techSkill.name }}</p>
        </div> 
    `
}
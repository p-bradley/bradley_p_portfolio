export default {
    // props are custom attributes you can register on a component
    //  this prop is pulling data from the hardSkill array in the skills component and using it here
    props: ['hardSkill'],
    
    template: 
    // this is the template format being used for each hard skill
    // this template will be used for as many hardSkill entires there are in the database
    `
        <div>
            <img :src="'images/svgs/' + hardSkill.img + '.svg'">
            <p>{{ hardSkill.name }}</p>
        </div> 
    `
}
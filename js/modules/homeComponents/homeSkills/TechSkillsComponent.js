export default {
    props: ['techSkill'],

    template: `
    <div>
            <img :src="'images/' + techSkill.img + '.jpg'">
            <p>{{ techSkill.name }}</p>
        </div> 
    `
}
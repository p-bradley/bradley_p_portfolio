export default {
    props: ['hardSkill'],
    
    template: `
        <div>
            <img :src="'images/' + hardSkill.img + '.jpg'">
            <p>{{ hardSkill.name }}</p>
        </div> 
    `
}
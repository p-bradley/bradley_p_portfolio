export default {
    props: ['card'],

    template: `
    <div :class="'card card' + card.id">
        <img :src="'images/' + card.img + '.jpg'">
    </div>
    `
}
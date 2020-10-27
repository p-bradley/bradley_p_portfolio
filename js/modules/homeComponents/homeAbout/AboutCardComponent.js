export default {
    // props are custom attributes you can register on a component
    //  this prop is pulling data from the cards array in the about component and using it here
    props: ['card'],

    template: 
    // this is the template format being used for each about card
    // this template will be used for as many card entires there are in the database
    `
    <div :class="'card card' + card.id">
        <img :src="'images/' + card.img + '.png'" :alt="'image of ' + card.name">
    </div>
    `
}
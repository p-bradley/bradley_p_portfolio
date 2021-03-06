export default {
    // this template is generating the message sent page for when an email is sent
    template: `
    <section id="messageSent">
        <h1>[ thank you! ]</h1>
        <p>Your message has been sent.</p>
        <p>I'll get back to you as soon as I can!</p>
        <router-link to="/">[ back home ]</router-link>
        <div class="sentQuote">
            <h2>"Simplicity is the ultimate sophistication."</h2>
            <h2>- Leonardo da Vinci</h2>
        </div>
    </section>
    `
}
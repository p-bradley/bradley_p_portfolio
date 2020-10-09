export default {
    template: `
    <section id="contact">
        <h1>[ contact me ]</h1>
        <div>
            <form id="contactForm" method="POST" action="admin/signup.php">
                    <input type="text" name="fname" placeholder="[ first name ]" required aria-label="First Name">
                    <input type="text" name="lname" placeholder="[ last name ]" required aria-label="Last Name">
                    <input type="email" name="email" placeholder="[ email ]" required aria-label="Email">
                    <textarea id="message" name="message" aria-label="Message" required data-gramm_editor="false" max-length="1200" placeholder="[ message ]"></textarea>
                <button @click="checkSubmit()" type="submit" onsubmit="return false" name="submit" aria-label="Submit Button">[ send ]</button>
            </form>
        </div>
    </section>
    `,

    methods: {
        checkSubmit() {
            $('#contactForm').each(function() {
                if ( $(this).val() === '' ) {
                    console.log("not filled");
                } else {
                    console.log("form was filled")
                }
            });
        }
    }
}
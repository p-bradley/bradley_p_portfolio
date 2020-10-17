export default {
    // this template is generating the contact section, which creates the form
    // when clicking the button, the data in the form is sent as a POST request and is using the sript in admin/signup.php to send an email
    template: `
    <section id="contact">
        <h1>[ contact me ]</h1>
        <div>
            <form id="contactForm" method="POST" action="admin/signup.php">
                    <input type="text" name="fname" placeholder="[ first name ]" required aria-label="First Name">
                    <input type="text" name="lname" placeholder="[ last name ]" required aria-label="Last Name">
                    <input type="email" name="email" placeholder="[ email ]" required aria-label="Email">
                    <textarea id="message" name="message" aria-label="Message" required data-gramm_editor="false" max-length="300" placeholder="[ message ]"></textarea>
                <button type="submit" onsubmit="return false" name="submit" aria-label="Submit Button">[ send ]</button>
            </form>
        </div>
    </section>
    `
}
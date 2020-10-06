export default {
    template: `
    <section id="contact">
        <h1>[ contact me ]</h1>
        <div>
            <form method="POST" action="admin/signup.php">
                <span>
                    <input type="text" name="fname" placeholder="[ first name ]" required aria-label="First Name">
                </span>
                <span>
                    <input type="text" name="lname" placeholder="[ last name ]" required aria-label="Last Name">
                </span>
                <span>
                    <input type="email" name="email" placeholder="[ email ]" required aria-label="Email">
                </span>
                <span>
                    <textarea id="message" name="message" aria-label="Message" required data-gramm_editor="false" max-length="1200" placeholder="[ message ]"></textarea>
                </span>
                <button type="submit" name="submit" aria-label="Submit Button">[ send ]</button>
            </form>
        </div>
    </section>
    `
}
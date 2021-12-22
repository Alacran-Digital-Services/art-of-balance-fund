import * as React from "react"
import * as styles from "./contactForm.module.scss"

const ContactForm = () => (
    <form className={styles.formContainer} name="contact" method="post" data-netlify="true" action="/contact-success" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        
        <div className={styles.nameContainer}>
            <div className={styles.nameItem}>
                <label for="firstName">First Name</label>
                <input type="text" name="firstName" />
            </div>
            <div className={styles.nameItem}>
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" />
            </div>
        </div>

        <div className={styles.formItem}>
            <label>Email</label>
            <input type="email" name="emailAddress" size="26" />
        </div>

        <div className={styles.formItem}>
            <label>Phone Number</label>
            <input type="tel" name="phone" size="26" />
        </div>

        <label>Request Type</label>

        <div className={styles.inlineOptionItem}>    
            <div>
                <input type="radio" id="corporateWorkshop" name="requestType" value="Corporate Workshop" />
                <label for="corporateWorkshop" className={styles.optionItem}>Corporate Workshop</label>
            </div>
            <div>
                <input type="radio" id="educationalWorkshop" name="requestType" value="Educational Workshop" />
                <label for="educationalWorkshop" className={styles.optionItem}>Educational Workshop</label>
            </div>
        </div>

        <div className={styles.formItem}>
            <label>Message</label>
            <textarea name="message" className={styles.formMessage}></textarea>
        </div>

        <p className={styles.submitItem}>
            <button type="submit">Send</button>
        </p>
    </form>
)

export default ContactForm
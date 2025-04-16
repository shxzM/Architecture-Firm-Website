import styles from "./css/Form.module.css";

function Form() {
  return (
    <div className={styles.FormBackground}>
      <div className={styles.divforborder}>
        <div className={styles.ContactContainer}>
          <h2>CONTACT US</h2>
          <h1>
            Ready to make your space <br /> magnificent ?
          </h1>
        </div>
        <div className={styles.FormContainer}>
          <form>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="Location" required />
            <input type="text" placeholder="Budget (if any)" />
            <textarea placeholder="Message" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;

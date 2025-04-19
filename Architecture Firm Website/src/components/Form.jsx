import styles from "./css/Form.module.css";
import { MessagesCollectionRef } from '../config/firebase';
import { addDoc } from 'firebase/firestore';
import { useState } from "react";


function Form() {

  const [uploading, setUploading] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
    

   const onSubmitProject = async () => {
      try {
        setUploading(true);
        await addDoc(MessagesCollectionRef, {
          First_Name: firstname,
          Last_Name: lastname,
          Email: email,
          Phone: phone,
          Budget: budget,
          Location: location,
          Message: message,
          Read: false
        });
  
        alert("Details Submitted successfully!");
      } catch (err) {
        console.error(err);
        alert("Error Submitting Details");
      } finally {
        setUploading(false);
      }
    };
  



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
            <input type="text" placeholder="First Name" required onChange={(e) => setFirstname(e.target.value)}/>
            <input type="text" placeholder="Last Name" required onChange={(e) => setLastname(e.target.value)}/>
            <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
            <input type="tel" placeholder="Phone Number" required onChange={(e) => setPhone(e.target.value)}/>
            <input type="text" placeholder="Location" required onChange={(e) => setLocation(e.target.value)}/>
            <input type="text" placeholder="Budget (if any)" onChange={(e) => setBudget(e.target.value)}/>
            <textarea placeholder="Message" required onChange={(e) => setMessage(e.target.value)}/>
            <button onClick={onSubmitProject} disabled={uploading}>
              {uploading ? 'Submitting...' : 'Submit Detail'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;

import "./Contact.css"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  return (
    <div class="contact">
    <h2>Contact Us</h2>
    <p>Feel free to get in touch with us for any inquiries or assistance.</p>
    <div class="contact-info">
    <p><FontAwesomeIcon icon={faEnvelope} />  <a href="mailto:anmahmad3@gmail.com">anmahmad3@gmail.com</a></p>
        <p><FontAwesomeIcon icon={faPhone} /> (+967) 770618236</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Hail Street, Sanaa, Yemen</p>
    </div>
  </div>
  )
}

export default Contact

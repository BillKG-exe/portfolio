import Navbar from '../components/Navbar';
import { SiMinutemailer, SiInstagram } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';


const Contact = () => {
    const handleSocialLink  = (e) => {
        const id = e.target.id;

        if(id === "in") {
            window.open("https://www.linkedin.com/in/billy-ouattara-10218b20b/");
        } else if(id === "git") {
            window.open("https://github.com/BillKG-exe?tab=repositories");
        } else {
            window.open("https://www.instagram.com/blvck_king_226/");
        } 
    }

    return (
        <div className="Contact">
            <Navbar />
            <div className='contact-content'>
                <div className='contact-title'>Get in Touch</div>
                <div className='msg-box'>
                    <div className='msg'>Want to hire me, work with me on a project or ask questions?</div>
                    <a href="mailto:ouattarabilly33@hotmail.com">
                        <div className='msg-btn'>
                            <div>Email me</div>
                            <div className='email-icon'><SiMinutemailer /></div>
                        </div>
                    </a>
                    <div className='social-links'>
                        <div id="in" onClick={handleSocialLink}><FaLinkedinIn /></div>
                        <div id="git" onClick={handleSocialLink}><FiGithub /></div>
                        <div id="ig" onClick={handleSocialLink}><SiInstagram /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;
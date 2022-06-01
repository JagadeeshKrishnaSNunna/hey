import '../css/ContactWindow.css'
import Contact from './Contact';

export default function ContactWindow({image,name,lastMessage}){
    return(
        <div className="contact-layout">
            <Contact 
                name={name}
                lastMessage={lastMessage}
                image={image}
            />
        </div>
    );
}

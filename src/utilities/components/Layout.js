import NavBar from "./NavBar";
import ContactWindow from './ContactWindow'
import MessageWindow from "./MessageWindow";
import ContactHeader from "./ContactHeader";
import MessageFooter from "./MessageFooter";
import "../css/Layout.css"

export default function Layout({image,name,lastMessage,message}){
    return(
        <div>
            <NavBar />
            <div className='layout-style'>
                <div className='contact-style'>
                    <ContactHeader/>
                    <ContactWindow 
                        name={name}
                        lastMessage={lastMessage}
                        image={image}
                    />
                </div>
                <div className='message-style'>
                    <div className='message-window'>
                        <MessageWindow message={message}/>
                    </div>
                    <div className='message-footer'>
                        <MessageFooter />
                    </div>
                </div>
            </div>
        </div>
    );
}

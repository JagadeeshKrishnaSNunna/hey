import NavBar from "./NavBar";
import ContactWindow from './ContactWindow'
import MessageWindow from "./MessageWindow";
import ContactHeader from "./ContactHeader";
import MessageFooter from "./MessageFooter";
import "../css/Layout.css"

export default function Layout(){
    return(
        <div>
            <NavBar />
            <div className='layout-style'>
                <div className='contact-style'>
                    <ContactHeader/>
                    <ContactWindow />
                </div>
                <div className='message-style'>
                    <MessageWindow />
                    <div className='message-footer'>
                        <MessageFooter />
                    </div>
                </div>
            </div>
        </div>
    );
}

import "../css/MessageWindow.css"
import Message from "./Message";

export default function MessageWindow(){
    return(
        <div className='message-layout'>
            <div className='message'>
                <Message />
                <Message />
            </div>
        </div>
    );
}

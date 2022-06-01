import "../css/MessageWindow.css"
import Message from "./Message";

export default function MessageWindow({message}){
    return(
        <div className='message-layout'>
            <div className='message'>
                <Message 
                    message={message}
                />
            </div>
        </div>
    );
}

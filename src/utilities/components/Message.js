import '../css/Message.css'

export default function Message({message}){
    return(
        <div className='message-container'>
            <div className='message-content'>
                <p>{message}</p>
            </div>
        </div>
    )
}
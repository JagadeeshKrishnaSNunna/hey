import '../css/MessageFooter.css'

export default function MessageFooter(){
    return(
        <div className='message-footer-container'>
            <input type='text' placeholder='Enter Text Message...'/>
            <div className='sendButton'>
                <h1>🚀</h1>
            </div>
        </div>
    )
}

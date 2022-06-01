import '../css/Contact.css'
import Account from './AccountImage'

export default function Contact({image,name,lastMessage}){
    return(
        <div className='contact-container'>
            <div className='container-content'>
                <Account 
                    image={image}
                />
                <div className="account-content">
                    <h3>{name}</h3>
                    <h5>{lastMessage}</h5>
                </div>
            </div>
        </div>
    )
}
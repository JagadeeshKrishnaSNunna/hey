import '../css/Contact.css'
import Account from './AccountImage'

export default function Contact(){
    return(
        <div className='contact-container'>
            <div className='container-content'>
                <Account />
                <div className="account-content">
                    <h3>Name/number</h3>
                    <h5>last-message</h5>
                </div>
            </div>
        </div>
    )
}
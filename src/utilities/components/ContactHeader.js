import '../css/ContactHeader.css'

export default function ContactHeader(){
    return(
        <div className='contact-header-container'>
            <input type='text' placeholder='🔎 Search Contacts'/>
            <h1>👤</h1>
            <h1>⚙️</h1>
        </div>
    );
}
import './App.css';
import Layout from "./utilities/components/Layout"

function App() {
  return (
    <div className='container'>
      <Layout 
        image='./utilities/images/logo192.png'
        name='jadhu'
        lastMessage='this is a last message in the chat.'
        message='hi jadhu'
      /> 
    </div>
  );
}

export default App;

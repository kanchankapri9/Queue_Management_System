import './index.css'
import { useState } from 'react';
import ApoinmentForm from './components/ApoinmentForm';

function App() {

  //    0.   states to manage the data of our app

  const [queue, setQueue] = useState([]);


  //    1.   function to add a new person to the queue

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: 'waiting' }]);
    
  }


  //   2 .  function to update the queue when a person is seved
  const serveCustomer = () => {
   

  }


  //  3. Function to delete a person from queue when they has been completed or they want to leave
  const removeFromQueue = (customer) => {
    
  }



  return <div className="app">

     {/*   4.     this is our header */}

   <header>
     <h1> Take Apoinment with Kapri ji </h1>
   </header>
   

    
    {/* 5. this is our main section */}

    <main>
      <h3> So ! How Our MEM can help You ? </h3>
      <ApoinmentForm addData={addToQueue} />  
      {/* now form has the full access to the addToQueue function and it can call it when the form is submitted with the new customer data */}
      


      
    </main>





  </div>;
}

export default App;

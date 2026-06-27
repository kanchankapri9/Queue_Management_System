import './index.css'
import { useState } from 'react';
import Apoinment_Form from './components/Apoinment_Form';
import Queue_Display from './components/Queue_Display';

function App() {

  //    0.   states to manage the data of our app

  const [queue, setQueue] = useState([]);


  //    1.   function to add a new person to the queue

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: 'waiting' }]);
    
  }


  //   2 .  function to update the queue when a person is seved
  //          ( Loop through the queue and find the person with the given id and spread queue and update their status to served )
  const serveCustomer = (id, newStatus) => {
     setQueue(queue.map(customer => 
       customer.id === id ? 
      { ...customer, status: newStatus } : customer 
    ))
   

  };


  //  3. Function to delete a person from queue when they has been completed or they want to leave
  //        ( Loop through the queue and find the person with the given id and remove them from the queue )
  const removeFromQueue = (id) => {
    setQueue(queue.filter(customer => customer.id !== id));                // a fresh array which does not have the customer with the given id
  }



  return <div className="app">

     {/*   4.     this is our header */}

   {/* <header>
     <h1> Take Apoinment with Kapri ji </h1>
   </header> */}
   

    
    {/* 5. this is our main section */}

    <main>
      {/* <h3> So ! How Our MEM can help You ? </h3> */}
      <Apoinment_Form addData={addToQueue} />  
      {/* now form has the full access to the addToQueue function and it can call it when the form is submitted with the new customer data */}
      <Queue_Display
      queue={queue}
      onUpdateStatus={serveCustomer}        
      onRemove={removeFromQueue}
      />


      
    </main>





  </div>;
}

export default App;

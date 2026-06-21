import  { useState } from 'react';
import "./App.css";
import QueueForm from './components/QueueForm';
import QueueDisplay from './components/QueueDisplay';


function App() {
  const [queue, setQueue] = useState([1,2,3]);

  const addToQueue = (cust) => {
    setQueue([...queue, { ...cust, id: Date.now(), status: 'waiting' }])

  }
  const updateStatus = (custId, newStatus) => {
    setQueue(queue.map(cust => {
      return cust.id === custId ? { ...cust, status: newStatus}: cust
    }))
  }



  const removeFromQueue = (custId) => {
    setQueue(queue.filter(cust => cust.id !== custId))  // this will remove the customer with the given id from the queue
  }   // filter always returns a new array, so we are creating a new array with all the customers except the one with the given id and then setting the queue state to that new array.

  return (
    <div className="app">

      {/* header ( the name ) */}

      <header className="min-h-screen" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
         <h1 className="text-4xl font-bold drop-shadow-lg"> Apoinmment with Kapri JI </h1>
      </header>



      {/* main ( the form and the display component with calender ) */}

      <main>
    
        <h1> How can Kapri ji help you out! </h1>
        <h1> QueueDisplay</h1>


        <QueueForm onAdd={addToQueue} />   
        <QueueDisplay 
        queue={queue} // pass the queue state to the QueueDisplay component4
        onUpdateStatus={updateStatus} // pass the updateStatus function to the QueueDisplay component
        onRemoveFromQueue={removeFromQueue} // pass the removeFromQueue function to the QueueDisplay component
         />
      </main>


    </div>
  )
}



export default App;



// we have to pass the data from the form to the parent whch is app
// then, addtoQueue function will be called and the data will be added to the queue state in the parent component (App.jsx) and
//  then we can pass the queue state to the QueueDisplay component to display the data.




/*
 * 
 * 
    setQueue(queue.filter(cust => cust.id !== custId))  // this will remove the customer with the given id from the queue
 * 

    filter always returns a new array, so we are creating a new array with all the customers except the one with the given id and then setting the queue state to that new array.
 * i want to exclude the customer with the given id from the queue and then set the queue state to that new array.
 * 
 * so the lines mean by
 * 
 * first calling the setQueue function to update the queue state, 
 * then using the filter method to create a new array that includes all the customers except the one with the given id (custId),
 * 
 * 
 * 
    setQueue(queue.filter(cust => cust.id !== custId))  // this will remove the customer with the given id from the queue
 * exclude all those which does not match with given id and then set the queue state to that new array.
 */
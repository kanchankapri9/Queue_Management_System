import { useState } from 'react';
import {FaUserPlus} from "react-icons/fa";

function QueueForm( { onAdd } ) { 

    const [name, setName] = useState('');
    const [service, setService] = useState('');
    const [time, setTime] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();   
        // Validation
        if(!name.trim() || !service.trim() || !time.trim()) return alert('All fields are required');
        onAdd({ name, service, time }); // Call the onAdd function passed from the parent component with the form data
        setName('');
        setService(''); // reset the service field to empty string after submission
        setTime('');
    }

    return (

        // Form structure

        <>

        <form className="queue-form" onSubmit={handleSubmit}>

        </form>
        
            <h2> Add to Queue </h2>
            <div className="form-group">
            <input type="text" placeholder="Your Name ji" value={name} 
            onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form-group">
                <select  value={service} onChange={(e) => setService(e.target.value)}>
                    <option value="">Select Service</option>
                    <option value="Service1">Connect</option>
                    <option value="Service2">Get Mentorship</option>
                    <option value="Service3">Help</option>
                </select>
            </div>
           
           <button type="submit" className="add-button">
            <FaUserPlus /> Add this mahan to line
           </button>



        </>
    )
};

export default QueueForm;




/*

onAdd is a prop that will be called when the form is submitted. 
it is a prop here in the QueueForm component. 
and function will be passed from the parent component (App.jsx) to this child component (QueueForm.jsx) when we use it in the App.jsx file.


onAdd={addToQueue}    this is how we will pass the function from the parent component to the child component.

*/





/*


onChange={(e) => setName(e.target.value)} />



onchange always taked an event object as a parameter and,
 we can access the value of the input field using e.target.value and,
  then we can set the state of the name variable using setName function.


*/
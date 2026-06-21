import { useState } from "react";
import {FaUserPlus} from "react-icons/fa";

function ApoinmentForm({ addData }) {    
  //  child component of our app which will be responsible for taking the input from the user and then calling the addData function to add the new customer to the queue

const [name, setName] = useState('');
const [service, setService] = useState('');
const [time, setTime] = useState('');
const [contact, setContact] = useState('');
const [date, setDate] = useState('');
const [notes, setNotes] = useState('');



// now i need to hhandle that submission and call addData function to add new customer to queue
const handleSubmit = (e) => {
  // the first way to handle the form submission is to prevent the default behavior of the form and then call the addData function with the new customer data the default behavior of the form is to reload the page when the form is submitted and we don't want that to happen so we will prevent it and then call the addData function with the new customer data , or submit it to some endpoints 
  e.preventDefault();
  //Validation
  if(!name.trim() ||  !service.trim() || !time.trim() || !contact.trim() || !date.trim()) {
    alert('Please fill in all fields');
    return;
  }

  // Call the addData function with the new customer data
  addData({ name, service, time, contact, date, notes });

  // Clear the form fields for the  next input
  setName('');
  setService('');
  setTime('');
  setContact('');
    setDate('');
    setNotes('');
  };



  


  return (
    
    // name feiled

    <>
    <form onSubmit={handleSubmit} className="apoinment-form">
    <h2> Book an Apoinment </h2>
    <div className="form-group">
      <input type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)} />
    </div>



    {/* Form feild for service selection */}

    <div className="form-group">
      <select name="service"
      value={service}  
      onChange={(e) => setService(e.target.value)}>
        <option value="">Select Service</option>
        <option value="Consultation">Consultation</option>
        <option value="Book Apoinment">Book Apoinment</option>
        <option value="Connect her">Connect her</option>
        <option value="Other">Other</option>
        <option value="Ask a Query">Ask a Query</option>
        <option value="Other">Other</option>
      </select>


    

      
    {/* time feild */}
    <div className="form-group">
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
    </div>





    {/* contact feild */}

    <div className="form-group">
      <input type="tel"  placeholder= "Contact Number" value={contact} onChange={(e) => setContact(e.target.value)} />
    </div>






    {/* date feild */}

    <div className="form-group">
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
    </div>






    {/* notes feild */}

    <div className="form-group">
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} 
      placeholder="Additional Notes (Optional)"></textarea>
    </div>








    {/* button for submiting the form */}

    <button type="submit">
       <FaUserPlus /> Book Now </button>
    </div>


    </form>

    </>



  )
}

export default ApoinmentForm;









                                                              // Notes 




// the app should give the refrence of Crud opereation to the form component when form is submitted!

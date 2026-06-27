import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import "./Apoinment_Form.css"; // Import the CSS file for styling

function Apoinment_Form({ addData }) {

    // This is a child component.
    // It receives the addData() function from App.jsx through props.
    // We will call this function whenever the form is submitted successfully.




    // ===========================
    // State Variables
    // ===========================

    // Each useState() stores the value of one input field.
    // Whenever the user types something, React updates these states.

    const [name, setName] = useState('');
    const [service, setService] = useState('');
    const [time, setTime] = useState('');
    const [contact, setContact] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');






    // ===========================
    // Form Submission
    // ===========================

    const handleSubmit = (e) => {

        // Prevent the browser's default behaviour.
        // Normally a form refreshes the page after submission.
        // Since React is a Single Page Application (SPA),
        // we stop that behaviour.

        e.preventDefault();




        // ===========================
        // Validation
        // ===========================

        // trim() removes unwanted spaces.
        // If any required field is empty,
        // stop the submission.

        if (
            !name.trim() ||
            !service.trim() ||
            !time.trim() ||
            !contact.trim() ||
            !date.trim()
        ) {

            alert("Please fill in all fields");

            return;
        }





        // ===========================
        // Send Data to Parent Component
        // ===========================

        // addData() comes from App.jsx.
        // We send one complete customer object.

        addData({

            name,
            service,
            time,
            contact,
            date,
            notes

        });





        // ===========================
        // Reset Form
        // ===========================

        setName('');
        setService('');
        setTime('');
        setContact('');
        setDate('');
        setNotes('');

    };







    return (

        <>

            {/* Appointment Form */}

            <form
                onSubmit={handleSubmit}
                className="apoinment-form"
            >

                <h2>Book an Appointment</h2>




                {/* ===========================
                    Name Field
                ============================ */}

                <div className="form-group">

                    <input

                        type="text"

                        placeholder="Name"

                        value={name}

                        onChange={(e) => setName(e.target.value)}

                    />

                </div>






                {/* ===========================
                    Service Selection
                ============================ */}

                <div className="form-group">

                    <select

                        name="service"

                        value={service}

                        onChange={(e) => setService(e.target.value)}

                    >

                        <option value="">Select Service</option>

                        <option value="Consultation">
                            Consultation
                        </option>

                        <option value="Book Appointment">
                            Book Appointment
                        </option>

                        <option value="Connect Here">
                            Connect Here
                        </option>

                        <option value="Ask a Query">
                            Ask a Query
                        </option>

                        <option value="Other">
                            Other
                        </option>

                    </select>

                </div>







                {/* ===========================
                    Time Field
                ============================ */}

                <div className="form-group">

                    <input

                        type="time"

                        value={time}

                        onChange={(e) => setTime(e.target.value)}

                    />

                </div>







                {/* ===========================
                    Contact Number
                ============================ */}

                <div className="form-group">

                    <input

                        type="tel"

                        placeholder="Contact Number"

                        value={contact}

                        onChange={(e) => setContact(e.target.value)}

                    />

                </div>







                {/* ===========================
                    Appointment Date
                ============================ */}

                <div className="form-group">

                    <input

                        type="date"

                        value={date}

                        onChange={(e) => setDate(e.target.value)}

                    />

                </div>







                {/* ===========================
                    Additional Notes
                ============================ */}

                <div className="form-group">

                    <textarea

                        placeholder="Additional Notes (Optional)"

                        value={notes}

                        onChange={(e) => setNotes(e.target.value)}

                    >

                    </textarea>

                </div>








                {/* ===========================
                    Submit Button

                    Clicking this button triggers:

                    onSubmit={handleSubmit}

                    because its type is "submit".

                ============================ */}

                <button type="submit">

                    <FaUserPlus />

                    Book Now

                </button>

            </form>

        </>

    );

}

export default Apoinment_Form;







// ===================================================
// Notes
// ===================================================

// Flow of this Component

// User Types
//      ↓
// useState() stores data
//      ↓
// User clicks "Book Now"
//      ↓
// handleSubmit()
//      ↓
// Validation
//      ↓
// addData(customerObject)
//      ↓
// App.jsx receives the new customer
//      ↓
// App updates queue state
//      ↓
// Queue_Display receives updated queue
//      ↓
// React automatically re-renders the UI.


                                                              // Notes 




// the app should give the refrence of Crud opereation to the form component when form is submitted!

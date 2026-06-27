import "./Queue_Display.css";                  //  QueueDisplay.css  from "./QueueDisplay.css";

function Queue_Display({ queue, onUpdateStatus, onRemove }) {




    // This function returns a CSS class according to the customer's current status.
    // We call this function inside JSX to dynamically change the background color.
    const getStatusColor = (status) => {

        switch (status) {

            case "waiting":
                return "bg-yellow-500";

            case "served":
                return "bg-green-500";

            case "removed":
                return "bg-red-500";

            default:
                return "bg-gray-500";
        }
    }






    return (

        // Main parent container of this component.
        // Everything displayed by this component lives inside this div.
        <div className="queue-display">

            {/* Queue Display Component */}

            {/* <h2>Current Queue</h2> */}


            {

                // If there are no customers inside the queue array,
                // show this message instead of customer cards.

                queue.length === 0 ? (

                    <p className="empty-queue">
                        No customer data jiii
                    </p>

                ) : (

                    // If queue contains customers,
                    // display all of them here.

                    <div className="queue-cards">

                        {

                            // queue is an array coming from App.jsx through props.
                            // map() loops over every customer object one by one.

                            queue.map((customer) => (

                                // Every repeated element needs a unique key.
                                // React uses this key internally to efficiently update the UI.

                                <div
                                    key={customer.id}
                                    className="queue-item"
                                >

                                    {/* Individual Customer Card */}

                                    <div className="customer-card">

                                        {/* Reading data from the current customer object */}

                                        <h3>{customer.name}</h3>

                                        <p>{customer.service}</p>

                                        <p>{customer.time}</p>

                                        <p>{customer.contact}</p>

                                        <p>{customer.date}</p>

                                        <p>{customer.notes}</p>


                                        {/*

                                            customer.status contains:

                                            "waiting"
                                            "served"
                                            "removed"

                                            getStatusColor() returns a CSS class
                                            according to the current status.

                                        */}

                                        <p className={getStatusColor(customer.status)}>

                                            {customer.status}

                                        </p>



                                        {/*

                                            Buttons Section

                                            onUpdateStatus and onRemove are NOT created here.

                                            They are coming from App.jsx as props.

                                            Queue_Display simply calls them.

                                        */}

                                        <div className="customer-actions">


                                            {

                                                // Only show the Serve button
                                                // when the customer is waiting.

                                                customer.status === "waiting" && (

                                                    <button

                                                        className="serve-button"

                                                        onClick={() =>
                                                            onUpdateStatus(
                                                                customer.id,
                                                                "serving"
                                                            )
                                                        }

                                                    >

                                                        Serve

                                                    </button>

                                                )

                                            }



                                            {/*

                                                Remove button should always be visible.

                                                Clicking it sends the customer's id
                                                back to App.jsx.

                                            */}

                                            <button

                                                onClick={() =>
                                                    onRemove(customer.id)
                                                }

                                            >

                                                Remove

                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>




        // now the queue has the data and we need to display it in the queue display component
        // so we use map() to loop through every customer object.
        // Each customer is displayed inside a separate card.
        // The card shows:
        // name
        // service
        // time
        // contact
        // date
        // notes
        // status
        // Serve button
        // Remove button

    )

}

export default Queue_Display;
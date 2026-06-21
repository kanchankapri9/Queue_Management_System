
// QueueDisplay component receives three props:
// queue (array of customers), onUpdateStatus (function to update status),
// and onRemoveFromQueue (function to remove a customer)
function QueueDisplay({ queue, onUpdateStatus, onRemoveFromQueue }) {   

  // Helper function: returns a Tailwind class based on customer status
  const getStatusColor = (status) => {
    switch (status) {
      case 'waiting':
        return 'bg-yellow-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'completed':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  }

  // JSX returned by the component
  return (
    <div className="queue-display">
      <h2>Queue Display</h2>

      {/* Conditional rendering: if queue is empty show message, else show list */}
      {queue.length === 0 ? (
        <p>Queue is Empty</p>
      ) : (
        <div className="queue-list">
          {/* Loop through each customer in the queue */}
          {queue.map((cust) => (
            <div className="queue-items" key={cust.id}>
              <div className="customer-info">
                <h3>{cust.name}</h3>
                <p>{cust.service}</p>
                <p>Status: {cust.status}</p>

                {/* FIXED: use className instead of inline style */}
                <span className={`status-indicator ${getStatusColor(cust.status)} text-white px-2 rounded`}>
                  {cust.status}
                </span>  
              </div>

              {/* Action buttons for each customer */}
              <div className="actions">
                {/* Show "Serving Start" button only if status is waiting */}
                {cust.status === 'waiting' && (
                  <button 
                    className="start-button" 
                    onClick={() => onUpdateStatus(cust.id, 'in-progress')}
                  >
                    Serving Start
                  </button>
                )}

                {/* Show "Serving Completed" button only if status is in-progress */}
                {cust.status === 'in-progress' && (
                  <button 
                    className="complete-button" 
                    onClick={() => onUpdateStatus(cust.id, 'completed')}
                  >
                    Serving Completed
                  </button>
                )}

                {/* Always show remove button */}
                <button 
                  className="remove-button" 
                  onClick={() => onRemoveFromQueue(cust.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QueueDisplay;

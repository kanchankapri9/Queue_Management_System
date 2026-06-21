// {queue.length === 0
//      ?
//      (<p>Queue is Empty</p>)
//       :
//     (<p>Queue has {queue.length} customers</p>)}




// ismple if else statement nothing else




///----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



{/* We can use simply () instead of {}  ,
 this helps us to avoid writing return statement and also 
 we can directly write the JSX code inside the map function without having to wrap it in a return statement. 
This makes the code more concise and easier to read.


this is with ()-

{queue.map((cust) => (
    <div key={cust.id} className={`customer-card ${getStatusColor(cust.status)}`}>
        <h3>{cust.name}</h3>
        <p>{cust.email}</p>
        <p>Status: {cust.status}</p>
        <button onClick={() => onUpdateStatus(cust.id, 'in-progress')}>Start</button>
        <button onClick={() => onUpdateStatus(cust.id, 'completed')}>Complete</button>
        <button onClick={() => onRemoveFromQueue(cust.id)}>Remove</button>
    </div>
))}


this is with {}-

{queue.map((cust) => {
    return (
        <div key={cust.id} className={`customer-card ${getStatusColor(cust.status)}`}>
            <h3>{cust.name}</h3>
            <p>{cust.email}</p>
            <p>Status: {cust.status}</p>
            <button onClick={() => onUpdateStatus(cust.id, 'in-progress')}>Start</button>
            <button onClick={() => onUpdateStatus(cust.id, 'completed')}>Complete</button>
            <button onClick={() => onRemoveFromQueue(cust.id)}>Remove</button>
        </div>
    )
})}

 */}



///----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

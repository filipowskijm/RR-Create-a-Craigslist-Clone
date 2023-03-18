import React from 'react';

function Posting(props){
    return (
        <div> 
            <h3>{props.data.title}</h3>
            <p>{props.data.description}</p>
            <p style={{color: "red", fontWeight: "bold"}}>{props.data.price}</p>
            <img src={props.data.imageURL} />
        </div>
    )
}

export default Posting;
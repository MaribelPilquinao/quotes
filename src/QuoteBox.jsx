import React from 'react';

const QuoteBox = ({ quote, background }) => {

    return (
        <>
            <p style={{ color: background }}> 
            <i className="fa-solid fa-quote-left"style={{fontSize: "2rem"}}></i>{" "}
                {quote}
            </p>
        </>
    );
}



export default QuoteBox;
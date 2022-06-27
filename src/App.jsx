import { useState } from 'react';
import quotes from './quotes.json';
import AuthorBox from './AuthorBox';
import QuoteBox from './QuoteBox';
import './App.css';

const colors = ['#D0E9F4', '#845EC2', '#FF9671',
                 '#FFC75F', '#0081CF', '#008F7A',
                 '#845EC2','#B39CD0', '#4D8076',
                 '#FF8066','#C34A36','#008B74' ];

const App = () =>{
    
    const [next, setNext] = useState(Math.floor(Math.random() * quotes.length));
   


    const [background, setBackground] = useState(Math.floor(Math.random() * colors.length));


    const handleNext = () =>{
      setNext(Math.floor(Math.random() * quotes.length));
      setBackground(colors[(Math.floor(Math.random() * colors.length))]);
        
    } 
    
    
    // document.body.style = `background: ${background}`  

    return (
        <div className="container center" style={{background}}>
            <div className='card'>
                <QuoteBox quote={quotes[next].quote} background={background} />
                <br /><br />
                <AuthorBox author={quotes[next].author} background={background}/>
                <button onClick={handleNext} style={{background}}><i className="fa-solid fa-circle-chevron-right"></i></button>
            </div>
        </div>
    );
}

export default App;

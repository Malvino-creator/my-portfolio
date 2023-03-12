import React from 'react';
import background from "../backgroundi.svg";
import emoji from "../emoji.png";



function Home() {
  return (
    <div className="home">
      <h1>Hi,
         <img src={emoji} alt="emoji" className='emoji'/>,
        <br></br>I'm Malvin,<br></br>A FullStack Developer..</h1>
      <p> I build amazing things for the web!</p>
      <div>
      <img src={background} alt='background' className='bg'/>
      </div>
    </div>
    
    
    
    
      
  
    
  )
}

export default Home;
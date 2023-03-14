import React from 'react';
import bg from "../bg.webp";
import emoji from "../emoji.png";



function Home() {
  return (
    <div className="home">
      <div className='left'>
      <h1>Hi
         <img src={emoji} alt="emoji" className='emoji'/>
         <br></br>
        I'm Malvin Opondo,<br></br>A FullStack Web Developer..</h1>
      <p> I build amazing stuff for the web!</p>
      <img src={bg} alt={bg} />
      </div>
    </div>
    
    
    
    
      
  
    
  )
}

export default Home;
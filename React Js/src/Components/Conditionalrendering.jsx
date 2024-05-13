import React, { useState } from 'react'

function Conditionalrendering() {
 // Declare a state variable to toggle rendering
 const [isDisplayed, setIsDisplayed] = useState(true);

 // Function to toggle the rendering
 const toggleRendering = () => {
   setIsDisplayed(!isDisplayed);
 };

 return (
   <div>
     <h2>Conditional Rendering</h2>
     <button onClick={toggleRendering}>Toggle Rendering</button>
     {isDisplayed ? (
       <p>This content is displayed when the toggle is ON.</p>
     ) : (
       <p>This content is displayed when the toggle is OFF.</p>
     )}
   </div>
 );
}

export default Conditionalrendering

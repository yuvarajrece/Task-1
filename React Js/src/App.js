
import './App.css';
import Conditionalrendering from './Components/Conditionalrendering';
import Formcontrol from './Components/Formcontrol';
import Helloworld from './Components/Helloworld';
import Main from './Components/ReactRouterPages/Main';
import MainRedux from './Components/Redux/MainRedux';
import MainProps from './Components/StateLiftUp/MainProps';
import Statemanagement from './Components/Statemanagement';
import LifecycleofUseeffect from './LifecycleofUseeffect';


function App() {
  return (
    <div className='parent'>

<div className='full'>
   <h1>This is Yuvaraj</h1>
   <p style={{maxWidth:"400px",fontSize:"20px"}}>This react app contains most intresting small project and all these concepts are imporatant in react so feel free to play with all the code </p>
   <p>Happy Hacking 😁</p>
   </div> 

   <div className='full'>
   <h1>Simple Reat App🪄</h1>
   <Helloworld/>
   </div> 

   
   <div className='full'>
   <h1> State Management</h1>
   <Statemanagement/>
   </div> 
   
   <div className='full'>
   <h1>Conditional Rendering </h1>
   <Conditionalrendering/>
   </div> 
   
   
   
   <div className='full'>
   <h1>Form Control </h1>
   <Formcontrol/>
   </div> 
 
   <div className='full'>
   <h1> Life Cycle Of UseEffect </h1>
  <LifecycleofUseeffect/>
   </div> 
  
   <div className='full'>
   <h1> Life Cycle Of UseEffect </h1>
  <Main/>
</div>


   <div className='full'>
   <h1>8th one </h1>
  <MainProps/>
   </div> 
   
   <div className='full'>
   <h1>9th one </h1>
  <MainRedux/>
   </div> 
 
   
    </div>
  );
}

export default App;

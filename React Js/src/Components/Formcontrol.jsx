import React, { useState } from 'react'

function Formcontrol() {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [ageValidator,setageValidator]=useState(true)

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation if needed
    console.log('Form submitted:', { name, email, age });
    // Reset form fields
    setName('');
    setEmail('');
    setAge(0);
    
  };

  const checker=(val)=>{
        if(val<=0){
          setageValidator(false)
        }
        else{
            setageValidator(true)
             setAge(val)
        }
  }
  return (
    <div>
      <h2>Form using Controlled Components</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(event) => checker(parseInt(event.target.value))}
            required
            
          />

        </label>
        <span>
            {
                ageValidator ? "" : "Please Enter The Correct Age 😊" 
              
            }
        </span>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Formcontrol


import React, { useState } from 'react';
import ChildComponent from './Childcomponent';

const Parentcomponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Stocks Bought</h2>
      <p>Number of shares Bought: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildComponent count={count} />
    </div>
      
    
  );
};

export default Parentcomponent;

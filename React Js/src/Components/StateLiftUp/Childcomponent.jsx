import React from 'react';


const Childcomponent = ({ count }) => {
    let shareprice=89;
  return (
    <div>
      <span>Invested Amount in RS is : {count*shareprice}</span>
    </div>
  );
};

export default Childcomponent;

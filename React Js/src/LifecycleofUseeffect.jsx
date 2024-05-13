import React, { useEffect, useState } from 'react'

function LifecycleofUseeffect() {
    // State to store fetched data
    const [data, setData] = useState(null);
    // State to track loading state
    const [loading, setLoading] = useState(true);
    // State to track error
    const [error, setError] = useState(null);
  
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Simulate fetching data from an API
          const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const json = await response.json();
        
          setData(json);
          setLoading(false);
          setError(null);
        } catch (error) {
         
          setError(error.message);
          setLoading(false);
        }
      };
  
      
      fetchData();
  
      
     
    }, []); 
  
    return (
      <div>
        <h2>Data Fetching Component</h2>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div>
            <h3>Data:</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    );
}

export default LifecycleofUseeffect

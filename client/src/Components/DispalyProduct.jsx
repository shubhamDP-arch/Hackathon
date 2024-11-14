import React, { useEffect, useState } from "react";
import Card from "./Card";

function DisplayProduct() {
  const [data, setData] = useState([]);
      const backapi = "http://localhost:5000"
  useEffect(() => {
    const fetchData = async () => {
      
        const response = await fetch(`${backapi}/api/auth/getproducts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        if (response.ok) {
          const result = await response.json()
          
          setData(result.products)
        } 
    };

    fetchData()
  }, [])
  
  return (
    <div>
      {data.map((item, index) => (
        <Card 
          key={index}
          hello={item || "Default Hello"}
          destination={item._id}
        />
      ))}
    </div>
  );
}

export default DisplayProduct;

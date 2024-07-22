
import { Box, Center } from '@chakra-ui/react';
import React, { useState } from 'react';


const AddCarPage = () => {
  const [car, setCar] = useState({
    name: '',
    type: '',
    rating: '',
    price: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({
      ...car,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:5000/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    })
    .then(response => response.json())
    .then(data => {
      alert('Car added successfully:', data);
      
      setCar({
        name: '',
        type: '',
        rating: '',
        price: '',
        image: ''
      });
    })
    .catch(error => console.error('Error adding car:', error));
  };

  return (
    
      <Box w="30%" m="50" p={100} backgroundColor={'black'} color={"green"}  >
          
     <div>
       <h1>Add a New Car</h1>
       <form  onSubmit={handleSubmit}>
         <div>
          <label> CarName:</label>
          <input
            
            type="text"
            name="name"
            value={car.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={car.type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="text"
            name="rating"
            value={car.rating}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={car.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={car.image}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Car</button>
      </form>
    </div>

      </Box>
    
  );
};

export default AddCarPage;

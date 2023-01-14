// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        setDogImage(data.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <img src={dogImage} alt="A Random Dog" />;
};

export default App;
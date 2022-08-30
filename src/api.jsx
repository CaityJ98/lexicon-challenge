import { useState, useEffect } from "react";
const API_KEY = import.meta.env.REACT_APP_API_KEY;
const API_Url = `https://challenge.lexicondigital.com.au/api/v2/{cinemaworld or filmworld}/movies`;

function CompareMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = () => {
    fetch(API_Url, {
      headers: {
        method: 'GET',
        Accept: "application/json",
        "Content-Type": "application/json",
        // mode: 'no-cors',
        // 'Access-Control-Allow-Origin': 'http://127.0.0.1:5173/',
        'x-api-key': API_KEY,
        'Access-Control-Allow-Headers': 'Accept'

      }
    })
      .then((response) => response.json())
      .then((data) => setMovies([...data]));
  };

  return (
    <>
      <div>
        {movies.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </>
  );
}

export default CompareMovies;

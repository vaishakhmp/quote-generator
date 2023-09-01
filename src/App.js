import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const headers = {
      "X-Api-Key": "XABiCinTjIxREDdSHY+HwA==kSI0u18CAbJxoAM5"
    };

    fetch("https://api.api-ninjas.com/v1/quotes?category=", { headers })
      .then((res) => res.json())
      .then((quotes) => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex].quote);
        setAuthor(quotes[randomIndex].author);
      })
      .catch(error => {
        console.error("Error fetching quotes:", error);
      });
  }, []);

  const fetchNewQuote = () => {
    const headers = {
      "X-Api-Key": "XABiCinTjIxREDdSHY+HwA==kSI0u18CAbJxoAM5"
    };

    fetch("https://api.api-ninjas.com/v1/quotes?category=", { headers })
      .then((res) => res.json())
      .then((quotes) => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex].quote);
        setAuthor(quotes[randomIndex].author);
      })
      .catch(error => {
        console.error("Error fetching quotes:", error);
      });
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="App">
      <div className="quote">
        <h2>{quote}</h2>
        <p>- {author}</p>
      </div>
      <br />
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        <option value="age">Age</option>
        <option value="alone">Alone</option>
        {/* Add more category options here */}
      </select>
      <br />
      <button className="btn" onClick={fetchNewQuote}>
        Generate New Quote
      </button>
    </div>
  );
}

export default App;
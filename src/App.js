import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const config = {
      headers: {
        "X-Api-Key": "XABiCinTjIxREDdSHY+HwA==kSI0u18CAbJxoAM5",
      },
    };

    axios
    .get("https://api.api-ninjas.com/v1/quotes?category=", config)
    .then((response) => {
      const quotes = response.data;
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex].quote);
      setAuthor(quotes[randomIndex].author);
    })
    .catch((error) => {
      console.error("Error fetching quotes:", error);
    });

  }, []);

 
const fetchNewQuote = () => {
  // alert('button clicked')
  const config = {
    headers: {
      "X-Api-Key": "XABiCinTjIxREDdSHY+HwA==kSI0u18CAbJxoAM5",
    },
  };

  axios
    .get("https://api.api-ninjas.com/v1/quotes?category=" + selectedCategory, config)
    .then((response) => {
      const quotes = response.data;
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex].quote);
      setAuthor(quotes[randomIndex].author);
    })
    .catch((error) => {
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
        <option value="amazing">Amazing</option>
        <option value="anger">Anger</option>
        <option value="art">Art</option>
        <option value="attitude">Attitude</option>
        <option value="beauty">Beauty</option>
        <option value="best">Best</option>
        <option value="birthday">Birthday</option>
        <option value="business">Business</option>
        <option value="car">Car</option>
        <option value="change">Change</option>
        <option value="communications">Communications</option>
        <option value="computers">Computers</option>
        <option value="cool">Cool</option>
        <option value="courage">Courage</option>
        <option value="dad">Dad</option>
        <option value="dating">Dating</option>
        <option value="death">Death</option>
        <option value="design">Design</option>
        <option value="dreams">Dreams</option>
        <option value="education">Education</option>
        <option value="environmental">Environmental</option>
        <option value="equality">Equality</option>
        <option value="faith">Faith</option>
        <option value="famous">Famous</option>
        <option value="Family">Family</option>
        <option value="Freedom">Freedom</option>
        <option value="god">God</option>
        <option value="happiness">Happiness</option>
        <option value="health">Health</option>
        <option value="inspirational">Inspirational</option>
        <option value="leadership">Leadership</option>
        <option value="life">Life</option>
        <option value="love">Love</option>
        <option value="marriage">Marriage</option>
        <option value="mom">Mom</option>
        <option value="money">Money</option>
        <option value="morning">Morning</option>
        <option value="success">Success</option>
      </select>
      <br />
      <button className="btn" onClick={fetchNewQuote}>
        Generate New Quote
      </button>
    </div>
  );
}

export default App;
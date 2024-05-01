import React, { useState, useEffect } from "react";

export function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "your-api-key",
        "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>React App</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos
        delectus voluptatem ab repellat saepe eos molestiae cupiditate, omnis
        doloremque, necessitatibus totam consectetur porro sint quam libero
        aperiam? Laborum, quaerat?
      </p>
    </div>
  );
}

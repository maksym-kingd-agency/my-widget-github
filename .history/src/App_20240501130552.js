import React, { useState, useEffect } from "react";

export function App() {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    fetch(
      "https://website-api-roomizer-alpha.thedevelopmentserver.com/cities/popular",
      {
        method: "GET",
        headers: {
          //   TODO: change X-Host
          "X-Host": "ihor-alpha.wepush.io",
          "X-Locale": "en-US",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("cities", cities);

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

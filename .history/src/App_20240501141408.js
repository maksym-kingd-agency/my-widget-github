import React, { useState, useEffect } from "react";
import { Select, MenuItem } from "@mui/material";

export function App() {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState({});

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
        setCities(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  console.log("cities", cities);

  return (
    <div style={{ zIndex: "1", position: "absolute", width: "100vw" }}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        size="small"
        value={city}
        label="Lity"
        sx={{ minWidth: 200, background: "red" }}
        onChange={handleChange}
      >
        {cities.map((city) => (
          <MenuItem value={city.title}>{city.title}</MenuItem>
        ))}
      </Select>
    </div>
  );
}

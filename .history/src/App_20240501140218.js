import React, { useState, useEffect } from "react";
import { Select, MenuItem } from "@mui/material";

export function App() {
  const [cities, setCities] = useState([]);

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

  console.log("cities", cities);

  return (
    <div style={{ zIndex: "1", position: "absolute", width: "100vw" }}>
      <div style={{ width: "100%" }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
          //   value={age}
          label="Lity"
          // onChange={handleChange}
        >
          {cities.map((city) => (
            <MenuItem value={10}>Ten</MenuItem>
          ))}
        </Select>
      </div>
      <h1>React App</h1>
    </div>
  );
}

import { useState } from "react";
import { puppyList } from "./data.js";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  console.log(puppies);
  return (
    <>
      <div className="App">
        {featPupId && (
          <div>
            <h1>{featPupId}</h1>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                console.log("puppy", puppy.id);
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;

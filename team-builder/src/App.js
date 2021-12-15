import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Player from "./components/Player";
import React, { useState, useEffect } from "react";
import axios from "axios";

const initialFormValues = {
  name: "",
  email: "",
  age: "",
  height: "",
  role: "",
};

function App() {
  const [players, setPlayers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const SubmitForm = (evt) => {
    const newPlayer = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      age: formValues.age.trim(),
      height: formValues.height.trim(),
      role: formValues.role,
    };

    if (
      !newPlayer.name ||
      !newPlayer.email ||
      !newPlayer.role ||
      !newPlayer.age ||
      !newPlayer.height
    ) {
      setError("All fields are required");
    } else {
      setPlayers(players.concat(newPlayer));
      setFormValues(initialFormValues);
      setError("");
    }
  };
  //   } else {
  //     axios
  //       .post("fakeapi.com", newPlayer)
  //       .then((res) => {
  //         const playerFromServer = res.data;
  //         setPlayers([playerFromServer, ...players]);
  //         setFormValues(initialFormValues);
  //       })
  //       .catch((err) => console.error(err))
  //       .finally(() => setError(""));
  //   }
  // };
  // useEffect(() => {
  //   axios.get("fakeapi.com").then((res) => setPlayers(res.data));
  // }, []);

  return (
    <div className="container">
      <h1>Create Basketball Team</h1>
      <h2>{error}</h2>
      <Form values={formValues} update={updateForm} submit={SubmitForm} />
      {players.map((player, idx) => {
        return <Player key={idx} details={player} />;
      })}
    </div>
  );
}

export default App;

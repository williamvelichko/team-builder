import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Player from "./components/Player";
import React, { useState, useEffect } from "react";
import axios from "axios";

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [players, setPlayers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const SubmitForm = () => {
    const newPlayer = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    if (!newPlayer.name || !newPlayer.email || !newPlayer.role) {
      setError("All fields are required");
    } else {
      axios
        .get("fakeapi.com", newPlayer)
        .then((res) => {
          const playerFromServer = res.data;
          setPlayers([playerFromServer, ...players]);
          setFormValues(initialFormValues);
        })
        .catch((err) => console.error(err))
        .finally(() => setError(""));
    }
  };
  useEffect(() => {
    axios.get("fakeapi.com").then((res) => setPlayers(res.data));
  }, []);

  return (
    <div className="App">
      <Form values={formValues} update={updateForm} submit={SubmitForm} />
      {players.map((player) => {
        return <Player key={player.id} details={player} />;
      })}
    </div>
  );
}

export default App;

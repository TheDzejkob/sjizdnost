// src/components/Register.jsx
import React, { useState } from 'react'; // must have React imported
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registrace úspěšná!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h3>Registrace</h3>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Heslo" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Registrovat</button>
    </div>
  );
}

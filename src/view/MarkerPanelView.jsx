import React from "react";
import LoginView from "./LoginView";
import RegisterView from "./RegisterView";

export default function MarkerPanelView({ onAdd, user }) {

  const handleAdd = async () => {
    if (!user) {
      alert("Musíš být přihlášený!");
      return;
    }

    const place = prompt("Zadej místo");
    if (!place) return;

    const situation = prompt("Situace");
    if (!situation) return;

    const description = prompt("Popis");
    if (!description) return;

    await onAdd(place, situation, description);
  };

  return (
    <div style={{ width: 300, padding: 20, background: "#eee" }}>
      
      <h2>Sjízdnost silnic</h2>

      {!user && (
        <>
          <p>❌ Nepřihlášen</p>
          <LoginView />
          <RegisterView />
        </>
      )}

      {user && (
        <>
          <p>✅ Přihlášen jako: {user.email}</p>
          <button onClick={handleAdd}>Přidat marker</button>
        </>
      )}

    </div>
  );
}
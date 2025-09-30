import { useState } from "react";

export default function UserData({ name, date, setName, setDate }) {
  return (
    <>
      <div className="p-2 rounded my-2">
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          className="input my-2 w-full"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          placeholder="Selecciona tu fecha de nacimiento"
          className="input my-2 w-full"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
    </>
  );
}

import React, { useState } from "react";

interface Props {
  nombre: string; //tiene nombre independiente, evitar repetir nombre del prop
  email: string;
}

export const Input = ({ nombre, email }: Props) => {
  const [valorNombre, setValorNombre] = useState(nombre);

  const handleNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValorNombre(e.target.value);
    console.log(setValorNombre);
    console.log(valorNombre);
  };

  const [valorEmail, setValorEmail] = useState(email);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValorEmail(e.target.value);
    console.log(setValorEmail);
    console.log(valorEmail);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <span className="text-sm font-medium text-slate-700 mb-1">Nombre:</span>
        <input
          type="text"
          value={valorNombre}
          onChange={handleNombre}
          placeholder="Ingresa tu nombre"
          className="w-full px-4 py-2 border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
        ></input>
        <span className="text-sm font-medium text-slate-700 mb-1">Correo:</span>
        <input
          type="text"
          value={valorEmail}
          onChange={handleEmail}
          placeholder="Ingresa tu correo"
          className="w-full px-4 py-2 border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
        ></input>
        <div className="mt-4 text-slate-600">
          <p>📛 Nombre ingresado: {valorNombre}</p>
          <p>📧 Correo ingresado: {valorEmail}</p>
        </div>
      </div>
    </>
  );
};

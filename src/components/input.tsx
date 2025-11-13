import React, { useState } from "react";

interface Props {
  nombre: string; //tiene nombre independiente, evitar repetir nombre del prop
  email: string;
  mensaje: string;
}

export const Input = ({ nombre, email, mensaje }: Props) => {
  const [valorNombre, setValorNombre] = useState(nombre);

  const handleNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValorNombre(e.target.value);
  };

  const [valorEmail, setValorEmail] = useState(email);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValorEmail(e.target.value);
  };

  const [valorMensaje, setValorMensaje] = useState(mensaje);

  const handleMensaje = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValorNombre(e.target.value);
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
        <span className="text-sm font-medium text-slate-700 mb-1">
          Mensaje:
        </span>
        <textarea
          placeholder="Escribe aquí..."
          className="
    w-full
    max-w-2xl
    px-4
    py-2
    h-40
    text-lg
    border
    border-gray-300
    rounded-lg
    shadow-sm
    focus:outline-none
    focus:ring-2
    focus:ring-indigo-500
    transition
    duration-200
    placeholder-gray-400
    resize-none
    overflow-auto
    max-h-48
  "
        />

        <div className="mt-4 text-slate-600">
          <p>📛 Nombre ingresado: {valorNombre}</p>
          <p>📧 Correo ingresado: {valorEmail}</p>
        </div>
      </div>
    </>
  );
};

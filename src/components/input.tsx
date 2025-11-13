import React, { useState } from "react";

interface Props {
  nombre: string; //tiene nombre independiente, evitar repetir nombre del prop
}

export const Input = ({ nombre }: Props) => {
  const [valorNombre, setValorNombre] = useState(nombre);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValorNombre(e.target.value);
    console.log(setValorNombre);
    console.log(valorNombre);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <span className="text-sm font-medium text-slate-700 mb-1">Nombre</span>
        <input
          type="text"
          value={valorNombre}
          onChange={handleChange}
          placeholder="Ingresa tu nombre"
          className="w-full px-4 py-2 border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
        ></input>
      </div>
    </>
  );
};

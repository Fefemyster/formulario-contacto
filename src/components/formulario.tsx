import { Input } from "./input";
import React, { useState } from "react";

export const Formulario = () => {
  const [valorNombre, setValorNombre] = useState("");
  const [valorEmail, setValorEmail] = useState("");
  const [valorMensaje, setValorMensaje] = useState("");

  const [errorNombre, setErrorNombre] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMensaje, setErrorMensaje] = useState("");

  const handleNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    if (!valor.trim()) setErrorNombre("El nombre es obligatorio");
    else if (valor.length < 3)
      setErrorNombre("Debe tener al menos 3 caracteres");
    else setErrorNombre("");
    setValorNombre(valor);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    if (!valor.trim()) setErrorEmail("El correo es obligatorio");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor))
      setErrorEmail("Correo no válido");
    else setErrorEmail("");
    setValorEmail(valor);
  };

  const handleMensaje = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const valor = e.target.value;
    if (!valor.trim()) setErrorMensaje("El mensaje no puede estar vacío");
    else if (valor.length < 10)
      setErrorMensaje("Debe tener al menos 10 caracteres");
    else setErrorMensaje("");
    setValorMensaje(valor);
  };

  const formValido =
    !errorNombre &&
    !errorEmail &&
    !errorMensaje &&
    valorNombre &&
    valorEmail &&
    valorMensaje;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("¡Mensaje enviado correctamente!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-md"
    >
      <Input
        nombre={valorNombre}
        email={valorEmail}
        mensaje={valorMensaje}
        onNombreChange={handleNombre}
        onEmailChange={handleEmail}
        onMensajeChange={handleMensaje}
        errorNombre={errorNombre}
        errorEmail={errorEmail}
        errorMensaje={errorMensaje}
      />

      <button
        type="submit"
        disabled={!formValido}
        className={`mt-4 w-full py-2 rounded-lg text-white font-semibold transition ${
          formValido
            ? "bg-indigo-600 hover:bg-indigo-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Enviar
      </button>
    </form>
  );
};

export default Formulario;

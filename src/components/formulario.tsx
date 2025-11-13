import { Input } from "./input";
import React, { useState } from "react";

export const Formulario = () => {
  const [valorNombre, setValorNombre] = useState("nombre");

  const handleNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValorNombre(e.target.value);
  };

  const [valorEmail, setValorEmail] = useState("email");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValorEmail(e.target.value);
  };

  const [valorMensaje, setValorMensaje] = useState("mensaje");

  const handleMensaje = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValorMensaje(e.target.value);
  };

  return (
    <div>
      <Input
        nombre={valorNombre}
        email={valorEmail}
        mensaje={valorMensaje}
        onNombreChange={handleNombre}
        onEmailChange={handleEmail}
        onMensajeChange={handleMensaje}
      />
    </div>
  );
};

export default Formulario;

import { Input } from "./input";
import React, { useState } from "react";

export const Formulario = () => {
  const [valorNombre, setValorNombre] = useState("");
  const [valorEmail, setValorEmail] = useState("");
  const [valorMensaje, setValorMensaje] = useState("");

  return (
    <div>
      <Input
        nombre={valorNombre}
        email={valorEmail}
        mensaje={valorMensaje}
        onNombreChange={setValorNombre}
        onEmailChange={setValorEmail}
        onMensajeChange={setValorMensaje}
      />
    </div>
  );
};

export default Formulario;

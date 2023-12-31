import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Formulario = ({ setError }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const obtenerDato = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    if (form.name.trim().length == 0) {
      // console.log(setError);
      setError({
        error: "Debes escribir un nombre",
        color: "danger",
      });
    } else if (form.password != form.confirmPassword) {
      setError({
        error: "Las contraseñas deben ser iguales",
        color: "danger",
      });
    } else if (form.email.trim().length == 0) {
      setError({
        error: "Debes ingresar tu mail",
        color: "danger",
      });
    } else {
      setError({
        error: "Registro Exitoso!",
        color: "primary",
      });
    }
    // const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    // if (!validEmail.test(form.email)) {
    //   setError(false);
    //   setMensaje("Email incorrecto");
    return;
  };

  return (
    <Form onSubmit={submit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="name"
          placeholder="Mariana García "
          onChange={obtenerDato}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="email"
          placeholder="tuemail@email.com"
          onChange={obtenerDato}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          onChange={obtenerDato}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          name="confirmPassword"
          placeholder="Confirmar password"
          onChange={obtenerDato}
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="btn-boots">
        Registrate
      </Button>
    </Form>
  );
};

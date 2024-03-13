import React from 'react';
import './App.css';
import { useForm } from "react-hook-form";

function App() {
  
  const {register, handleSubmit} = useForm();

  const onSubmit = (e) => {
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nome:
        <input type="text" {...register("firstName")}/>
      </label>
      <label>
        Sobrenome:
        <input type="text" {...register("LastName")} />
      </label>
      <label>
        <button type="submit">Enviar</button>
      </label>
    </form>
  );
}

export default App;

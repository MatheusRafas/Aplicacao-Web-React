import React from 'react';
import './App.css';
import { useForm } from "react-hook-form";

function App() {
  
  const {register, handleSubmit, setValue, setFocus} = useForm();

  const onSubmit = (e) => {
    console.log(e);
  }

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, ''); //Remove tudo que não for valor
    console.log(cep);
    //Requisição
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      setValue('address', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('city', data.localidade);
      setValue('uf', data.uf);
      setFocus('addressNumber');
    });
  }

  return (
    <div>
      <header class='cabeca'>
        <h1>Formulário de Endereço</h1>
        <p>Informe seu CEP, para que o mesmo se autopreencha</p>
      </header>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            CEP:
            <input type="text" {...register("cep")} onBlur={checkCEP}/>
          </label>
          <label>
            Rua:
            <input type="text" {...register("address")} />
          </label>
          <label>
            Número:
            <input type="text" {...register("addressNumber")} />
          </label>
          <label>
            Bairro:
            <input type="text" {...register("neighborhood")} />
          </label>
          <label>
            Cidade:
            <input type="text" {...register("city")} />
          </label>
          <label>
            Estado:
            <input type="text" {...register("uf")} />
          </label>
          <label>
            <button type="submit">Enviar</button>
          </label>
        </form>
      </section>
    </div>
  );
}




export default App;


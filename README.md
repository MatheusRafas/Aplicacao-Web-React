# Nova Horizonte — Formulário de Cadastro

Aplicação web em React para cadastro de funcionários. O formulário reúne dados pessoais e profissionais e consulta automaticamente o endereço associado a um CEP usando a [API ViaCEP](https://viacep.com.br/).

## Contexto do projeto

Este projeto é uma versão aprimorada do repositório [Aplicacao-Web-React](https://github.com/MatheusRafas/Aplicacao-Web-React), com melhorias na organização da aplicação, correções no formulário e ajustes de responsividade e integração com a API ViaCEP.

## Por que este projeto é útil

- Centraliza informações de cadastro de funcionários em um único formulário.
- Preenche rua, bairro, cidade e estado a partir do CEP informado.
- Valida o formato básico do CEP antes de consultar a API.
- Exibe mensagens quando o CEP é inválido ou não é encontrado.
- Usa layout flexível para se adaptar a diferentes tamanhos de tela.

## Tecnologias

- React 18
- Create React App (`react-scripts`)
- React Hook Form
- CSS
- ViaCEP

## Como começar

### Pré-requisitos

- Node.js 14 ou superior
- npm

### Instalação

Clone o repositório e entre na pasta da aplicação:

```bash
git clone https://github.com/MatheusRafas/Aplicacao-Web-React.git
cd Aplicacao-Web-React/formulario
```

Instale as dependências:

```bash
npm install
```

### Executar em desenvolvimento

```bash
npm start
```

O Create React App abrirá a aplicação em [http://localhost:3000](http://localhost:3000).

No formulário, informe um CEP válido e saia do campo para iniciar a consulta. Quando a resposta for encontrada, os campos de endereço serão preenchidos automaticamente.

### Criar uma versão de produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `formulario/build`.

### Executar os testes

```bash
npm test
```

## Estrutura principal

```text
formulario/
├── public/
│   └── index.html
└── src/
    ├── components/
    │   ├── cabecalho.jsx
    │   ├── cadastroForm.jsx
    │   └── cepInput.jsx
    ├── services/
    │   └── viaCepService.js
    ├── style/
    │   ├── cabecalho.css
    │   └── cadastroForm.css
    ├── App.js
    └── index.js
```

## Manutenção e contribuições

O projeto é mantido por [MatheusRafas](https://github.com/MatheusRafas).

Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua alteração.
3. Implemente e teste a mudança dentro da pasta `formulario`.
4. Envie um pull request descrevendo o que foi alterado.

Antes de enviar a contribuição, confirme que `npm run build` e `npm test` continuam funcionando.

## Licença

Não há um arquivo de licença definido neste repositório no momento.

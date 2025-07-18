# 💈 GoBarber Web

<p align="center">
  <img src="https://img.shields.io/badge/React-16.13.1-61DAFB?style=for-the-badge&logo=react"/>
  <img src="https://img.shields.io/badge/TypeScript-3.7.2-3178C6?style=for-the-badge&logo=typescript"/>
  <img src="https://img.shields.io/badge/styled--components-5.1.0-DB7093?style=for-the-badge&logo=styled-components"/>
  <img src="https://img.shields.io/badge/Axios-0.19.2-5A29E4?style=for-the-badge&logo=axios"/>
  <img src="https://img.shields.io/badge/Yup-0.28.5-29B6F6?style=for-the-badge"/>
</p>

<div align="center">
  <b>🇧🇷 Português | <a href="#english-version">🇺🇸 English below</a></b>
</div>

---

## 📑 Sumário | Table of Contents
- [Sobre o Projeto | About](#sobre-o-projeto--about)
- [Tecnologias | Technologies](#tecnologias--technologies)
- [Estrutura | Structure](#estrutura--structure)
- [Instalação e Execução | Setup & Run](#instalação-e-execução--setup--run)
- [Autor | Author](#autor--author)

---

## Sobre o Projeto | About

**PT-BR:**
> GoBarber Web é uma aplicação web para agendamento de serviços de barbearia, desenvolvida em ReactJS com TypeScript. Permite que usuários agendem horários, visualizem seus compromissos e gerenciem seu perfil de forma prática e intuitiva.

**EN:**
> GoBarber Web is a web application for scheduling barbershop services, built with ReactJS and TypeScript. It allows users to book appointments, view their schedules, and manage their profiles easily and intuitively.

---

## 🚀 Tecnologias | Technologies

**PT-BR:**

- **ReactJS:** Biblioteca principal para construção da interface de usuário com componentes funcionais e hooks.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática, proporcionando maior segurança e produtividade no desenvolvimento.
- **Styled-components:** Permite escrever estilos CSS dentro dos componentes, com suporte a temas e escopo local.
- **Axios:** Cliente HTTP para comunicação com APIs REST.
- **Unform:** Biblioteca para manipulação de formulários de forma performática e desacoplada, com integração a validação.
- **Yup:** Validação de schemas para formulários, utilizada em conjunto com Unform.
- **React Router DOM:** Gerenciamento de rotas e navegação entre páginas da aplicação.
- **React Icons:** Biblioteca de ícones SVG para React, utilizada para enriquecer a interface.
- **React Dropzone:** Componente para upload de arquivos via drag-and-drop.
- **Polished:** Utilitários para manipulação de cores e estilos em JavaScript.
- **uuidv4:** Geração de identificadores únicos universais, usado para chaves e mensagens.

**EN:**

- **ReactJS:** Main library for building the user interface with functional components and hooks.
- **TypeScript:** JavaScript superset that adds static typing, providing more safety and productivity.
- **Styled-components:** Enables writing CSS styles within components, supporting themes and local scope.
- **Axios:** HTTP client for communicating with REST APIs.
- **Unform:** Library for performant and decoupled form handling, integrated with validation.
- **Yup:** Schema validation for forms, used together with Unform.
- **React Router DOM:** Routing and navigation management between application pages.
- **React Icons:** SVG icon library for React, used to enrich the UI.
- **React Dropzone:** Component for file uploads via drag-and-drop.
- **Polished:** Utilities for color and style manipulation in JavaScript.
- **uuidv4:** Generation of universally unique identifiers, used for keys and messages.

---

## 🗂️ Estrutura | Structure
```
GoBarber_web-2.0/
├── public/
│   ├── index.html
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── logo.svg
│   │   ├── sign-in-background.png
│   │   └── sign-up-background.png
│   ├── components/
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── ToastContainer/
│   │   └── Tooltip/
│   ├── hooks/
│   │   ├── AuthContext.tsx
│   │   ├── ToastContext.tsx
│   │   └── index.tsx
│   ├── pages/
│   │   ├── Dashboard/
│   │   ├── SignIn/
│   │   └── SignUp/
│   ├── routes/
│   │   ├── index.tsx
│   │   └── Route.tsx
│   ├── services/
│   │   └── api.ts
│   ├── styles/
│   │   └── global.ts
│   ├── utils/
│   │   └── getValidationErrors.ts
│   ├── App.tsx
│   ├── index.js
│   └── react-app-env.d.ts
├── package.json
├── tsconfig.json
├── yarn.lock
└── README.md
```

---

## ⚙️ Instalação e Execução | Setup & Run

**PT-BR:**
1. **Pré-requisitos:** Node.js 12+ e Yarn ou npm
2. **Instale as dependências:**
   ```bash
   yarn install # ou npm install
   ```
3. **Inicie a aplicação:**
   ```bash
   yarn start # ou npm start
   ```
   O app estará disponível em `http://localhost:3000`.

**EN:**
1. **Prerequisites:** Node.js 12+ and Yarn or npm
2. **Install dependencies:**
   ```bash
   yarn install # or npm install
   ```
3. **Start the application:**
   ```bash
   yarn start # or npm start
   ```
   The app will be available at `http://localhost:3000`.

---

## 👨‍💻 Autor | Author

**PT-BR:**

<div align="center">

**Rodolfo M. F. Abreu**
Desenvolvedor de software apaixonado por tecnologia, aprendizado contínuo e boas práticas de programação. Sempre em busca de novos desafios e oportunidades para colaborar em projetos inovadores.

[![GitHub](https://img.shields.io/badge/GitHub-rodolfomfabreu-black?style=for-the-badge&logo=github)](https://github.com/salamandery)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rodolfo%20Abreu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rodolfo-marques-ferreira-de-abreu/)

Sinta-se à vontade para entrar em contato para dúvidas, sugestões ou colaborações!

</div>

**EN:**

<div align="center">

**Rodolfo M. F. Abreu**
Software developer passionate about technology, continuous learning, and best programming practices. Always looking for new challenges and opportunities to collaborate on innovative projects.

[![GitHub](https://img.shields.io/badge/GitHub-rodolfomfabreu-black?style=for-the-badge&logo=github)](https://github.com/salamandery)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rodolfo%20Abreu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rodolfo-marques-ferreira-de-abreu/)

Feel free to get in touch for questions, suggestions, or collaborations!

</div>

---

<div align="center">
  <b>Feito com 💙 usando React, TypeScript e amor por código.<br/>
  Made with 💙 using React, TypeScript and love for code.</b>
</div>

---

<div align="center" id="english-version">
  <b>🇺🇸 English version above | <a href="#top">🇧🇷 Versão em português acima</a></b>
</div>
# 📝 To Do List

[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://reactjs.org/) 
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) 
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org/) 
[![styled-components](https://img.shields.io/badge/styled--components-DB7093?logo=styled-components&logoColor=white)](https://styled-components.com/) 
[![json-server](https://img.shields.io/badge/json--server-000000?logo=json&logoColor=white)](https://github.com/typicode/json-server)

Um aplicativo **To Do List** com **CRUD completo**, permitindo adicionar, visualizar, marcar como concluída e deletar tarefas.  

---

## 🚀 Funcionalidades

- Adicionar tarefas com título e descrição  
- Listar tarefas cadastradas  
- Marcar tarefas como concluídas (riscando o texto)  
- Deletar tarefas  
- Modal de boas-vindas solicitando nome do usuário  
- Validação de input para não enviar tarefa vazia  

---

## ⚡ Como Rodar

```bash
git clone https://github.com/seu-usuario/todo-list.git
cd todo-list
npm install
npx json-server --watch db.json --port 3001
npm start

# fretz-freedom
Sistema de Transportador para disciplina Projeto Integrador II

## Como rodar o projeto

_A FAZER_

## Tecnologias utilizadas

Front-end:
- [React](https://reactjs.org/) - Framework
- [Create React App](https://create-react-app.dev/) - Projeto Base
- [Axios](https://github.com/axios/axios) - Chamadas HTTP
- [Formik](https://jaredpalmer.com/formik/) - Formulários 
- [Yup](https://github.com/jquense/yup) - Validação de objetos
- [Materialize](https://materializecss.com/) - Estilização

Back-end:
- [Express](https://expressjs.com/) - Framework
- [Jest](https://jestjs.io/) - Biblioteca de Teste
- [Nodemon](https://nodemon.io/) - Hot-reload para desenvolvimento 
- [JSON Web Token](https://github.com/auth0/node-jsonwebtoken) - Autenticação JWT (Stateless)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js/) - Criptografia
- [Postgres](https://www.postgresql.org/) - Banco de dados
- [db-migrate](https://db-migrate.readthedocs.io/) - Migrações do banco

## Como contribuir

### Tarefas

Toda e qualquer alteração no código solicitada, deve ser criado uma tarefa relacionada.

- Descrever bem o propósito da tarefa, e, se necessário, adicionar protótipos, vídeos, etc.
- Adicionar labels relacionadas a tarefa
- Tarefas referente a documentação, adicionar ao projeto 'Documentação', se for desenvolvimento, projeto 'Fretz & Freedom'
- A versão e pessoa responsável das tarefas serão adicionados em conjunto pelo grupo
- A tarefa não deve ser fechada manualmente, apenas por [commits](#Fechando tarefas)

### Branches

Um branch sempre deve estar vinculado a uma tarefa e apenas uma tarefa, sendo seu nome o número da tarefa (Ex: #52)

- As alterações no branch **master** só serão feitas mediante [Pull Requests](#Pull Requests)

### Commits

- Sempre adicionar número da tarefa relacionada e uma descrição do que foi feito

  Ex:
  ```
  #52 adicionado informações sobre commits
  ```

#### Fechando tarefas

- Quando seu commit resolver a tarefa, adicionar a palavra-chave `closes` no começo do commit, e depois o número da sua tarefa a a descrição normal

  Ex:
    ```
    closes #52 ajustes de ortografia
    ```
 
#### Pull Requests

Ao finalizar uma tarefa, deve ser criado uma Pull Request para o branch **master**, adicionando o branch da tarefa como _compare_.

Após isso, adicionar uma pessoa para fazer o Review do pull request. Assim que aprovado, utilizar o método "Merge Pull Request" e deletar o branch da tarefa.
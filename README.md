# DevShowcase API - Atividade 02

API desenvolvida para a disciplina de Programação Backend, com regras de negócio avançadas, tratamento global de erros, documentação Swagger/OpenAPI, PostgreSQL em nuvem e deploy contínuo no Render.

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Zod
- Swagger / OpenAPI
- Render

## Entidades

- Profile
- Project
- Technology
- Feedback

## Relacionamentos

- Profile 1:N Project
- Project N:N Technology
- Project 1:N Feedback

## Funcionalidades

- Cadastro e consulta de perfis
- Cadastro e consulta de tecnologias
- Cadastro de projetos
- Listagem de projetos com paginação
- Filtro de projetos por tecnologia
- Cadastro de feedback com nota de 1 a 5
- Cálculo automático da nota média do projeto
- Sistema de upvotes
- Tratamento global de erros
- Respostas 400 Bad Request e 404 Not Found
- Documentação interativa com Swagger
- Banco PostgreSQL hospedado no Render
- Deploy contínuo integrado ao GitHub

## Endpoints

### Profiles

- `POST /api/profiles`
- `GET /api/profiles/:id`

### Technologies

- `POST /api/technologies`
- `GET /api/technologies`

### Projects

- `POST /api/projects`
- `GET /api/projects`
- `PUT /api/projects/:id/upvote`

Exemplo de paginação e filtro:

```text
GET /api/projects?technology=Express&page=1&limit=5
```

### Feedbacks

- `POST /api/projects/:id/feedbacks`

Exemplo de corpo da requisição:

```json
{
  "authorName": "Dawillams",
  "message": "Projeto muito bom!",
  "rating": 5
}
```

A nota deve estar entre `1` e `5`.

## Tratamento de erros

A API possui tratamento global de erros.

Exemplo de projeto inexistente:

```json
{
  "error": "Projeto não encontrado"
}
```

Status HTTP:

```text
404 Not Found
```

Exemplo de nota inválida:

```json
{
  "error": "Dados inválidos",
  "details": [
    {
      "path": ["rating"],
      "message": "A nota máxima é 5"
    }
  ]
}
```

Status HTTP:

```text
400 Bad Request
```

## API em produção

A API está publicada no Render:

```text
https://atividade-02-devshowcase-api.onrender.com
```

## Documentação Swagger

A documentação interativa está disponível em:

```text
https://atividade-02-devshowcase-api.onrender.com/api-docs
```

## Repositório

```text
https://github.com/paykuhan/atividade-02-devshowcase-api
```

## Como executar o projeto localmente

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto e configure uma conexão PostgreSQL:

```env
DATABASE_URL="postgresql://USUARIO:SENHA@SERVIDOR/BANCO"
```

> Não envie o arquivo `.env` para o GitHub.

Gere o Prisma Client:

```bash
npx prisma generate
```

Aplique as migrations:

```bash
npx prisma migrate deploy
```

Inicie a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

A API estará disponível em:

```text
http://localhost:3000
```

E o Swagger local em:

```text
http://localhost:3000/api-docs
```

## Scripts

```bash
npm run dev
```

Executa a API em modo de desenvolvimento.

```bash
npm run build
```

Gera o Prisma Client.

```bash
npm start
```

Inicia a aplicação.

```bash
npm run migrate:deploy
```

Aplica as migrations do Prisma no banco de dados.
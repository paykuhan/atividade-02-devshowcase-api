# DevShowcase API

API desenvolvida como atividade da disciplina de Programação Backend.

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- Prisma
- SQLite
- Zod

## Entidades

- Profile
- Project
- Technology
- Feedback

## Relacionamentos

- Profile 1:N Project
- Project N:N Technology
- Project 1:N Feedback

## Endpoints

### Profiles

- POST `/api/profiles`
- GET `/api/profiles/:id`

### Technologies

- POST `/api/technologies`
- GET `/api/technologies`

### Projects

- POST `/api/projects`
- GET `/api/projects`

## Como executar o projeto

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto com:

```env
DATABASE_URL="file:./dev.db"
```

Gere o Prisma Client:

```bash
npx prisma generate
```

Execute as migrations:

```bash
npx prisma migrate dev
```

Inicie a aplicação:

```bash
npm run dev
```

A API estará disponível em:

```text
http://localhost:3000
```
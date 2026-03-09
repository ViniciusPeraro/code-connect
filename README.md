# 🚀 Code Connect

**Code Connect** é uma aplicação **Full Stack com Next.js** que simula
uma plataforma de publicação e navegação de posts técnicos.

O projeto demonstra conceitos modernos de desenvolvimento como
**Server-Side Rendering, integração com banco de dados, paginação
eficiente, geração de conteúdo dinâmico e deploy em ambiente real**.

> 📚 Projeto desenvolvido durante estudos de **Next.js (Alura)**  
> 🔗 https://cursos.alura.com.br/course/next-js-conheca-framework-react  
> 🔗 https://cursos.alura.com.br/course/next-js-construa-aplicacoes-postgres-prisma

------------------------------------------------------------------------

# 🎯 Objetivo do Projeto

Construir uma aplicação que demonstra o fluxo completo de
desenvolvimento **Full Stack moderno com Next.js**, incluindo:

-   Renderização no servidor (SSR)
-   Integração com banco de dados
-   Paginação performática
-   Geração dinâmica de páginas
-   Manipulação de conteúdo Markdown
-   Deploy em ambiente real

------------------------------------------------------------------------

# 🧠 Habilidades Demonstradas

## 🏗 Arquitetura Frontend

-   Estruturação de projeto com **Next.js App Router**
-   Uso de **Server Components**
-   Rotas dinâmicas
-   Controle de estado pela URL com `searchParams`

## 🗄 Integração com Banco de Dados

-   Modelagem de dados com **Prisma ORM**
-   Integração com **PostgreSQL**
-   Paginação performática utilizando `skip` e `take`

## 📄 Conteúdo Dinâmico

-   Conversão de **Markdown → HTML**
-   Geração dinâmica de páginas
-   Renderização segura de conteúdo

## ⚡ Performance

-   Otimização de imagens com `next/image`
-   Renderização no servidor (**SSR**)
-   Queries eficientes no banco de dados

## 🔎 Observabilidade

-   Logging estruturado com **Winston**
-   Organização de logs para debugging

------------------------------------------------------------------------

# 🏗 Arquitetura da Aplicação

Next.js (Frontend + Server)\
│\
│ Prisma ORM\
▼\
PostgreSQL (Docker)

------------------------------------------------------------------------

# 🛠️ Tecnologias Utilizadas

  Tecnologia   Função
  ------------ ----------------------------
  Next.js      Framework React Full Stack
  React        Interface da aplicação
  Prisma       ORM para banco de dados
  PostgreSQL   Banco de dados relacional
  Docker       Containerização
  Remark       Conversão de Markdown
  Winston      Sistema de logging

------------------------------------------------------------------------

# 📦 Módulos Implementados

## 🔹 Infraestrutura Full Stack

-   Configuração de **PostgreSQL com Docker**
-   Setup do **Prisma ORM**
-   Modelagem de entidades
-   Execução de **migrations**

## 🔹 Prisma ORM

-   Consultas utilizando `findMany`
-   Inclusão automática de relacionamentos
-   Seed de banco com `prisma db seed`

## 🔹 Paginação no Banco

-   Implementação de paginação com `skip` e `take`
-   Integração com parâmetros da URL
-   Correção de bugs relacionados a tipagem

## 🔹 Página de Detalhe de Post

-   Query utilizando `findFirst`
-   Tratamento de erros inesperados
-   Página **404 customizada**
-   Redirecionamento no servidor

## 🔹 Sistema de Busca

-   Queries avançadas com cláusulas `WHERE`
-   Navegação baseada em filtros
-   Links dinâmicos

## 🔹 Deploy e Infraestrutura

-   Configuração de scripts de build
-   Deploy na **Vercel**
-   Integração com **PostgreSQL remoto**

------------------------------------------------------------------------

# 🚀 Como Executar o Projeto

## 1. Clonar repositório

git clone https://github.com/ViniciusPeraro/code-connect

## 2. Instalar dependências

npm install

## 3. Subir banco com Docker

docker compose up -d

## 4. Executar migrations

> npx prisma migrate dev    
> npx prisma generate  

## 5. Popular banco

npx prisma db seed

## 6. Rodar aplicação

npm run dev

------------------------------------------------------------------------

# 📚 Aprendizados

Durante o desenvolvimento deste projeto foram explorados conceitos
importantes como:

-   Arquitetura **Full Stack com Next.js**
-   Uso de **Prisma ORM**
-   Integração com **Docker**
-   Paginação performática no banco
-   Renderização híbrida (**SSR + conteúdo dinâmico**)

------------------------------------------------------------------------

# 👨‍💻 Autor

**Vinícius Peraro**\
Engenheiro de Computação focado em desenvolvimento **Full Stack e
aplicações web modernas**.

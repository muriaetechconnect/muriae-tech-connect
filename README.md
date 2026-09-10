# Muriaé Tech Connect

Este projeto é o site institucional do evento Muriaé Tech Connect, uma iniciativa voltada para conectar inovação, tecnologia, empreendedorismo e desenvolvimento regional em Muriaé, Minas Gerais.

## O que é este projeto?

O Muriaé Tech Connect é uma landing page criada para apresentar o evento de forma clara, moderna e informativa. O objetivo é reunir, em um único lugar, todas as informações importantes sobre a programação, os palestrantes, o local e os parceiros envolvidos.

## Objetivo

O projeto tem como finalidade:

- divulgar o evento para o público em geral;
- apresentar a proposta e a visão do encontro;
- destacar palestrantes, temas e programação;
- reforçar a conexão entre empresas, instituições, estudantes e gestores;
- fortalecer a identidade de inovação da cidade de Muriaé.

## Conteúdo do site

A interface apresenta seções como:

- apresentação do evento e sua proposta;
- informações sobre a programação;
- destaques dos palestrantes;
- localização e logística;
- parceiros e apoiadores.

## Tecnologias utilizadas

O projeto foi desenvolvido com:

- React
- TypeScript
- Vite
- React Icons
- ESLint

## Como executar localmente

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse a aplicação no navegador através da URL informada pelo Vite.

## Scripts disponíveis

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run test
```

## Editor local de eventos

Em desenvolvimento, acesse `/admin` para editar os eventos. O formulário valida
os dados com Zod e envia o conteúdo para o middleware `admin-events-writer` do
Vite, que grava o TypeScript formatado diretamente em `src/data/events.ts`.
Esse plugin e a rota `/admin` só são ativados com `import.meta.env.DEV`; não há
editor administrativo nem endpoint de escrita no build de produção.


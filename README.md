# Recipes

Aplicação de busca e visualização de receitas, construída para consolidar fundamentos de React e TypeScript.

🔗 **Demo:** [link após o deploy]

## Funcionalidades

- Busca de receitas por nome via API pública
- Listagem em cards com nome e imagem
- Modal de detalhes com ingredientes, medidas e modo de preparo
- Tipagem TypeScript da resposta da API

## Stack

- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- TypeScript
- [TheMealDB API](https://www.themealdb.com/api.php)

## Decisões técnicas

- Estado gerenciado com `useState`/`useEffect` (sem Redux), por ser um projeto de escopo pequeno
- Detalhe da receita exibido em modal (em vez de rota própria), para preservar o contexto da busca/lista
- Sem backend próprio: consumo direto da API pública, sem necessidade de autenticação

## Possíveis melhorias futuras

- Paginação / scroll infinito
- Loading state visual durante a busca
- Testes automatizados
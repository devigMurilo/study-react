# Mural de Estudos

Atividade prática de React.js (nível iniciante). Uma pequena aplicação onde a pessoa cadastra os assuntos que precisa estudar, marca os que já concluiu e acompanha o progresso.

Feito sem back-end, sem banco de dados e sem bibliotecas externas — tudo acontece na memória do navegador.

## Como rodar

```bash
npm install
npm run dev
```

A aplicação abre em `http://localhost:5173`.

## Conceitos praticados

- JSX e componentes
- Props (incluindo funções passadas como prop)
- `useState` e imutabilidade de estado
- Eventos (`onClick` / `onChange`)
- Input controlado e formulário (`onSubmit`)
- Renderização de listas com `.map()` e `key`
- Renderização condicional
- Import/export de módulos

## Funcionalidades

- Cabeçalho com título e subtítulo recebidos via props.
- Lista de assuntos renderizada a partir de um array de estado, um cartão por assunto.
- Marcar um assunto como concluído/reaberto.
- Adicionar novo assunto por um formulário controlado.
- Remover um assunto da lista.
- Mensagem de "Nenhum assunto cadastrado ainda." quando a lista está vazia.
- Contador de assuntos concluídos, calculado a partir do estado.

## Estrutura

```
src/
├── App.jsx
├── App.css
├── main.jsx
└── components/
    ├── Cabecalho.jsx
    ├── FormularioAssunto.jsx
    ├── ListaAssuntos.jsx
    └── CardAssunto.jsx
```

## O que achei mais difícil

<!-- TODO: escreva aqui, com suas palavras, qual parte da atividade foi mais desafiadora e por quê. -->

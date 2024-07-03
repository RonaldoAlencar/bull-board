# Bull Board Dashboard

Este projeto implementa um dashboard usando Bull e BullMQ para fila de tarefas no Node.js, integrado com o Bull-Board.

## Estrutura do Projeto

- `src/config/bull-config.ts`: Configuração principal do Bull Board.
- `src/index.ts`: Inicialização do servidor Express e adaptação do Bull Board ao servidor.

## Pré-requisitos

- Node.js (>= 14.x)
- Redis Server (>= 5.x)

## Instalação

1. Clone este repositório:

    ```sh
    git clone https://github.com/RonaldoAlencar/bull-board.git
    cd bull-board
    ```

2. Instale as dependências:

    ```sh
    npm install
    ```

3. Configure as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto com as seguintes configurações:

    ```sh
    APP_PORT=3232
    REDIS_HOST=localhost
    REDIS_PORT=6379
    REDIS_PASSWORD=sua_senha
    ```

## Uso

Inicie o servidor:

```sh
npm start
```

Acesse o dashboard em `http://localhost:3232`.

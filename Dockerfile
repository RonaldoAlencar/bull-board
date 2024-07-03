# Etapa de construção
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instalar dependências de produção primeiro
RUN npm install --only=production

# Instalar dependências de desenvolvimento
RUN npm install

# Copiar o código fonte para o contêiner
COPY . .

# Compilar o TypeScript
RUN npm run build

# Etapa de execução
FROM node:20-alpine

WORKDIR /app

# Copiar apenas os arquivos necessários da etapa de construção
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Configurar variáveis de ambiente
ENV NODE_ENV=production

# Expor a porta que a aplicação usará
EXPOSE 3232

# Comando para iniciar a aplicação
CMD ["node", "dist/index.js"]

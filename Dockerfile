#imagem base Node.js para alpine
FROM node:18.17.21-alpine

#diretório de trabalho
WORKDIR /usr/src/dev-space-ui

# Instalação pacotes necessários para o Alpine Linux
RUN apk add --update git \
  && rm -rf /var/cache/apk/*

# Copia arquivos .json do diretório local para o diretório de trabalho no contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos para o diretório de trabalho no contêiner
COPY . .

# Exponha a porta que sua aplicação vai escutar
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["npm", "start"]
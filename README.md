# Linguagem TypeScript
- Utilizando os recursos do TypeScript compiler;
- Unindo o paradigma orientado a objetos ao funcional;
- Aplicando recursos do ECMASCRIPT 6;
- Utilizando a biblioteca do Jquery;
- Utilizando o Type Definitions;
- Utilizando os padrões de projeto reais.
## Infraestrutura básica do projeto:
- O compilador do TypeScript precisa da plataforma Node.js instalada para poder funcionar;
- É necessário no mínimo o Node.js em sua versão 6.X ou versões superiores pares!. Não instale versões ímpares do Node.js,
pois não são LTS!**
## Versão do Node já instalada:
- No terminal, digite node -v;
## Instalação do Node.js no Linux (Ubuntu):
- Através do terminal (permissão de administrador necessária) execute o comando: sudo apt-get install -y nodejs
- OBSERVAÇÃO: Para algumas distribuições do Linux, poderá existir um conflito de nomes quando o Node é instalado pelo apt-get.
Se isso ocorrer especificamente, no lugar do binário ser node, ele passa a se chamar nodejs. Isso gerará problemas,
pois desta forma, o comando 'npm start' não funcionará, pois ela procura o binário node e não nodejs. Para resolver no Ubuntu: sudo ln -s /usr/bin/nodejs /usr/bin/nodes
## Instalação Node.js no Windows:
- https://nodejs.org/en/
- OBSERVAÇÃO: Não troque a pasta padrão do Node.js durante a instalação.
## Projeto - alrbank
### Funcionalidade:
- Controle de negociações;
### Execução:
- No projeto, executar 'npm start';
- No Browser, será aberto automaticamente a pagina rodando no http://localhost:3000/, como servidor da aplicação.
### api:
- #### Execução:
- Na pasta api, rode no terminal o comando 'npm start'.
- #### enpoint: http://localhost:8080/dados;
- Utilizando o botão 'importa'.

# Smart Shop API

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Smart Shop Logo" />
</p>

## Descrição

API de e-commerce construída com NestJS, oferecendo uma solução completa para gerenciamento de produtos, categorias e vendas online.

## Funcionalidades

- ✨ Gerenciamento de produtos
- 📂 Gerenciamento de categorias
- 🛒 Carrinho de compras (em desenvolvimento)
- 👥 Autenticação de usuários (em desenvolvimento)
- 💳 Processamento de pagamentos (em desenvolvimento)
- 📦 Controle de estoque
- 📊 Relatórios e análises (em desenvolvimento)

## Tecnologias Utilizadas

- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Swagger/OpenAPI

## Pré-requisitos

- Node.js (v18 ou superior)
- PostgreSQL
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/smart-shop.git
cd smart-shop
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

## Executando a Aplicação

```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run start:prod
```

## Documentação da API

Após iniciar a aplicação, acesse:
- http://localhost:3000/docs

A documentação completa da API está disponível através do Swagger.

## Endpoints Principais

### Produtos
- GET /products - Lista todos os produtos
- GET /products/:id - Obtém um produto específico
- POST /products - Cria um novo produto
- PATCH /products/:id - Atualiza um produto
- DELETE /products/:id - Remove um produto

### Categorias
- GET /categories - Lista todas as categorias
- GET /categories/:id - Obtém uma categoria específica
- POST /categories - Cria uma nova categoria
- PATCH /categories/:id - Atualiza uma categoria
- DELETE /categories/:id - Remove uma categoria

## Testes

```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Crie um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

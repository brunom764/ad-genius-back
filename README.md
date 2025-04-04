# AdGenius - BackEnd

Backend do sistema AdGenius, uma plataforma inteligente para geração e gerenciamento de anúncios.

# Documentação

A documentação completa da API está disponível através do Swagger UI quando o servidor estiver em execução:
```
http://localhost:3000/api
```

# Features

- 🔐 Autenticação e Autorização
- 🤖 Integração com OpenAI para geração de conteúdo
- 📊 Gerenciamento de campanhas publicitárias
- 🔄 Agendamento automático de tarefas
- 📱 Integração com Firebase
- 🗄️ Banco de dados com Prisma ORM
- 📝 Documentação automática com Swagger
- 🔍 Validação de dados com class-validator
- ⚡ Hot-reload para desenvolvimento

## Contributing

Contribuições para o AdGenius são muito bem-vindas! Se você gostaria de contribuir, siga estas instruções:

1. Faça um fork do repositório;
2. Crie sua branch de funcionalidade (`git checkout -b feature/SuaFeature`);
3. Adicione suas alterações (`git add .`);
3. Faça commits das suas alterações (`git commit -m 'Adicionando uma funcionalidade'`);
4. Faça push para a branch (`git push origin feature/SuaFeature`);
5. Crie um novo Pull Request.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run start:dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Dependecies

	@nestjs/common: 10.2.8,
	@nestjs/config: 3.1.1,
	@nestjs/core: 10.2.8,
	@nestjs/cli: 10.2.1,
	@nestjs/platform-express: 10.2.8,
	@nestjs/schedule: 4.0.1,
	@nestjs/swagger: 7.3.0,
	@prisma/client: 5.6.0,
	axios: 1.6.2,
	class-transformer: 0.5.1,
	class-validator: 0.14.0,
	dotenv: 16.3.1,
	firebase-admin: 11.11.1,
	openai: 4.25.0,
	prisma: 5.6.0,
	reflect-metadata: 0.1.13,
	rxjs: 7.8.1

# Links

- [Documentação da API](http://localhost:3000/api)
- [Repositório Frontend](https://github.com/seu-usuario/ad-genius-front)
- [Documentação do NestJS](https://docs.nestjs.com/)
- [Documentação do Prisma](https://www.prisma.io/docs/)
- [Documentação do OpenAI](https://platform.openai.com/docs/)

# Estrutura do Projeto

```
src/
├── config/                 # Configurações do projeto
│   ├── firebase.config.ts  # Configuração do Firebase
│   ├── openai.config.ts    # Configuração da OpenAI
│   └── swagger.config.ts   # Configuração do Swagger
│
├── modules/               # Módulos da aplicação
│   ├── auth/             # Módulo de autenticação
│   │   ├── controllers/  # Controladores de autenticação
│   │   ├── services/     # Serviços de autenticação
│   │   ├── dto/         # Data Transfer Objects
│   │   └── guards/      # Guards de autenticação
│   │
│   ├── campaigns/        # Módulo de campanhas
│   │   ├── controllers/  # Controladores de campanhas
│   │   ├── services/     # Serviços de campanhas
│   │   ├── dto/         # Data Transfer Objects
│   │   └── entities/    # Entidades de campanhas
│   │
│   └── ads/             # Módulo de anúncios
│       ├── controllers/  # Controladores de anúncios
│       ├── services/     # Serviços de anúncios
│       ├── dto/         # Data Transfer Objects
│       └── entities/    # Entidades de anúncios
│
├── prisma/              # Configuração do Prisma
│   ├── schema.prisma    # Schema do banco de dados
│   └── migrations/      # Migrações do banco
│
├── shared/              # Código compartilhado
│   ├── decorators/      # Decorators personalizados
│   ├── filters/         # Filtros de exceção
│   ├── interfaces/      # Interfaces compartilhadas
│   ├── middlewares/     # Middlewares
│   └── utils/          # Funções utilitárias
│
├── app.module.ts        # Módulo principal da aplicação
└── main.ts             # Ponto de entrada da aplicação
```

Cada módulo segue a arquitetura em camadas do NestJS, com separação clara de responsabilidades:

- **Controllers**: Responsáveis por lidar com as requisições HTTP
- **Services**: Contêm a lógica de negócios
- **DTOs**: Definem a estrutura dos dados de entrada/saída
- **Entities**: Representam as entidades do banco de dados
- **Guards**: Protegem as rotas e recursos
- **Interfaces**: Definem contratos e tipos

# Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DATABASE_URL="sua_url_do_banco"
OPENAI_API_KEY="sua_chave_da_openai"
FIREBASE_PROJECT_ID="seu_project_id"
FIREBASE_PRIVATE_KEY="sua_private_key"
FIREBASE_CLIENT_EMAIL="seu_client_email"
```

# Scripts Disponíveis

Além dos scripts mencionados acima, temos:

```bash
# Gera o cliente Prisma
npm run prisma:generate

# Executa as migrações do banco de dados
npm run prisma:migrate

# Inicia o Prisma Studio (interface visual do banco)
npm run prisma:studio
```
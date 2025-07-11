# 🎮 Pokémon Wiki

Uma aplicação web moderna e interativa para explorar o mundo dos Pokémons, construída com Angular 20 e integrada com a [PokéAPI](https://pokeapi.co/).

![Angular](https://img.shields.io/badge/Angular-20.0.5-red)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue)
![SCSS](https://img.shields.io/badge/SCSS-Styling-pink)
![PokéAPI](https://img.shields.io/badge/PokéAPI-Integration-yellow)

## ✨ Funcionalidades

- 🔍 **Busca de Pokémons** - Pesquise qualquer Pokémon pelo nome
- 🎨 **Design Moderno** - Interface elegante com glassmorphism e animações fluidas
- ⚡ **Animações Interativas** - Cards com efeitos hover e brilho infinito
- 🏷️ **Sistema de Tipos** - Visualização colorida dos tipos de Pokémon
- 📱 **Responsivo** - Funciona perfeitamente em desktop e mobile
- 🚀 **Performance** - Otimizado com Fetch API e lazy loading

## 🛠️ Tecnologias Utilizadas

- **Framework**: Angular 20.0.5
- **Linguagem**: TypeScript
- **Estilização**: SCSS com design system personalizado
- **API**: PokéAPI (https://pokeapi.co/)
- **Ícones**: Material Icons
- **HTTP Client**: Angular HttpClient com Fetch API

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)
- [Angular CLI](https://angular.dev/tools/cli) (versão 20 ou superior)

```bash
# Instalar Angular CLI globalmente
npm install -g @angular/cli
```

## 🚀 Como Baixar e Instalar

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/pokemon-wiki.git
cd pokemon-wiki
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure o ambiente** (opcional)
   - Os arquivos de ambiente já estão configurados para usar a PokéAPI
   - Localização: `src/environments/`

## 🏃‍♂️ Como Executar

### Servidor de Desenvolvimento

Para iniciar o servidor local de desenvolvimento:

```bash
ng serve
```

A aplicação estará disponível em `http://localhost:4200/`. A página recarregará automaticamente sempre que você modificar os arquivos fonte.

### Build para Produção

Para criar uma build otimizada para produção:

```bash
ng build
```

Os arquivos compilados serão armazenados no diretório `dist/`. A build de produção otimiza automaticamente a aplicação para performance e velocidade.

## 🎯 Como Usar

1. **Página Inicial**: Ao abrir a aplicação, você verá o Pikachu como Pokémon padrão
2. **Buscar Pokémon**:
   - Digite o nome do Pokémon no campo de busca
   - Pressione Enter ou clique no botão "Buscar"
   - Aguarde o carregamento dos dados
3. **Interagir com o Card**:
   - Passe o mouse sobre o card para ver as animações
   - Observe os tipos do Pokémon com cores específicas
   - Aproveite o efeito de brilho infinito no hover

## 🎨 Design System

O projeto utiliza um design system personalizado com:

- **Paleta de Cores**: Azul (#3367B0) e Amarelo (#FFCC04) inspirados no Pokémon
- **Tipografia**: Roboto com diferentes pesos e tamanhos
- **Espaçamento**: Sistema consistente baseado em múltiplos de 0.25rem
- **Animações**: Transições suaves e efeitos visuais modernos
- **Glassmorphism**: Efeitos de vidro fosco e backdrop-filter

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── model/           # Interfaces TypeScript
│   ├── modules/         # Módulos da aplicação
│   │   └── home/        # Página principal
│   ├── services/        # Serviços (PokemonService)
│   └── shared/          # Componentes reutilizáveis
│       ├── button/      # Componente de botão
│       ├── card/        # Card do Pokémon
│       └── input/       # Campo de entrada
├── environments/        # Configurações de ambiente
└── styles.scss         # Estilos globais
```

## 🔧 Scripts Disponíveis

```bash
npm start          # Inicia o servidor de desenvolvimento
npm run build      # Cria build de produção
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

- [PokéAPI](https://pokeapi.co/) - API gratuita e fantástica dos Pokémons
- [Angular Team](https://angular.dev/) - Framework incrível
- [Material Design](https://material.io/) - Sistema de ícones

---

**Desenvolvido com ❤️ e ☕**

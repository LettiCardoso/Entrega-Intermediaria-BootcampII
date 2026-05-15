# FocusFlow Web ⏱️

O **FocusFlow** é uma aplicação web pura desenvolvida para ajudar estudantes a organizarem a sua rotina de estudos e manterem o foco. A aplicação conta com um cronômetro de produtividade e consome uma API externa pública para exibir frases motivacionais personalizadas quando o foco é iniciado.

Este projeto foi desenvolvido como atividade para a **Entrega Intermediária do Bootcamp II**.

## 🚀 Tecnologias Utilizadas

- **Front-end:** HTML5, CSS3 (Customizado), JavaScript (ES6+)
- **Framework Visual:** Bootstrap 5.3.2 (via CDN)
- **Animações e Ícones:** AOS (Animate On Scroll), Font Awesome 6.5.1
- **Testes de Integração:** Cypress 15.15.0+
- **Ambiente de Desenvolvimento:** Node.js v18+ & GitHub Codespaces

## 📦 Dependências e Instalação

Para clonar o projeto e instalar as dependências de desenvolvimento (Cypress e servidores locais), execute no seu terminal:

```bash
# Clonar o repositório
git clone [https://github.com/LettiCardoso/Entrega-Intermediaria-BootcampII.git]

# Entrar na pasta do projeto
cd Entrega-Intermediaria-BootcampII

# Instalar as dependências do Node.js (Cypress e ferramentas auxiliares)
npm install
```


## 📂 Estrutura do Projeto

A organização dos arquivos segue uma separação clara entre o código-fonte da aplicação front-end e a infraestrutura de testes automatizados e integração contínua (CI):

```text
Entrega-Intermediaria-BootcampII/
├── .github/
│   └── workflows/
│       └── ci.yml             # Pipeline de Integração Contínua (GitHub Actions)
├── cypress/
│   └── e2e/
│       └── focusflow.spec.js  # Script de teste de integração (Cypress)
├── FocusFlow/
│   ├── index.html             # Interface estrutural do aplicativo web
│   ├── script.js              # Lógica do cronômetro e consumo da API externa
│   └── style.css              # Estilizações customizadas da aplicação
├── .gitignore                 # Arquivo para impedir o envio de node_modules
├── cypress.config.js          # Arquivo de configuração de ambiente do Cypress
├── package.json               # Gerenciador de dependências e scripts do projeto
└── README.md                  # Documentação oficial do repositório
```
## 🧪 Como Executar os Testes de Integração
Caso o seu ambiente local permita a simulação de tela em segundo plano, você pode rodar os testes executando:
````
Bash 
----
npx cypress run

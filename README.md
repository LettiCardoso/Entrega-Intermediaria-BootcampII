## 🌍 Deploy
A aplicação está oficialmente publicada e pode ser acessada publicamente através do link do GitHub Pages abaixo:

### 🔗 Acessar o FocusFlow Web em Produção
[![Focus Flow](https://img.shields.io/badge/-GitHub%20Pages-blue)](https://letticardoso.github.io/Entrega-Intermediaria-BootcampII/FocusFlow/)



# FocusFlow Web ⏱️

O **FocusFlow** é uma aplicação web interativa focada em produtividade, projetada para ajudar estudantes e profissionais a organizarem seus ciclos de estudo e manterem o foco. A aplicação conta com um cronômetro no estilo Pomodoro e integra-se a uma API pública externa para fornecer frases motivacionais dinâmicas sempre que um novo ciclo de foco é iniciado.

Este projeto foi consolidado como artefato de entrega para a **Entrega Intermediária do Bootcamp II**.

---

## 📂 Estrutura do Projeto

A organização dos arquivos segue uma separação clara entre o código-fonte da aplicação front-end, a infraestrutura de testes automatizados e as configurações de integração contínua (CI):

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
├── .gitignore                 # Arquivo para impedir o envio de node_modules ao GitHub
├── cypress.config.js          # Arquivo de configuração de ambiente do Cypress
├── package.json               # Gerenciador de dependências e scripts do projeto
└── README.md                  # Documentação oficial do repositório
```
## 🚀 Tecnologias e Recursos Utilizados
Estruturação e Estilo: **HTML5** e **CSS3** customizado.

Framework Visual: **Bootstrap 5.3.2 via CDN** para garantir total responsividade.

Componentes Visuais: **Font Awesome 6.5.1** para ícones e **AOS (Animate On Scroll)** para animações de interface.

Lógica e Integração: **JavaScript Assíncrono (Fetch API)** consumindo uma **API REST** de frases randômicas.

Automação de Testes: **Cypress 15.15.0+**.

Integração Contínua (CI): **GitHub Actions.**

## 📦 Dependências e Instalação
Para clonar o projeto e instalar o ambiente de testes na sua máquina ou ambiente virtual, execute os passos abaixo no terminal:
```text
Clonar o Repositório:

Bash
git clone [https://github.com/LettiCardoso/Entrega-Intermediaria-BootcampII.git](https://github.com/LettiCardoso/Entrega-Intermediaria-BootcampII.git)
Acessar o Diretório do Projeto:

-Bash
cd Entrega-Intermediaria-BootcampII
Instalar Dependências de Desenvolvimento:

-Bash
npm install
```

## 🧪 Como Executar os Testes de Integração

O status das execuções e os logs completos do Cypress podem ser visualizados na aba Actions do repositório. ✅

Opção 2: Execução Local (Modo Headless)
Caso o seu sistema operacional ou container local possua suporte a renderização de janelas ou servidor virtual configurado, você pode disparar os testes via terminal executando:
```text
-Bash
npx cypress run
```

## 🛠️ Como Utilizar a Aplicação

#### 1. Inicie a aplicação web usando um servidor de arquivos locais (como a extensão Live Server do VS Code).

#### 2. No campo "O que vamos estudar agora?", digite o nome da tarefa que pretende realizar.

#### 3. Clique no botão Iniciar.

O cronômetro iniciará a contagem regressiva tradicional de 25 minutos, o status mudará imediatamente para "Foco Ativo!" e uma frase motivacional inédita aparecerá na base do cartão, capturada em tempo real da API externa.

Use o botão Parar caso precise interromper o ciclo antes do tempo.



---

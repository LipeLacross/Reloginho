## 🌐 [English Version of README](README_EN.md)

# Reloginho

O Reloginho é um jogo interativo onde o jogador aposta em qual "hora" o ponteiro de um relógio customizável irá parar. O número de horas no relógio é ajustável, e quanto mais horas o jogador escolher, maior será a dificuldade, mas também maior será o retorno da aposta.

## 🔨 Funcionalidades do Projeto

- **Escolha do número de horas**: O jogador pode escolher entre 6, 12, 24 e 60 horas para configurar o relógio, com multiplicadores de ganhos diferentes para cada escolha.
- **Aposta em uma hora específica**: O jogador pode selecionar uma hora específica onde acredita que o ponteiro irá parar.
- **Giro do ponteiro**: O ponteiro do relógio gira e para em uma hora aleatória, criando suspense e uma experiência interativa.
- **Resultado e bonificações**: Se o ponteiro parar na hora escolhida, o jogador ganha uma quantia baseada no multiplicador do relógio configurado.

### Exemplo Visual do Projeto

![chrome-capture-2024-10-21](https://github.com/user-attachments/assets/7fa18891-2c73-4070-a0cc-0a7a7917984d)

## ✔️ Técnicas e Tecnologias Utilizadas

- **React**: Framework JavaScript para a construção da interface interativa.
- **Phaser.js**: Biblioteca usada para criar e animar o relógio e o ponteiro.
- **Howler.js**: Biblioteca para controlar os sons de efeitos no jogo.
- **Bulma CSS**: Framework CSS para estilização responsiva.
- **HTML5 e CSS3**: Estrutura e estilização do projeto.

## 📁 Estrutura do Projeto

- **public/**
    - **favicon.ico**: Ícone do site.
    - **index.html**: Arquivo HTML principal.
    - **logo192.png** / **logo512.png**: Logos do aplicativo.
    - **lose.mp3**: Efeito sonoro para quando o jogador perde.
    - **manifest.json**: Configurações para PWA.
    - **robots.txt**: Arquivo para otimização de SEO.
    - **spin.mp3**: Efeito sonoro para o giro do ponteiro.
    - **win.mp3**: Efeito sonoro para quando o jogador ganha.
- **src/**
    - **App.css**: Estilos gerais do aplicativo.
    - **App.js**: Componente principal que controla a lógica e a interface do jogo.
    - **App.test.js**: Testes do componente principal.
    - **ClockGame.js**: Componente que renderiza o relógio e controla a animação do ponteiro.
    - **index.css**: Estilos globais importando Bulma CSS.
    - **index.js**: Ponto de entrada principal do React.
    - **logo.svg**: Logo em SVG.
    - **reportWebVitals.js**: Arquivo para medir a performance do app.
    - **setupTests.js**: Configuração inicial para testes com Jest.

## 🛠️ Abrir e rodar o projeto

Para iniciar o projeto localmente, siga os passos abaixo:

1. **Certifique-se de que o Node.js está instalado**:
    - O [Node.js](https://nodejs.org/) é necessário para rodar o projeto. Você pode verificar se já o tem instalado com:
      ```bash
      node -v
      ```
    - Se não estiver instalado, baixe e instale a versão recomendada.

2. **Clone o Repositório**:
    - Copie a URL do repositório e execute o comando abaixo no terminal:
      ```bash
      git clone <URL_DO_REPOSITORIO>
      ```

3. **Instale as dependências**:
    - Navegue até o diretório do projeto e execute:
      ```bash
      npm install
      ```

4. **Inicie o projeto**:
    - Após a instalação, inicie o servidor de desenvolvimento com:
      ```bash
      npm start
      ```

O projeto estará disponível em `http://localhost:3000`.

## 🌐 Deploy

O projeto pode ser facilmente hospedado em plataformas como [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/), que oferecem suporte a projetos React e integração simples com repositórios Git.

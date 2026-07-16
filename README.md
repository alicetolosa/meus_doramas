# 🎬 Meus Doramas 

<p align="center">
✨ Interface interativa estilo streaming com carrossel dinâmico de doramas utilizando HTML, CSS e JavaScript
</p>

---
Este é um projeto pessoal que evoluiu de um carrossel clássico de slides para uma **plataforma interativa de catálogo de doramas favoritos**. 

A aplicação agora simula a experiência de grandes serviços de streaming, permitindo que o usuário navegue por uma lista horizontal e clique em qualquer título para atualizar instantaneamente o banner principal de destaque (Hero) com sinopse, nota e dados técnicos, sem recarregar a página.

---
## 📸 Preview
<img src="assets/images/meus_doramas.gif" width="900">

---

## 🎯 Funcionalidades

* 📱 **Interface Moderna & Imersiva:** Estética escura focada nas imagens das produções 
* 🔄 **Destaque Interativo (Troca de Banner):** Ao clicar em qualquer card do carrossel, o banner do topo atualiza dinamicamente as informações com uma transição suave.
* ⏭️ **Carrossel Horizontal:** Navegação fluida por botões de avançar e voltar nas listas de doramas.
* 📂 **Banco de Dados Desacoplado (`data.js`):** Toda a lista de doramas fica isolada em um arquivo de dados, facilitando a inclusão de novos títulos com apenas uma linha de código.
* 📖 **Página Sobre Física:** Uma seção dedicada a explicar o projeto, totalmente integrada ao design principal.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica e acessível.
* **CSS3:** Variáveis globais de cores, Flexbox para o carrossel infinito e transições suaves.
* **JavaScript (ES6):** Manipulação dinâmica do DOM, controle dos botões de navegação e reatividade ao clique do usuário.

---

## 🧩 Estrutura do Projeto

O projeto foi reestruturado de forma modular para manter o código limpo e escalável:

```bash
📦 projeto-meus-doramas
 ┣ 📂 assets
 ┃ ┗ 📂 images          # Pôsteres, backgrounds e o GIF de Preview
 ┣ 📂 css
 ┃ ┗ 📜 style.css       # Estilização global e variáveis
 ┣ 📂 js
 ┃ ┣ 📜 data.js         # Nosso "Banco de dados" com os dados dos doramas
 ┃ ┗ 📜 script.js       # Motor de interatividade e controle do DOM
 ┣ 📜 index.html        # Página principal (Dashboard de Doramas)
 ┗ 📜 sobre.html        # Página sobre o projeto

---
##🛠️ Em Construção 
📂 - NavBar : Coleções, Favoritos 
📂 - Input type : Buscar dorama
📂 - Minha Lista 
📂 - Categorias: Romance, Comédia, Drama, Ação, Suspense, Fantasia, Ver todas
---

## 👩‍💻 Autora

Feito por **Alice de Oliveira Tolosa**

🔗 GitHub: https://github.com/alicetolosa

🔗 LinkedIn: https://www.linkedin.com/in/alice-oliveira81/

🔗 Portfolio : https://alicetolosa-portfolio.vercel.app/




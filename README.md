# Collage-journal

## 📖 Sobre o projeto

O **Collage-journal** é um projeto desenvolvido para a disciplina de Desenvolvimento Web com a proposta de explorar o conceito de **journal digital**.

Um journal pode assumir diferentes formas: um diário, bullet journal, registro de memórias ou uma composição visual formada por textos, imagens e outros elementos.

A proposta do Collage-journal é levar essa experiência para o ambiente digital, combinando a liberdade visual das colagens com a praticidade e a flexibilidade de uma interface web.

O projeto é composto por três páginas principais:

- **Home:** apresenta o conceito de journal e a proposta do Collage-journal.
- **Como funciona:** apresenta, de forma objetiva, um passo a passo para criar uma página de journal.
- **Criar:** permite ao usuário montar uma composição utilizando textos e imagens pré-disponibilizadas e salvar sua criação em formato PNG.

---

## 🎯 Objetivo

Criar uma experiência web responsiva e visualmente diferenciada, utilizando recursos de desenvolvimento front-end para representar a estética de um journal e de uma colagem digital.

O projeto também busca explorar a integração entre estrutura HTML, estilização CSS, componentes do Bootstrap e interações desenvolvidas com JavaScript.

---

## 🛠️ Tecnologias

### 🧱 HTML5

Utilizado para estruturar o conteúdo, os componentes e as páginas do projeto.

### 🎨 CSS3

Responsável pela identidade visual e pela personalização da interface, incluindo cores, tipografia, espaçamentos, layouts, bordas, texturas e responsividade.

### 🅱️ Bootstrap 5.3.3

Utilizado como apoio na construção da interface, responsividade, formulários, navegação e componentes interativos.

#### Recursos utilizados

- **Navbar:** utilizada para a navegação entre as páginas do projeto.
- **Navbar Collapse:** responsável pelo comportamento do menu em telas menores, permitindo que a navegação seja recolhida em dispositivos móveis.
- **Container / Container-fluid:** utilizados para organizar os conteúdos e controlar a largura das áreas da interface.
- **Grid System:** utilizado para organizar os elementos da interface e adaptar sua disposição de acordo com o tamanho da tela. Na página **Criar**, o grid divide a área de ferramentas da área de composição.
- **Buttons:** utilizados nas ações de navegação e nas principais interações da interface.
- **Form Controls:** utilizados nos campos de formulário, como o nome da página e a descrição de um problema.
- **Modal:** utilizado no formulário de relatório de problemas, permitindo que o usuário abra o formulário sobre a página atual sem precisar navegar para outra página.
- **Alert:** utilizado para informar ao usuário que o relato de problema foi enviado com sucesso.
- **Spinner:** utilizado durante o processo de salvamento da composição, indicando visualmente que a página está sendo processada.

### 🟨 JavaScript

Responsável pelas interações e funcionalidades dinâmicas do projeto.

Na página **Criar**, é utilizado para controlar o editor da composição, incluindo:

- Adição de textos ao canvas;
- Adição de imagens;
- Seleção de elementos;
- Movimentação dos elementos pelo canvas;
- Remoção de elementos;
- Salvamento da composição em formato PNG;
- Controle do estado de carregamento durante o salvamento.

Também é utilizado para controlar o formulário de relatório de problemas, exibindo a confirmação de envio e limpando o formulário ao fechar o modal.

### 🧩 Bootstrap Icons

Utilizado para adicionar ícones à interface, como o ícone de identificação de problemas no botão de relatório.

---

## 📚 Contexto acadêmico

Projeto desenvolvido para a disciplina de **Desenvolvimento Web**, com foco em HTML5, CSS3, Bootstrap, responsividade e JavaScript.

O projeto parte da proposta de desenvolver uma página web responsiva e criativa, utilizando recursos do Bootstrap em conjunto com uma identidade visual própria e interações desenvolvidas em JavaScript.
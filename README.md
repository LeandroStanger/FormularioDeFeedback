# 📝 Formulário de Feedback

[![GitHub Pages](https://img.shields.io/badge/🌐-Site%20Online-blue?style=for-the-badge)](https://leandrostanger.github.io/FormularioDeFeedback/)
[![GitHub](https://img.shields.io/badge/📂-Repositório-black?style=for-the-badge)](https://github.com/LeandroStanger/FormularioDeFeedback)

Um formulário de feedback interativo e responsivo, desenvolvido para coletar opiniões e avaliações de usuários de forma eficiente e amigável.

## ✨ Funcionalidades

- **📋 Formulário Completo:** Campos para nome, email, tipo de feedback e mensagem
- **⭐ Sistema de Avaliação:** Classificação por estrelas ou escala numérica
- **✅ Validação em Tempo Real:** Verificação instantânea dos dados inseridos
- **🎨 Design Moderno:** Interface limpa e profissional
- **📱 Layout Responsivo:** Funciona perfeitamente em todos os dispositivos
- **💾 Armazenamento Local:** Salva os dados no navegador (localStorage)
- **📤 Simulação de Envio:** Processo de envio com feedback visual
- **🔄 Mensagens de Confirmação:** Alertas de sucesso e erro

## 🚀 Como Usar

### Acesso Online
Acesse o formulário diretamente:  
**[https://leandrostanger.github.io/FormularioDeFeedback/](https://leandrostanger.github.io/FormularioDeFeedback/)**

### Utilização do Formulário

1. **Preencha os Campos:**
   - Informe seu nome e email
   - Selecione o tipo de feedback
   - Escolha uma avaliação (estrelas ou escala)
   - Escreva sua mensagem detalhada

2. **Validação:**
   - O sistema verifica automaticamente os dados
   - Mensagens indicam campos obrigatórios ou inválidos

3. **Envio:**
   - Clique no botão de enviar
   - Receba confirmação do envio bem-sucedido

## 💻 Execução Local

```bash
# Clone o repositório
git clone https://github.com/LeandroStanger/FormularioDeFeedback.git

# Acesse a pasta do projeto
cd FormularioDeFeedback

# Abra o arquivo index.html no navegador
# Ou use um servidor local:
python -m http.server 8000
# ou
npx http-server
```

## 🛠 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica do formulário
- **CSS3** - Estilização moderna e responsiva
- **JavaScript (ES6+)** - Validação e interatividade
- **Local Storage API** - Armazenamento de dados local
- **GitHub Pages** - Hospedagem

## 📁 Estrutura do Projeto

```
FormularioDeFeedback/
├── index.html              # Página principal do formulário
├── style.css               # Estilos e design responsivo
├── script.js               # Lógica de validação e interação
└── README.md               # Documentação
```

## 🎯 Campos do Formulário

- **Informações Pessoais:**
  - Nome completo (obrigatório)
  - Email (validação de formato)

- **Tipo de Feedback:**
  - Sugestão
  - Problema técnico
  - Elogio
  - Outro

- **Avaliação:**
  - Sistema de estrelas (1-5)
  - Ou escala numérica

- **Mensagem:**
  - Campo de texto para detalhamento
  - Contador de caracteres

## 🔧 Validações Implementadas

- **Campos Obrigatórios:** Verificação de preenchimento
- **Formato de Email:** Validação de email válido
- **Tamanho de Mensagem:** Limites mínimos e máximos
- **Feedback Visual:** Indicadores de campo válido/inválido

## 👨‍💻 Autor

**Leandro Stanger**  
- GitHub: [@LeandroStanger](https://github.com/LeandroStanger)
- Projeto: [Formulário de Feedback](https://github.com/LeandroStanger/FormularioDeFeedback)

---

**⭐ Se este projeto foi útil para você, deixe uma estrela no repositório!**

---

*Projeto desenvolvido para demonstrar boas práticas em criação de formulários web com validação e experiência do usuário otimizada.*

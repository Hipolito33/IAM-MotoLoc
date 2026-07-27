# IAM MotoLoc

> Sistema de Gestão de Locação de Motocicletas

## 📖 Sobre o projeto

O IAM MotoLoc é um sistema web desenvolvido para auxiliar no gerenciamento de uma empresa de aluguel de motocicletas.

O objetivo é centralizar as operações administrativas da empresa em um único sistema, facilitando o cadastro de clientes, motos, contratos e documentos, além do controle financeiro e operacional.

O projeto está sendo desenvolvido de forma incremental, permitindo sua evolução conforme novas tecnologias são aprendidas e novas necessidades surgem.

A primeira versão será executada **localmente**, sem necessidade de hospedagem, domínio ou serviços em nuvem.

---

## 🎯 Objetivos

* Gerenciar clientes
* Gerenciar motos
* Gerenciar contratos
* Armazenar documentos
* Controlar disponibilidade das motos
* Controlar quilometragem das motos
* Facilitar o trabalho dos funcionários
* Reduzir controles feitos em papel ou planilhas
* Centralizar informações administrativas da empresa

---

## 👥 Público-alvo

O sistema será utilizado apenas internamente.

Perfis previstos:

* Administrador
* Funcionário

O cliente final (locador) não terá acesso ao sistema nesta primeira versão.

---

## 🚀 Tecnologias

### Primeira fase

* HTML
* CSS
* JavaScript
* Node.js
* Express

### Próximas fases

* Fetch API
* Prisma ORM
* SQLite
* Upload de arquivos
* Autenticação
* Dashboard
* Deploy

---

## 🗄️ Persistência de dados

A primeira versão do IAM MotoLoc será executada localmente, sem necessidade de hospedagem ou serviços em nuvem.

Para persistência dos dados, será utilizado:

* Prisma ORM
* SQLite

O banco de dados será armazenado localmente no computador durante a fase de desenvolvimento.

Futuramente, conforme o sistema evoluir, poderá ser realizada a migração para um banco de dados de produção e uma infraestrutura online.

---

## 📌 Funcionalidades previstas

### Clientes

* Cadastro
* Edição
* Exclusão
* Pesquisa
* Dados de contato
* Informações relacionadas à CNH

### Motos

* Cadastro
* Edição
* Exclusão
* Pesquisa
* Controle de disponibilidade
* Marca
* Modelo
* Ano
* Placa
* Chassi
* Cor
* Cilindrada
* Quilometragem
* Status operacional

### Contratos

* Cadastro
* Atualização
* Finalização
* Cancelamento
* Data de início
* Data de devolução
* Valor da locação
* Valor da caução
* Upload do contrato em PDF

### Devolução da moto

Durante a devolução, o funcionário informará a quilometragem final da moto.

O sistema deverá:

* Registrar a quilometragem final
* Calcular a quilometragem percorrida
* Atualizar automaticamente a quilometragem atual da moto
* Finalizar o contrato
* Alterar o status da moto para disponível

A quilometragem não deverá ser alterada manualmente no cadastro da moto durante o uso normal do sistema.

### Dashboard

* Quantidade de motos disponíveis
* Quantidade de motos alugadas
* Motos em manutenção
* Contratos ativos
* Contratos vencendo
* Receita
* Informações operacionais

---

## 📈 Roadmap

### Estrutura e API

* [ ] Estrutura inicial do projeto
* [ ] CRUD de Clientes
* [ ] CRUD de Motos
* [ ] CRUD de Contratos
* [ ] Regras de negócio

### Banco de dados

* [ ] Prisma
* [ ] SQLite
* [ ] Modelagem das entidades
* [ ] Persistência dos dados

### Front-end

* [ ] Interface HTML/CSS
* [ ] Integração Front-end
* [ ] Fetch API
* [ ] Formulários
* [ ] Dashboard

### Funcionalidades adicionais

* [ ] Upload de Arquivos
* [ ] Login
* [ ] Controle de acesso
* [ ] Relatórios

### Produção

* [ ] Testes
* [ ] Deploy
* [ ] Banco de dados de produção
* [ ] Infraestrutura online

---

## 📚 Objetivo de aprendizado

Este projeto também faz parte da minha jornada de estudos em desenvolvimento backend.

Cada funcionalidade será implementada conforme novos conceitos forem aprendidos, buscando sempre aplicar o conhecimento em um sistema real.

O projeto tem como objetivo unir **aprendizado, prática e desenvolvimento de uma solução para uma necessidade real**, permitindo que sua arquitetura evolua gradualmente conforme novas tecnologias e requisitos sejam incorporados.

---

## 🏗️ Arquitetura

O projeto será desenvolvido de forma modular, buscando separar responsabilidades entre:

* Rotas
* Controllers
* Models
* Dados
* Configuração da aplicação

A arquitetura poderá evoluir conforme novas necessidades surgirem.

---

## 📄 Licença

Projeto em desenvolvimento.

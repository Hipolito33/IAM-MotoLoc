# Regras de Negócio

## Motos

* Uma moto não pode possuir dois contratos ativos.
* Moto em manutenção não pode ser alugada.
* Moto inativa não aparece para novas locações.

---

## Clientes

* Cliente deve possuir CNH válida.
* Cliente inadimplente não pode gerar nova locação.
* CPF não pode ser duplicado.

---

## Contratos

* Todo contrato deve possuir um cliente.
* Todo contrato deve possuir uma moto.
* O contrato poderá existir antes do upload do PDF.
* Após assinatura, o PDF poderá ser anexado.
* Apenas contratos ativos ocupam uma moto.

---

## Usuários

Administrador:

* acesso total

Funcionário:

* cadastro
* edição
* consulta

Não poderá:

* excluir funcionários
* acessar configurações críticas

---

## Documentos

Todos os documentos deverão permanecer vinculados ao contrato correspondente.

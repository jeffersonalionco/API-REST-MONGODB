


#### Inicializar o projeto

- Para rodar o projeto apenas:
`npm run start`

- Para desenvolvedores:
`npm run dev`

---

---


## FUNÇÃO BANCO DE DADOS

#### ROTA PARA CADASTRAR UM NOVO USUÁRIO

| TIPO  | ROTA                         | O QUE SE ESPERA                                            |
|-------|------------------------------|-----------------------------------------------------------|
| POST  | `/api/users/register`         | JSON: `{ "name": String, "email": String, "password": String, "sexo": String, "telefone": String }` |

#### ROTA PARA EDITAR UM USUÁRIO

| TIPO  | ROTA                         | O QUE SE ESPERA                                            |
|-------|------------------------------|-----------------------------------------------------------|
| POST  | `/api/users/editar`           | JSON: `{ "email": String (referência no banco), "name": String, "newEmail": String, "password": String, "sexo": String, "telefone": String }` |

#### ROTA PARA DELETAR UM USUÁRIO

| TIPO  | ROTA                         | O QUE SE ESPERA                                            |
|-------|------------------------------|-----------------------------------------------------------|
| POST  | `/api/users/deletar`          | JSON: `{ "email": String }`                               |

#### ROTA PARA BUSCAR DADOS DO USUARIO

| TIPO  | ROTA                         | O QUE SE ESPERA                                            |
|-------|------------------------------|-----------------------------------------------------------|
| POST  | `/api/users/userQuery`          | JSON: `{ "email": String }`                               |



---

## FUNÇÃO DE INVENTARIO

#### ROTA PARA CRIAR UM INVENTARIO

| TIPO  | ROTA                         | O QUE SE ESPERA                                            |
|-------|------------------------------|-----------------------------------------------------------|
| POST  | `/api/inventory/createInventary`| JSON: `{ "usuarioId": String, "items": [ { "nomeItem": String, "quatidade": Number}] }`                                |

#### ROTA PARA BUSCAR DADOS INVENTARIO

| TIPO  | ROTA                         | O QUE SE ESPERA                                            |
|-------|------------------------------|-----------------------------------------------------------|
| POST  | `/api/inventory/searchInventary` | JSON: `{ "idWhatsapp" : String }`                                |



---

## FUNÇÃO DE CONVERSÃO

#### ROTA PARA CONVERTER TEXTO EM ÁUDIO USANDO O GOOGLE TEXT-TO-SPEECH

| TIPO  | ROTA                         | O QUE SE ESPERA                                            |
|-------|------------------------------|-----------------------------------------------------------|
| POST  | `/aapi/text-to-speech/convert`| JSON: `{ "text": String }`                                |

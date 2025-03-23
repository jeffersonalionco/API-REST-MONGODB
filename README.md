```md
# Inicializar o Projeto

Para rodar o projeto:
```sh
npm run start
```

Para desenvolvedores:
```sh
npm run dev
```

## Configuração do Ambiente

Crie ou edite seu arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DB_URL=ADD-ULR-E-PORTA-DO-SEU-BANCO-MONGODB
PORT=PORTA-QUE-VAI-RODAR-ESTA-API
```

---

# Função Banco de Dados

## Rotas de Usuário

### Cadastrar um Novo Usuário
**Tipo:** `POST`  
**Rota:** `/api/users/register`  
**JSON esperado:**
```json
{
  "name": "String",
  "email": "String",
  "password": "String",
  "sexo": "String",
  "telefone": "String"
}
```

### Editar um Usuário
**Tipo:** `POST`  
**Rota:** `/api/users/editar`  
**JSON esperado:**
```json
{
  "email": "String",  
  "name": "String",  
  "newEmail": "String",  
  "password": "String",  
  "sexo": "String",  
  "telefone": "String"
}
```

### Deletar um Usuário
**Tipo:** `POST`  
**Rota:** `/api/users/deletar`  
**JSON esperado:**
```json
{
  "email": "String"
}
```

### Buscar Dados de um Usuário
**Tipo:** `POST`  
**Rota:** `/api/users/userQuery`  
**JSON esperado:**
```json
{
  "email": "String"
}
```

---

# Função de Inventário

## Rotas de Inventário

### Criar um Inventário
**Tipo:** `POST`  
**Rota:** `/api/inventory/createInventary`  
**JSON esperado:**
```json
{
  "usuarioId": "String",
  "items": [
    {
      "idItem": "String",
      "nomeItem": "String",
      "quantidade": "Number",
      "xp": "Number",
      "dano": "Number",
      "defesa": "Number"
    }
  ]
}
```

### Buscar Dados do Inventário
**Tipo:** `POST`  
**Rota:** `/api/inventory/searchInventary`  
**JSON esperado:**
```json
{
  "idWhatsapp": "String"
}
```

### Atualizar Dados de um Item
**Tipo:** `PATCH`  
**Rota:** `/api/inventory/updateItemInvetary/:idWhatsapp/item/:idItem`  
**JSON esperado:**
```json
{
  "xp": "Number"
}
```

---

# Função de Conversão

## Rota para Converter Texto em Áudio

### Converter Texto para Áudio (Google Text-to-Speech)
**Tipo:** `POST`  
**Rota:** `/api/text-to-speech/convert`  
**JSON esperado:**
```json
{
  "text": "String"
}
```
```


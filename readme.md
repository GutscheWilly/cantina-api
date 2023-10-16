# Cantina API

## Endpoints

### User

* Create user - POST - http://localhost:3333/users/create

```
{
  "name":     "user",
  "email":    "user@gmail.com",
  "login":    "user1234",
  "cpf":      "05803777729",
  "password": "12345678"
}

O email, o login e o cpf são únicos para cada usuário.
```

* Login user - POST - http://localhost:3333/users/login

```
{
  "login":    "user1234",
  "password": "12345678"
}
```

* Delete user - DELETE - http://localhost:3333/users/{id}/delete

```
Substituir {id} pelo ID do usuário.
```

* Update user - PUT - http://localhost:3333/users/{id}/update

```
{
  "name":     "new-name",
  "password": "new-password"
}

Substituir {id} pelo ID do usuário.
"name" e "password" são opcionais no body.
```

* Transaction - PUT - http://localhost:3333/users/{id}/transaction

```
{
  "value": 100
}

Substituir {id} pelo ID do usuário.
```

### Student

* Create student - POST - http://localhost:3333/students/create

```
{
  "registration":  "164008",
  "class":         "1-A",
  "spendingLimit": 30,
  "school":        "Unifesp",
  "userId":        14
}

Um estudante sempre deve estar associado a um único usuário, e vice-versa.
Substitua o "userId" pelo ID do usuário.
```

* Update student - PUT - http://localhost:3333/students/{id}/update

```
{
  "registration":  "164008",
  "class":         "1-C",
  "spendingLimit": 40,
  "school":        "unifesp"
}

Substitua o {id} pelo ID do estudante.
Todos os atributos do body são opcionais.
```

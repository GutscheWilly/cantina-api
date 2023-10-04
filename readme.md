# Cantina API

## Endpoints

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
  "name": "new-name",
  "password": "new-password"
}

Substituir {id} pelo ID do usuário.
"name" e "password" são opcionais no body.
```

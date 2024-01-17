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

O atributo "login" pode ser de fato o login ou o email.
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

### Order

* Create order - POST - http://localhost:3333/orders/create

```
{
  "status":     "preparation",
  "pickupTime": "12h",
  "userId":     14
}

Todo pedido deve estar associado a um usuário pelo "userId".
```

* Get all orders by user id - GET - http://localhost:3333/orders/getAll/{userId}

```
Substitua {userId} pelo ID do usuário.
```

### Product

* Create product - POST - http://localhost:3333/products/create

```
{
  "name":        "coxinha",
  "description": "salgado",
  "price":       6,
  "calories":    300,
  "servingSize": 50
}
```

### Order-Product

* Create order-product - POST - http://localhost:3333/order-product/create

```
{
  "orderId":   1,
  "productId": 2,
  "quantity":  8
}

É necessário relacionar o "orderId" e o "productId" para adicionar produtos únicos ao pedido.
Essa associação pode ocorrer somente uma vez. 
Então, sua quantidade é dada pelo atributo "quantity".
```

### Product Restriction

* Create - POST - http://localhost:3333/product-restriction/create

```
{
  "studentId": 3,
  "productId": 1
}
```

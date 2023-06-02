## DeliveryApp_Task

This is an API for managing of products list.
Application written using node.js, express, mongodb, mognoose.

### Команди:
- `npm start` &mdash; старт сервера в режимі production
- `npm run dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок

## Frontend Part: [https://github.com/Aleksayshn/rest-api-delivery](https://github.com/Aleksayshn/DeliveryApp)

## Methods and endpoints

Below there is despcrition and demostation of using appropriate methods and endpoints

### GET /api/categories

Response expects list of categoriesShops with following fields:

```javascript
[{
id: "6450bfdd49d07ac0498a188c",
categoryName: "Example",
description: "Example",
categoryImage: "https://static.vecteezy.com/system/resources/previews/002/199/002/non",
}, {}, ]
```

#### Code description

200 - OK

### GET /api/categories/:id

Response expects a categoryShop with requested id:

```javascript
{
id: "6450bfdd49d07ac0498a188c",
categoryName: "Example",
description: "Example",
categoryImage: "https://static.vecteezy.com/system/resources/previews/002/199/002/non",
}
```

#### Code description

200 - OK

404 - Category with "id" ID is not found

### POST /api/products

Body of request:

```javascript
{
    _id: "Example",
    title: "example",
    description: "example",
    image: "https://images.unsplash.com/photo-1656038005237-8a2ba5f6f0c9?ixlib=rb-…",
    price: "767",
    discounted_price:"269",
    category_name: "Coffee Shop",
    category: "IND",
    availability: true,
    delivery_time: "6",
    rating: "4.2"}
```

#### Code description

201 - Created

400 - Bad request

### PUT /api/products/:id

Body of request:

```javascript
{
    name: "ExampleUPD",
    email: "exampleUPD@someemail.com",
    phone: "666-666-666"
}
```

#### Code description

200 - OK

400 - Bad request

404 - Not found

### PATCH /api/user/order/

Body of request:

```javascript
    {  paymentId: "fake_payment_id",
   totalAmount: 1637,
   orderDate: "Thu Jun 01 2023 20:47:39",
   deliveryAddress: {},
   cart: {}
   }
```

Response:

```javascript
{ orders: [
    {  paymentId: "fake_payment_id",
   totalAmount: 1637,
   orderDate: "Thu Jun 01 2023 20:47:39",
   deliveryAddress: {},
   cart: {},}
   ]
}
```

#### Code description

200 - OK

400 - Bad request

404 - Not found


### Other errors

404 - Page is not found (non-existing endpoint)

500 - Server error

The code snippet above sets up the authentication routes for user registration, login, and logout. It uses the appropriate controller methods from ../../controllers and middleware functions from ../../middlewares to handle the requests.

When a user registers with the /signup endpoint, the authValidation middleware validates the request body, and if successful, the ctrl.signUp method is called to register the user in the system. If the registration is successful, a JSON response with a status code of 201 is returned, including the registered user's email and avatarURL.

When a user logs in with the /login endpoint, the loginValidation middleware validates the request body, and if successful, the ctrl.signIn method is called to authenticate the user. If the authentication is successful, a JSON response with a status code of 200 is returned, including a token and user information (firstName, lastName, email, avatarURL).

When a user logs out with the /logout endpoint, the authorizationCheck middleware checks if the user is authorized (authenticated with a token), and if so, the ctrl.logOut method is called to log out the user.

The appropriate status codes and JSON responses are returned based on the success or failure of the registration, login, and logout processes.

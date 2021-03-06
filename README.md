# auth-adonis

Boilerplate/Starter Project for building RESTful APIs using Adonis, SQLite, JWT authentication.

## Setup

Clone the repo then install dependencies :

```bash
npm install
```

Create .env file :

```bash
cp .env.example .env
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Start

Run the following command to start the HTTP server (dev mode).

```bash
npm run dev
```

### API

Register

```bash
POST /api/v1/auth/register
{email: 'youremail@gmail.com', password: 'yourpasswod'}
```

Sign-In

```bash
POST /api/v1/auth/sign-in
{email: 'youremail@gmail.com', password: 'yourpasswod'}
```

Refresh the token

```bash
POST /api/v1/auth/token/refresh
{refresh_token:'REFRESH_TOKEN'}
```

Get the current user

```bash
GET /api/v1/user/me
Authorization : Bearer YOUR_TOKEN
```

Logout

```bash
POST /api/v1/auth/logout
{refresh_token:'REFRESH_TOKEN'}
```

Product -> Download Product from Resource JDS

```bash
GET /api/v1/products/download
Authorization : Bearer YOUR_TOKEN
```

Product -> Get One Dollar to IDR from API

```bash
GET /api/v1/products/currency
Authorization : Bearer YOUR_TOKEN
```

Product -> Get All Data

```bash
GET /api/v1/products/all
Authorization : Bearer YOUR_TOKEN
```

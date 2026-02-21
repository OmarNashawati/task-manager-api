# API DOC ![badge](https://img.shields.io/badge/Version-V1-blue)

## Auth Routes

### POST /auth/register

1. Authentication (none)
2. Headers (none)
3. Query params (none)
4. path params (none)
5. body

```sh
  {
    name: string (required)
    email: string (required)
    password: string (required)
  }
```

6. response

### POST /auth/login

1. Authentication (none)
2. Headers (none)
3. Query params (none)
4. path params (none)
5. body

```sh
  {
    email: string (required)
    password: string (required)
  }
```

6. response

### DELETE /auth/logout

1. Authentication (none)
2. Headers (none)
3. Query params (none)
4. path params (none)
5. body (none)
6. response

## Tasks Routes

### GET /tasks

1. Authentication (none)
2. Headers (none)
3. Query params (none)
   - status (string, optional, enum:[to-do, done])
4. path params (none)
5. body (none)
6. response

### POST /tasks

1. Authentication (none)
2. Headers (none)
3. Query params (none)
4. path params (none)
5. body

```sh
{
  task: string (required)
}
```

6. response

### PATCH /tasks/:id

1. Authentication (none)
2. Headers (none)
3. Query params (none)
4. path params
   - id (string, required) _task id_
5. body (none)

```sh
{
  complted: boolean (required)
}
```

6. response

### DELETE /tasks/:id

1. Authentication (none)
2. Headers (none)
3. Query params (none)
4. path params
   - id (string, required) _task id_

5. body (none)
6. response

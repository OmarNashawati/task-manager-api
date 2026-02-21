### USER Schema

```sh
{
  name (string)
  email (string)
  password (string)
}
```

### Task Schema

```sh
  task (string)
  status (string, enum ["done","to-do"])
  user_id (string)
```

---
title: Webapplicaties IV
link: https://robinmalfait.com/2de-jaar/semester-II/Webapplicaties-IV.md
---

# Inleiding

2 HTTP requests: `GET` & `POST`

`doGet()` en `doPost()`

Methodes die aangeroepen worden:

- `init()`
- `service()`
- `destroy()`


# 2. Een request

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Handling an HTTP Get Request</title>
</head>
<body>
    <form action="welcome1" method="get">
        <p>Druk op de knop</p>
        <input type="submit" value="Request...">
    </form>
</body>
</html>
```

```java
import javax.servlet.*;
import javax.servlet.http.*;

@WebServlet(name="WelcomeServlet", urlPatterns={"/welcome1"})
public class WelcomeServlet extends HttpServlet {

}
```

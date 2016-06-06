---
title: Webapplicaties IV
link: https://robinmalfait.com/2de-jaar/semester-II/Webapplicaties-IV.md
---

# Basics

## JSP

```html
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<!-- Imports -->
<%@page import="java.util.Date" %>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="refresh" content="1"/> <!-- Refesh each second -->
        <title></title>
    </head>
    <body>
        <!-- JSP Expression to insert date/time -->
        <% out.print(new java.util.Date()) %>

        <!-- Without out.print -->
        <%= new java.util.Date() %>

        <!-- Because of the import -->
        <%= new Date() %>
    </body>
</html>
```

## Expression Language (EL)


### Using scripting

```html
<!DOCTYPE html>
<html>
    <body>
        <% domain.Circle circle = (domain.Circle) request.getAttribute('circle') %>
        Radius of the circle is: <%= circle.getRadius() %>
    </body>
</html>
```

### Using EL

```html
<!DOCTYPE html>
<html>
    <body>
        Radius of the circle is: ${circle.radius}
    </body>
</html>
```

### Arrays

```html
<!DOCTYPE html>
<html>
    <body>
        Colors are: ${colorList}
        First color is: ${colorList[0]}
    </body>
</html>
```

### Includes

```html
<!DOCTYPE html>
<html>
    <body>
        <jsp:iclude page="header.jsp"/>
        JSP Page...
        <jsp:iclude page="footer.jsp"/>
    </body>
</html>
```

### Includes with params

#### header.jsp

```html
<h2>${param.title}</h2>
```

#### yourPage.jsp

```html
<!DOCTYPE html>
<html>
    <body>
        <jsp:include pae="../WEB-INF/header.jsp">
            <jsp:param name="title" value="this is the header" />
        </jsp:include>
        JSP Page...
    </body>
</html>
```

### Redirects/Forwards

### Using scripting

```html
<!DOCTYPE html>
<html>
    <body>
        Welcome to our page!
        <% if(request.getParameter("userName") == null) { %>
            <jsp:forward page="HandleIt.jsp"/>
        <% } %>

        Hello ${param.userName}
    </body>
</html>
```

#### Using more JSTL

```html
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <body>
        Welcome to our page!
        <c:if test="${empty param.userName}">
            <jsp:forward page="HandleIt.jsp"/>
        </c:if>

        Hello ${param.userName}
    </body>
</html>
```

## JSTL

> JSP Standard Tag Library

- **Core** Library `<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>`
    - <c:out>
    - <c:set>
    - <c:remove>
    - <c:catch>
    - <c:if>
    - <c:choose>
    - <c:when>
    - <c:otherwise>
    - <c:import>
    - <c:url>
    - <c:redirect>
    - <c:param>
    - <c:forEach>
    - <c:forEachToken>

- **Formatting** Library `<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>`
    - **Internationalization**
        - <fmt:message>
        - <fmt:setLocale>
        - <fmt:bundle>
        - <fmt:setBundle>
        - <fmt:param>
        - <fmt:requestEncoding>
    - **Formatting**
        - <fmt:timeZone>
        - <fmt:setTimeZone>
        - <fmt:formatNumber>
        - <fmt:parseNumber>
        - <fmt:parseDate>

### <c:forEach>

```html
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <body>
        <c:forEach var="color" items="${colorArray}">
            ${color}
        </c:forEach>

        <c:forEach var="color" items="${colorArray}" varStatus="index">
            ${index} ${color}
        </c:forEach>
    </body>
</html>
```

### <c:if>

```html
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <body>
        <p>Comments:</p>
        <p>${commentList}</p>

        <c:if test="${userType == 'student'}">
            <jsp:include page="inputComments.jspf"/>
        </c:if>
    </body>
</html>
```

### <c:choose>, <c:when> and <c:otherwise>

- `c:choose` -> `switch`
- `c:when` -> `case`
- `c:otherwise` -> `default`

```html
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <body>
        <c:choose>
            <c:when test="${userType == 'student'}">
                <jsp:include page="inputComments.jspf"/>
            </c:when>
            <c:when test="${userType == 'professor'}">
                Professor
            </c:when>
            <c:otherwise>Person</c:otherwise>
        </c:choose>
    </body>
</html>
```

### <c:import>

```html
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <body>
        <c:import url="http://rbn.nu/"/>
    </body>
</html>
```

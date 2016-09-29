---
title: Databanken III
link: http://robinmalfait.com/3de-jaar/semester-I/Databanken-III.md
---

[Chamilo](https://chamilo.hogent.be/index.php?application=Chamilo%5CApplication%5CWeblcms&go=CourseViewer&course=24073)

# PL/SQL

## Declaring Variables


 > [PLSQL_S02.pdf (slide 4)](https://chamilo.hogent.be/Chamilo/Libraries/Resources/Javascript/Plugin/PDFJS/web/viewer.html?file=https%3A%2F%2Fchamilo.hogent.be%2Findex.php%3Fapplication%3DChamilo%255CCore%255CRepository%26go%3DDocumentDownloader%26object%3D2324755%26security_code%3Dcd2eef88de93087b0ce1a30d474493615d9a311b%26display%3D1)

```plsql
DECLARE
    v_emp_hiredate  DATE;
    v_emp_deptno    NUMBER(2) NOT NULL := 10;
    v_location      VARCHAR2(13) := 'Atlanta';
    c_comm          CONTANT NUMBER := 1400;
```

> **INTEGER** of **NUMBER**, **INT** bestaat niet, gebruik altijd **NUMBER**

[concatenatie](https://chamilo.hogent.be/Chamilo/Libraries/Resources/Javascript/Plugin/PDFJS/web/viewer.html?file=https%3A%2F%2Fchamilo.hogent.be%2Findex.php%3Fapplication%3DChamilo%255CCore%255CRepository%26go%3DDocumentDownloader%26object%3D2324755%26security_code%3Dcd2eef88de93087b0ce1a30d474493615d9a311b%26display%3D1)

```plsql
DECLARE
    v_myname VARCHAR2(20);
BEGIN
    DBMS_OUTPUT.PUT_LINE('My Name is: '||v_myname); -- || is concatenatie
END;
```

## Percentage Type

[%TYPE Attribute](https://chamilo.hogent.be/Chamilo/Libraries/Resources/Javascript/Plugin/PDFJS/web/viewer.html?file=https%3A%2F%2Fchamilo.hogent.be%2Findex.php%3Fapplication%3DChamilo%255CCore%255CRepository%26go%3DDocumentDownloader%26object%3D2324755%26security_code%3Dcd2eef88de93087b0ce1a30d474493615d9a311b%26display%3D1)

```
DECLARE 
    v_emp_salary myemps.emp_salary%TYPE
```

> **%TYPE** neemt het type van de tabel over

# NoSQL

> Not Only SQL

**ACID** wordt niet ondersteund.

- Atomicity: transactie wordt in zijn geheel of niet uitgevoerd
- Consistency: na elke transactie is het consistente data
- Isolation: transacties worden gescheiden, en storen elkaar niet
- Durability: permanent in het systeem

[Verschillen](https://chamilo.hogent.be/Chamilo/Libraries/Resources/Javascript/Plugin/PDFJS/web/viewer.html?file=https%3A%2F%2Fchamilo.hogent.be%2Findex.php%3Fapplication%3DChamilo%255CCore%255CRepository%26go%3DDocumentDownloader%26object%3D2324763%26security_code%3Db1440de5314a3c89018318f07643470d441fa279%26display%3D1)

## Impedence Mismatch

> **Impedence mismatch**: object opdelen in brokken om te persisteren

## 4 Soorten NoSQL databases

- Key Value stores
- Document database (mongodb)
- Column family
- Graph Db's

### Type 1 

- Redis

### Type 2

- MongoDB
- CoudhDB

#### Aggregate oriented

> Bestaat uit meerdere stukken

### Type 3

- cassandra

## CAP

- Consistency
- Availability
- Partitioning 
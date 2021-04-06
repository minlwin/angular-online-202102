# API Projects

Heare is the place of API projects to test angular http client lessons. These projects are build by spring boots technology. 

### Requirements
1. JDK 11
2. Maven

You need to install JDK 11 and Maven to your machine. Add Maven to path and make sure to run mvn command in your machine.

```
# Change Directory to Project root folder
cd [project root]

# Maven Update
mvn clean install -U

# Run Spring Boots Application
mvn spring-boot:run
```

## Location API

This api serve administrative states informations of Myanmar.
1. States represent state and regions
2. Districts are belong to a State
3. Townships are belong to a District

## Balance API

We will learn HTTP Request Methods by this api. This api is design for Incomes and Expenses registration. There are three major Resource Entities, which are
1. Category
2. Balance
3. BalanceDetails

And also this api has two major endpoints. Which are
1. Category API (CRUD Operations for Category Resource)
2. Balance API (CRUD Operations for Balance and Balance Details Resources)

## Photo Now API

We will learn File Upload and Image representation with this API. This api is design for Photo Sharing Social Application. But this application doesn't have security implementations as this api is intended for learning File Upload. Secure Photo Now API will contain security, after learning JWT Token base Security.
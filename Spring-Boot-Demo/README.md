Demo "hello world" RESTful web service with Spring.

It will accept HTTP GET requests at:
http://localhost:8080/greeting => {"id":1,"content":"Hello, World!"}

We can also pass the name parameter which overides the default value "World"
http://localhost:8080/greeting?name=User => {"id":1,"content":"Hello, User!"}
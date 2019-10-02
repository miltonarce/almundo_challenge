# Challenge Almundo Frontend Developer

# Frontend
App en angular 8

- Hacer un npm install sobre la carpeta front

- Para correr la aplicación de frontend Angular se debe correr el comando ng serve sobre front pra levantar el server y/o ng build para hacer el build de la app.

El frontend estara levantado en http://localhost:4200/

# Backend
- Hacer un npm install sobre la carpeta back

- Para levantar la api se debe correr "npm start" sobre back, esto levantara un watch de TSC y luego en otro cmd sobre back correr "npm watch" para compilar los bundles.

- Para acceder a Swagger acceder por /api/api-docs

El backend estara levantado en 
URL - Base: http://localhost:3001/api/
URL - Status: http://localhost:3001/api/api-status
URL - Swagger doc: http://localhost:3001/api/api-docs 
URL - Get all hotels: http://localhost:3001/api/hotels
URL - Ejemplo get con filtros: http://localhost:3001/api/hotels?name=Hotel&stars[]=2
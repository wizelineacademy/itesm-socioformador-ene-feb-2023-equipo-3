# Wizeline-OS-AI-Tools
El alcance de este proyecto tiene como finalidad simplificar y agilizar el proceso de creación de perfiles de colaboradores dentro Wizeline. Para lograrlo, se utiliza la extracción de datos de LinkedIn y/o de su currículum, con el fin de llenar la información inicial del perfil. Asimismo, se implementó un sistema de sugerencias usando inteligencia artificial para mejorar las descripciones de los colaboradores.

<details open>
<summary>
 Features
</summary> <br />

<p align="center">
<img width="49%" alt="slide1" src="https://github.com/wizelineacademy/itesm-socioformador-ene-feb-2023-equipo-3/assets/74677482/179a878a-4dc3-472e-8afe-d6eca4ef240f">

  <img width="49%" alt="slide2" src="https://github.com/wizelineacademy/itesm-socioformador-ene-feb-2023-equipo-3/assets/74677482/6a3807b4-4eb2-4bdd-92c9-1c2934e17e81">

</p>

<p align="center">
  <img width="49%" alt="slide3" src="https://github.com/wizelineacademy/itesm-socioformador-ene-feb-2023-equipo-3/assets/74677482/3f4328cb-e285-42db-84b8-9249596c63b1">

  <img width="49%" alt="slide4" src="https://github.com/wizelineacademy/itesm-socioformador-ene-feb-2023-equipo-3/assets/74677482/815abc6d-faa3-4887-b239-c324ba070784">

</p> 
    
</details>

## Stack
- Deployment [Lightsail](https://aws.amazon.com/lightsail/)
- Database Deployment [RDS](https://aws.amazon.com/es/rds/)
- Database [Postgres](https://postgresql.org)
- [GitHub Actions](https://github.com/features/actions) para CI
- NextAuth Authentication [Next.js](https://next-auth.js.org)
- ORM [Prisma](https://prisma.io)
- API [chat-GPT-3.5-Turbo](https://platform.openai.com/docs/introduction)
- API [LinkedIn Profile Scraper API](https://www.scrapingdog.com/linkedin-scraper-api)
- Python [PDF2Image](https://pypi.org/project/pdf2image/) [Pytesseract](https://pypi.org/project/pytesseract/)
- End-to-end testing [Cypress](https://cypress.io)
- Unit testing [Cypress](https://cypress.io)
- Code formatting [Prettier](https://prettier.io)
- Linting [ESLint](https://eslint.org)
- Static Types [TypeScript](https://typescriptlang.org)

## Requirements

1. Necesitas instalar postgres **14** en tu computadora

   - Para mac [Postgres.app](https://postgresapp.com/downloads.html) 

     ```
     sudo mkdir -p /etc/paths.d &&
     echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp
     ```

     o utilizando Homebrew:

     ```
     brew install postgresql
     ```

   - Para windows [Sitio Oficial Postgres](https://www.postgresql.org/download/windows/)

2. De igual forma necesitarás el proyecto del repositorio [CV-Reader](https://github.com/cristina-hdzp/cv_reader)

## Development

### Base de Datos
1. Abre el SQL Shell (en windows) o si estas en mac:
 ```
 psql postgres
 ```
2. Crea la BD:
 ```
 CREATE DATABASE wizeline;
 ```

### Environment Variables
1. En root, crea un archivo `.env` siguiendo esta estructura (también puedes checar el `.env.example`:
```
# ------------------------
# DATABASE
# ------------------------
DATABASE_URL= "postgresql://[username]:[password]@localhost:5432/[database]?schema=public"

# ------------------------
# NextAuth.js Configuration
# ------------------------
NEXTAUTH_URL=""

# ------------------------
# OAuth Providers
# ------------------------
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# ------------------------
# OPEN AI
# ------------------------
OPENAI_API_KEY=""

# ------------------------
# CYPRESS
# ------------------------
NODE_ENV=""

# ------------------------
# JWT
# ------------------------
NEXTAUTH_SECRET=""
```
2. Pregunta por los valores de `.env` a los colabs.

## Setup de la aplicación

```sh
  nvm use v18.14.2
  npm install —global yarn
  yarn
  ```
  
### Setup de Base de Datos
- Inicializar base de datos:

  ```sh
  yarn prisma:generate
  yarn db:push
  ```
- Seeds a la base de datos:

 ```sh
  yarn db:seed
  ```

- Iniciar servidor dev:

  ```sh
  yarn dev
  ```
## Ambientes de Trabajo

### Dev
Se configuró todo en un entorno local, la branch de este ambiente es `main`.

### Pruebas
Se creó una instancia en AWS Lightsail para el entorno de pruebas, la cual tiene configurada las dependencias necesarias para ejecutar la aplicación (para ver más a detalle entra a la sección de [Deploy to AWS Lightsail](https://github.com/wizelineacademy/itesm-socioformador-ene-feb-2023-equipo-3/wiki/Deploy-to-AWS-Lightsail) en el wiki) 

La branch de este ambiente es `test`

### Producción
Se creó una instancia en AWS Lightsail para el entorno de producción, la cual tiene configurada las dependencias necesarias para ejecutar la aplicación y de igual forma se uso una base de datos de AWS RDS (para ver más a detalle entra a la sección de [Deploy to AWS Lightsail](https://github.com/wizelineacademy/itesm-socioformador-ene-feb-2023-equipo-3/wiki/Deploy-to-AWS-Lightsail) en el wiki)

La branch de este ambiente es `Production`

## GitHub Actions

Utilizamos GitHub Actions para continuous integration. Todo lo que se incluye en la branch main y cuando se realiza un PR se somete a continuous integration.

## CI

### Cypress

Usamos Cypress para las pruebas End-to-End y Unitarias. Las cuales puedes encontrar en la branch `test` en la carpeta `cypress`.

Para correr estas pruebas en development usa `yarn cypress:test`, en donde se corre en paralelo el dev de la app y las pruebas e2e en cypress.

### Type Checking

Este proyecto usa TypeScript.

### Linting

Este proyecto usa TypeScript, el cual esta configurado en el archivo `.eslintrc.js`.

### Formatting

Para formatear el código usamos [Prettier](https://prettier.io/). Asimismo, al ejecutar el siguiente comando:  `yarn format` se corre un script que le da formato a los archivos del proyecto.

# Agenda de Contactos

Aplicación para gestionar contactos con backend en Spring Boot y frontend en Angular.

## Requisitos

- Java 21
- Maven
- Node.js 18+ (para el frontend)
- npm

## Estructura de Carpetas

### Backend (Spring Boot)
- `back-end/agenda-contactes/` - Aplicación Spring Boot
  - `src/main/java/ifc33b/dwesc/agenda_contactes/` - Código fuente Java
    - `controller` - Controladores
    - `dto` - Modelos de transferencia entre front y back
    - `model` - Modelos Java
    - `repository` - JPA
    - `service` - Lógica de negocio
  - `src/main/resources/` - Recursos de la aplicación
  - `src/test/` - Tests unitarios
  - `pom.xml` - Dependencias Maven

### Frontend (Angular)
- `front-end/agenda-contactes/` - Aplicación Angular
  - `src/app/` - Código Angular
    - `components/` - Componentes reutilizables
    - `models/` - Modelos TypeScript
    - `services/` - Servicios (comunicación con backend)
  - `src/` - Assets y configuración
  - `package.json` - Dependencias npm

## Instalación

### Backend

1. Acceder a la carpeta del backend:
```bash
cd back-end/agenda-contactes
```

2. Compilar y ejecutar:
```bash
mvn spring-boot:run
```

El servidor estará disponible en `http://localhost:8080`

### Frontend

1. Acceder a la carpeta del frontend:
```bash
cd front-end/agenda-contactes
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar servidor de desarrollo:
```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

## Desarrollo

### Backend

El backend está construido con:
- **Spring Boot 3.x** - Framework web
- **Spring Data JPA** - Acceso a datos
- **Maven** - Gestor de dependencias

### Frontend

El frontend está construido con:
- **Angular 18+** - Framework de desarrollo
- **TypeScript** - Lenguaje de programación
- **SCSS** - Estilos
- **npm** - Gestor de dependencias

## Endpoints API

La API está disponible en `http://localhost:8080/api/contactes`

### Tabla Resumen de Endpoints

| Método | Ruta | Descripción | Status |
|--------|------|-------------|--------|
| GET | `/api/contactes` | Obtener los contactos | 200 |
| GET | `/api/contactes/{nombre}` | Obtener los contactos que coincidan con el nombre buscado | 200 |
| POST | `/api/contactes` | Crear un nuevo contacto | 201 |

### 1. Obtener los contactos

**GET** `/api/contactes`

Devuelve la lista de todos los contactos

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "nom": "Sefirot",
    "telefon": "123456789",
    "email": "email@email.com"
  }
  {
    "id": 2,
    "nom": "Cloud",
    "telefon": "123456789",
    "email": "email@email.com"
  }
]
```

---

### 2. Obtener los contactos por nombre

**GET** `/api/contactes/{nombre}`

Devuelve la lista de todos los contactos que contengan el nombre introducido.

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "nom": "Sefirot",
    "telefon": "123456789",
    "email": "email@email.com"
  }
]
```

---

### 3. Crear una nueva tarea

**POST** `/api/contactes`

Crea un nuevo contacto.

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "nom": "Sefirot",
  "telefon": "123456789",
  "email": "email@email.com"
}
```

**Parámetros requeridos:**
- `nom` (string, obligatorio): Nombre del contacto
- `telefon` (string, obligatorio): Número de teléfono, debe tener 9 dígitos
- `email` (string, obligatorio): Email del contacto, debe de ser un formato válido. Ej: `email@email.com`

**Response (201 Created):**
```json
{
  "id": 2,
  "nom": "Sefirot",
  "telefon": "123456789",
  "email": "email@email.com"
}
```

---

## Ejemplos de uso

### Con cURL

**Crear un contacto:**
```bash
curl -v -X POST "http://localhost:8080/api/contactes"   -H "Content-Type: application/json; charset=UTF-8"   --data-raw '{"nom":"Sefirot","telefon":"123456789","email":"email@email.com"}'
```

**Obtener contactos a partir de un nombre:**
```bash
curl -X GET "http://localhost:8080/api/contactes"
```

**Obtener contactos a partir de un nombre:**
```bash
curl -X GET "http://localhost:8080/api/contactes/sefirot"
```

## Estructura del Proyecto

```
agenda-contactes/
├── README.md
├── back-end/
│   └── agenda-contactes/
│       ├── mvnw
│       ├── mvnw.cmd
│       ├── pom.xml
│       ├── src/
│       │   ├── main/
│       │   │   ├── java/ifc33b/dwesc/agenda_contactes/
│       │   │   │   ├── AgendaContactesApplication.java
│       │   │   │   ├── controller/
│       │   │   │   │   └── ContacteController.java
│       │   │   │   ├── dto/
│       │   │   │   │   ├── ContacteRequest.java
│       │   │   │   │   └── ContacteResponse.java
│       │   │   │   ├── model/
│       │   │   │   │   └── Contacte.java
│       │   │   │   ├── repository/
│       │   │   │   │   └──   ContacteRepository.java
│       │   │   │   └── service/
│       │   │   │       └──  ContacteService.java
│       │   │   └── resources/
│       │   │       └── application.properties
│       │   └── test/
│       │       └── java/ifc33b/dwesc/agenda_contactes/
│       │           └── AgendaContactesApplication.java
│       └── target/ (generado por Maven)
└── front-end/
    └── agenda-contactes/
        ├── angular.json
        ├── package.json
        ├── tsconfig.json
        ├── tsconfig.app.json
        ├── tsconfig.spec.json
        ├── README.md
        ├── public/
        ├── src/
        │   ├── index.html
        │   ├── main.ts
        │   ├── styles.scss
        │   └── app/
        │       ├── app.config.ts
        │       ├── app.html
        │       ├── app.routes.ts
        │       ├── app.scss
        │       ├── app.ts
        │       ├── app.spec.ts
        │       ├── components/
        │       │   ├── formulari-contactes/
        │       │   │   ├── formulari-contactes.html
        │       │   │   ├── formulari-contactes.scss
        │       │   │   ├── formulari-contactes.ts
        │       │   │   └── formulari-contactes.spec.ts
        │       │   └── llista-contactes/
        │       │       ├── llista-contactes.html
        │       │       ├── llista-contactes.scss
        │       │       ├── llista-contactes.ts
        │       │       └── llista-contactes.spec.ts
        │       ├── models/
        │       │   ├── index.ts
        │       │   ├── contacte.model.ts
        │       │   └── contacte.model.spec.ts
        │       └── services/
        │           ├── contacte.service.ts
        │           └── contacte.service.spec.ts
```
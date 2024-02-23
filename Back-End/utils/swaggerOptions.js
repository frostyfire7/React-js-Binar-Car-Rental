const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Challenge 6 Car Management API",
    version: "1.0.0",
    description: "Swagger Documentation for REST API with Express Application",
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  servers: [
    {
      url: "http://localhost:8000",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./swagger/*.yaml"],
};

const swaggerSpec = swaggerJSDoc(options);

exports.swaggerSpec = swaggerSpec;

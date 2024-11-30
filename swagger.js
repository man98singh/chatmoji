import   swaggerJsDoc from "swagger-jsdoc";
import  swaggerUi  from "swagger-ui-express";


// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node.js REST API",
      version: "1.0.0",
      description: "API documentation for my Node.js project",
    },
    servers: [
      {
        url: "http://localhost:80", // Replace with your server URL
      },
    ],
  },
  apis: ["server.js"], // Path to the API docs
};

export const swaggerSpec = swaggerJsDoc(swaggerOptions);

export { swaggerUi};

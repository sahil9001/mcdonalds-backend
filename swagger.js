const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'McDonalds API',
      version: '1.0.0',
      description: 'API for fetching McDonalds menu items by store ID',
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
      },
    ],
    components: {
      schemas: {
        Menu: {
          type: 'object',
          required: ['_id', 'Store'],
          properties: {
            _id: {
              type: 'string',
              description: 'The store id'
            },
            Store: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  Store: {
                    type: 'string'
                  },
                  PromotionVersion: {
                    type: 'string'
                  },
                  Promotions: {
                    type: 'array',
                    items: {
                      type: 'object'
                      // Define properties of Promotions items if needed
                    }
                  },
                  ProductVersion: {
                    type: 'string'
                  },
                  Products: {
                    type: 'array',
                    items: {
                      type: 'object'
                      // Define properties of Products items if needed
                    }
                  }
                }
              }
            },
            // Define other fields if needed
          },
          example: {
            _id: "1373",
            Store: [
              {
                Store: "1373",
                PromotionVersion: "2024-06-01T09:35:14",
                Promotions: [],
                ProductVersion: "2024-06-01T09:35:14",
                Products: []
              }
            ]
          }
        }
      }
    }
  },
  apis: ['./routes/*.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

module.exports = setupSwagger;

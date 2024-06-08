const express = require('express');
const connectDB = require('./config/db');
const menuRoutes = require('./routes/menuRoutes');
const setupSwagger = require('./swagger');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
// Allow all origins (not recommended for production)
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', menuRoutes);

// Setup Swagger
setupSwagger(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

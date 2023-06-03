const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/hospital', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Import API routes
const doctorRoutes = require('./routes/doctors');
const patientRoutes = require('./routes/patients');
const reportRoutes = require('./routes/reports');

// Use API routes
app.use('/doctors', doctorRoutes);
app.use('/patients', patientRoutes);
app.use('/reports', reportRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
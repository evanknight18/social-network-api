const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const userRoutes = require('./routes/user-routes');
const thoughtRoutes = require('./routes/thought-routes');
const reactionRoutes = require('./routes/reaction-routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.use('/api', userRoutes);
app.use('/api', thoughtRoutes);
app.use('/api', reactionRoutes);

// Default route
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// MongoDB connection
mongoose.connect('mongodb://localhost/socialnetworkdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

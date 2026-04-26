const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Nyayasetu API is running...');
});

// Example route for legal queries
app.post('/api/query', (req, res) => {
  const { query } = req.body;
  // Placeholder for AI logic
  res.json({ response: `You asked about: ${query}. This is a placeholder response.` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

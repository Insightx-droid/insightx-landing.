// backend.js (Node.js + Express + Firebase)

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Firebase Admin SDK setup
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<your-project-id>.firebaseio.com'
});

const db = admin.firestore();

// Route to handle form submission
app.post('/join', async (req, res) => {
  try {
    const { name, email, role, interests } = req.body;
    await db.collection('insightxJoins').add({
      name,
      email,
      role,
      interests,
      joinedAt: new Date().toISOString(),
    });
    res.status(200).json({ message: 'Thank you for joining InsightX Lab!' });
  } catch (error) {
    console.error('Error writing to Firebase:', error);
    res.status(500).json({ message: 'Failed to submit form. Please try again.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

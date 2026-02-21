import app from './app.js';
import connectDB from './db/connect.js';

const PORT = process.env.PORT || 3100;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();

import app from './app.js';
import 'colors';
import { connectDB } from "./db.js";
 
const PORT = 5000;

connectDB();

app.listen(PORT, () => console.log(` > Server run ${PORT} < `.bgYellow.white));
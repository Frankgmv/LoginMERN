import app from './app.js';
import 'colors';
import { connectDB } from "./db.js";
 
const PORT = 9001;

connectDB();

app.listen(PORT, () => console.log(` > Server run ${PORT} < `.bgYellow.white));
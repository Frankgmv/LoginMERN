import app from './app.js'
import colors from 'colors'
import { connectDB } from "./db.js";
 
const PORT = 5001;

connectDB();

app.listen(PORT, () => console.log(` > Server run ${PORT} < `.bgYellow.white));
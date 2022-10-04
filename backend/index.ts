//Import tools
import app from "./app";
import { startConnection } from "./database";

startConnection();
app.listen((process.env.PORT as string) || 3000);
console.log(("Server is running on port: " + process.env.PORT) as string);

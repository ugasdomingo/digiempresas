//Import tools
import app from './app';
import { connect } from './database';

//Main function
async function main() {
    //Connect to the database
    await connect();
    //Start the server
    await app.listen(process.env.PORT || 3000);
    console.log(
        `Open in your browser at http://localhost:${process.env.PORT || 3000}`
    );
}

//Call the main function
main();

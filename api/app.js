import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import { client_response } from './src/utils/responser.js';

//Import routes
import user_router from './src/routes/user-router.js';
import post_router from './src/routes/post-router.js';
import healthy_router from './src/routes/healthy-router.js';
import enrollment_router from './src/routes/enrollment-router.js';
import course_router from './src/routes/course-router.js';


//App config
const app = express();

//Helpers
const allowedOrigins = ['http://localhost:5173', process.env.ORIGIN2];

//Middleware
app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            return callback(new Error(`Not allowed by CORS: ${origin}`));
        }
    },
    credentials: true
}));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/api/v3/user', user_router);
app.use('/api/v3/post', post_router);
app.use('/api/v3/healthy', healthy_router);
app.use('/api/v3/enrollment', enrollment_router);
app.use('/api/v3/course', course_router);


//Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    client_response(res, 500, 'Ha ocurrido un error, por favor intente más tarde');
});

//Export
export default app;
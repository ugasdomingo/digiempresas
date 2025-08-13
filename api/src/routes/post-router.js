import { Router } from "express";
import { create_post, get_all_posts, get_post, update_post, delete_post } from "../controllers/post-controller.js";
import { admin_auth } from "../middlewares/user-auth.js";

const post_router = Router();

post_router.post('/create', admin_auth, create_post);
post_router.get('/all', get_all_posts);
post_router.get('/:id', get_post);
post_router.put('/:id', admin_auth, update_post);
post_router.delete('/:id', admin_auth, delete_post);

export default post_router;

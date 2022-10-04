// Import Tools
import Post from "../models/Post";

// -------------------------------------------
// Get All Posts Controller -> Line 12
// Get a Post Controller -> Line 22
// Create a Post Controller -> Line 34
// Update a Post Controller -> Line 48
// Delete a Post Controller -> Line 65
// -------------------------------------------

// Get All Posts Controller
export const allPost = async (req: any, res: any) => {
	try {
		const posts = await Post.find();
		res.send(posts);
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// Get a Post Controller
export const onePost = async (req: any, res: any) => {
	try {
		const post = await Post.findById(req.params.id);

		if (!post) return res.status(404).json({ message: "Post Not Found" });
		res.send(post);
	} catch (error) {
		return res.status(500).json({ message: "Server Internal Error" });
	}
};

// Create a Post Controller
export const createPost = async (req: any, res: any) => {
	try {
		const { title, category, body } = req.body;

		const post = new Post({ title, category, body });
		await post.save();

		res.json(post);
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// Update a Post Controller
export const updatePost = async (req: any, res: any) => {
	try {
		const updatedPost = await Post.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);

		if (!updatedPost)
			return res.status(404).json({ message: "Post no encontrado" });
		res.json(updatedPost);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};

// Delete a Post Controller
export const deletePost = async (req: any, res: any) => {
	try {
		const post = await Post.findByIdAndDelete(req.params.id);

		if (!post)
			return res.status(404).json({ message: "Post no encontrado" });
		res.send(post);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};

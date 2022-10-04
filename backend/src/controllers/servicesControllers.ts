// Import Tools
import Services from "../models/Services";

// -------------------------------------------
// Get all Services Controller -> Line 12
// Get a Service Controller -> Line 22
// Create a Service Controller -> Line 32
// Update a Service Controller -> Line 51
// Delete a Service Controller -> Line 70
// -------------------------------------------

// Get all Services Controller
export const allServices = async (req: any, res: any) => {
	try {
		const services = await Services.find().lean();
		return res.json({ services });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// Get a Service Controller
export const oneService = async (req: any, res: any) => {
	try {
		const services = await Services.find({ uid: req.params.id }).lean();
		return res.json({ services });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// Create a Service Controller
export const createService = async (req: any, res: any) => {
	try {
		const { name, description, category, price } = req.body;

		const services = new Services({
			name,
			description,
			category,
			price,
		});
		await services.save();

		res.json({ services });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// Update a Service Controller
export const updateService = async (req: any, res: any) => {
	try {
		const services = await Services.findById(req.params.id);

		if (!services)
			return res.status(404).json({ message: "Service Not Found" });

		const updatedService = await Services.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.json({ updatedService });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// Delete a Service Controller
export const deleteService = async (req: any, res: any) => {
	try {
		const services = await Services.findById(req.params.id);

		if (!services)
			return res.status(404).json({ message: "Service Not Found" });

		await services.remove();

		res.send({ services });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

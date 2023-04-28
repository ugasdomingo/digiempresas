// Import Tools
import Enrollments from "../models/Enrollments";

// -------------------------------------------
// Get all Enrollments Controller -> Line 12
// Get a Enrollment Controller -> Line 22
// Create a Enrollment Controller -> Line 32
// Update a Enrollment Controller -> Line 51
// Delete a Enrollment Controller -> Line 70
// -------------------------------------------

// Get all Enrollments Controller
export const allEnrollments = async (req: any, res: any) => {
	try {
		const enrollments = await Enrollments.find({ category: req.params.category });
		return res.json({ enrollments });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// Get a Enrollment Controller
export const oneEnrollment = async (req: any, res: any) => {
	try {
		const enrollments = await Enrollments.find({ uid: req.params.id }).lean();
		return res.json({ enrollments });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// Create a Enrollment Controller
export const createEnrollment = async (req: any, res: any) => {
	try {
		const { formationName, numberProof, payed, paymentMethod } = req.body;

		const enrollments = new Enrollments({
			formationName,
			numberProof,
			payed,
			paymentMethod,
            uid: req.uid
		});
		await enrollments.save();

		res.json({ enrollments });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// Update a Enrollment Controller
export const updateEnrollment = async (req: any, res: any) => {
	try {
		const enrollments = await Enrollments.findById(req.params.id);

		if (!enrollments)
			return res.status(404).json({ message: "Enrollment Not Found" });

		const updatedEnrollment = await Enrollments.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.json({ updatedEnrollment });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// Delete a Enrollment Controller
export const deleteEnrollment = async (req: any, res: any) => {
	try {
		const enrollments = await Enrollments.findById(req.params.id);

		if (!enrollments)
			return res.status(404).json({ message: "Enrollment Not Found" });

		await enrollments.remove();

		res.send({ enrollments });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};
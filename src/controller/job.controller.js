const Job = require('../models/job.model');

class JobController {
    async CreateJob(req, res) {

        // Get data from Postman request body
        //console.log(req.file);
        try {
            const { title, description, companyName, location, salary, experience, employmentType, skills, qualification, applicationDeadline, status } = req.body;

            if (!title || !description || !companyName || !location || !salary || !experience || !employmentType || !skills || !qualification || !applicationDeadline || !status) {
                return res.status(400).json({
                    success: false,
                    message: "All Fields are required"
                });
            }

            // Create employee object
            const jobdata = new Job({
                title, description, companyName, location, salary, experience, employmentType, skills, qualification, applicationDeadline, status
            });

             if (req.file) {
                jobdata.image = req.file.path.replace(/\\/g, "/");
            }

            // Save employee into MongoDB
            const data = await jobdata.save();

            // Send success response
            return res.status(201).json({
                success: true,
                message: "job created successfully",
                data: data,
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET ALL JOB

    async GetAllJob(req, res) {
        try {
            const data = await Job.find();
            return res.status(200).json({
                success: true, message: "All job fetched successfully",
                total: data.length,
                data: data
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

    // GET SINGLE JOB

    async GetSingleJob(req, res) {
        try {
            const { id } = req.params; const data = await Job.findById(id);
            if (!data) {
                return res.status(404).json({
                    success: false,
                    message: "Job not found"

                });
            } return res.status(200).json({
                success: true, message: "Job fetched successfully",
                data: data
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }


    // UPDATE JOB

    async UpdateJob(req, res) {
        try {
            const { id } = req.params;
            const { title, description, companyName, location, salary, experience, employmentType, skills, qualification, applicationDeadline, status } = req.body;
            const data = await Job.findByIdAndUpdate(
                id,
                {
                    title, description, companyName, location, salary, experience, employmentType, skills, qualification, applicationDeadline, status

                }, {
                new: true, runValidators: true
            });
            if (!data) {
                return res.status(404).json({
                    success: false,
                    message: "Job not found"
                });
            } return res.status(200).json({
                success: true,
                message: "Job updated successfully",
                data: data
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

    // DELETE JOB

    async DeleteJob(req, res) {
        try {
            const { id } = req.params;
            const data = await Job.findByIdAndDelete(id);
            if (!data) {
                return res.status(404).json({
                    success: false,
                    message: "Job not found"
                });
            } return res.status(200).json({
                success: true, message: "Job deleted successfully",
                data: data
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}


module.exports = new JobController();







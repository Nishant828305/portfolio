const Project = require("./models/Project")

exports.getProjects = async (req,res)=>{
 const projects = await Project.find()
 res.json(projects)
}

exports.addProject = async (req,res)=>{
 const p = new Project(req.body)
 await p.save()
 res.json(p)
}
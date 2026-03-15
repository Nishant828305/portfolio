import { useEffect, useState } from "react"
import axios from "axios"

export default function Projects() {

const [projects, setProjects] = useState([])

useEffect(() => {

 axios.get("http://localhost:5000/api/projects")
 .then(res => setProjects(res.data))
 .catch(err => console.log(err))

}, [])

return (

<section id="projects" className="py-20 bg-gray-100">

<h2 className="text-3xl font-bold text-center mb-10">
Projects
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

{projects.map(p => (

<div key={p._id} className="bg-white p-4 shadow rounded">

<img 
src={p.image} 
alt={p.title}
className="rounded mb-3 w-full h-40 object-cover"
/>

<h3 className="text-xl font-semibold">
{p.title}
</h3>

<p className="text-gray-600 mb-3">
{p.description}
</p>

<div className="flex gap-3">

<a
href={p.github}
target="_blank"
rel="noopener noreferrer"
className="bg-black text-white px-3 py-1 rounded"
>
GitHub
</a>

<a
href={p.demo}
target="_blank"
rel="noopener noreferrer"
className="bg-blue-500 text-white px-3 py-1 rounded"
>
Live
</a>

</div>

</div>

))}

</div>

</section>

)
}
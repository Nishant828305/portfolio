export default function Skills(){

const skills = [
 {name:"React",icon:"⚛️"},
 {name:"JavaScript",icon:"🟨"},
 {name:"Node.js",icon:"🟩"},
 {name:"Express",icon:"🚀"},
 {name:"MongoDB",icon:"🍃"},
 {name:"Tailwind CSS",icon:"💨"},
 {name:"Git",icon:"🔧"},
 {name:"MERN Stack",icon:"🌐"},

 {name:"HTML5",icon:"📄"},
 {name:"CSS3",icon:"🎨"},
 {name:"Bootstrap",icon:"🅱️"},
 {name:"Redux",icon:"🧠"},
 {name:"TypeScript",icon:"🔷"},
 {name:"REST API",icon:"🔗"},
 {name:"JWT Auth",icon:"🔐"},
 {name:"Firebase",icon:"🔥"},
 {name:"Vite",icon:"⚡"},
 {name:"NPM",icon:"📦"},
 {name:"Postman",icon:"📮"},
 {name:"Docker",icon:"🐳"},
 {name:"AWS",icon:"☁️"},
 {name:"Linux",icon:"🐧"},
 {name:"Figma",icon:"🎯"}
]

return(

<section id="skills" className="py-24 bg-gray-50">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-4">
My Skills
</h2>

<p className="text-center text-gray-500 mb-12">
Technologies I use to build modern full-stack applications
</p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

{skills.map((s,i)=>(

<div
key={i}
className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center
transition transform hover:-translate-y-2 hover:shadow-xl"
>

<span className="text-4xl mb-3">
{s.icon}
</span>

<h3 className="font-semibold text-gray-700">
{s.name}
</h3>

</div>

))}

</div>

</div>

</section>

)
}
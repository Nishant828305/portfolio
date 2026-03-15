import pic from "../img/pic.jpg";
export default function Hero(){

return(

<section className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6">

<div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

{/* LEFT SIDE */}

<div>

<p className="text-blue-400 font-semibold mb-3">
Hello, I'm
</p>

<h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">

<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
Nishant Kumar Mahato
</span>

</h1>

<p className="text-gray-400 text-lg mb-8">
MERN Stack Developer passionate about building modern,
scalable web applications using React, Node.js, Express,
and MongoDB.
</p>

<div className="flex gap-4">

<a
href="#projects"
className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition"
>
View Projects
</a>

<a
href="#contact"
className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
>
Contact Me
</a>

</div>

</div>


{/* RIGHT SIDE */}

<div className="flex justify-center">

<div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-1">

<div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
  <img
    src={pic}
    alt="profile pic"
    className="w-full h-full object-cover rounded-full"
  />
</div>

</div>

</div>

</div>

</section>

)
}
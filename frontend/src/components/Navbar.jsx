export default function Navbar(){

return(

<nav className="bg-gray-900 text-white fixed w-full shadow">

<div className="max-w-6xl mx-auto flex justify-between items-center p-4">

<h1 className="font-bold text-xl">
Nishant.dev
</h1>

<div className="flex gap-6">

<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>

</div>

</div>

</nav>

)
}
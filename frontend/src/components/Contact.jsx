export default function Contact(){

return(

<section id="contact" className="py-24 bg-gray-950 text-white">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-4">
Get In Touch
</h2>

<p className="text-center text-gray-400 mb-16">
Have a project in mind or want to collaborate? Feel free to contact me.
</p>


<div className="grid md:grid-cols-2 gap-12">

{/* CONTACT INFO */}

<div className="space-y-6">

<div className="bg-gray-900 p-6 rounded-xl flex items-center gap-4 hover:shadow-blue-500/20 transition">

<span className="text-3xl">📧</span>

<div>
<h3 className="font-semibold">Email</h3>
<p className="text-gray-400 break-words">
kumarnishantmahato123@gmail.com
</p>
</div>

</div>


<div className="bg-gray-900 p-6 rounded-xl flex items-center gap-4 hover:shadow-blue-500/20 transition">

<span className="text-3xl">💻</span>

<div>
<h3 className="font-semibold">GitHub</h3>

<a
href="https://github.com/Nishant828305"
target="_blank"
className="text-blue-400 hover:underline"
>
github.com/Nishant828305
</a>

</div>

</div>


<div className="bg-gray-900 p-6 rounded-xl flex items-center gap-4 hover:shadow-blue-500/20 transition">

<span className="text-3xl">🔗</span>

<div>
<h3 className="font-semibold">LinkedIn</h3>

<a
href="https://www.linkedin.com/in/nishantkrmahato007/"
className="text-blue-400 hover:underline"
>
 LinkedIn profile
</a>

</div>

</div>

<div className="bg-gray-900 p-6 rounded-xl flex items-center gap-4 hover:shadow-blue-500/20 transition">

<span className="text-3xl">🔗</span>

<div>
<h3 className="font-semibold">Leetcode</h3>

<a
href="https://leetcode.com/u/Nishant_kumar_mahato/"
className="text-blue-400 hover:underline"
>
 Leetcode profile
</a>

</div>

</div>

</div>


{/* CONTACT FORM */}

<form className="bg-gray-900 p-8 rounded-xl space-y-4">

<input
type="text"
placeholder="Your Name"
className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
/>

<input
type="email"
placeholder="Your Email"
className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
/>

<textarea
placeholder="Your Message"
rows="4"
className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
></textarea>

<button
className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold transition"
>
Send Message
</button>

</form>

</div>

</div>

</section>

)
}
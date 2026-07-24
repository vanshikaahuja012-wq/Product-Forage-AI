import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home(){

return(
<>
<Navbar/>

<div className="
min-h-screen
bg-gradient-to-br
from-indigo-50
via-white
to-purple-100
">


{/* Hero Section */}

<section className="
max-w-6xl
mx-auto
px-6
py-20
grid
md:grid-cols-2
gap-10
items-center
">


<div>


<h1 className="
text-5xl
font-extrabold
leading-tight
text-gray-800
">

Generate
<span className="
text-indigo-600
">
 AI Powered
</span>

<br/>

Product Descriptions

</h1>


<p className="
mt-6
text-lg
text-gray-600
leading-8
">

Create professional e-commerce product descriptions
instantly using Artificial Intelligence.
Save time and improve your online product listings.

</p>



<div className="
flex
gap-5
mt-8
">


<Link
to="/generate"
className="
bg-indigo-600
text-white
px-8
py-4
rounded-xl
font-semibold
hover:bg-indigo-700
transition
"
>

Start Generating 🚀

</Link>



<Link
to="/about"
className="
border
border-indigo-600
text-indigo-600
px-8
py-4
rounded-xl
font-semibold
"
>

Learn More

</Link>


</div>


</div>





{/* Right Card */}

<div className="
bg-white
rounded-3xl
shadow-2xl
p-8
border
">


<h2 className="
text-2xl
font-bold
mb-5
">

AI Product Assistant 🤖

</h2>


<div className="
space-y-4
">


<div className="
bg-indigo-50
p-4
rounded-xl
">

✨ Generate Marketing Content

</div>


<div className="
bg-purple-50
p-4
rounded-xl
">

⚡ Multiple Writing Styles

</div>


<div className="
bg-green-50
p-4
rounded-xl
">

📦 Manage Products Easily

</div>


</div>


</div>


</section>






{/* Features */}

<section className="
max-w-6xl
mx-auto
px-6
pb-20
">


<h2 className="
text-4xl
font-bold
text-center
mb-10
">

Why Choose AI Product Generator?

</h2>


<div className="
grid
md:grid-cols-3
gap-6
">


{
[
["🤖 AI Generation","Uses Groq AI to create intelligent descriptions"],
["📂 Product Management","Save, update and delete products"],
["📄 Export","Download descriptions as PDF"]
]
.map((item,index)=>(

<div
key={index}
className="
bg-white
rounded-2xl
shadow-lg
p-6
border
"
>

<h3 className="
text-xl
font-bold
mb-3
">

{item[0]}

</h3>


<p className="text-gray-600">

{item[1]}

</p>


</div>


))
}


</div>


</section>


</div>


<Footer/>

</>

)

}

export default Home;
import {
Sparkles,
Search,
Zap,
Copy
} from "lucide-react";


function Features(){


const features=[

{
icon:<Sparkles/>,
title:"AI Powered",
text:"Generate descriptions using AI"
},

{
icon:<Search/>,
title:"SEO Friendly",
text:"Improve product visibility"
},

{
icon:<Zap/>,
title:"Instant Results",
text:"Generate within seconds"
},

{
icon:<Copy/>,
title:"Easy Copy",
text:"Copy descriptions instantly"
}

];



return (

<section className="
max-w-7xl
mx-auto
px-6
py-16
">


<h2 className="
text-3xl
font-bold
text-center
mb-10
">

Why Choose AI Generator?

</h2>



<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
">


{

features.map((item,index)=>(


<div

key={index}

className="
bg-white
rounded-3xl
p-6
shadow-md
hover:shadow-xl
transition
"


>


<div className="
text-indigo-600
mb-4
">

{item.icon}

</div>



<h3 className="
font-bold
text-xl
">

{item.title}

</h3>



<p className="
text-gray-500
mt-2
">

{item.text}

</p>



</div>


))


}


</div>


</section>


);


}


export default Features;
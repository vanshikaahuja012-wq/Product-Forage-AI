import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Loader from "../components/ui/Loader";

import Card from "../components/Card";
import Toast from "../components/ui/Toast";
import Modal from "../components/ui/Modal";


import { jsPDF } from "jspdf";


function Generate() {


const [productName,setProductName]=useState("");
const [ingredients,setIngredients]=useState("");
const [weight,setWeight]=useState("");
const [features,setFeatures]=useState("");

const [tone,setTone]=useState("Premium");


const [generatedDescription,setGeneratedDescription]=useState("");

const [tasks,setTasks]=useState([]);

const [loading,setLoading]=useState(false);

const [search,setSearch]=useState("");

const [editingId,setEditingId]=useState(null);

const [showToast,setShowToast]=useState(false);

const [isOpen,setIsOpen]=useState(false);



// fetch products

useEffect(()=>{

fetchTasks();

},[]);



const fetchTasks=async()=>{

try{

const res=await fetch(
"http://localhost:5000/api/tasks"
);

const data=await res.json();

setTasks(
Array.isArray(data)
?
data
:
[]
);


}catch(error){

console.log(error);

}

};




// Search

const searchProducts=async(keyword)=>{


setSearch(keyword);


if(keyword.trim()===""){

fetchTasks();

return;

}


try{

const res=await fetch(
`http://localhost:5000/api/tasks/search/${keyword}`
);


const data=await res.json();


setTasks(data);



}catch(error){

console.log(error);

}



};



// Clear

const clearForm=()=>{


setProductName("");
setIngredients("");
setWeight("");
setFeatures("");
setTone("Premium");
setGeneratedDescription("");
setEditingId(null);


};




// Generate

const handleGenerate=async()=>{


if(
!productName ||
!ingredients ||
!weight ||
!features
){

alert("Please fill all fields");

return;

}


setLoading(true);


try{


if(editingId){


await fetch(

`http://localhost:5000/api/tasks/${editingId}`,

{

method:"PUT",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

productName,
ingredients,
weight,
features,
tone,
description:generatedDescription

})


}

);


setEditingId(null);



}

else{


const res=await fetch(

"http://localhost:5000/api/generate-description",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

productName,
ingredients,
weight,
features,
tone

})


}

);



const data=await res.json();


setGeneratedDescription(
data.description
);


}



fetchTasks();


setShowToast(true);



}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


};




// Delete

const deleteTask=async(id)=>{


await fetch(

`http://localhost:5000/api/tasks/${id}`,

{

method:"DELETE"

}

);


fetchTasks();


};




// Edit

const editTask=(task)=>{


setEditingId(task._id);

setProductName(task.productName);

setIngredients(task.ingredients);

setWeight(task.weight);

setFeatures(task.features);

setTone(task.tone);

setGeneratedDescription(task.description);



window.scrollTo({

top:0,

behavior:"smooth"

});


};




// Copy

const copyText=()=>{


navigator.clipboard.writeText(
generatedDescription
);


setShowToast(true);


};




// PDF

const downloadPDF=()=>{


const pdf=new jsPDF();


pdf.text(

generatedDescription,

10,

20

);


pdf.save(

"product-description.pdf"

);


};





return (

<>

<Navbar/>


<div className="
min-h-screen
bg-slate-50
px-6
py-10
">



<div className="
max-w-7xl
mx-auto
">


{/* HERO */}


<div className="
rounded-3xl
bg-gradient-to-r
from-indigo-600
via-purple-600
to-pink-500
text-white
p-10
mb-10
shadow-xl
">


<h1 className="
text-4xl
md:text-5xl
font-extrabold
">

✨ AI Product Description Generator

</h1>


<p className="
mt-4
text-lg
text-indigo-100
">

Generate professional SEO-friendly product
descriptions using AI.

</p>


</div>





{/* SEARCH */}

<div className="
bg-white
rounded-2xl
shadow
p-5
mb-8
flex
items-center
gap-3
">


<span className="text-gray-400 text-xl">
🔍
</span>


<input

value={search}

onChange={(e)=>
searchProducts(e.target.value)
}

placeholder="Search products..."

className="
w-full
outline-none
"

/>


</div>






{/* MAIN */}

<div className="
grid
lg:grid-cols-2
gap-8
">





{/* FORM */}

<div className="
bg-white
rounded-3xl
shadow-xl
p-8
">


<h2 className="
text-2xl
font-bold
mb-6
">

📦 Product Details

</h2>



<Input

label="Product Name"

value={productName}

onChange={(e)=>setProductName(e.target.value)}

/>



<Input

label="Ingredients"

value={ingredients}

onChange={(e)=>setIngredients(e.target.value)}

/>



<Input

label="Weight"

value={weight}

onChange={(e)=>setWeight(e.target.value)}

/>



<label className="font-semibold">

Product Features

</label>


<textarea

rows="4"

value={features}

onChange={(e)=>setFeatures(e.target.value)}

className="
w-full
border
rounded-xl
p-4
mt-2
focus:ring-2
focus:ring-indigo-500
"

/>





<label className="
font-semibold
block
mt-5
">

Writing Tone

</label>



<div className="
flex
gap-3
flex-wrap
mt-3
">


{
["Premium","Traditional","Health-Focused"]

.map(item=>(


<button

key={item}

onClick={()=>setTone(item)}

className={

`
px-4
py-2
rounded-full
transition

${

tone===item

?

"bg-indigo-600 text-white"

:

"bg-gray-100"

}

`

}

>

{item}

</button>


))

}



</div>






<div className="
flex
gap-3
mt-7
flex-wrap
">


<Button onClick={handleGenerate}>

<span>
✨
</span>

{editingId
?
"Update"
:
"Generate"
}

</Button>



<Button
variant="secondary"
onClick={clearForm}
>

Clear

</Button>


</div>



{
loading &&
<Loader/>
}



</div>





{/* RESULT */}


<div className="
bg-white
rounded-3xl
shadow-xl
p-8
">


<h2 className="
text-2xl
font-bold
mb-5
">

✨ AI Generated Result

</h2>




{
generatedDescription

?

<>

<p className="
leading-8
text-gray-700
">

{generatedDescription}

</p>



<div className="
flex
gap-3
mt-8
flex-wrap
">


<button

onClick={copyText}

className="
bg-indigo-600
text-white
px-5
py-2
rounded-xl
flex
gap-2
items-center
"

>

<span>
📋
</span>

Copy

</button>



<button

onClick={downloadPDF}

className="
bg-gray-100
px-5
py-2
rounded-xl
flex
gap-2
items-center
"

>

<span>
📄
</span>

PDF

</button>



</div>


</>


:

<div className="
text-center
py-20
text-gray-400
">


<div className="text-5xl text-center">
  ✨
</div>

<p className="mt-4">

Your AI description will appear here

</p>


</div>


}



</div>



</div>





{/* SAVED */}

<div className="
mt-14
">


<h2 className="
text-3xl
font-bold
mb-6
">

Saved Products

</h2>



{

tasks.length===0

?

<div className="
bg-white
p-8
rounded-2xl
text-center
">

No products yet

</div>


:

tasks
.filter(task => task)
.map(task=>(

<Card

key={task._id}

task={task}

editTask={editTask}

deleteTask={deleteTask}

/>

))

}



</div>



</div>

</div>





<Toast

show={showToast}

message="Success!"

onClose={()=>setShowToast(false)}

/>



<Modal

isOpen={isOpen}

onClose={()=>setIsOpen(false)}

title="How to Use"

>

Fill details and click Generate.

</Modal>



<Footer/>


</>

);


}


export default Generate;
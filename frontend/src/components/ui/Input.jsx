function Input({
    label,
    value,
    onChange,
    placeholder
}) {


return (

<div className="mb-5">


<label className="block font-semibold mb-2 text-gray-700">

{label}

</label>


<input

value={value}

onChange={onChange}

placeholder={placeholder}

className="
w-full
px-4
py-3
rounded-xl
border
border-gray-300
focus:outline-none
focus:ring-2
focus:ring-indigo-500
transition
"

/>


</div>


);

}


export default Input;
function Button({
    children,
    onClick,
    variant="primary"
}) {


const styles = {

primary:
"bg-indigo-600 text-white hover:bg-indigo-700",

secondary:
"bg-gray-100 text-gray-700 hover:bg-gray-200"

};


return (

<button

onClick={onClick}

className={`
px-6 py-3 rounded-xl
font-semibold
transition
duration-300
hover:scale-105
${styles[variant]}
`}

>

{children}

</button>


);

}

export default Button;
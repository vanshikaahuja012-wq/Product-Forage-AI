function Card({ title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 w-full sm:w-80 max-w-sm transition-colors duration-300">
      <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}

export default Card;
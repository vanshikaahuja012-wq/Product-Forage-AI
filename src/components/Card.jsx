function Card({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-80">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>

      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Card;
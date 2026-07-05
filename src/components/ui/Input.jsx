/**
 * Input Component
 *
 * @param {Object} props
 * @param {string} props.label - Label displayed above the input.
 * @param {string} props.placeholder - Placeholder text for the input.
 * @param {string} props.type - HTML input type (default: "text").
 * @param {string} props.value - Current value of the input.
 * @param {Function} props.onChange - Function called when the input value changes.
 * @param {string} props.error - Optional error message displayed below the input.
 */
function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-1 font-medium">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
       className="w-full border rounded px-3 py-2 bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
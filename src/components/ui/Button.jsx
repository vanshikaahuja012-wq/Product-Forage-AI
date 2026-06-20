/**
 * Button Component
 *
 * @param {Object} props
 * @param {"primary"|"secondary"|"outline"} props.variant - Button style variant.
 * @param {"sm"|"md"|"lg"} props.size - Button size.
 * @param {boolean} props.disabled - Disables the button when true.
 * @param {Function} props.onClick - Function called when the button is clicked.
 * @param {React.ReactNode} props.children - Content displayed inside the button.
 */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  children,
}) {
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline:
  "border border-blue-600 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`rounded font-medium ${variantClasses[variant]} ${sizeClasses[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
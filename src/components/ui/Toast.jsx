/**
 * Toast Component
 *
 * @param {Object} props
 * @param {string} props.message - Message displayed in the toast notification.
 * @param {boolean} props.show - Controls whether the toast is visible.
 * @param {Function} props.onClose - Function called to hide the toast.
 */
import { useEffect } from "react";

function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
      {message}
    </div>
  );
}

export default Toast;
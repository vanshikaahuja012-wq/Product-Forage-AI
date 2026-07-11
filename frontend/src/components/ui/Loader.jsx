/**
 * Loader Component
 *
 * Displays a loading spinner while content or data is being processed.
 *
 * @returns {JSX.Element}
 */
function Loader() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;
import { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Loader from "../components/ui/Loader";
import Modal from "../components/ui/Modal";
import Toast from "../components/ui/Toast";
import ThemeToggle from "../components/ui/ThemeToggle";
function ComponentDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  return (
    <div className="min-h-screen p-6 space-y-4 bg-white text-black dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold">Component Demo</h1>
       <ThemeToggle />
      <Button variant="primary">Generate</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="outline">Learn More</Button>
      <button
          onClick={() => setShowToast(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded"
       >
          Show Toast
      </button>
      <Input
        label="Product Name"
        placeholder="Enter product name"
      />

      <Loader />

      {/* 👇 Write the Open Modal button here */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Demo Modal"
      >
        <p>This is a sample modal.</p>
      </Modal>
      <Toast
  message="Product generated successfully!"
  show={showToast}
  onClose={() => setShowToast(false)}
/>
    </div>
  );
}

export default ComponentDemo;
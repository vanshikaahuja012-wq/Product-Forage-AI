import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Loader from "../components/ui/Loader";

function ComponentDemo() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Component Demo</h1>

      <Button variant="primary">Generate</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="outline">Learn More</Button>

      <Input
        label="Product Name"
        placeholder="Enter product name"
      />

      <Loader />
    </div>
  );
}

export default ComponentDemo;
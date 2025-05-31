import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Button title="Small Rounded" styles="text-sm rounded-sm" />
<Button title="Medium Rounded" styles="text-md rounded-md mt-2" />
<Button title="Large Rounded Full" styles="text-lg rounded-full mt-2" />
    </div>
  )
}

export default Landing;

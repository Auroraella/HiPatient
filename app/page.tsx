import { Button } from "@/components/ui/button";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-white text-3xl underline">Home</h1>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Button>Click me</Button>
    </div>
  );
}
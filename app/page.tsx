import Image from "next/image";
import Hello from "./components/Hello";

export default function Home() {
  return (

    <>
    <div>
      <h1 className="text-3xl ">Welcome to our page</h1>
      <Hello />
    </div>
    </>
    
  );
}

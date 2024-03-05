import Image from "next/image";
import CreatePost from "./components/CreatePost";

export default function Home() {
  return (
    <main className="p-4">
      <div className="flex items-center justify-center">
      <div className=" bg-gray-500 rounded-lg ">
      <Image src="/images/TechConnectULogo.png" width={500} height={500} alt="logo" />
      </div>
      </div>
      <div className="text-2xl text-white text-center">
        <p>"TechConnectU: Where Innovation Meets Connection!</p>
      </div>
    </main>
  );
}

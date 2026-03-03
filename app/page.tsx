import Image from "next/image";
import TypewriterText from "../components/TypewriterText";

export default function Home() {
  return (
   <div className="bg-gradient-to-r from-red-500 to-yellow-500 h-[calc(100vh-60px)] flex items-center justify-center">
      <TypewriterText tagline={"How fit are you for role?"} />
   </div>
  );
}

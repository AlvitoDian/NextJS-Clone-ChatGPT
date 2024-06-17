import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <Content />
    </main>
  );
}

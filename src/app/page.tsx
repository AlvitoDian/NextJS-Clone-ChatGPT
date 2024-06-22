import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
import PricingCard from "@/components/PricingCard";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <Content />
      {/*      <PricingCard /> */}
    </main>
  );
}

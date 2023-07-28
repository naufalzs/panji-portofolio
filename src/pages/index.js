import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className={`bg-white overflow-hidden font-jakarta text-neutral-100`}>
      <Header />
      <Hero />
    </div>
  );
}

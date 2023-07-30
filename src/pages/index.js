import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Roles from "@/components/Roles";
import WorkHistory from "@/components/WorkHistory";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div className={`bg-white overflow-hidden font-jakarta text-neutral-100`}>
      <Header />
      <Hero />
      <Roles />
      <WorkHistory />
      <Portfolio />
    </div>
  );
}

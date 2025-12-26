import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    {
      name: "description",
      content: "Smart feedback for applying in your dream job",
    },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track your applications & Resume Ratings</h1>
          <h2>Review your submissions and AI powered feedback</h2>
        </div>
      </section>
    </main>
  );
}

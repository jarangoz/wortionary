import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TagList } from "@/components/TagList";

const TAGS = [
  "NFT",
  "Metaverse",
  "Sustainable",
  "Sonder",
  "FOMO",
  "Ghosting",
];

export default function App() {
  return (
    <main className="bg-black min-h-screen text-white" role="main">
      <Header />
      <Hero />
      <TagList title="Trending" tags={TAGS} />
      <TagList title="For you" tags={TAGS} />
    </main>
  );
}
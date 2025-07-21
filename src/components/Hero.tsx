import { SearchBar } from "./SearchBar";

export function Hero() {
  const onSearch = (value: string) => {
    console.log("Searching for:", value);
  };

  return (
    <section
      className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8"
      role="region"
      aria-label="Hero section with background image and search bar"
    >
      <img
        src="/task1/hero-bg.png"
        alt="Abstract digital art representing communication and words"
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Search for words, phrases and meanings
        </h1>
        <div className="w-full max-w-md sm:max-w-xl">
          <SearchBar initialValue="" onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
}
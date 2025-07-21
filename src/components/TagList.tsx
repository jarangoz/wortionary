import { Badge } from "@/components/ui/badge";

interface TagListProps {
  title: string;
  tags: string[];
};

export function TagList({ title, tags }: TagListProps) {
  return (
    <section
      className="mt-8 px-4 sm:px-6 max-w-5xl mx-auto"
      aria-labelledby={`${title.toLowerCase().replace(/\s+/g, '-')}-tags`}
    >
      <h2
        id={`${title.toLowerCase().replace(/\s+/g, '-')}-tags`}
        className="text-white text-lg font-semibold mb-4"
      >
        {title}
      </h2>
      <ul className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <li key={tag}>
            <Badge className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer">
              {tag}
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
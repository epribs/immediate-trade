// app/components/PostCard.tsx
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  title: string;
  summary: string;
  imageUrl: string;
  slug: string; // or an id for the post
}

export default function PostCard({
  title,
  summary,
  imageUrl,
  slug,
}: PostCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white">
      <div className="relative w-full h-48">
        {/* <Image src={imageUrl} alt={title} fill style={{ objectFit: "cover" }} /> */}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{summary}</p>
        <Link className="text-blue-500 hover:underline" href={`/posts/${slug}`}>
          View More
        </Link>
      </div>
    </div>
  );
}

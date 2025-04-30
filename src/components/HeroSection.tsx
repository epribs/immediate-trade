import { Button } from "@heroui/button";
import { Card, CardContent, CardHeader } from "@heroui/card";

export default function HeroSection({ post }: any) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <img
          src={post.featured_media_url}
          alt={post.title.rendered}
          className="w-full h-64 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        <h2
          className="text-3xl font-bold mb-2"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <p
          className="text-gray-700 mb-4"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        <Button as="a" href={`/posts/${post.slug}`}>
          Read More
        </Button>
      </CardContent>
    </Card>
  );
}

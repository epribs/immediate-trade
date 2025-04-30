import { useState } from "react";
import { Button } from "@heroui/button";
import { Card, CardContent } from "@heroui/card";

export default function PostFeed({ initialPosts }: any) {
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAll, setLoadedAll] = useState(false);

  async function loadAll() {
    const res = await fetch(
      `${process.env.WORDPRESS_API_URL}/posts?_embed&per_page=100`
    );
    const all = await res.json();
    setPosts(all);
    setLoadedAll(true);
  }

  return (
    <div className="space-y-6 mb-8">
      {posts.map((post: any) => (
        <Card key={post.id}>
          <CardContent>
            <h4
              className="text-2xl font-bold mb-1"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <p
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <Button
              as="a"
              href={`/posts/${post.slug}`}
              size="sm"
              className="mt-2"
            >
              Read More
            </Button>
          </CardContent>
        </Card>
      ))}
      {!loadedAll && <Button onClick={loadAll}>Load All Posts</Button>}
    </div>
  );
}

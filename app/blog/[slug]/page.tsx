// 1 day
export const revalidate = 86400;

interface Post {
  title: string;
  slug: string;
  content: string;
}

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );
  return posts.map((post) => ({ params: { slug: post.slug } }));
}

async function Post({ params }: Props) {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );
  const post = posts.find((post) => post.slug === params.slug);
  return (
    <div>
      <h1>{post?.title}</h1> <p>{post?.content}</p>
    </div>
  );
}
export default Post;

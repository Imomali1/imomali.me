import { getAllPosts, getPostBySlug, Post } from "../../../lib/posts";
import { notFound } from "next/navigation";

// Define the type for params
interface Params {
  slug: string;
}

// Generate static parameters for pre-rendering
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Page component with proper async handling of params
export default async function PostPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params; // Await the params Promise
  let post: Post;
  try {
    post = getPostBySlug(resolvedParams.slug); // Use resolved params
  } catch (error) {
    notFound(); // Redirect to 404 if the post isn’t found
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-6">{post.date}</p>
      <div
        className="prose prose-lg text-gray-700"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
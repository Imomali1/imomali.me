import { getAllPosts, Post } from "../lib/posts";
import Link from "next/link";

export default async function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">My Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <span className="text-xl text-blue-600 hover:underline cursor-pointer">
                {post.title} -{" "}
                <span className="text-gray-500">{post.date}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
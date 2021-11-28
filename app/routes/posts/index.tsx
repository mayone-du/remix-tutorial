import { Link, LoaderFunction, useLoaderData } from "remix";
import { Post } from "~/types/post";

export let loader: LoaderFunction = async (): Promise<Post[]> => {
  const data: Post[] = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
  return data;
};

export default function Posts() {
  let posts: Post[] = useLoaderData();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.id.toString()}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

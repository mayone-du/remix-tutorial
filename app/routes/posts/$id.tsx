import { LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData } from "remix";
import { Post } from "~/types/post";

export const loader: LoaderFunction = async (_) => {
  console.log("_", _);
  const id = _.params.id;
  console.log(id);
  const data: Post = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).json();
  return data;
};

export default function PostId() {
  const post: Post = useLoaderData();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

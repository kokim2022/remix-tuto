
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import axios from "axios";
/**
 * loader is used to fetch data from the server side.
 * @returns 
 */
export const loader: LoaderFunction = async () => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    return response.data
  } catch (err) {
  }
};

export default function Index() {
  // useLoaderData hook is used to connect with above loader hook.
  const data = useLoaderData()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <pre>{ JSON.stringify(data, null, 3) }</pre>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}

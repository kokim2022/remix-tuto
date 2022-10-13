
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
      `https://api.coindesk.com/v1/bpi/currentprice.json`
    );
    return response.data.bpi
  } catch (err) {
  }
};

export default function Btc() {
  // useLoaderData hook is used to connect with above loader hook.
  const data = useLoaderData()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <pre>{ JSON.stringify(data, null, 3) }</pre>
      <h1>Bitcoin Prices Today</h1>
    </div>
  );
}

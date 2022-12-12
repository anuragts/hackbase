import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("api/user/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status != 200) {
      setError(true);
      setLoading(false);
      return;
    }
    const result = await response.json();

    setLoading(false);
    setData(result);
  };
  return (
    <div className="">
      <Head>
        <title>Hackbase</title>
        <meta name="description" content="Somthing using supabase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-xl text-center my-20">Hello World</p>
      <p className="text-2xl text-center">
        Open <code className="bg-green-600 p-1 rounded">pages/index.tsx</code>{" "}
        to start editing.
      </p>
      <div className="mt-20 text-center">
        <a
          href="/register"
          className="bg-pink-600 text-2xl px-5 py-4 rounded-full text-center"
        >
          Register
        </a>
      </div>
      <form onSubmit={handleSubmit} className="text-center my-20">
        <button type="submit" className="bg-blue-600 text-2xl px-5 py-4 rounded-full text-center">Get Users</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">Error </p>}
      {data && <p className="text-center text-xl my-20">{JSON.stringify(data)}</p>}
    </div>
  );
}

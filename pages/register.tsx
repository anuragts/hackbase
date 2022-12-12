import { ReactHTMLElement, useState } from "react";

export default function register() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const dataObj = Object.fromEntries(data);
    setLoading(true);

    const response = await fetch("api/user/create", {
      method: "POST",
      body: JSON.stringify({ email: dataObj.email, name: dataObj.name }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status != 200) {
        setError(true);
        setLoading(false);
        return ;
        
    }
    const result = await response.json();

    setLoading(false);
    setData(result);
  };

  return (
    <div>
      Register a user here
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <button type="submit">Submit</button>
      </form>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">Error </p>}
        {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}

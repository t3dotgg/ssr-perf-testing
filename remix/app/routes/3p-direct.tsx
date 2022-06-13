import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async (req) => {
  const startedAt = new Date();
  const githubProfile = await (
    await fetch("https://api.github.com/users/theobr")
  ).json();

  const endedAt = new Date();

  const timeElapsed = endedAt.getTime() - startedAt.getTime();

  console.log("Time to fetch github info", timeElapsed);

  return { startedAt: startedAt.getTime(), timeElapsed, ...githubProfile };
};

export default function Index() {
  const data = useLoaderData();

  console.log(data);

  const renderedAt = new Date();

  const timeElapsed = renderedAt.getTime() - data.startedAt;

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Profile: {data.login}</h1>
      <h2>Time to render: {timeElapsed}</h2>
    </div>
  );
}

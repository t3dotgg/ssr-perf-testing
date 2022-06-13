import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Content from "~/components/render-content";

export const loader: LoaderFunction = async (context) => {
  const startedAt = new Date();
  const { origin } = new URL(context.request.url);
  const githubProfile = await fetch(`${origin}/github-cache-mirror`).then(
    (res) => res.json()
  );

  const endedAt = new Date();

  const timeElapsed = endedAt.getTime() - startedAt.getTime();

  console.log("Time to fetch github info", timeElapsed);

  return {
    startedAt: startedAt.getTime(),
    endedAt: endedAt.getTime(),
    timeElapsed,
    ...githubProfile,
  };
};

export default function Index() {
  const data = useLoaderData();

  return <Content {...data} />;
}

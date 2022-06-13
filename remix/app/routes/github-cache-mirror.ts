export const loader = async () => {
  const ghResponse = await fetch("https://api.github.com/users/theobr");

  return new Response(ghResponse.body, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "stale-while-revalidate=60, s-maxage=60",
    },
  });
};

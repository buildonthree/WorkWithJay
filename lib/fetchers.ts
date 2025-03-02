// fetchFunctions.ts

export const fetchProjects = async () => {
  const baseUrl =
    typeof window !== "undefined" ? "" : process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/fetch-project-posts`);
  const data = await res.json();
  return data;
};

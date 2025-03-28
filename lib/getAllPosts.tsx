export default async function getAllPosts() {
  const res = await fetch(
    "https://raw.githubusercontent.com/DmytroCrawford/UpShft-Updates/refs/heads/main/waitlist-posts.json?timestamp=20251002"
  );

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}

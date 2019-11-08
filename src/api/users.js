export async function get() {
  const response = await fetch("/api/users");
  return response.json();
}

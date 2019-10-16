export async function create(body) {
  const response = await fetch("/api/plants", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response.json();
}

export async function get() {
  const response = await fetch("/api/plants");
  return response.json();
}

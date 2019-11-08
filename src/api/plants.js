export async function create(body) {
  const formData = new FormData();
  Object.entries(body).forEach(([key, value]) => {
    formData.append(key, value);
  });
  const response = await fetch("/api/plants/alternative", {
    method: "POST",
    body: formData
  });
  return response.json();
}

export async function createImage(body) {
  const response = await fetch("/api/plants/images", {
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

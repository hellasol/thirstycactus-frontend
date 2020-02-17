
//create plant
export async function create(body) {
  const formData = new FormData();
  Object.entries(body).forEach(([key, value]) => {
    formData.append(key, value);
  });
  const response = await fetch(`/api/plants`, {
    method: "POST",
    body: formData
  });
  return response.json();
}

//discover label
export async function discoverLabel(id) {
  const response = await fetch(`/api/plants/${id}/discover-label`, {
    method: "POST",
    });
  return response.json();
}

//update plant with vision api labels
export async function update(id, body) {
  const formData = new FormData();
  Object.entries(body).forEach(([key, value]) => {
    formData.append(key, value);
  });
  const response = await fetch(`/api/plants/${id}`, {
    method: "PUT",
    body: formData
  });
  return response.json();
}

//trefle 
export async function trefle(id) {
  const response = await fetch(`/api/plants/${id}/trefle-search`, {
    method: "POST",
  });
  return response.json();
}

export async function createImage(body) {
  const response = await fetch(`/api/plants/images`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response.json();
}

//get all plants
export async function get() {
  const response = await fetch(`/api/plants`);
  return response.json();
}

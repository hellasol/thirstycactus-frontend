/**
 * Get comments
 * @param {String} plantId
 */
export async function findByPlantId(plantId) {
  const response = await fetch(`/api/comments?plantId=${plantId}`);
  return response.json();
}

/**
 * Add comment
 * @param {String} comment
 * @param {String} plantId
 */
export async function add(comment, plantId) {
  const response = await fetch(`/api/comments`, {
    method: "POST",
    body: JSON.stringify({ comment, plantId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

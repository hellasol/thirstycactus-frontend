import { config } from "../config";

export async function get() {
  const response = await fetch(`${config.apiUrl}/api/users`);
  return response.json();
}

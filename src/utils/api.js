const BASE_URL = "http://localhost:3001";

const headers = {
  "Content-Type": "application/json",
};

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getItems = () => {
  return fetch(`${BASE_URL}/items`, {
    headers,
  }).then(checkResponse);
};

export const addItem = ({ name, imageUrl, weather }) => {
  return fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers,
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(checkResponse);
};

export const updateUser = ({ name, avatar }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar }),
  }).then(checkResponse);
};

export const removeItem = (itemID) => {
  return fetch(`${BASE_URL}/items/${itemID}`, {
    method: "DELETE",
    headers,
  }).then(checkResponse);
};

export { checkResponse as handleServerResponse };
export { checkResponse };

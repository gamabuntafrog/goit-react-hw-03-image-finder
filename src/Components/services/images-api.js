const API = {
  url: "https://pixabay.com/api/",
  key: "24171560-aa5fd197445269f608c2688cc",
  other: "image_type=photo&orientation=horizontal&per_page=12",
};

function fetchImages(name, page) {
  return fetch(
    `${API.url}?q=${name}&page=${page}&key=${API.key}&${API.other}`
  ).then((res) => res.json());
}

const api = {
  fetchImages,
};

export default api;

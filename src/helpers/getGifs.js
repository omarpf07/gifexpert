export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=VtnzzBdQCq3n7nu5R7m5oIn0KYBM5yZ2&q=${category}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((image) => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url,
  }));
  return gifs;
};

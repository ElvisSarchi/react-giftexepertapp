export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=WWKythHdWI5YABSRxrY3Ewix8kyQ4ivw`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  //console.log(data);
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized.url,
  }));
  console.log(gifs);
  return gifs;
};

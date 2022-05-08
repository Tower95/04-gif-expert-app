export const getGif = async (search, limit = 10) => {

  let apy_key = 'jJLZKM3OnTkgYCQrl05B39jI2s0bKDLl'
  let url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(search)}&limit=${limit}&api_key=${apy_key}`
  const resp = await fetch(url);
  let { data } = await resp.json();

  const gifs = data.map(({ title, id, images }) => {
    return {
      id,
      title,
      url: images.downsized_medium.url
    }
  })

  return gifs

}

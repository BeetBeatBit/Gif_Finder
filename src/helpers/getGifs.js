const giphy_api_key = import.meta.env.VITE_GIPHY_API_KEY;

export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${giphy_api_key}&q=${category}&limit=3`

    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    ))

    // console.log(gifs)
    return gifs
}
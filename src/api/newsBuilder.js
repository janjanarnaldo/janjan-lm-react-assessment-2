export const newsBuilderForUI = data => {
  return {
    title: data.title,
    description: data.description,
    url: data.url,
    urlToImage: data.urlToImage,
  };
}
const getImageUrl = (image) => {
  return image.includes('https://')
    ? image
    : `https://movie-library-test.herokuapp.com/${image}`;
};

export default getImageUrl;

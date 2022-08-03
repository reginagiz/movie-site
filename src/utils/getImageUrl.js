const getImageUrl = (image) => {
  return image.includes('https://') ? image : `http://localhost:5000/${image}`;
};

export default getImageUrl;

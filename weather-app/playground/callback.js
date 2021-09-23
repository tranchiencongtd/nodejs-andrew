const findLocation = (callback) => {
  setTimeout(() => {
    return callback({ longitude: 0, latitude: 0 });
  }, 2000);
};

const data = findLocation((response) => {
  return response;
});

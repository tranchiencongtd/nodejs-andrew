// window.navigator.geolocation.getCurrentPosition(
//   (position) => {
//     this.setState({ lat: position.coords.latitude });
//   },
//   (err) => {
//     this.setState({ errorMessage: err.message });
//   }
// );

window.navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position);
  },
  (err) => {
    console.log(err);
  }
);

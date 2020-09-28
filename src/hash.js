// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    console.log("this is initial:", initial);
    console.log("this is item", item);
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      console.log("initial after if: ", initial[parts[0]]);
    }
    return initial;
  }, {});
window.location.hash = "";

export default hash;

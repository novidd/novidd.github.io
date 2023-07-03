var animation = bodymovin.loadAnimation({
  conatiner: document.getElementsById("topographicmap"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "data.json"
})
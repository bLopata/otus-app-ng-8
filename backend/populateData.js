const request = require("request");

var opts = {
  url:
    "https://gist.githubusercontent.com/edotus/bd63eefb9b4b1eacb641811f9a1a780d/raw/60e04520584f7a436917b0d5be2b6c18f039fadb/students_classes.json",
  method: "GET",
  json: true
};

let data = fs.createWriteStream("./schoolData.json", {
  defaultEncoding: "utf8"
});

data.once("error", err => console.log(err));

data.once("end", () => console.log("finished"));

request(opts)
  .once("error", err => console.log(`Request Error: ${err}`))
  .pipe(data);

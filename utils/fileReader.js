var fs = require("fs");
function readFileSync(src) {
  return fs.readFileSync(src, "utf8");
}

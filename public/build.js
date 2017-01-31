var stealTools = require("steal-tools");

var buildPromise = stealTools.build({
    config: __dirname + "/package.json!npm"
},{
    sourceMaps: true,
    sourceMapsContent: true,
    bundleAssets: true,
    minify: true,
    watch: false
});

module.exports = buildPromise;
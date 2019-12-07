const path = require("path");
const ExamplePlugin = require("./example-plugin");  // import my own plugin to be used in the bundling 
const webpack = require("webpack");                 // import plugin called webpack itself
module.exports = { // trying to require this config file by default. reading the properties that are exported. how to bundle application
    entry: "./src/index.js", // first kick off at start of app
    output: {                        // what to create and what the name of this bundle will be
        filename: "bundle.js", 
        path: path.join(__dirname, "build")   // place where when finish building. Need absolute path
    }, 
    module: {             // loaders. core concept. 
        rules:[             
            /* {
                test: /\.js$/,
                use: "babel-loader"  //everytime see .js file, use babel loader
            }, 
            {
                test: /\.css$/,   // ~, use style-loader(css-loader(.css)). 
                use: [ 
                    "style-loader", // last "transformation" first
                    "css-loader"
                ]                  
            },  */
            {
                test: /\.jpe?g$/,
                use: [  /* "file-loader" */ // file-loader works too
                    {loader: "url-loader",  // aternative representation of loader, as an object with keys like option
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ]
    }, 
    plugins: [       // loaders perform transformations on a single file just before adding to dependency graph
                    //  plugins are classes. 
                    // plugins provide more functionality: e.g. minify code.
                    // You can make your own plugins
                    //  read more on plugin how it works in example-plugin.js
                    
        new ExamplePlugin(),    // Our plugin does not have any args in its constructor hence why () is empty
        new webpack.ContextReplacementPlugin()   // sample plugin that you can use.
    ]
}

// Here is a summary of the "module.rules" key:
// goal of webpack: manage every asset even if it is not bundled together
// to achieve this goal, we want to convert any type of asset (e.g. any .css files) we wish, to a js file that
// we can ultimately add into the dependency graph, and load as a bundle
// to accomplish this "conversion", we require loaders, which perform some type of transformation on our source file
// note the type of transformation depends on the loader we use!
// note also that the transformation that we want to perform, the way we add non-bundled assets to our dependency
// graph, depends on what we define in "rules", found as a key in "module"


// Here is a process of including plugins:
// 1. add reference to your plugin
// 2. in plugin key, create new object of your plugin

// Summary:
// Covered 4 core concepts of webpack: input, output files, loaders and plugins
class ExamplePlugin{
    apply(compiler){
        compiler.plugin("run", (compiler, callback) => {   
            console.log("my webpack plugin is running");
            callback()
        });
    }
}
module.exports = ExamplePlugin;

// What a plugin does?
// Essentially, it pays attention to a plugin flag, in this case "run"
// then it executes some functions.. in this case console.log
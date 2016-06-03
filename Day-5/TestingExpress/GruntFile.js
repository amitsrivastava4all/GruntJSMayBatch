module.exports=function(grunt){
    //npm install grunt-express-server --save-dev
    grunt.loadNpmTasks('grunt-express-server');
    //npm install grunt-contrib-watch --save-dev
    grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.initConfig({
       watch: {
    express: {
      files:  [ 'dev/*.js' ],
      tasks:  [ 'express:prod' ],
      options: {
        spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded 
      }
    }
  },
  express: {
    
    dev: {
      options: {
        script: 'dev/server.js'
      }
    },
    prod: {
      options: {
        script: 'production/server.js',
        
      }
    },
    /*test: {
      options: {
        script: 'path/to/test/server.js'
      }
    }*/
  }
});
    grunt.registerTask("default",["express:prod","watch"]);
}
// Define and Export the Grunt Module
// Define the Wrapper Function 
module.exports=function(grunt){
    // grunt is a predefine object
    // it is used to config the tasks
    // it is used to register the task
    // it is used to load the plugins
    
    // 1st Example
    // Creating a Task and Pass Arguments
    /*grunt.registerTask("default",function(name){
       grunt.log.writeln("Hello Grunt "+name); 
    });*/
    
    //2nd Example
    // Need Project Specific Configuration
    
   /*  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**///*.js', 'test/**/*.js'],
     /* options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });*/
    
    /*grunt.initConfig({
     person:{
         firstName:'Amit',
         lastName:'Srivastava',
         fullName:function(){
           return this.firstName+" "+this.lastName;  
         }
     }   
    });
    grunt.registerTask("default",function(greet){
        grunt.log.writeln(greet+" "+grunt.config.get("person").fullName());
    });*/
    
  //3rd Example - Reading Parameters from Config File
  // grunt.file.readJSON('package.json')
 /* grunt.initConfig(grunt.file.readJSON("config.json"));
  grunt.registerTask("default",function(greet){
      grunt.log.writeln(greet+" "
                        +grunt.config.get("person").firstName
                       +grunt.config.get("person").lastName);
  });*/
    
    // 4th Example Watch Plugin
    // npm install grunt-contrib-watch --save-dev
    grunt.initConfig({
        watch:{
            //files:["js/first.js","data.txt"],
            files:["js/*.js","*.txt"],
            tasks:["mywatchertask","uglify","concat"]
        },
        // npm install grunt-contrib-uglify --save-dev
        uglify:{
            dist:{
                files:{
                    "dist/app.min.js":"js/*.js"
                }
            }
        },
        concat: {
            options: {
                separator: ';',
            },
        dist: {
            src: ['js/first.js', 'js/second.js'],
            dest: 'dist/built.js',
    },
  }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-contrib-watch"); // Loading a Plugin
    grunt.registerTask("mywatchertask",function(){
        grunt.log.writeln("Hey I am Watching It...");
    });
}
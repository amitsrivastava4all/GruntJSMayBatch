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
        pkg:grunt.file.readJSON("config.json"),
        
        watch:{
            //files:["js/first.js","data.txt"],
            files:["<%=pkg.input%>","<%=pkg.txt"],
            tasks:["mywatchertask","clean","jshint","uglify","concat","cssmin"]
        },
        karma : {
            options:{
                files:['lib/*.js']
            },
            unit:{
                files:[
                    {src:['test/*.js']}
                ]
            },
            continuous:{
                browsers:['PhantomJS']
            }
        },
        
        clean:{
            build:{
                src:['dist']  
            }
        },
        
        jshint:{
            all:['js/*.js']
        },
        cssmin:{
          target: {
            files: {
            'output.css': "[<%=pkg.csspath]"
            }
          }
        },
        
        // npm install grunt-contrib-uglify --save-dev
        uglify:{
            dist:{
                files:{
                    "<%=pkg.uglifypath%>":"<%=pkg.input%>"
                }
            }
        },
        concat: {
            options: {
                separator: ';',
            },
        dist: {
            src: ['js/first.js', 'js/second.js'],
            dest: '<%=pkg.concatpath%>',
    },
  }
    });
    grunt.loadNpmTasks("grunt-karma");
     grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-contrib-watch"); // Loading a Plugin
    grunt.registerTask("mywatchertask",function(){
        grunt.log.writeln("Hey I am Watching It...");
    });
    
    // *************************************************************
    // 1st Plugin grunt-contrib-clean
    // npm install grunt-contrib-clean --save-dev
    /*grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.initConfig({
        clean:{
            build:{
                src:['dist']  
            }
        }
    });
    grunt.registerTask('build',['clean:build']);*/
    
    // 2nd Plugin jshint
    // npm install grunt-contrib-jshint --save-dev
    /*grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.initConfig({
        jshint:{
            all:['js/*.js']
        }
    });*/
    
    //3rd Plugin npm install grunt-contrib-cssmin --save-dev
    /*grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.initConfig({
        cssmin:{
          target: {
            files: {
            'output.css': ['css/*.css']
            }
          }
        }
    });*/
    //4th Plugin Using Karma
    // npm install grunt-karma --save-dev
    grunt.loadNpmTasks("grunt-karma");
    grunt.initConfig({
        karma : {
            options:{
                files:['lib/*.js']
            },
            unit:{
                files:[
                    {src:['test/*.js']}
                ]
            },
            continuous:{
                browsers:['PhantomJS']
            }
        }
    });
    //grunt.registerTask('default',['karma']);
    
    
    //5th Using Jasmine
    // npm install grunt-contrib-jasmine --save-dev
    
}
// Step - 1 Export With Wrapper Function and it has the 
// grunt object
module.exports=function(grunt){
// Step - 2 Config all the plugins here    
grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'), // pick all the plugins from package.json
    concat:{
        dist:{
            src:['js/*.js'], // My Source Location
            dest:'dist/build.js'
        }
    },
    htmlmin:{
        dist:{
            options:{
                removeComments:true,
                collapseWhiteSpace:true
            },
            files:{
                'release/index.html':'views/index.html'
            }
        }
    },
    uglify:{
        dist:{
            files:{
                'dist/build.min.js':['dist/build.js']
            }
        }
    },
    imagemin:{
        options:{
            cache:false
        },
        dist:{
            files:[{
                expand:true,
                cwd:'images/',
                src:['**/*.{png,jpg,gif}'],
                dest:'dist/'
            }]
        }
    }
    
    
});
    //Step-3 load all the plugins 
grunt.loadNpmTasks('grunt-contrib-concat'); // Loading the Plugin
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-htmlmin') ; // Manual Approach for Loading the Plugins one by one

//Step-4 Register your tasks here    
grunt.registerTask('default',['concat','uglify','imagemin','htmlmin']) ;   

    
}
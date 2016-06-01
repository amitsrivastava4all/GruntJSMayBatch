// Step -1 Export the Module with the Wrapper function
module.exports = function(grunt){
    require('load-grunt-config')(grunt);
    grunt.registerTask("default",['concat','uglify','imagemin','htmlmin']);
}

// Using npm install load-grunt-task --save-dev
// npm install load-grunt-config --save-dev
// No Longer Required this is done by load-grunt-config
/*grunt.loadNpmTasks('grunt-contrib-concat'); // Loading the Plugin
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-htmlmin') ; */
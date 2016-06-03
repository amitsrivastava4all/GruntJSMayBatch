module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-modernizr-builder');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    postcss:{
        options:{
        processors:[
        require('pixrem')(),
        require('autoprefixer')(),
        require('cssnano')()
    ]
    },
    dist:{
       src:'css/*.css',
       dest:'test.css'                
    }
    },
    sprite:{
        all:{
            src:'images/*.png',
            dest:'release/spritesheet.png',
            destCss:'release/css/sprites.css'
        }
    },
    uncss:{
        dist:{
            files:{
                'release/css/uncss.css':['views/index.html']
            }
        }
    },
    modernizr_builder:{
        build:{
            options:{
                features:'applicationcache,audioloop',
                options:'atRule,prefixedCSS,testStyles',
                dest:'release/modernizr-custom.js'
            }
        }
    },
    concurrent:{
        target:['modernizr_builder','sprite','uncss']
    }    
    });
    
    // Sequential Way
    /*grunt.registerTask("default",['postcss','sprite:all',"uncss","modernizr_builder"]);
    */
    // Concurrent (Parallel Way)
    grunt.registerTask("default",["concurrent:target"]);
// Most UseFul Plugins
    // 1 grunt-postcss
    // 2. Sprite Images
    // 3. uncss 
    // 4. modernizer_builder
    // 5. concurrent
}
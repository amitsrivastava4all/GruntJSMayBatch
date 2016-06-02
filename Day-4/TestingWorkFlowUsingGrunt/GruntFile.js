// Create Testing WorkFlow
// Grunt --> Karma ---> Jasmine
module.exports=function(grunt){
    
    /*var nodemailer = require('nodemailer');

var gmailTransport = nodemailer.createTransport('smtps://youremailid:urpwd');*/
    
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        karma:{
            unit:{
                configFile:'karma.conf.js'
            }
        },
         /*notify_hooks: {
    options: {
      enabled: true,
      max_jshint_notifications: 5, // maximum number of notifications from jshint output 
      title: "Project Name", // defaults to the name in package.json, or will use project directory's name 
      success: false, // whether successful grunt executions should be notified automatically 
      duration: 3 // the duration of notification in seconds, for `notify-send only 
    }
  },*/
        notify: {
    
    karma: {
      options: {
        title: 'Karma Complete',  // optional
        message: 'Karma With Jasmine is Tested', //required
      }
    }
   
  }
  /*      nodemailer: {

    options: {
      transport: gmailTransport,
      message: {
        subject: 'A test e-mail',
        text: 'Plain text message',
        html: '<body><h1>HTML custom message</h1></body>',
      },
      recipients: [
        {
          email: 'jane.doe@gmail.com',
          name: 'Jane Doe'
        }
      ]
    },

    inline: {  use above options },

    external: {
      src: ['email-body.html']
    }
  }*/
        
    });
   
    grunt.loadNpmTasks('grunt-notify');
    // grunt.task.run('notify_hooks');
    grunt.loadNpmTasks('grunt-karma');
    //grunt.loadNpmTasks('grunt-nodemailer');
    //grunt.registerTask('default',['karma','nodemailer']);
    grunt.registerTask('default',['notify:karma']);
    
}
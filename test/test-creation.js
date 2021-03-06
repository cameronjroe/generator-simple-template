'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('simple-template generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('simple-template:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            'index.html',
            'css/style.css',
            'scss/style.scss',
            'js/main.js',
            'package.json',
            'bower.json',
            '.gitignore',
            'Gruntfile.js',
        ];

        helpers.mockPrompt(this.app, {
            'templateName': true
        });

        this.app.options['skip-install'] = true;
        
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});

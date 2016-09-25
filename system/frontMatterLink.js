var fs = require('fs');
var p = require('path');
var fm = require('front-matter');

var extension = ".md";
var foldersToScan = [
    './1ste-jaar',
    './2de-jaar',
    './3de-jaar'
];

var regex = new RegExp("\n(---)", 'm');

var app = {
    readdir: function(path) {
        fs.readdir(path, function(err, files) {
            if (err) throw err;

            app.parseFiles(files, path);
        });
    },
    parseFiles: function(files, path) {
        files.forEach(function(file) {
            var fullpath = path + '/' + file;
            var stats = fs.statSync(fullpath);

            if (stats.isFile() && p.extname(file) == extension) {
                app.parseFile(fullpath);
            } else if (stats.isDirectory()) {
                app.readdir(fullpath);
            }
        });
    },
    parseFile: function (path) {
        var contents = fs.readFileSync(path, 'utf8');
        var attributes = fm(contents).attributes;

        if ( ! attributes['link']) {
            var match = regex.exec(contents);
            if (match) {
                contents = contents.replace(match[0], [
                    '\n',
                    "link: " + app.link(path),
                    '\n',
                    "---"
                ].join(''));

                console.log("Adding links to", path);

                fs.writeFileSync(path, contents, 'utf8');
            }
        }
    },
    link: function(path) {
        return "http://robinmalfait.com" + path.substr(1);
    }
};
module.exports = function() {
    console.log([
        "Let me try to add all those links...",
        "------------------------------------",
        ""
    ].join('\n'));

    foldersToScan.forEach(app.readdir);
};

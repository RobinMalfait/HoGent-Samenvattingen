var fs = require('fs');
var p = require('path');
var http = require('follow-redirects').http;

var DROPLR_REGEX = /\!\[\]\((https?:\/\/d\.pr\/i\/(([a-zA-Z0-9]*)\+))\)/gm;
var DROPLR_LINK = "http://d.pr/i/{0}+";
var NEW_IMAGE_LINK = "https://robinmalfait.com/afbeeldingen/droplr/{0}.png";

var extension = ".md";
var foldersToScan = [
    './1ste-jaar',
    './2de-jaar'
];
var imageDestination = "./afbeeldingen/droplr";

console.log([
    "Let me try to fix all those images...",
    "-------------------------------------",
    ""
].join('\n'));

RegExp.prototype.execAll = function(string) {
    var match = null;
    var matches = new Array();
    while (match = this.exec(string)) {
        var matchArray = [];
        for (i in match) {
            if (parseInt(i) == i) {
                matchArray.push(match[i]);
            }
        }
        matches.push(matchArray);
    }
    return matches;
}

var fixes = 0;

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

        var matches = DROPLR_REGEX.execAll(contents);

        if (matches.length > 0) {
            matches.forEach(function(match) {
                app.fetch(match, function(err, response) {
                    if (err) {
                        console.error("Error: OEPS");
                    } else {
                        var fix = "![](" + (NEW_IMAGE_LINK.replace('{0}', match[3])) + ")"
                        contents = contents.replace(match[0], fix);
                        fs.writeFileSync(path, contents, 'utf8');
                        console.log("Fixing: " + match[0] + " to " + fix);
                    }
                });
            });
        }
    },
    fetch: function(link, cb) {
        var markdown = link[0],
            fullLink = link[1],
            codeWithPlus = link[2],
            codeWithoutPlus = link[3];

        var filePath = imageDestination + '/' + codeWithoutPlus + '.png';
        var downloadLink = DROPLR_LINK.replace('{0}', codeWithoutPlus);

        if (fs.existsSync(filePath)) {
            return cb(null, codeWithoutPlus + '.png');
        }

        var request = http.get(downloadLink, function(res) {
            if (res.statusCode < 200 || res.statusCode > 299) {
                console.error("Error: ", res.statusCode);
                cb({
                    statusCode: res.statusCode,
                }, null);
            } else {
                var imagedata = '';

                res.setEncoding('binary');

                res.on('data', function(chunk) {
                    imagedata += chunk
                })

                res.on('end', function() {
                    fs.writeFile(filePath, imagedata, 'binary', function(err) {
                        if (err) cb(err, null);

                        cb(null, codeWithoutPlus + '.png');
                    })
                })
            }
        }).on('error', function(e) {
            cb(e, null);
        });
    }
};

foldersToScan.forEach(app.readdir);

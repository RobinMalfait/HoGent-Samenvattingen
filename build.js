var droplr = require('./system/droplr');
var frontMatterLink = require('./system/frontMatterLink');

// Run Droplr Image fixes
droplr();

// Add "link" in the front-matter
frontMatterLink();

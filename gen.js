var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var collections = require('metalsmith-collections');
var filenames = require('metalsmith-filenames');
var snippet = require('metalsmith-snippet');

metalsmith(__dirname)
.use(collections({
  articles: {
    pattern: 'articles/*.md',
    reverse: true
  }
}))
.use(markdown())
.use(snippet({
  maxLength: 400
}))
.use(filenames())
.use(layouts({
  engine: 'handlebars',
  partials: 'layout_partials'
}))
.destination('http')
.build(function(err) {
  if(err) throw err;
  console.log('Build finished!');
});

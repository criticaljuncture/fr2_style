## FR2 Style

This repo is a simplification of the FR2 project that powers FederalRegister.gov
and is meant to be used for UI development (CSS, JS) without the need to run the
full project (databases, etc).

This project uses a layout that includes all css/js resources from
FederalRegister.gov and renders static files into that layout.

Static files are all scoped under the class ".bootstrap-scope" so that only new
portions of the design inherit the bootstrap settings. The mixins and variables
from bootstrap are available everywhere however.


### Usage

#### Starting the server

* Run `bundle install` from the project root.
* Run `rails s` from the project root.


#### Static files

Static files should be placed in `app/views/static_files`. To view a file
go to `http://localhost:3000/static_files/name_of_your_static_file`.

Static files should be used to place developed components into their
appropriate contexts on pages as a whole. Most of the time you will
first want to develop the component in isolation using the styleguide
framework detailed in the next section.

These 'static' pages are actually .html.erb files so they have the additional
benefits of using ruby code for loops, partials, etc.


#### Components via Styleguides

This project includes the 'stylin' gem (http://rubygems.org/gems/stylin) to
encourage the use of small components that work in isolation before they are
added to the larger page as a whole. Documentation is available at
http://github.com/criticaljuncture/stylin.

In brief your CSS should be broken down into smaller component files and
placed into app/assets/stylesheets (most often in the components folder in
that directory).

CSS component files should have a KSS comment block at the top. See
https://github.com/kneath/kss/blob/master/SPEC.md for details.

Each css file that is has a KSS comment block should also have an example html
file placed in `app/stylguides`. It should have the same base name as the css file
(eg example.css.scss should have a cooresponding example.html file). This html will
be used to generate the styleguide automatically.

Styleguides can be accessed at `http://localhost:3000/static_files/stylguides`.

By first building components via the styleguide framework css can be easily modularized
and less dependent on it's context in a page as a whole.


#### Font Icons

The FR2 project uses font based icons. They have already been added to this projects
asset pipeline. Using our account at http://icomoon.com/app you can add additional
icons as neccessary. Once you've generated the font from the icomoon app, follow the
process below to update them in this repo.

The actual font files (in the 'fonts' folder in the zip file from icomoon) should be
placed in `app/fonts`.

Open the file named 'style.css' and copy everything below the @font-face block
(generally line 11 and down). Replace the content of
`app/assets/stylesheets/fonts/_icons.scss` with what you copied.

const { src, dest, series } = require('gulp');

function copyIcons() {
	return src('nodes/**/*.png')
		.pipe(dest('dist/nodes'));
}

function copyTranslations() {
  return src('translations.pot')
    .pipe(dest('dist'));
}

exports.default = series(copyIcons, copyTranslations);

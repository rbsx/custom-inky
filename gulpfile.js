var gulp = require('gulp');
var inky = require('inkypad');	

gulp.task('default', function(){
	gulp.src('./*.html')
		.pipe(inky())
	    .pipe(gulp.dest('./build'));
});
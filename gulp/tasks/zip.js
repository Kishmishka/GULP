import {deleteAsync} from 'del';
import zipPlugins from "gulp-zip";

export const zip= () =>{
   deleteAsync(`./${app.path.rootFolder}.zip`)
   return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
   .pipe(zipPlugins(`${app.path.rootFolder}.zip`))
   .pipe(app.gulp.dest('./'));
   
}
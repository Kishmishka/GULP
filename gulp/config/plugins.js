import replace from "gulp-replace";
import notify from "gulp-notify";
import browsersync from "browser-sync";
import newer from "gulp-newer";
import ifPlugin from "gulp-if";


export const plugins = {
   if: ifPlugin,
   newer:      newer,
   replace:    replace,
   notify:     notify,
   browsersync:browsersync,
}
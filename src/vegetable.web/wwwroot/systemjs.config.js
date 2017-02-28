(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'lib/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the js/app folder
      app: 'js/app',

      // angular bundles
      '@angular/core': 'npm:angular2/core/bundles/core.umd.js',
      '@angular/common': 'npm:angular2/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:angular2/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:angular2/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:angular2/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:angular2/http/bundles/http.umd.js',
      '@angular/router': 'npm:angular2/router/bundles/router.umd.js',
      '@angular/forms': 'npm:angular2/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
      'moment': 'npm:moment'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      moment: {
          defaultExtension: 'js'
      }
    }
  });
})(this);
const deployDir = './dist';
let DEPLOY = true;

/* webclient only */
const copyTheseFilesToDist = [
    './webclient/*.ico',
    './webclient/*.png',
    './common/app-icon/*',
    './webclient/sw.js'
];

const orderData = [
    './data/*',
    './images/*'
];

const dontVulcanizeTheseFiles = [
    './bower_components/webcomponentsjs/custom-elements-es5-adapter.js',
    './bower_components/webcomponentsjs/webcomponents-lite.js'
];

var argv = require('yargs').argv;
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var crisper = require('gulp-crisper');
var debug = require('gulp-debug');
var eslint = require('gulp-eslint');
var eslintConfig = require('./.eslint.json');
var filter = require('gulp-filter');
var ghPages = require('gulp-gh-pages');
var git = require('git-rev-sync');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var inquirer = require('inquirer');
var parse = require('parse-git-config');
var merge = require('gulp-merge');
var minifyCss = require('gulp-clean-css');
var minifyHtml = require('gulp-minify-html');
var replace = require('gulp-replace');
var sequence = require('gulp-sequence');
var uglify = require('gulp-uglify');
var vulcanize = require('gulp-vulcanize');

var version = JSON.parse(require('fs').readFileSync('./package.json')).version;

gulp.task('default', ['vulcanize', 'copy-files']);

gulp.task('copy-files', ['clean'], function() {
    return merge(
        gulp.src([...orderData, ...dontVulcanizeTheseFiles], {base: './'})
            .pipe(gulp.dest(deployDir)),
        gulp.src([...copyTheseFilesToDist])
            .pipe(replace('INSERT_SHA', git.short()))
            .pipe(debug('copied files'))
            .pipe(gulp.dest(deployDir))
    );
});

gulp.task('copy-files-ext', ['vulcanize-ext'], function() {
    return merge(
        gulp.src([...dontVulcanizeTheseFiles], {base: './'}),
        gulp.src(['./chrome_extension/manifest.json', './chrome_extension/common/app-icon/*png'], {base: './chrome_extension'}),
        gulp.src('./chrome_extension/contentScript.js')
            .pipe(transpile())
            .pipe(browserify())
    ).pipe(gulp.dest(extDir));
});

function transpile() {
    return babel({
        presets: ['es2015'],
        plugins: [
            'async-to-promises'
        ],
        ignore: [
            '*custom-elements-es5-adapter.js'
        ],
        compact: true
    });
}

function vulc(src) {
    var jsFilter = filter(['**/*.js'], {restore: true});
    var htmlFilter = filter(['**/*.html'], {restore: true});

    return gulp.src(src)
        .pipe(vulcanize({
            excludes: dontVulcanizeTheseFiles,
            stripComments: true,
            inlineCss: true,
            inlineScripts: true
        }))
        .pipe(gulpif(!DEPLOY, replace(/.*custom-elements-es5-adapter.*/g, '')))
        .pipe(crisper({
            scriptInHead: false
        }))

        .pipe(htmlFilter)
        .pipe(minifyHtml())

        .pipe(htmlFilter.restore)

        .pipe(jsFilter)
        .pipe(gulpif(DEPLOY, transpile()))
        .pipe(browserify({
            insertGlobals: true
        }))

        .pipe(jsFilter.restore)

        .pipe(replace('INSERT_VERSION', version))
        .pipe(replace('INSERT_SHA', git.short()))
        .pipe(replace('INSERT_BUILD_TIME', new Date().toLocaleString()));
}

gulp.task('vulcanize-ext', ['clean-ext'], function() {
    return vulc('./chrome_extension/popup.html')
        .pipe(gulp.dest(extDir));
});

gulp.task('vulcanize', ['clean'], function() {
    return vulc('./webclient/index.html')
        .pipe(gulp.dest(deployDir));
});

gulp.task('clean', function () {
    return gulp.src(deployDir)
        .pipe(clean());
});

const extDir = './ext-dist/';

gulp.task('ext', ['copy-files-ext']);

gulp.task('clean-ext', function() {
    return gulp.src(extDir).pipe(clean());
});

gulp.task('lint', function () {
    function isFixed(file) {
        return file.eslint != null && file.eslint.fixed;
    }
    return gulp.src([
        './**/*.js', 
        '!./dist/**.js', 
        '!./ext-dist/**.js',
        '!./node_modules/**', 
        '!./bower_components'
    ], {base: './'})
        .pipe(eslint(eslintConfig))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(gulpif(isFixed, gulp.dest('.')));
});

gulp.task('gh-deploy', (cb) => {
    let url = argv.remoteUrl;
    if (!url && argv.remote) {
        let gitConfig = parse.sync();
        let remote = gitConfig['remote "'+argv.remote+'"'];
        if(!remote) {
            return Promise.reject('remote name does not exist in repository');
        }
        url = remote.url;
    }
    if(!url) {
        return Promise.reject('--remoteUrl="..." or --remote="..." flag is required');
    }
    remoteUrl = url; //add to global scope
    return sequence('gh-deploy-confirm', ['default'], 'gh-deploy-helper')(cb);
});
gulp.task('gh-deploy-confirm', () => {
    if ('https://github.com/MergeMyPullRequest/order-splitter.git' === remoteUrl ||
        'git@github.com:MergeMyPullRequest/order-splitter.git' === remoteUrl) {
        return inquirer.prompt([
            {
                type: 'confirm',
                name: 'shouldDeploy',
                message: 'Are you sure you want to deploy to "mergemypullrequest.github.io/order-splitter"?'
            }
        ]).then(({shouldDeploy}) => {
            if (!shouldDeploy) {
                throw new Error('cancelled by user');
            }
        });
    } else {
        return Promise.resolve();
    }
});
gulp.task('gh-deploy-helper', () => {
    return gulp.src(deployDir+'/**')
        .pipe(ghPages({
            remoteUrl,
            branch: 'gh-pages'
        }));
});

gulp.task('serve', ['default'], function() {
    browserSync({
        server: {
            baseDir: deployDir
        },
        notify: false
    });
    gulp.watch([
        './webclient/*', 
        './common/*',
        './elements/*',
        './data/*'
    ], ['default', browserSync.reload]);
});

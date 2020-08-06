const deployDir = './dist';
let DEPLOY = true;

/* webclient only */
const copyTheseFilesToDist = [
    './images/*.ico',
    './images/*.png',
    './common/app-icon/*',
    './build/default/*',
    './manifest.json',
    './sw.js'
];

const orderData = [
    './data/*',
    './images/*'
];

var argv = require('yargs').argv;
var clean = require('gulp-clean');
var debug = require('gulp-debug');
var ghPages = require('gulp-gh-pages');
var git = require('git-rev-sync');
var gulp = require('gulp');
var inquirer = require('inquirer');
var parse = require('parse-git-config');
var merge2 = require('merge2');
var replace = require('gulp-replace');

var version = JSON.parse(require('fs').readFileSync('./package.json')).version;

gulp.task('clean', function () {
    return gulp.src(deployDir)
        .pipe(clean());
});

gulp.task('clean', function () {
    return gulp.src(deployDir)
        .pipe(clean());
});

gulp.task('copy-files', () => 
    merge2(
        gulp.src(orderData, {base: './'})
            .pipe(gulp.dest(deployDir)),
        gulp.src([...copyTheseFilesToDist])
            .pipe(replace('INSERT_VERSION', version))
            .pipe(replace('INSERT_SHA', git.short()))
            .pipe(replace('INSERT_BUILD_TIME', new Date().toLocaleString()))
            .pipe(debug('copied files'))
            .pipe(gulp.dest(deployDir))
    )
);

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
    return gulp.series('gh-deploy-confirm', ['default'], 'gh-deploy-helper')(cb);
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

gulp.task('default', gulp.series(['copy-files']));


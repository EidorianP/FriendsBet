const Encore = require('@symfony/webpack-encore')
Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .enableSassLoader()
    .addStyleEntry('global', './assets/scss/global.scss')
    .addStyleEntry('login', './assets/scss/modules/login.scss')
    .addEntry('app', './assets/js/app.js')

module.exports = Encore.getWebpackConfig()

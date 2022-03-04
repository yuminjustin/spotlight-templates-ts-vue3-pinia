/* 生成环境  可扩展其余操作 */
let shell = require('shelljs');
let ora = require('ora')
let chalk = require('chalk')
let config = require('../config')

let spinner = ora('开始打包,请稍后...'),
    silent = {
        silent: true
    };

spinner.start()
shell.exec('cross-env NODE_ENV=production webpack --config build/prod/prod.js', silent, (code, stdout, stderr) => {
    spinner.stop()
    if (code == 0) {
        console.log(chalk.green(stdout))
        if (config.dev.html5Router) { // html5 history router support
            shell.exec('gulp', silent, (code2, stdout2, stderr2) => {
                if (code2 == 0) {
                    console.log(chalk.green(stdout2))
                    console.log(chalk.cyan('打包结束.\n'))
                } else {
                    console.log(chalk.red('gulp异常.\n'))
                    console.log(chalk.white(stderr2))
                }
            })
        } else {
            console.log(chalk.cyan('打包结束.\n'))
        }

    } else {
        console.log(chalk.red('打包异常.\n'))
        console.log(chalk.white(stderr))
    }

})
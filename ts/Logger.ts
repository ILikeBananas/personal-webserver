/*
* Class : Logger
* Author : Jonny Hofmann
* Utility : Simple and organized logger for console applications
*/

// Importing colors module
import colors from 'colors'


// Logger class to log things in different styles
class Logger {

    // Logs in the console an text on error colors
    error(caller: string, message: string) {
        global.console.log(colors.red.bold('[' + caller + '] : ' + message))
    }
    // Logs an important information
    logBold(caller: string, message: string) {
        global.console.log(colors.white.bold('[' + caller + '] : ' + message))
    }

    // Logs not important messages
    log(caller: string, message:string) {
        global.console.log(colors.white('[' + caller + '] : ' + message))
    }

    // Logs an warning
    warn(caller: string, message: string) {
        global.console.log(colors.yellow.bold('[' + caller + '] : ' + message))
    }
}

// Setting the class as the default export
export default Logger
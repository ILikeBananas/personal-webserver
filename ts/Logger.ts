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
    // caller : String from which part of the application comes the error
    // message : String of the message to display
    error(caller: string, message: string) {
        global.console.log(colors.red.bold(`[${caller}] : ${message}`))
    }

    // Logs an important information
    // caller : String from which part of the application comes the important log
    // message : String of the message to display
    logBold(caller: string, message: string) {
        global.console.log(colors.white.bold(`[${caller}] : ${message}`))
    }

    // Logs normal debug messages
    // caller : String from which part of the application comes the log
    // message : String of the message to display
    log(caller: string, message:string) {
        global.console.log(colors.white(`[${caller}] : ${message}`))
    }

    // Logs an warning in bold yellow
    // caller : String from which part of the application comes the warning
    // message : String of the message to display
    //
    warn(caller: string, message: string) {
        global.console.log(colors.yellow.bold(`[${caller}] : ${message}`))
    }
}

// Setting the class as the default export
export default Logger
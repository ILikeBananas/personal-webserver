
/*
* File : Server.ts
* Author : Jonny Hofmann
* Utility : Main server, serving the web page files to the client
*/

/*jslint node: true */
"use strict"

// Module imports
import express from "express"
import fs from "fs"

// Local module imports
import Logger from './Logger'

// Express app creation
const app:express.Application = express()

// Consts
const port = 8080 

// Logger initialization
const logger: Logger = new Logger()
const CALLER: string = 'server.ts'


// Set render engine to pug
app.set("view engine", "pug")
app.set('views', './application/views')

// Routes for static content
app.use("/js", express.static("application/js"))
app.use("/css", express.static("application/css"))
app.use("/img", express.static("application/img"))

//// Routes
// Default route
app.get("/", (req, res) => {
  res.render("index", {title : "Index"})
  logger.log(CALLER, "Default page called")
})

// Info page route
app.get("/info", (req, res) => {
  res.render("information", {title: "Informations"})
  logger.log(CALLER, "Info page called")
})

// Projets page route
app.get("/projets", (req, res) => {
  res.render("projets", {title: "Projets"})
  logger.log(CALLER, "Projets page called")
})

// Contact page route
app.get("/contact", (req, res) => {
  res.render("contact", {title: "Contact"})
  logger.log(CALLER, "Contact page called")
})

// Error 404 route
app.get("*", (req, res) => { // 404 error
  res.render("404", {title : "ERROR : 404"})
  logger.error(CALLER, `Unknown page called : ${req.url}`)
})

// Start server
app.listen(port);
logger.logBold(CALLER, `Listenting on port : ${port}`)

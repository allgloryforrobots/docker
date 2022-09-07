const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'pages'))


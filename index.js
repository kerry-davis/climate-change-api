const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json('Welcome to my  Climate Change News API')
})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

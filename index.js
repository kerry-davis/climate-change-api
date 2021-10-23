const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json('Welcome to my  Climate Change News API')
})

app.get('/news', (req, res) => {
  axios.get('https://www.theguardian.com/environment/climate-crisis')
    .then((response) => {
      const html = response.data
      console.log(html)
    }).catch(err => console.log(err))
})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

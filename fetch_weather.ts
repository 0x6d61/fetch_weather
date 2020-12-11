// @deno-types="https://cdn.jsdelivr.net/gh/justjavac/deno_cheerio/cheerio.d.ts"
import cheerio from "https://dev.jspm.io/cheerio/index.js";

//endpoint url
const URL = `https://www.navitime.co.jp/weather/poi?address=01204008020`

const htmlData = await fetch(URL).then((response:Response) : Promise<string> => {
    return response.text()
}).catch(error => {
    console.log(error)
})

const $:CheerioStatic  = cheerio.load(htmlData)
const today:string = $('#today-weather-area .summary-date dt').text()
const weather:string  = $('#today-weather-area .summary-date div').text()  
console.log(`${today} ${weather}`)
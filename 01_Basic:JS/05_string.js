const name = 'yash'
const reponame = '01_Basic:JS'

console.log (`User of this repo is ${name} . Name of Repo is ${reponame}`)

const playername = new String ('yas-h')
console.log(playername[0])

console.log(playername.length)
console.log(playername.toUpperCase())
console.log(playername)
console.log(playername.charAt(2))
console.log(playername.indexOf('h'))

const newchar = playername.substring(0 , 2)
console.log(newchar)

const newvar = playername.slice(-4 , 3)
console.log(newvar)

const nameSur = "    yashpurohit.  "
console.log(nameSur)
console.log(nameSur.trim())

const url = "www./youtube.com/yash%20purohit"
console.log(url.replace('%20', '-'))
console.log(url.includes('piyush'))

console.log(playername.split('-'))
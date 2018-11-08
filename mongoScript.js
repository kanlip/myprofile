const Work = require('./server/models/work');
const mongoose = require('mongoose');
const http = require('http')

http.createServer(function (req, res) {

}).listen(8080);

mongoose.connect('mongodb://localhost:27017/myprofile').then(console.log('connected')).catch(console.error())

let data = [
  {work: 'Software Intern, nuTonomy',workType:'experience',image:'https://res.cloudinary.com/kanlip/image/upload/v1540796863/nuTonomy.png',link:'https://www.nutonomy.com/'},
  {work: 'Bidding Site',workType:'web',image:'https://res.cloudinary.com/kanlip/image/upload/v1540796852/bosch-logo-en.png',link:'https://realboschrealpartner.com/'},
  {work: 'Booking Site',workType:'web',image:'https://res.cloudinary.com/kanlip/image/upload/v1540796851/Baansabai-black.png',link:'http://baan-sabai.com/'},
  {work: 'Booking Site',workType:'web',image:'https://res.cloudinary.com/kanlip/image/upload/v1540796857/DDiy.png',link:'https://www.dd-iy.com/'},
  {work: 'MixedReality Game',workType:'game',image:'https://res.cloudinary.com/kanlip/image/upload/v1541656547/gallery.jpg',link:'https://devpost.com/software/ocean9000'},

]
data.map(work=>{
  let works = new Work(work);
  works.save();
})

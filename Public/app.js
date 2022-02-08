const storage = new Storage ()
const storedLocation = storage.getLocalStorage ()

const weather = new Weather(storedLocation)

const ui = new UI ()



document.addEventListener("DOMContentLoaded", trueWeather)
document.getElementById("w-change-btn").addEventListener("click", (e)=>{
    const city = document.getElementById("city").value
   weather.changeLocation(city)
   trueWeather ()
   storage.setLocalStorage (city)
   // Close modal
   $("#locModal").modal("hide")

})

function trueWeather(){
weather.getWeather()
  .then(results => {
    ui.paint(results)
} ) 
.catch(err => {
    console.log(`Error : ${err}`)
})
}
// function changeInput(){
//     const text = newCity.value
// //    weather.changeLocation(newCity) 
// console.log(text)

// }
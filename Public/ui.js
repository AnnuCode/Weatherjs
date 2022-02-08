class UI{
    constructor (){
        this.location = document.getElementById("w-location")
        this.desc = document.getElementById("w-desc")
        this.string = document.getElementById("w-string")
        this.details = document.getElementById("w-details")
        this.icon = document.getElementById("w-icon")
        this.humidity = document.getElementById("w-humidity")
        this.feelsLike = document.getElementById("w-feels-like")
        this.dewpoint = document.getElementById("w-dewpoint")
        this.wind = document.getElementById("w-wind")
    }

    paint (weather) {
        this.location.textContent = weather.location.name
        // console.log(this.location.textContent)
        // console.log(weather.location.name)
        this.desc.textContent = weather.current.condition.text
        this.string.textContent = weather.current.temp_c
        // this.details.textContent = weather.current.gust_mph
        this.icon.setAttribute("src",weather.current.condition.icon )
        this.humidity.textContent = `Humidity: ${weather.current.humidity}`
        this.feelsLike.textContent = `Feels like: ${weather.current.feelslike_c}`
        this.dewpoint.textContent = `Cloud: ${weather.current.cloud}`
        this.wind.textContent = `Wind: ${weather.current.wind_mph}`
    }
}
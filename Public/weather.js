class Weather{
    constructor (city){
        this.city =city
        // this.state = state
        this.api_key = "80f0234015a24b1ba1391824220801"

    }

    async getWeather (){
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.api_key}&q=${this.city}`)
        const responseData = await response.json()
        return responseData

        }
    changeLocation (city){
        this.city = city
        // this.state = state

    }
}
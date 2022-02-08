class Storage{
    constructor (){
        this.city
        this.defaultCity = "Varanasi"
    }

 getLocalStorage (){
     if (localStorage.getItem("city") === null){
         this.city = this.defaultCity
     } else{
       this.city =  localStorage.getItem("city")  
     }
     const newCity = this.city
     return newCity 
     
        
     

 }
 setLocalStorage (city){
     localStorage.setItem("city", city)

 }
 

}
window.addEventListener('load',()=>{
    let long = 24.7037952;
    let lat = 59.4075648;

    //let long;
    //let lat;



    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat= position.coords.latitude;
            console.log("Long:",long);
            console.log("Lat:",lat)
        })
    }
    const proxy="https://cors-anywhere.herokuapp.com/";
    const api =`${proxy}https://api.darksky.net/forecast/12ae767a89d4e01f81b7369ea364f720/${lat},${long}`;

    fetch(api)
    .then (response =>{
        return response.json();
    })
    
});


 async function getinfo( ) {
    let x =document.getElementById("input")
    ll=x.value;
    console.log(x)
    result = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c7460475019949d7877102251232007&q=${ll}&days=3`)
    finalresult = await result.json()
    console.log(finalresult)
   
    days= await finalresult.forecast.forecastday
    
   
    var cartona="";
    
    for(let i=0;i<days.length;i++){
        if( i==0){
      
        cartona+=`<div class="col-md-4  rounded-2 bg-dark p-0 pb-4 hh">
        <div class="d-flex align-items-center justify-content-between px-2 pt-2 align-items-center bg-black rounded-2">
            <p id="date">
                ${days[i].date}
            </p>



        </div>
        <div class="p-4 text-start">
            <h5 id="location">${finalresult.location.name}</h5>
            <div class="d-flex justify-content-between">
            <h1 class="text-white number fw-bolder">${days[i].day.maxtemp_c}</h1>
            <div id="img" class=" me-5"> <img src='https:${days[i].day.condition.icon}' alt='not'></div>
            </div>
            <p id="desc" class="text-primary">${days[i].day.condition.text}</p>

        </div>
    </div>`
        }
        else if( i==1){
            cartona+=`<div class="col-md-4  rounded-2 color p-0 hh">
            <div class="d-flex align-items-center justify-content-between px-2 pt-2 align-items-center bg-black rounded-2">
                <p id="date">
                    ${days[i].date}
                </p>
    
    
    
            </div>
            <div class="p-4 text-center">
              <div id="img" class=" me-5"> <img src="https:${days[i].day.condition.icon}"></div>
              <h1 class="text-white  fw-bolder">${days[i].day.maxtemp_c}</h1>
              <h4 class="text-muted fw-bolder">${days[i].day.mintemp_c}</h4>
               
               
                <p id="desc" class="text-primary">${days[i].day.condition.text}</p>
    
            </div>
        </div>`

        }
        else{
            cartona+=`<div class="col-md-4  rounded-2 bg-dark p-0 hh">
            <div class="d-flex align-items-center justify-content-between px-2 pt-2 align-items-center bg-black rounded-2">
                <p id="date">
                    ${days[i].date}
                </p>
    
    
    
            </div>
            <div class="p-4 text-center">
              <div id="img" class=" me-5"> <img src="https:${days[i].day.condition.icon}"></div>
              <h1 class="text-white  fw-bolder">${days[i].day.maxtemp_c}</h1>
              <h4 class="text-muted fw-bolder">${days[i].day.mintemp_c}</h4>
               
               
                <p id="desc" class="text-primary">${days[i].day.condition.text}</p>
    
            </div>
        </div>`

        }
      
    }
    document.getElementById("page").innerHTML=cartona
   

    
   
}



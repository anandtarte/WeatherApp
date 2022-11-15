const cityName = document.getElementById('cityName');

const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');

const temp_status = document.getElementById('temp_status');

// const datahide = document.querySelector('.middle_layer');




const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = 'Plz write the name before search'; 
        // datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6f81c870b2daaa4750b758195f038cc6`
        const responce = await fetch(url);
        const data =await responce.json();
        const arrdata = [data];
        // console.log(arrdata);

        city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
        // console.log(arrdata[0].name);
        temp.innerText = arrdata[0].main.temp;
        temp_status.innerText = arrdata[0].weather[0].main;

        let tempmood = arrdata[0].weather[0].main;
        let abc = "<i class='fas fa-smoke'></i>";
        console.log(tempmood);
                if(tempmood == "Clear"){
                    temp_status.innerHTML = 
                    "<i class='fas fa-sun' style='color: #eccc68;'></i>";
                }else if(tempmood =  "Clouds"){
                    temp_status.innerHTML = 
                    "<i class='fas fa-cloud' style='color: #141717;'></i>";
                    // "<i class='fas fa-cloud'></i>"
                }else if(tempmood =  "Rain"){
                    temp_status.innerHTML = 
                    "<i class='fas fa-rain' style='color: #a4b0be;'></i>";
                }else if(tempmood =  "Smoke"){
                    temp_status.innerHTML = 
                    abc;
                }else{
                    temp_status.innerHTML = 
                    "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
                }

                

        }catch{
            city_name.innerText = 'Pls enter the city name properly';
            // datahide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click',getInfo);

// console.log("hsdfvlo");


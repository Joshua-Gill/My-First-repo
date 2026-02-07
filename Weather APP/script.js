     const  UserInput=document.querySelector('.search-btn');
     const Search=document.querySelector('.get-weather-btn');
     const City=document.querySelector('.city-name');
     const date=document.querySelector('.current-date');
     const temprature=document.querySelector('.temp');
     const sideDisplay=document.querySelector('.side-display');
     const Conditon=document.querySelector('.condition');
     const CondIcon=document.querySelector('.condition-icon');
     const Rain=document.querySelector('.rain-chance');
     const Wind=document.querySelector('.wind-speed');
     const Humidity=document.querySelector('.humidity-level');
     const UV=document.querySelector('.uv-index');
      const StatusCondition = document.querySelector('.status-condition');
      const StatusFeels = document.querySelector('.status-feels');
      const StatusIcon = document.querySelector('.status-icon');

      Search.addEventListener('click',async ()=>{
     resetStats();
     
           const city=UserInput.value.trim();
      if(!city) return console.log('Please enter a city name');
      const API = `https://api.weatherapi.com/v1/forecast.json?key=fc1611262abf40ad9fc130939260602&q=${city}&days=1&aqi=yes`;

     //  const API=`https://api.weatherapi.com/v1/current.json?key=fc1611262abf40ad9fc130939260602&q=${city}&aqi=yes`;
        try{
             let response= await fetch(API);
             if(!response.ok){
                  throw new Error('Failed to fetch weather data');
             }
             const data=await response.json();
            City.innerText=`${data.location.name}, ${data.location.country}`;
           date.innerText=data.location.localtime;
           sideDisplay.innerText=`${data.location.name}, ${data.location.country}`;
            temprature.textContent=`${data.current.temp_c}°C`;
            Conditon.innerText=data.current.condition.text;
            CondIcon.src = `https:${data.current.condition.icon}`;

            Rain.innerText = `Today rain chance is ${data.current.precip_mm} mm`;

             Wind.innerText=`Today wind speed is ${data.current.wind_kph} km/h`;
             Humidity.innerText=`Today humidity is ${data.current.humidity}%`;
             UV.innerText=`Today UV index is ${data.current.uv}`;
             StatusCondition.innerText = data.current.condition.text;
            StatusFeels.innerText = `Feels like ${data.current.feelslike_c}°C`;
            StatusIcon.src = `https:${data.current.condition.icon}`;

             const temps = getGraphTemps(data);
            
               updateGraph(temps);
               updateLabels(temps);
              
               function updateLabels(temps){
               const labelEls = document.querySelectorAll('.labels span');
                labelEls[0].innerHTML = `Morning<br>${temps[0]}°`;
              labelEls[1].innerHTML = `Afternoon<br>${temps[1]}°`;
              labelEls[2].innerHTML = `Evening<br>${temps[2]}°`;
              labelEls[3].innerHTML = `Night<br>${temps[3]}°`;
               }
                

               }catch (error) {
                if (!navigator.onLine) {
                 alert('No internet connection. Please check your network.');
               } else {
                   alert('Something went wrong. Please try again.');
              }
              console.error(error);
}

            

          });
          
function resetStats() {
  Rain.innerText = '—';
  Wind.innerText = '—';
  Humidity.innerText = '—';
  UV.innerText = '—';
  Conditon.innerText = '—';
  CondIcon.src = '';
}
function getGraphTemps(data) {
  const hours = data.forecast.forecastday[0].hour;

  return [
    hours[9].temp_c,   // Morning
    hours[15].temp_c, // Afternoon
    hours[18].temp_c, // Evening
    hours[0].temp_c   // Night
  ];
}
function tempToY(temp, min, max) {
  const graphHeight = 80;
  return graphHeight - ((temp - min) / (max - min)) * graphHeight + 10;
}
function updateGraph(temps) {
  const min = Math.min(...temps) - 2;
  const max = Math.max(...temps) + 2;

  const points = temps.map((temp, i) => {
    return {
      x: 20 + i * 80,
      y: tempToY(temp, min, max)
    };
  });

  const path = `
    M ${points[0].x} ${points[0].y}
    Q ${points[1].x} ${points[1].y}
      ${points[2].x} ${points[2].y}
    T ${points[3].x} ${points[3].y}
  `;

  document.querySelector('.line').setAttribute('d', path);

  document.querySelectorAll('.graph circle').forEach((circle, i) => {
    circle.setAttribute('cx', points[i].x);
    circle.setAttribute('cy', points[i].y);
  });
}




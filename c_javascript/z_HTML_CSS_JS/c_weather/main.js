const city = "Seoul";
const apikey = "b3d2a174bd0bf979992c01994dd21eea";
const lang = "kr";
const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=${lang}&units=metric`;
async function getWeatherData() {
  try {
    const response = await fetch(api);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(JSON.stringify(data));
    // 날씨 정보 출력
    const description = data.weather[0].description;
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const windDirection = data.wind.deg;
    const visibility = data.visibility / 1000; // 가시 거리 km로 변환
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString('ko-KR', { timeZone: 'Asia/Seoul' });
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString('ko-KR', { timeZone: 'Asia/Seoul' });
    console.log(data);
    console.log(`서울의 현재 날씨: ${description}`);
    console.log(`기온: ${temp}°C (체감 온도: ${feelsLike}°C)`);
    console.log(`습도: ${humidity}%`);
    console.log(`바람: ${windDirection}°에서 ${windSpeed} m/s 속도로 불고 있음`);
    console.log(`가시 거리: ${visibility} km`);
    console.log(`일출 시간: ${sunrise}`);
    console.log(`일몰 시간: ${sunset}`);
  } catch (error) {
    console.error('Error:', error);
  }
}
getWeatherData();
// 날짜 띄우기
const now = document.querySelector('#now');
const date = new Date();
const dateOnly = date.toLocaleDateString();
now.textContent = dateOnly;
// 다크모드
const button = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const container = document.querySelector('#container');
const input = document.querySelector('#search');
button.addEventListener('click', () => {
  if(button.classList.contains('dark')) {
    // 현재 다크 모드인 경우 라이트 모드로 변경
    button.textContent = '라이트모드';
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    container.style.color = 'white';
    input.style.color = 'white';
    //다크모드를 지정하는 클래스명을 제거
    button.classList.remove('dark');
  }else {
    // 라이트 모드로 전환
    button.textContent= '다크모드';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    button.classList.add('dark');
    button.style = 'none';
    container.style = 'none';
    input.style = 'none';
  }
  backgroundImg();
});
// 날씨에 따라 backgroundImg 바뀌기
function backgroundImg() {
  const weather = 'sunny';
  switch(weather) {
    case 'sunny':
    container.style.backgroundImage = "url('./images/sunny.jpg')";
    break;
    case 'cloudy':
    container.style.backgroundImage = "url('./images/cloudy.jpg')";
    break;
    case 'snow':
    container.style.backgroundImage = "url('./images/snow.jpg')";
    break;
    case 'rainy':
    container.style.backgroundImage = "url('./images/rainy.jpg')";
    break;
  }
}
backgroundImg();
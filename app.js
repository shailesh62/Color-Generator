const body = document.getElementsByTagName("body")[0];
const p = document.getElementById("hex-code");
const btn = document.getElementById("btn");


// This code uses api
/*
// const baseUrl = "https://x-colors.yurace.pro/api/random";
// const getColor =  async () => {
//     let response = await fetch(baseUrl);

//     let data = await response.json();
//     let hexCode = data['hex'];
//     body.style.backgroundColor = `${hexCode}`;
//     p.innerText = `${hexCode}`;
// };
*/

const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = `#${randomNumber.toString(16)}`;
    body.style.backgroundColor = randomCode;
    p.innerText = randomCode;
}

getColor();

btn.addEventListener("click", getColor);


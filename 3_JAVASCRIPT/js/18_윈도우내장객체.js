// window.setTimeout()

document.getElementById("btn1").addEventListener("click", () => {
    //setTimeout( function ()  {alert("3초 후 출력!")}, 3000);
    setTimeout( function() {
        alert("3초 후 출력!");
    }, 3000);
    //자동화 명령어로 사용 할 수도 있다.
});

// window.setInterval()


let interval; // setInterval을 저장하기 위한 전역변수

// 현재 시간 문자열로 반환하는 함수
function currentTime() {

    const now = new Date(); // 현재 컴퓨터에 흘러가는 시간을 갖고오는 내장객체

    let hour = now.getHours();// 시

    let min = now.getMinutes();// 분

    let sec = now.getSeconds();// 초

    if(hour < 10 ) hour = "0" + hour;
    if(min < 10 ) min = "0" + min;
    if(sec < 10 ) sec = "0" + sec;

    return hour + " : " + min + " : " + sec; 
    // 14 : 41 : 30
    
}

function clockFn() {

    const clock = document.getElementById("clock");
    clock.innerText = currentTime();


    interval = setInterval(function() {
        clock.innerText = currentTime();
    } , 1000);

}

clockFn(); // 함수 호출

// clearInterval()
document.getElementById("stop").addEventListener("click" , () => {
    clearInterval(interval);
});

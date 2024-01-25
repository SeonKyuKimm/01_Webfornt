let xindex = 0; // x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let yindex = 0; // y좌표 방향대로 얼마만큼 이동했는지 기억할 변수

// addEventListener 에는 전달인자가 (이벤트의 종류, 함수 -이벤트가 발생했을 때 수행할 기능)
// 전달인자 2개
document.addEventListener( "keydown" , function(e) {

    // e : 이벤트 객체
    // console.log(e); 사용해서 key의 반응?

    const bomberman = document.getElementById("bomberman"); // 얘가 봄버맨 이미지

    switch(e.key) {
        case 'ArrowRight' : 
            xindex += 10;
            break;

        case 'ArrowLeft' :
            xindex -= 10;
            break;
            
        case 'ArrowUp' :   
            yindex -= 10;
            break;
        
        case 'ArrowDown' :
            yindex += 10;
            break;

        case 'x' : 
            const box = document.getElementById("box");
            box.innerHTML +=
            `<img src="../../images/boom.png"
            style="transform: translate3d(${xindex}px, ${yindex}px, 0); position: absolute;"
            >`;
            break;
                alert("방향키와 x만 가능"); break;
        }    


    bomberman.style.transform = `translate3d(${xindex}px, ${yindex}px, 0)`;

})
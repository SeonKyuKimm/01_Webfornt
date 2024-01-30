const w_h = document.getElementsByClassName("w-h") ;// 너비높이
const fontpixel = document.querySelector("fontpixel"); // 글자크기
const fontborder = document.getElementsByName("fontborder"); // 굵기radio
const fontcolor = document.getElementsByClassName("font-color"); // 글자색
const bg = document.getElementsByClassName("bgColor"); // 배경색
const row = document.getElementsByName("row"); //정렬. 가로
const col = document.getElementsByName("col");//정렬. 세로
const print1 = document.getElementsByClassName("print1");//출력문자열

const box1 = ducoument.getElementById("box1");


document.querySelector("change").addEventListener = ("click", function() {
    
        

    
        for(let i = 0; i < w-h.length; i++) {
            box1.style.width = w-h.value;
        }

        
        let fpx
        if ( fontpixel == value) {
            fpx += value
        }

      
});


//적용하기 버튼이 클릭 되었을 때
const applyBtn = document.querySelector("#apply-btn");

applyBtn.addEventListener("click", function() {

    // 위에 작성된 input 요소들을 모두 얻어와야 합니다

    //radio 속성에 name 속성 넣어서 그룹화 하기
    const boxwidth = document.querySelector("#box-width");//박스넓이
    const boxheight = document.querySelector("#box-height");//박스높이
    const fs = document.querySelector("#fs");

    const fw = document.querySelector("[name='fw']:checked");
    //css 선택자 , 둘 중 하나만체크되게 하는것.

    const fontColor = document.querySelector("#box-font-color");
    const bgColor = document.querySelector("#box-bg-color");

    const row = document.querySelector("[name'align-row']: checked");
    const col = document.querySelector("[name'align-col']: checked");

    const content = document.querySelector("#content");

    //div id="box"
    const box = document.querySelector("#box");

    // 다음은 input 안에 작성된 값을 얻어와서, 그 값에 따라 #box에 JS로 CSS 추가
    
    //너비를 입력하는 input에 값이 작성되어 있다면
    if(boxwidth.value.trim().length > 0) {
        //boxwidth 라는 요소의 value값에 앞 뒤로 공백 제거를 한 후,
        //value 값에 문자열 길이를 따졌더니, 0보다 클 때 => 뭔가 작성된 값이 있을때
        box.style.width = boxwidth.value + "px";
        
        

    }
    // 높이를 입력하는 input의 값이 작성되어 있다면

    if(boxheight.value.trim().length >0) {
        box.style.height = boxheight.value + "px";
        //글자크기
    }

    if(fs.value.trim().length > 0) {
        box.style.fontSize = fs.value + "px";
    }
    
    //console.log(null)로 따져라. Radio
    // fw -> 체크된게 없으면 null 반환
    //    -> 체크된게 있으면 null이 아닐것
    
    if(fw != null) {// 글자 굵기가 체크된게 있다면
        
        box.style.fontweight = fw.value; // fw.normal
        //console.log(fw); 에서 bold,
        
    }
    //글자색 배경색 가로,세로정렬
    //가로정렬 - justify 세로정렬 alignItems \\ box.style.justifyContent(alignItems)
    //box.style.backgroundColor
    //box.style.fontZize

    // content에 작성된 값
    if(content.value.trim().length >0) {
        box.innerText = content.value;
    }
});
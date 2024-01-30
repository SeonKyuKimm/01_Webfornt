const applyBtn = document.querySelector("#apply-btn");//적용버튼




    //적용하기 버튼이 클릭되었을 때 일어나는 일
    applyBtn.addEventListener("click", function() {
        
        // 작성된 인풋 요소 모두 얻어오기
        
        const boxWidth = document.querySelector("#box-width"); // 너비
        const boxHeight = document.querySelector("#box-height");// 높이

        const fontSize = document.querySelector("#font-size");//글자크기
        const fontWeight = document.querySelector("[name='font-weight']:checked");// 글자굵기

        const color = document.querySelector("#color");// 글자색
        const bgColor= document.querySelector("#bgColor");// 배경색
        // radio버튼은 name으로 그룹화
        const row = document.querySelector("[name='row']:checked");// 가로정렬
        const col = document.querySelector("[name='col']:checked");// 세로정렬

        const text = document.querySelector("#text"); // 텍스트창
        const box = document.querySelector(".box");// 결과
        
        // 너비
        if( boxWidth.value.trim().length > 0) { 

            box.style.width = boxWidth.value + "px";
        }
        
        // 높이
        if( boxHeight.value.trim().length > 0) {
            
            box.style.height = boxHeight.value + "px";
        }

        // 글자크기
        if( fontSize.value.trim().length > 0) {
            box.style.fontSize = fontSize.value +"px";
        }

       // 굵기
        if( fontWeight != null ) {
            box.style.fontWeight = fontWeight.value;
        }

        // 글자색
        if( color.value.trim().length > 0) {

            box.style.color = color.value;
        }

        //배경색
        if( bgColor.value.trim().length > 0) {

            box.style.backgroundColor = bgColor.value;
        }

        //가로정렬
        if( col != null ) {
            
            box.style.justifyContent = col.value;
        }

        //세로정렬
        if( row != null) {
            
            box.style.alignItems = row.value;
        }
        
        //텍스트창
        if( text.value.trim().length > 0) {
            box.innerText = text.value;
        }
    });


// ********************************************************************************** //
// 선생님 덕분에 비비적비비적 완성했습니다 ^.ㅠ 고생많으셨어요 //


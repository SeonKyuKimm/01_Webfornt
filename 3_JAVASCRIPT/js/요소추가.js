// 요소.remove() : 요소 제거
// 요소.classList.add("클래스명") : 클래수 추가
// 요소.classList.remove("클래스명") : 클래스 제거

// 




const add = document.querySelector("#add");
const container = document.querySelector(".container");



add.addEventListener("click", () => {

    // 1. div 만든다
    const row = document.createElement("row"); // <div></div>
    console.log("row");

    //2. div 만든 요소에 클래스 row 추가한다
    row.classList.add("row"); // <div class="row"></div>

    // 3. 자식 중 input을 만든다
    const input = document.createElement("input"); // <input>
    input.type = "number"; // <input type="number">
    
    // div에 input을 마지막 자식으로 추가했음
    row.append(input);  
    /*
    <div class="row">
         <input type="number">
    </div>
    */

    // 6. span 요소 생성
    const span = document.createElement("span");
    // 7. span 태그에 클래스 remove-row 추가
    span.classList.add("remove-row"); //<span class=:"remove-row"></span>

    // 8. 내용으로&times; 추가
    span.innerHTML ="&times";

    // --- 조립 --- //

    // 9. div.row 요소에게 자식으로 input, span 추가
    
    row.append(input, span)
    /*
        <div class="row">
          <input type="number" class="input-number">
          <span class="remove-row">&times;</span>
        </div>
    */

    // 10. 완성된 div.row 를 container의 마지막 자식으로추가하기

    container.append(row);
  

    // span 태그 만들기
    // span 클래스로 remove-row 주기
    // &times; 넣어주기 (innerHTML)

    // -> <span class="remove-row">&times;</span>
    //  row.append(span);  

    /*
    <div class="row">
         <input type="number">
         <span class="remove-row">&times;</span>
    </div>
    */

    // *********************************
    // 클릭된 x버튼의 부모 요소를 제거하기

    // 1. 만들어지는 x 버튼(span)에 이벤트 리스너 추가
    
    span.addEventListener("click", e => {
        
        // 2. 현재 이벤트가 발생한 요소 ( 클릭된 x버튼 )의
        //   부모 요소를 선택하면 된다. (탐색)

        const parent = e.target.parentElement; // ==div.row

        // 3. 부모 요소를 제거하기
        parent.remove();

    } )
});



const calcbtn = document.querySelector("#calc").addEventListener("click", ()=> {

    // 1) 모든 .input-number 얻어도기
    const numbers = document.querySelectorAll(".input-number");
    
    console.log("numbers");

    // 2) for문으로 모든 요소 접근하여
    // 작성된 값 value 을 얻어와
    // 숫자로 변경(Number()) 한 후
    // 합계 저장 변수 sum에 누적
    let sum = 0;

    for(let i=0; i < numbers.length; i++) {
        sum += Number(numbers[i].value);
    }

    // 3. for 문 끝나면 alert 로 결과출력
    alert("결과 : " , sum);
    
});


// 만들려는 기능 중 공통적으로 사용되는 요소를 전역변수로 선언

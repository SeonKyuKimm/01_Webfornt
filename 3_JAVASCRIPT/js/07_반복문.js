
for(let num = 1; num <= 5; num ++) {
    //조건식이 TRUE인 경우 반복 수행할 코드;
    console.log("통과!");
}

function check1() {
    
    let result =""; // 빈 문자열
    // "12345"
    for(let num = 1; num <= 5;num++ ) {
        // console.log(num);

        result += num;
        //result = result + num;
        //   "1" =   --   +  1 (1턴)
        //  "12" =  "1"   +  2 (2턴)
        // "123" =  "12"  +  3 (3턴)
        //"1234" =  "123" +  4 (4턴)
        //"12345"=  "1234"+  5 (5턴)
        //                   6
    }

    console.log(result);
}

function check2() {
    //1 부터 10 까지 1씩 증가하며 출력
    for(let num = 1; num <= 10; num++) {
        console.log(num);

    }
}

function check3() {
    for(let num = 1; num <= 20; num++) {
        console.log(num);

    }
}

function check4() {
    for (let num = 5; num <= 15; num++ ) {
        console.log(num);
    }
}

function check5() {
    for (let num = 1; num <= 30; num +=2 ){
        console.log(num);
    }
}

function check6() {
    //1 부터 10까지 모든 정수의 합

    let sum = 0; // 합계를 저장하기 위한 변수

    for(let num=1; num <= 10; num++) {// num 1~10 변함
    sum += num;

    }
    console.log("sum:", sum);
}
// 입력 받은 범위 내 모든 정수의 합 구하기
//const inputNumber1_1 = document.getElementById("inputNumber1-1");
//const inputNumber1_2 = document.getElementById("inputNumber1-2");
//const result1 = document.getElementById("result1");


function sumFn() {
          
    //input 에 작성된 값을 얻어와 저장
    const start = Number(document.getElementById("inputNumber1-1").value);
    const end = Number(document.getElementById("inputNumber1-2").value);
    // 결과를 출력하기 위한 요소 얻어와 저장
    const result1 = document.getElementById("result1");

    // 합계를 저장할 변수
    let sum = 0;

    // start 부터 end 까지 1씩 증가하는 for 문
    for(let num = start; num <= end; num++) {
        
        sum += num; // num 값을 지정해둔 변수 sum에 누적
    }

    result1.innerText = sum;
}

//입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력

function executeFn2() {

        const start = Number(document.getElementById("inputNumber2-1").value);
        const end = Number(document.getElementById("inputNumber2-2").value);
        const val = Number(document.getElementById("inputNumber2-3").value);

        //결과 출력할 ul 요소
        const ul = document.getElementById("result2"); //ul 태그
        
        ul.innerHTML ='';
        // start 부터 end 까지 val 씩 증가
        for(let num = start; num <= end; num += val) {
            ul.innerHTML += `<li>${num}</li>`;
        }
    }

    // 요소.innerText = `<li>${num}</li>`; 
    //-> 요소의 내용으로 문자열을 대입
    // (HTML 태그를 해석하지 않고 문자열 그대로 보여줌)

    //요소 .innerHTML = `<li>${num}</li>`;
    // -> HTML 태그를 해석해서 화면에 태그의 본 기능대로 출력


/* 숙제 */

function executeFn3() {
    //입력받은 숫자의 곱 ?

        const input3 =Number(document.getElementById("input3").value);

        const ul= document.getElementById("result3");

        ul.innerHTML = '';
        
}
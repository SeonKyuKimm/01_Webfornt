// if - 양수인지 검사
const input1 = document.getElementById("input1");

function check1() {
    const value = Number(input1.value); //입력받은 값.

    if( value > 0 ) { //value 가 0보다 커서 true 인 경우
        alert("양수입니다.")
    }
    //value 가 0과 같거나 작아서 false인 경우
    // -> value 가 양수가 아닌 경우
    if( value <= 0 ) {
        alert("양수가 아닙니다.")
    }
}

// if- else 
function check2() {
    // 난수 발생 : Math.random()
    // 난수 범위 : 0 <= 1 Math.random() < 1

    // 0부터 100 사이 난수
   const randomNumber = Math.floor(Math.random() * 101);

   if(randomNumber %2 == 1) { //홀수
        alert (`${randomNumber} 는 홀수 입니다`);
    } 
    else {    //홀수가 아닌 경우 ==짝수
        alert (`${randomNumber} 는 짝수 입니다`);
    } 

    /* if를 두 번 사용해서 하는 방법도 되긴 함
     if(randomNumber %2 ==0) {
        alert(`${randomNumber} 는 짝수입니다.`);
    } */
}

// -3 ~ 3 사이 난수를 발생시켜, 양수, 음수, 0 판별
function check3() {
    
    const randomNumber = Math.floor(Math.random() *7)-3;

    let message = randomNumber + "은/는" ;

    
    if(randomNumber == 0 ){
        //message = message + "0 입니다.";
        message += "0 입니다.";// 복합 대입 연산자 활용
    } else if(randomNumber > 0) { // 양수인경우
        message += "양수입니다.";
    } else { //0도 아니고, 양수도 아닌경우 ==음수인경우
        message += "음수입니다.";
    }

    alert(message);
}


// 어린이 청소년 성인 구분하기.

const inputAge = document.getElementById("inputAge");// input 자체 
    // inline형식으로 기입된 함수 check3() 을 클릭하면 일어나는 일
function check4() {
    //입력한 나이 값 얻어오기
     const age = Number(inputAge.value);

     console.log ("age:" ,age);
     console.log( inputAge.value.length );// 니가 input에 몇글자 입력했는지 길이재주는거

     //"문자열".length : 문자열의 길이

     //입력된(inputAge) 나이의 길이(length)값 (value)이 0인 경우 == 입력 안한 경우
     if(inputAge.value.length == 0) {
        alert("미입력");

     } else { // 입력한 경우 -> 이 때 어린이, 청소년, 성인, 검사

            //중첩 if문
            if(age <0 || age > 150) { // 0~150 사이가 아닌 경우
                //age의 값이  0 보다 작"거나" age의 값이 150보다 크 면
                alert ("잘못 입력하셨습니다.");

                //그렇지 않고
            } else if(age >=0 && age <= 13) { // 어린이
                //age에 입력된 값이 0보다 크거나 같고, 13보다 작거나 같으면( 0을 포함한 13'이하'의 수라면)
                alert("어린이");

            } else if (age <=19) { // 청소년
                //age에 입력된 값이 (앞선 else if문의 값을 지나왔기때문에) 19보다만 작거나 19이면
                alert("청소년");
                // 마찬가지로 입력한 값이 앞선 else if의 조건값을 true로 충족하지 못했으니 그 나머지 값은,
            } else { // 성인
                alert("성인");
            }
    }
}


// switch 문을 이용한 계산기

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

const calcResult = document.getElementById("calcResult");

function calc(op) {
    // 매개변수 (Parameter) op
    // - 함수 호출 시 전달되는 값을 저장하는 변수

    // ex) calc('+')
    //  '+' 값이 op 변수에 저장됨

    console.log(op);
    
    const v1 = Number(number1.value);
    const v2 = Number(number2.value);

    // switch (식)에서
    // "식"은 다양한 값이 나타날 수 있는 변수 또는 계산식

    // 결과 저장 변수 선언

    let result; // 결과 저장 변수 선언

        // break : switch문을 멈춤
        //  -> case에 break; 를 작성하지 않으면
        // 멈추지 않고 다음 case로 넘어감
    switch(op) {
        // op 값에 따른 처리 case 작성

        case '+' : result = v1 + v2; break;
        case '-' : result = v1 - v2; break;
        case '*' : result = v1 * v2; break;
        case '/' : result = v1 / v2; break;
        case '%' : result = v1 % v2; break;

        //맞는 case가 없을 경우에 적용할 기본값
        default : result = "잘못된 연산자"; break;
    }

    calcResult.innerText = result;
}




    // if 문 버젼

/*    if(op == '+') {
        calcResult.innerText = v1 + v2;
    } else if(op == '-') {
        calcResult.innerText = v1 - v2;
    } else if(op == '*') {
        calcResult.innerText = v1 * v2;
    } else if (op =='/') {
        calcResult.innerText = v1 / v2;
    } else (op == '%') {
        calcResult.innerText = v1 % v2;
    } 
*/
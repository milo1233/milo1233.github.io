/*
let myHeading = document.querySelector('h1');//선택자 지정(css와 유사) 여기서는 h1 지정
myHeading.textContent = 'Hello world!'; // 값 대입
*/

/*
function clickMessage(){
    alert('Ouch! Stop poking me!!');
}

let htmlClick = document.querySelector('html');
htmlClick.onclick = clickMessage;
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src'); // 속성중 src 속성을 가져옴.
    if(mySrc === 'images/firefox.png'){ // 속성값은 문자열로 할당 하니까 이렇게 문자열 비교
        myImage.setAttribute('src', 'images/firefox2.png');
    }else{
        myImage.setAttribute('src', 'images/firefox.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');//prompt는 데이터 입력 요청 팝업을 띄움
    if(!myName || (myName === null)){ // 값이 없거나 null일때(입력창을 그냥 취소 누르면 null, 입력안하고 확인 누르면 공백)
        setUserName();
    }else{
        localStorage.setItem('name', myName); //localStorage는 브라우저를 닫았다 열어도 데이터가 남음. 저장공간 큼, key : value 구조로 name 키에 값을 할당.
        myHeading.textContent = 'Mozilla is cool, ' + myName;

    }
}

if(!localStorage.getItem('name')){ // getItem으로 이미 셋팅된 값이 있는지 확인
    setUserName(); // 없으면 새로 입력받는 함수 호출
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName; // 값이 이미 있으면 있는 값을 띄움
}

myButton.onclick = setUserName// 수동으로 유저 변경하기 위하여 함수 새로 호출(localStorage 값 초기화 용도)    

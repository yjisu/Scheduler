
let date= new Date();

const makeCalendar=()=>{

////현재 year-month
    
    function leftZero(value){
        if (value>=10){
            return value;
        }
        return `0${value}`;
    }
    const viewYear = date.getFullYear();
    const viewMonth = leftZero(date.getMonth()+1);
    const viewDate = date.getDate();
    document.querySelector('.year-month').textContent=`${viewYear}. ${viewMonth}`;
    document.getElementById('TodayTodo').textContent =`${viewYear}. ${viewMonth}. ${viewDate} `;

    ////현재 달 날짜 
    const prevLast= new Date(date.getFullYear(),date.getMonth(),1);
    const firstDate= prevLast.getDate(prevLast);
    const firstDay= prevLast.getDay();

    const thisLast=new Date(date.getFullYear(),date.getMonth()+1,0);
    const lastDate = thisLast.getDate(thisLast);
    const lastDay=thisLast.getDay();

    const Dates = []
    for (let i =firstDate ; i<=lastDate;i++){
        Dates.push(i);
    }
    if(firstDay!==0){ //1일이 일요일이 아니면
        for(let i =0; i<firstDay;i++){
            Dates.unshift(" ")   //배열 맨 앞에 값 추가
        }
    }
    for (let i =1; i<7-lastDay;i++){
        Dates.push(" ");
    }
    const firstDateIndex= Dates.indexOf(1);
    const lastDateIndex = Dates.lastIndexOf(lastDate);
    Dates.forEach((date,i) => {
        const condition = i>= firstDateIndex && i<lastDateIndex+1 ? 'this' : 'other';
        if(condition==='this'){
            Dates[i]= `<div class="date"><span class="${condition}"><div id="date_num">${date}</div></span></div>`;
        }else{
            Dates[i]= `<div class="date"><span class="${condition}">${date}</span></div>`;
        }
        
    });
    // 오늘 날짜 그리기
  
    document.querySelector('.dates').innerHTML = Dates.join('');
    let today = new Date();
  if (viewMonth === leftZero(today.getMonth()+1) && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll('#date_num')) {
      if (+date.innerText === today.getDate()) {  //+는 단항 연산자 문자열을 숫자타입으로 바꿈
        date.classList.add('today');
        break;
      }
    }
  }
}
makeCalendar();
//다른 달로 이동
const prevBtn = document.querySelector(".go-prev");
const nextBtn = document.querySelector(".go-next");
const prevMonth=()=>{
    date.setDate(1);
    date.setMonth(date.getMonth()-1);
    makeCalendar();
}
const nextMonth=()=>{
    date.setDate(1);
    date.setMonth(date.getMonth()+1);
    makeCalendar();
}
prevBtn.addEventListener("click",prevMonth);
nextBtn.addEventListener("click",nextMonth);

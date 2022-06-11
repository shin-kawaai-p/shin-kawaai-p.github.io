




function hamburger() {
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('nav').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click' , function() {
    hamburger();
});

function countdown(due) {
    const now = new Date();

    const rest = due.getTime() - now.getTime();
    const sec = Math.floor(rest / 1000) % 60;
    const min = Math.floor(rest / 1000 / 60) % 60;
    const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000 / 60 / 60 / 24);
    const count = [days, hours, min, sec];

    return count;
}

const goal = new Date(2022, 5, 25);

function recalc() {
    const counter = countdown(goal);
    document.getElementById('day').textContent = counter[0];
    document.getElementById('hour').textContent = counter[1];
    document.getElementById('min').textContent = String(counter[2]).padStart(2, '0');
    document.getElementById('sec').textContent = String(counter[3]).padStart(2, '0');
    refresh();
}

function refresh() {
    setTimeout(recalc, 1000);
}

recalc();


function goLoginPage(){
    passwd=document.formno1.passwd.value;
    if(passwd=="tarako"){
        location.href="cost.html";
    }else{
        alert('パスが違うよ～');
    
    }
 }
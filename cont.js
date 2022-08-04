class Cont{
    constructor(){
        this.dataBase = JSON.parse(localStorage.getItem('dataBase'));
        this.userDay = this.dataBase.userDay;
        this.userMonth = this.dataBase.userMonth;
        this.userYear = this.dataBase.userYear;

        //Atributos Utils
        this.date = new Date();
        this.fieldDay = document.getElementById('dia');
        this.fieldHour = document.getElementById('hora');
        this.fieldMinute = document.getElementById('minuto');
        this.fieldSecond = document.getElementById('segundo');
        //Atributos App
        this.day = this.dayDiff();
        this.hour = this.hourDiff();
        this.minute = this.minuteDiff();
        this.second = this.secondDiff();
    }
    
    info(){
        console.log(`Data do usuario: ${this.userDay}/${this.userMonth}/${this.userYear}`)   
        console.log(`Data atual: ${this.date.getDate()}/${this.date.getMonth()+1}/${this.date.getFullYear()}`) 
        
        console.log(`Diferença: ${this.dayDiff()} Dias | ${this.hourDiff()} Horas | ${this.minuteDiff()} Minutos | ${this.secondDiff()} Segundos`)

    }
    view(){
        this.fieldDay.textContent = this.day;
        this.fieldHour.textContent = this.hour;
        this.fieldMinute.textContent = this.minute;
        this.fieldSecond.textContent = this.second;

        if(this.fieldDay.textContent < 10){
            this.fieldDay.textContent = '0'+this.day;
        }
        if(this.fieldHour.textContent < 10){
            this.fieldHour.textContent = '0'+this.hour;
        }
        if(this.fieldMinute.textContent < 10){
            this.fieldMinute.textContent = '0'+this.minute;
        }
        if(this.fieldSecond.textContent < 10){
            this.fieldSecond.textContent = '0'+this.second;
        }
    }
    dayDiff(){
        let date = new Date(this.userYear,this.userMonth-1,this.userDay);
        let actualDate = new Date();
        let difference = Math.floor((date - actualDate)/1000/60/60/24);
        
        return Number(difference);
    }
    hourDiff(){
        return Number(23 - this.date.getHours());
    }
    minuteDiff(){
        return Number(59-this.date.getMinutes());
    }
    secondDiff(){
        return Number(60-this.date.getSeconds());
    }
}
let cont1 = new Cont();

let interval = setInterval(() => {
    new Cont().view();  
    if(
        cont1.fieldDay.textContent == 0 && cont1.fieldHour.textContent == 0 &&
        cont1.fieldMinute.textContent == 0 &&
        cont1.fieldSecond.textContent == 1)
    {
        cont1.fieldSecond.textContent = '00'
        
        finish();
        clearInterval(interval)

    }
}, 1000);

if(cont1.dayDiff() == -1){
    finish()
    clearInterval(interval)
}

function buttonCont(){
    let cont = new Cont();
    cont.day = 0;
    cont.hour = 0;
    cont.minute = 0;
    cont.second = 0;
    
    clearInterval(interval);
    location = 'index.html';
}
function finish(){
    let fields = document.querySelectorAll(".info-contador");
    let result = document.getElementById('result').style.display = 'block';
    let faltam = document.getElementById('faltam').style.display = 'none';
    

    fields.forEach(field =>{
        console.log(field.style.display = 'none')
    })
}

class Cont{
    constructor(){
        this.dataBase = JSON.parse(localStorage.getItem('dataBase'));
        this.userDay = this.dataBase.userDay;
        this.userMonth = this.dataBase.userMonth;
        this.userYear = this.dataBase.userYear;

        //Atributos Utils
        this.date = new Date();
        this.campoDia = document.getElementById('dia');
        this.campoHora = document.getElementById('hora');
        this.campoMinuto = document.getElementById('minuto');
        this.campoSegundo = document.getElementById('segundo');
        //Atributos App
        this.day = this.diferencaDia();
        this.hour = this.diferencaHora();
        this.minute = this.diferencaMinuto();
        this.second = this.diferencaSegundo();
    }
    
    info(){
        console.log(`Data do usuario: ${this.userDay}/${this.userMonth}/${this.userYear}`)   
        console.log(`Data atual: ${this.date.getDate()}/${this.date.getMonth()+1}/${this.date.getFullYear()}`) 
        
        console.log(`Diferença: ${this.diferencaDia()} Dias | ${this.diferencaHora()} Horas | ${this.diferencaMinuto()} Minutos | ${this.diferencaSegundo()} Segundos`)

    }
    view(){
        this.campoDia.textContent = this.day;
        this.campoHora.textContent = this.hour;
        this.campoMinuto.textContent = this.minute;
        this.campoSegundo.textContent = this.second;

        if(this.campoDia.textContent < 10){
            this.campoDia.textContent = '0'+this.day;
        }
        if(this.campoHora.textContent < 10){
            this.campoHora.textContent = '0'+this.hour;
        }
        if(this.campoMinuto.textContent < 10){
            this.campoMinuto.textContent = '0'+this.minute;
        }
        if(this.campoSegundo.textContent < 10){
            this.campoSegundo.textContent = '0'+this.second;
        }
    }
    diferencaDia(){
        let date = new Date(this.userYear, this.userMonth-1, this.userDay);
        let dataAtual = new Date();
        let diferença = Math.floor((date - dataAtual)/1000/60/60/24);
        
        return Number(diferença);
    }
    diferencaHora(){
        return Number(23 - this.date.getHours());
    }
    diferencaMinuto(){
        return Number(59-this.date.getMinutes());
    }
    diferencaSegundo(){
        return Number(60-this.date.getSeconds());
    }
}
let cont1 = new Cont();

let interval = setInterval(() => {
    new Cont().view();  
    if(
        cont1.campoDia.textContent == 0 && 
        cont1.campoHora.textContent == 0 &&
        cont1.campoMinuto.textContent == 0 &&
        cont1.campoSegundo.textContent == 1)
    {
        cont1.campoSegundo.textContent = '00'
        
        finish();
        clearInterval(interval)

    }
}, 1000);

if(cont1.diferencaDia() == -1){
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
    let campos = document.querySelectorAll(".info-contador");
    let result = document.getElementById('result').style.display = 'block';
    let faltam = document.getElementById('faltam').style.display = 'none';
    

    campos.forEach(field => {
        console.log(field.style.display = 'none')
    })
}

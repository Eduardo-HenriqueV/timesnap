let dataBase = {};

function initCont(){
    let campoData = document.querySelector('#data')
    let date = new Date();
    let year = campoData.value.split('-')[0];
    let month = campoData.value.split('-')[1];
    let day = campoData.value.split('-')[2];
    
    if(year < date.getFullYear() || year == '' || month =='' || day == ''){
        alert('Preencha os campos corretamente! Lembre-se que o ano digitado deve ser maior que o atual')
    }
    else{
        dataBase.userDay = day;
        dataBase.userMonth = month;
        dataBase.userYear = year;
        localStorage.setItem('dataBase', JSON.stringify(dataBase));
        location = 'pages/contador.html';
    }
}

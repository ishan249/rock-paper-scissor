var newbtn = document.getElementById('element');
var user = document.getElementById('userScore');
var comp = document.getElementById('compScore');
var userScore=0;
var compScore=0;
function storeVar(el) {
    newbtn.innerHTML = "";
    var array = ['rock', 'paper', 'scissor'];
    var compAnswer = array[Math.floor(Math.random() * 3)];
    var amount = el.getAttribute('value');
    console.log(amount);
    if (amount == compAnswer) {
        var div = document.createElement('div');
        div.className = 'ansEmoji';
        var div1 = document.createElement('div');
        div1.className = 'ansEmoji';
        if (amount == 'rock') {
            div.innerHTML = '✊';
        }
        else if (amount == 'paper') {
            div.innerHTML = '✋'
        }
        else {
            div.innerHTML = '✌';
        }
        newbtn.appendChild(div);
        var button1 = document.createElement('button');
        button1.className = 'ansBtn';
        button1.appendChild(document.createTextNode(`Game tied Computer also chose ${amount}`));
        newbtn.appendChild(button1);
    }
    else if (amount == 'rock' && compAnswer == 'scissor') {
        var div = document.createElement('div');
        div.className = 'ansEmoji';
        div.innerHTML = '✌';
        newbtn.appendChild(div);
        var button1 = document.createElement('button');
        button1.className = 'ansBtn';
        button1.appendChild(document.createTextNode(`Yayyy!! You won Computer chose ${compAnswer}`));
        newbtn.appendChild(button1);
        userScore++;
        user.innerHTML=userScore;
    }
    else if (amount == 'rock' && compAnswer == 'paper') {
        var div = document.createElement('div');
        div.className = 'ansEmoji';
        div.innerHTML = '✋';
        newbtn.appendChild(div);
        var button1 = document.createElement('button');
        button1.className = 'ansBtn';
        button1.appendChild(document.createTextNode(`You lose Computer chose ${compAnswer}`));
        newbtn.appendChild(button1);
        compScore++;
        comp.innerHTML=compScore;
    }
    else if (amount == 'paper' && compAnswer == 'scissor') {
        var div = document.createElement('div');
        div.className = 'ansEmoji';
        div.innerHTML = '✌';
        newbtn.appendChild(div);
        var button1 = document.createElement('button');
        button1.className = 'ansBtn';
        button1.appendChild(document.createTextNode(`You lose Computer chose ${compAnswer}`));
        newbtn.appendChild(button1);
        compScore++;
        comp.innerHTML=compScore;
    }
    else if (amount == 'paper' && compAnswer == 'rock') {
        var div = document.createElement('div');
        div.className = 'ansEmoji';
        div.innerHTML = '✊';
        newbtn.appendChild(div);
        var button1 = document.createElement('button');
        button1.className = 'ansBtn';
        button1.appendChild(document.createTextNode(`Yayyy!! You Won Computer chose ${compAnswer}`));
        newbtn.appendChild(button1);
        userScore++;
        user.innerHTML=userScore;
    }
    else if (amount == 'scissor' && compAnswer == 'paper') {
        var div = document.createElement('div');
        div.className = 'ansEmoji';
        div.innerHTML = '✋';
        newbtn.appendChild(div);
        var button1 = document.createElement('button');
        button1.className = 'ansBtn';
        button1.appendChild(document.createTextNode(`Yayyy!! You Won Computer chose ${compAnswer}`));
        newbtn.appendChild(button1);
        userScore++;
        user.innerHTML=userScore;
    }
    else if (amount == 'scissor' && compAnswer == 'rock') {
        var div = document.createElement('div');
        div.className = 'ansEmoji';
        div.innerHTML = '✊';
        newbtn.appendChild(div);
        var button1 = document.createElement('button');
        button1.className = 'ansBtn';
        button1.appendChild(document.createTextNode(`You lose Computer chose ${compAnswer}`));
        newbtn.appendChild(button1);
        compScore++;
        comp.innerHTML=compScore;
    }
} 

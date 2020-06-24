var duck = document.getElementById('duck');

duck.style.left = '700px';
duck.style.top = '300px';


function fly(direction) {

    switch (direction) {
        case 'N':
            duck.style.top = parseInt(duck.style.top) - 20 +"px";
            break;
        
        case 'NE':
            duck.style.top = parseInt(duck.style.top) - 20 +"px";
            duck.style.left = parseInt(duck.style.left) + 20 +"px";
            break;

        case 'E':
            duck.style.left = parseInt(duck.style.left) + 20 +"px";
            break;
            
        case 'SE':
            duck.style.top = parseInt(duck.style.top) + 20 +"px";
            duck.style.left = parseInt(duck.style.left) + 20 +"px";
            break;

        case 'S':
            duck.style.top = parseInt(duck.style.top) + 20 +"px";
            break;
                
        case 'SW':
            duck.style.top = parseInt(duck.style.top) + 20 +"px";
            duck.style.left = parseInt(duck.style.left) - 20 +"px";
            break;

        case 'W':
            duck.style.left = parseInt(duck.style.left) - 20 +"px";
            break;
                    
        case 'NW':
            duck.style.top = parseInt(duck.style.top) - 20 +"px";
            duck.style.left = parseInt(duck.style.left) - 20 +"px";
            break;
    }
}

var direction = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

var misses = 0;
var hits = 0;
var shot = 0;


function shit() {
    shot = 1;
}

function doRandom() {

    var miss = document.getElementById('miss');
    var hit = document.getElementById('hit');

    i = 0;
    var movement = setInterval(function(){
        console.log(i);
        i++;
        if(shot === 1){
            window.clearInterval(movement);
            hits += 1;
            hit.innerHTML = 'HIT: ' + hits;
            shot = 0;
            duck.style.left = '700px';
            duck.style.top = '300px';
            doRandom();    
        } else if(i<80) {
            fly(direction[Math.floor(Math.random() * direction.length)])
        } else {
            doRandom();
            window.clearInterval(movement);
            misses += 1;
            miss.innerHTML = 'MISS: ' + misses;
            duck.style.left = '700px';
            duck.style.top = '300px';
        }
    }, 200);
}

document.getElementById('tree').ondragstart = function() { return false; };
document.getElementById('dog').ondragstart = function() { return false; };
document.getElementById('duck').ondragstart = function() { return false; };

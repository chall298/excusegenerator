let who = ['the dog','my grandma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
let where = ['at the mall, at my school, at my church, at the park'];
    
let a =Math.floor(Math.random()*who.length);
let b =Math.floor(Math.random()*what.length);
let c =Math.floor(Math.random()*when.length);
let d =Math.floor(Math.random()*where.length);
    
    document.querySelector('#excuse').innerHTML = who[a]+' '+ what[b]+' '+ when[c];
    
    
    
    




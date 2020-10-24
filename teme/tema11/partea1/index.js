//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"

//hint : String.fromCharCode() String.charCodeAt()

const moveLetters = function (string) {
    let splitting = string.split('');
    let display = '';
    splitting.map(getter = (words)=>{
        element = words.charCodeAt();
        element+=1;
        display += String.fromCharCode(element);
    })
    console.log(display);
}

moveLetters('hello') 
moveLetters('abcxy') 
moveLetters('a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y,z')
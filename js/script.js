var cel= document.getElementById("cel");
var fh= document.getElementById("fh");
cel.addEventListener('input', function(){
    let c=this.value;
    let f=(c*9/5)+32;
    if(!Number.isInteger(f)){
        f=f.toFixed(4);
    }
    fh.value=f;
});
fh.addEventListener('input', function(){
    let f=this.value;
    let c=(f-32)*5/9;
    if(!Number.isInteger(c)){
        c=c.toFixed(4);
    }
    cel.value=c;
});
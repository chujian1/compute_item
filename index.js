/**
 * Created by ypj on 18-3-24.
 */
var list = document.getElementById("list");
var Oli = list.getElementsByTagName("li");
var Sspan = list.getElementsByTagName("span");
var Sstrong = list.getElementsByTagName("strong");
function total() {
    var s_span = 0;
    var s_strong = 0;
    for(let i=0;i<Sspan.length-1;i++){
     s_span+=parseFloat(Sspan[i].innerHTML);
     s_strong+=parseFloat(Sstrong[i].innerHTML);
    }
    Sspan[Sspan.length-1].innerHTML=s_span;
    Sstrong[Sstrong.length-1].innerHTML=s_strong;

}
total();
function sub_item(b) {

    var btn = Oli[b].getElementsByTagName("input");
    var Ospan = Oli[b].getElementsByTagName("span")[0];
    var Ostrong = Oli[b].getElementsByTagName("strong")[0];
    var Oem = Oli[b].getElementsByTagName("em")[0];
    var num = 0;

    btn[0].onclick = ()=>{
        num--;
        if(num<0)
            num=0;
        Ospan.innerHTML = num;
        Ostrong.innerHTML = Oem.innerHTML*num;
        total()
    };
    btn[1].onclick = ()=>{
        num++;
        Ospan.innerHTML = num;
        Ostrong.innerHTML = Oem.innerHTML*num;
        total()
    };

}
for(let i=0;i<Oli.length;i++){
    sub_item(i);

}



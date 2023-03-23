var listanomes=[]
function submit(){
    nome =document.getElementById("name1").value
    listanomes.push(nome)
    document.getElementById("displayName").innerHTML=listanomes
}
function sorting(){
    listanomes.sort()
    document.getElementById("sorted").innerHTML=listanomes}
function searching(){
    pesquisar =document.getElementById("s1").value
    x=0
    for(var id=0;id<listanomes.length;id++){
        if(pesquisar==listanomes[id])
        {x++}
    }document.getElementById("p2").innerHTML="nome encontrado "+x
} 
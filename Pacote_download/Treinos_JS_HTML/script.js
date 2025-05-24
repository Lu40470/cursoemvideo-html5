function Calcular () 
{
    var num = Number(document.getElementById("txtnumber").value)
    var tab = (document.getElementById("tabcal"))
    var res = document.getElementById("res")
    if (num==0) 
    {
        window.alert("Digite um número apropriado!")
    } else 
    {
        for (i=0;i<11;i++) 
        {
        var item = document.createElement("option")
        item.text = `${num}    x   ${i} = ${num*i}`
        tab.appendChild(item)
        }
    }
}
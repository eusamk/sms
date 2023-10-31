function enviar()
{   
    var request = new XMLHttpRequest();   // new HttpRequest instance 
    request.onreadystatechange = function() 
    {
        if (request.readyState == XMLHttpRequest.DONE) 
        {
            var response = JSON.parse(request.responseText);
            if(response["status"] == 200)
            {
                alert("Gemidão enviado com sucesso")
            }
            else
            {
                alert("Tivemos um problema contate o suporte, erro: "+response["mensagem"])
            }
        }
    }
    request.open("POST", "https://voice-api.zenvia.com/sms/");
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Access-Token", document.getElementById("Key").value.replace(/\s/g,''));
    payload = 
    {
        "numero_destino" : document.getElementById("B").value,
        "dados": 
        [
        ],
        "mensagem" :document.getElementById("A").value
    }
    console.log(payload)
    request.send(JSON.stringify(payload));
}
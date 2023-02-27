document.getElementById('hablar').addEventListener("click",()=>{
	decir(document.getElementById("texto").value);
});

function decir(texto){
	speechSynthesis.speak(new SpeechSynthesisUtterance(texto)); //* Es necesario todo este codigo ya que esta API necesita ser activada por el usuario
}

let rec;
    if (!("webkitSpeechRecognition" in window)) {
    	alert("disculpas, no puedes usar la API");
    } else {
    	rec = new webkitSpeechRecognition();
    	rec.lang = "es-MX";
    	rec.continuous = true;
    	rec.interim = true;
    	rec.addEventListener("result",iniciar);
    }
function iniciar(event){
	for (let i = event.resultIndex; i < event.results.length; i++){
         document.getElementById('textoo').innerHTML = event.results[i][0].transcript;
	}
}


rec.start();

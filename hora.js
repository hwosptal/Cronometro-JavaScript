var num = document.getElementById("num");
	let segundo = 0;
	let minuto = 0;
	let hora = 0;
	function comeca() {
		intervalo = setInterval(function() {
			segundo++;
			if(segundo>=60) {
				segundo = 0;
				minuto++;
			}
			if(minuto>=60) {
				minuto = 0;
				hora++;
			}
			num.innerHTML = "Hora: " + hora + " Minuto: " + minuto + " Segundo: " + segundo; 
		},1000);
	}
	function para() {
		clearInterval(intervalo);
	}
	function reinicia() {
		clearInterval(intervalo);
		hora = 0;
		minuto = 0;
		segundo = 0;
		num.innerHTML = "Hora: " + hora + " Minuto: " + minuto + " Segundo: " + segundo
	}
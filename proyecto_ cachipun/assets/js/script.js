
    var num_juego = prompt('Ingrese mediante un número entero, la cantidad de veces que desea jugar: ');
    //declaración de variables para el juego
    var contador = 0;   
    var marcadorPersona = 1;
    var marcadorMaquina = 1;
    var marcadorEmpate = 1;
    while(contador < num_juego){
      var jugada_persona = prompt('Ingrese su jugada. Debe ser piedra, papel ó tijera.', 'tijera');
      ganador = defineGanador(jugada_persona, jugadaMaquina());
      contador++;

      switch (ganador) {
        case 'persona':
          alert(`¡Felicidades Persona, ganaste!,  marcador queda PERSONA [${marcadorPersona-1}] VS MÁQUINA [${marcadorMaquina-1}]`);
          break;
        case 'máquina':
          alert(`Persona, perdiste contra una máquina, ¡LOSER!, marcador queda PERSONA [${marcadorPersona-1}] VS MÁQUINA [${marcadorMaquina-1}]`);
          break;
        default:
          alert(`Empate, sigue participando, marcador queda PERSONA [${marcadorPersona-1}] VS MÁQUINA [${marcadorMaquina-1}]`);
      }

      function jugadaMaquina() {
        switch (Math.floor(Math.random() * 3)) {
          case 0:
            return 'piedra';
            break;
          case 1:
            return 'papel';
            break;
          case 2:  
            return 'tijera';
            break;
        }
      }

      function defineGanador(persona, maquina) {
        let resultado = '';
        if (persona == maquina) {
          resultado = 'empate';          
          document.getElementById("cuentaEmpate").innerHTML = (marcadorEmpate++);
        }
        else if ((persona == 'tijera' && maquina == 'papel') ||
          (persona == 'papel' && maquina == 'piedra') ||
          (persona == 'piedra' && maquina == 'tijera')) {
          resultado = 'persona';
          document.getElementById("cuentaPersona").innerHTML = (marcadorPersona++);
        }
        else {
          resultado = 'máquina';
          document.getElementById("cuentaMaquina").innerHTML = (marcadorMaquina++);
        }
        return resultado;
      }
    }


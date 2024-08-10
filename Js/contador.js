window.onload = function() {
    // Obtenemos todos los elementos con la clase "tamal1"
    var elementosTamal1 = document.querySelectorAll('.tamal1');
    
    // Iteramos sobre los elementos y aplicamos el conteo
    elementosTamal1.forEach(function(elemento, index) {
      var textoOriginal = elemento.textContent; // Guardamos el texto original
      var numeroInicial = parseInt(textoOriginal.replace('+', '')); // Removemos el signo más si está presente
      var idContador = 'contador' + index;
      elemento.setAttribute('id', idContador);
  
      // Definimos la función para realizar el conteo
      function contar() {
        var contador = 0;
        var intervalo;
        // Si es el contador de 755, lo hacemos más rápido
        if (numeroInicial === 755) {
          intervalo = setInterval(function() {
            document.getElementById(idContador).textContent = "" + contador; // Agregamos el signo más
            contador += 10; // Incremento mayor para que se mueva más rápido
            if (contador > numeroInicial) {
              clearInterval(intervalo);
              document.getElementById(idContador).textContent = textoOriginal; // Restauramos el texto original
            }
          }, 100); // Intervalo más corto
        } else {
          intervalo = setInterval(function() {
            document.getElementById(idContador).textContent = "" + contador; // Agregamos el signo más
            contador++;
            if (contador > numeroInicial) {
              clearInterval(intervalo);
              document.getElementById(idContador).textContent = textoOriginal; // Restauramos el texto original
            }
          }, 100); // Intervalo estándar
        }
      }
  
      // Llamamos a la función de conteo al cargar la página
      contar();
    });
  };
  

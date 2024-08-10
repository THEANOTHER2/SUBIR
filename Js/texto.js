document.addEventListener('DOMContentLoaded', function(){
    const mensaje = "PROTEGE TUS SUEÑOS, PREVIENE TU VIDA";
  
    const velocidadEscritura = 130; // Velocidad de escritura en milisegundos
  
    let i = 0;
    function escribirMensaje() {
      if (i < mensaje.length) {
        document.querySelector('.mensaje').textContent += mensaje.charAt(i);
        i++;
        setTimeout(escribirMensaje, velocidadEscritura);
      }
    }
  
    escribirMensaje();
  });
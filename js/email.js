const btn = document.getElementById('submit');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_twwxkch';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Error de Envio';
      alert(JSON.stringify(err));
    });
});
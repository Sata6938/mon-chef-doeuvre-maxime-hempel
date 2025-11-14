console.log("Le script est chargé !")


const titre = document.querySelector('#titre-principal')
if (titre) {
  titre.addEventListener('click', () => {
    console.log("J'ai cliqué sur le titre !");
    titre.textContent = "Titre cliqué !";
  });
}



const themeButton = document.querySelector('#bouton');

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeButton.textContent = "white-mode !";
  } else {
    themeButton.textContent = "dark-mode !";
  }
});



const themeButton = document.querySelector('#bouton');
themeButton.addEventListener('click', () => {
  const body = document.body;
  if (!body.classList.contains('dark-mode') && !body.classList.contains('white-mode')) {
    body.classList.add('dark-mode');
    themeButton.textContent = "white-mode !";
  } else if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('white-mode');
    themeButton.textContent = "mode normal !";
  } else if (body.classList.contains('white-mode')) {
    body.classList.remove('white-mode');
    themeButton.textContent = "dark-mode !";
  }
});










const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  const emailInput = document.querySelector('#email-input');
  const messageInput = document.querySelector('#message-input');
  const messageElement = document.querySelector('#form-message');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const message = messageInput.value;
    if (email.includes('@') && message.length >= 10) {
      messageElement.textContent = "Merci ! Votre message a bien été envoyé.";
      messageElement.style.color = "green";
      emailInput.value = "";
      messageInput.value = "";
    } else {
      messageElement.textContent = "Erreur : email invalide ou message trop court (10 caractères min).";
      messageElement.style.color = "red";
    }
  });
}
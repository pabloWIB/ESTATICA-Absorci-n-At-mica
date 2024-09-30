document.getElementById('firstForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let cellphone = document.getElementById('cellphone').value.trim();
    let materialType = document.getElementById('materialType').value.trim();
    let elementToAnalyze = document.getElementById('elementToAnalyze').value.trim();
    let email = document.getElementById('email').value.trim();

    let info = 'Nombre y Apellido: ' + name + 
               '\nNúmero telefónico: ' + cellphone + 
               '\nCorreo Electrónico: ' + email +
               '\nTipo de material: ' + materialType + 
               '\nElemento a analizar: ' + elementToAnalyze;

    const findErrorsDiv = document.getElementById('findErrorsDiv');  
    findErrorsDiv.innerHTML = '';  

    function createErrorMessage(message) {
        const p = document.createElement('p');
        p.textContent = message;
        p.classList.add('error-p-show');
        return p;
    }

    let hasErrors = false;

    if (name === '') {
        findErrorsDiv.appendChild(createErrorMessage('• Ingrese su nombre y apellidos'));
        hasErrors = true;
    }

    if (cellphone === '') {
        findErrorsDiv.appendChild(createErrorMessage('• Ingrese su número telefónico'));
        hasErrors = true;
    }
    
    if (email === '') {
        findErrorsDiv.appendChild(createErrorMessage('• Ingrese su correo electrónico'));
        hasErrors = true;
    }

    if (materialType === '') {
        findErrorsDiv.appendChild(createErrorMessage('• Ingrese el tipo de material'));
        hasErrors = true;
    }

    if (elementToAnalyze === '') {
        findErrorsDiv.appendChild(createErrorMessage('• Ingrese el elemento a analizar'));
        hasErrors = true;
    }

    if (hasErrors) {
        findErrorsDiv.classList.add('error-div-show');
        findErrorsDiv.classList.remove('error-div-hide');
    } else {
        findErrorsDiv.classList.add('error-div-hide');
        findErrorsDiv.classList.remove('error-div-show');

        console.log(info); 

        let mailtoLink = 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ventas@dominio.com' + '&body=' + encodeURIComponent(info);
        window.open(mailtoLink, '_blank');
    }
});
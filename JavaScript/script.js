document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const inputs = form.querySelectorAll('input:not([type="hidden"]), textarea');
    const termsCheckbox = document.getElementById('terms-checkbox');

    // Función para verificar si todos los campos y el checkbox están completos
    const checkInputs = () => {
        let allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
        let checkboxChecked = termsCheckbox.checked;
        submitBtn.disabled = !(allFilled && checkboxChecked); // Habilita o deshabilita el botón
    };

    // Evento de entrada para validar en tiempo real
    inputs.forEach(input => {
        input.addEventListener('input', checkInputs);
    });

    termsCheckbox.addEventListener('change', checkInputs);

    // Evento al enviar el formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene el envío automático
        const confirmation = confirm('¿Estás seguro de que deseas enviar este mensaje?');
        if (confirmation) {
            alert('¡Su mensaje fue enviado con éxito!');
            form.submit(); // Envía el formulario manualmente
        } else {
            alert('El envío fue cancelado.');
        }
    });

    // Verificar estado inicial
    checkInputs();
});

{/* <script type="text/javascript"> */}
    // Initialize EmailJS
    (function(){
        emailjs.init("CdUEyf_Fa0kj4yb-v")
    })();

    // Add event listener to the form
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault()
        // Collect form data
        var templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Send the email
        emailjs.send('service_n2g0tcx', 'template_ra437x7', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again later.');
            });
    });
// </script>

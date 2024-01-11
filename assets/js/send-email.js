function sendMail(contactForm) {
    emailjs.send("service_ld8bf5j", "coffee-cram", {
        "user_name": contactForm.user_name.value,
        "user_email": contactForm.user_email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            window.open("thank-you.html");
        },
        function(error) {
            console.log("FAILED", error);
            window.open("404.html");
        }
    );
    return false;  // To block from loading a new page
}
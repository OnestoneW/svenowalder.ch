document.addEventListener('DOMContentLoaded', function() {
    var submit = document.getElementById('submit');
    var submitmail = document.getElementById('submitmail');
    // onClick's logic below:
    submit.addEventListener('click', function() {
        sendMail();
    });
    submitmail.addEventListener('click', function () {
        sendMail();
    });
});

function sendMail() {
    var link = "mailto:sveno.walder@gmail.com?subject=www.svenowalder.ch%20-%20request%20from:%20";
    window.open(link);
    console.log("Submit button worked properly: " + link)
}
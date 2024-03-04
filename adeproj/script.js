window.addEventListener('scroll', reveal);
function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');

    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}




function sendEmail() {
  sendEmail.send({
    Host: "smtp.gmail.com",
    Username: "pric86599@gmail.com",
    Password: "Pric@11196",
    To: "pric86599@gmail.com",
    From: document.getElementById("email").value,
    Subject: "new contact form enquiry",
    Body: "Name: " + document.getElementById("name").value
      + "<br> Email: " + document.getElementById("email").value
      + "<br> Doubt: " + document.getElementById("dbt").value
      + "<br> Message: " + document.getElementById("message").value
  }).then(
    message => alert("message sent succesfully")
  );
}


window.addEventListener('scroll', function()
{
    var tname = this.document.getElementById('hed1');
    if(this.window.scrollY > 50){  
      tname.style.position='fixed';
    tname.style.top='0';
      tname.style.backgroundColor='gray';
      tname.style.width='100%';
      tname.style.color='black';
      tname.style.borderColor='black';
   }else{
      tname.style.position='static';
      tname.style.backgroundColor='black';
    }
});

// const textarea = document.querySelector("textarea");
// textarea.addEventListener('keyup', e=>{
//     let scHeight = e.target.scrollHeight;
//     textarea.style.height = `${scHeight}px`;
//     textarea.style.height = auto;
// });
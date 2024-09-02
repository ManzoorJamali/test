function sendemail(){

   var a = document.getElementById('name').value;
   var b = document.getElementById('sub').value;
   var c = document.getElementById('comment').value;
   var mail = document.getElementById('mail').value;

   var body = "Name:  " + a +"<br/>Subject :  " +b +"<br/> comment :  "+c+ "<br/> Email:  "+mail;
 
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "jamalimanzoor05@gmail.com",
    Password: "AF993DCB04AAA9BD6B22D7D97BA8D4217278",
    To: "jamalimanzoor05@gmail.com",
    From: mail,
    Subject: b,
    Body: body
  }).then(
   //  message => alert(message)
   
     message =>{
     if(message =='OK'){
      
       swal("Success!", "Your Message sent successfully!", "success");
       var a = document.getElementById('name').value = ''
       var b = document.getElementById('sub').value  = ''
       var c = document.getElementById('comment').value  = ''
       var mail = document.getElementById('mail').value = ''
     }
    
   
   }
   );

}
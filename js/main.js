// $(document).ready(function(){
//   $('.next').click(){
//       console.log('clicked')
//   }
// })

$(document).ready(function() {
  var form = $(".login-form");
  var status = false;
  $("#login").click(function(event){
    event.preventDefault();
    if(status == false){
      form.fadeIn();
      status = true;
    }else {
      form.fadeOut();
      status = false;
    };  
  });
})




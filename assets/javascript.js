var url = "https://api.github.com/users/";
var settings = {
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer cd0be9b8784ec0c3cc9202784dfccd8a72fbf953"
    },
  };
$("#submit").click(function(){
        callGithub();
});


function callGithub(){
  
  var username = $("#github").val();
  settings.url = url+username ; 
    $.ajax(settings).done(function (response) {
        console.log(response);
        $("#github").attr("src",response.avatar_url);
        $("body").append(image);
      });
}
// $('#form').submit(function(e) {
//   e.preventDefault();
//   $.ajax({
//       url: "url to google form responses",
//       data: $(this).serialize(),
//       type: "POST",
//       dataType: "xml",
//       success: function(data) {
//           console.log('Submission successful');
//       },
//       error: function(xhr, status, error) {
//           console.log('Submission failed: ' + error);
//       }
//   });
// });
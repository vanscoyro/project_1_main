var url = "https://api.github.com/users/";
var settings = {
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer cd0be9b8784ec0c3cc9202784dfccd8a72fbf953"
    },
  };
  
$("#search").on('keypress',function(e) {
    if(e.which == 13) {
        callGithub();
    }
});

function callGithub(){
  
  var username = $("#search").val();
  settings.url = url+username ; 
    $.ajax(settings).done(function (response) {
        console.log(response);
        var image =  $("<img>")
        image.attr("src",response.avatar_url);
        $("body").append(image);
      });
  
}
 




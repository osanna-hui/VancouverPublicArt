//form validation
function checkFirstName(input) {
  //console.log(input);
  if(input.validity.patternMismatch) {
      input.setCustomValidity("Please enter a name within 3 to 20 characters");
      return false;

  } else if(input.validity.valueMissing) {
      input.setCustomValidity("You must enter a name!");
      return false;

  } else {
      input.setCustomValidity("");
      return true;
  }
}


function checkLastName(input) {
  if(input.validity.patternMismatch) {
      input.setCustomValidity("Please enter a name within 3 to 20 characters");

  } else if(input.validity.valueMissing) {
      input.setCustomValidity("You must enter a name!");

  } else {
      input.setCustomValidity("");

  }
}


var checkEmail = function checkEmail(input) {
  if(input.validity.patternMismatch) {
      input.setCustomValidity("Please enter a valid email address");

  } else if(input.validity.valueMissing) {
      input.setCustomValidity("You must enter an email!");

  } else {
      input.setCustomValidity("");

  }
}



//jquery and jqueryUI and PHP functions
$(document).ready(
function(){
  $("#terms").click(
  function(){
    $("#TnC").toggle(300);

  });


  $('#subform').submit(function(e) {
    // don't allow the anchor to visit the link
    e.preventDefault();
    //console.log("yep");
    //console.log($("#firstName"));
      //checkFirstName($("#firstName"));
      //console.log("called?");
      //var firstNameGood = checkFirstName($("#firstName"));
      // document.getElementById("firstName")
      //checkFirstName($("#firstName")[0]);
      /*if(!checkFirstName($("#firstName")[0])) {
          console.log("not good");
          return;
      } */

      var formData = ConvertFormToJSON("#subform");
      //var formData = {};
//POST
    $.ajax({
        url: "post.php",
        type: "POST",
        dataType: "JSON",
        data: formData,
        success: function(data) {
            console.log("Data returned from server in POST: ", data);
            var listData = "";
            for(var key in data) {
                listData += key + ":" + data[key] + " ";
            }
            $("#container").text(data['msg']);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            //$("#container").text(jqXHR.statusText);
        }
        
    });
    //return false;

      function ConvertFormToJSON(form){
          var array = $(form).serializeArray();
          var json = {};

          /*
              Read the following as:
                For every object in the array, use it's name and value
                to add a new property to the JavaScript object that is
                assigned to the variable 'json'. If the value of the
                input/textArea/select is undefined, use an empty string
                as the value.
           */ 
           
          jQuery.each(array, function() {
              json[this.name] = this.value || '';
          });
          return json;
      }

      $("#suggestion").css("display", "block");
}); 


    $("#apps").click(function(){
      $("#appsResults").css("display", "block");
      $("#container").css("display", "none");
      $("#suggestion").css("display", "none");
      $.ajax({
        url: "get.php",
        dataType: "json",
        // data: {firstName: $("#firstName").val()},
        type: "GET",
        success: function(data) {
            console.log("Data from GET:", data);
            var listData = "";
                for(var key in data) {
                    listData += "<tr><td>" + key + "</td><td>" + data[key] + "</td></tr>";
                }
                $("#appsResults").html(listData);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $("#appsResults").text(jqXHR.statusText);
        }
    });
    });

}
);

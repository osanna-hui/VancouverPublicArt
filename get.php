<?php
    $methodType = $_SERVER['REQUEST_METHOD'];
    //$data = array("msg" => "$methodType");

    if ($methodType === 'GET') {
            //$firstname = $_GET['firstName'];
        $data = array("Vancouver Tourism Apps: " => "Click to Download", "<img class='applogos' src='images/formimage/VanArtLogo_02.jpg'>" => "<a href='https://itunes.apple.com/ca/genre/ios/id36?mt=8' target='_black'><img id='download' src='images/formimage/AppStore.png'/></a>  <a href='https://play.google.com/store?hl=en' target='_black'><img id='download' src='images/formimage/GooglePlay.png'/></a>", "<img class='applogos' src='images/formimage/VancouverHikes.png'>" => "<a href='https://itunes.apple.com/ca/genre/ios/id36?mt=8' target='_black'><img id='download' src='images/formimage/AppStore.png'/></a>  <a href='https://play.google.com/store?hl=en' target='_black'><img id='download' src='images/formimage/GooglePlay.png'/></a>", "<img class='applogos' src='images/formimage/yvbaricon.png'>" => "<br/><a href='https://itunes.apple.com/ca/genre/ios/id36?mt=8' target='_black'><img id='download' src='images/formimage/AppStore.png'/></a>  <a href='https://play.google.com/store?hl=en' target='_black'><img id='download' src='images/formimage/GooglePlay.png'/></a><br/><br/>", "<a id='back' href='index.html'><img id='back' src='images/formimage/BackToApp.png'></a>" => "<a id='back' href='form.html'><img id='back' src='images/formimage/BackToForm.png'></a>");

    } else {
        $data = array("msg" => "Sorry, your request cannot be completed at the moment. Please try again later.");
    }

    echo json_encode($data, JSON_FORCE_OBJECT);

?>
 
/**
 * Created by Shaul on 06/10/2015.
 */
var main = function(){

    var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json&jsoncallback=?";

    $.getJSON(url,function(flickrResponse){
        flickrResponse.items.forEach(function(photo){
            var $img = $("<img>");
            $img.attr("src",photo.media.m);
            $img.hide();
            $("main .photos").append($img);
            $img.fadeIn();
        });
        console.log(flickrResponse)
    })
};
$(document).ready(main);
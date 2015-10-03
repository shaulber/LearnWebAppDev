/**
 * Created by shaulberkovich on 10/3/15.
 */

var main = function() {
    "use strict";

    $(".comment-input button").on("click",function(event){

        if ($(".comment-input input").val() !== ""){
           addCommentFromInput()
        }

    });
    $(".comment-input input").on("keypress",function(event){
        if (event.keyCode === 13){
            addCommentFromInput()
        }
    });

    var addCommentFromInput = function (){
        var $new_comment;
        $new_comment = $("<p>").text($(".comment-input input").val());
        $new_comment.hide();
        $(".comments").append($new_comment);
        $new_comment.fadeIn();
        $(".comment-input input").val("");
    }
};
$(document).ready(main);

/**
 * Created by Shaul on 06/10/2015.
 */
var main = function(){
    "use strict";

    $.getJSON("Cards/aceofspades.json",function(card){
        console.log(card);
    });
};
$(document).ready(main);
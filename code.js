$(document).ready(function () {



    
    
    
    
    
    
    
    
    $(window).scroll(function(){
        var posi = $(document).scrollTop();
        if(posi>400){
            $("#customise").removeClass("old");
            $("#customise").addClass("new");
        }
        
        else{
            $("#customise").removeClass("new");
            $("#customise").addClass("old");
        }
        $("#result").text(posi);
    });
    
    
    
    
    
    
    
    
    
    






});
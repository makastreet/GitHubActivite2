$(document).ready(function() {

                $('.ascenceur').next('div').hide();
                $('.ascenceur').mouseover(function(){
                    if ($(this).next('div').is(':hidden')){
                        $('.ascenceur').next('div:visible').slideUp();
                        $(this).next('div').slideDown();
                    }
                });
                

            });
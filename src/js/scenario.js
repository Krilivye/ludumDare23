$(document).ready(function(){


        var intro = function(){
                var intro =$("<div id='intro' />")
	        $('#game').append(intro)
	        intro.story('Ludum Dare 23',{classes:'.mainTitle'})
                     .story('Stuck in the DOM World',
                            {classes:'.subTitle',
                             time:2,
                             callback:function(){
                                         setTimeout(function(){
	                                 $('#game').empty();
                                                demarrerStory();
                                                },6000)
                                        }
                                 }
                       );
        }

         var demarrerStory = function(){
                var mainstory =$("<div id='mainstory'/>")
                
                $('#game').append(mainstory)
                mainstory
                        .story('This game  do not store anything on any server.  Every things append localy.')
                        .story('The game will start in several seconds, or minutes, depending on your connection')
                        .story('I think you will enjoy It')
                        .story('By the way i’m a young developper. And I’m realy happy to do this LD.')
                        .story('So credits: Pierre Bousquié')
                        .story('Use JQuery and other Javascript library.')
                        .story('Please do not use refresh button. I can’t save the state of the game.')
                        /*.story('No pixels were harmed during the development')
                        .story('Used 750words.com to make the whole storie Yep 750 Words')
                        .story('Graphics made on inkscape')
                        .story('Animation hand made with JQuery')
                        .story('CSS')
                        .story('Using gedit and emacs.')
                        .story('On a linux computer')
                        .story('Coded for and debbuged in firexfox')*/
                        .story('Not tested on IE, sorry')
                        .story('Hey wait a minute')
                        .story('Something strange append here.')
                        .story('Why is this not loading?')
                        .story('What’s happening?',{callback:function(){creatingDev()}})
                        .story('There’s some lights over there. Can’t see anything!!!!!',{callback:function(){setTimeout(function(){
                                $('#mainstory').empty();                               
                        },3000)}})                     
        }
        
        var creatingDev = function(){
        var mainstory =$("<div id='mainstory'/>")
                
                $('#game').append(mainstory)
                mainstory
                        .story('This game  do not store anything on any server.  Every things append localy.')
                        
                var dev = $('body').playerDev();
                dev.fall();
                dev.story('Yaaaaaaaaaahhhhhhhhh')
                        .story('AAAAAAAAAAAAAAAH')
                        .story('AH')
                        .story('Ah')
                        .story('a',{callback:function(){
                                $(this).empty()}});
               
        }
        
        creatingDev();
 

});

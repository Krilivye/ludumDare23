(function( $ ) {

    $.fn.story = function(text,options){
	
        return this.each(function(){
            var opts = $.extend({
                time : 0,
                classes:'.story',
                callback:undefined,
                interval:2000
            },options);

            var elem =$(this);
            
            var callcallback=function(){
                if(typeof opts.callback == 'function'){
                    opts.callback.apply(elem);
                }
            };
            
            var display = function()
            {                                                     
                story.html(text).hide().fadeIn('slow',callcallback);
            };
            
            var storySettings = function(story){      

                if(story.data('time')>0){
                    
			setTimeout(                        
				display
			    ,
			    story.data('time')
			);
                    
                }else{ 
                    display();                
                }
                
            };
            
            var story = elem.find(opts.classes);
            if (story.size() <=0){                 
                story= $("<div class='"+opts.classes.substring(1)+"'/>");
                story.data('time',opts.time*opts.interval);
                elem.append(story);
                storySettings(story);
            }else{
                var curmaxtime= story.data('time');
                story.data('time',curmaxtime+Math.max(opts.time*opts.interval,opts.interval));
                storySettings(story);
            }
            return this;

        });
    };
})( jQuery );

(function( $ ) {

    var imageSize = function(selector){

        var imageSrc = $(selector)
                .css('background-image')
                .replace(/"/g, '')
                .replace(/url\(|\)$/ig, '');
	// I just broke it up on newlines for readability        

	var image = new Image();
	image.src = imageSrc;

	return {'width':image.width,'height':image.height};
    };


    $.fn.playerDev = function(){
        var elem = this;
        var player = $("<div class='dev'/>");
        player.hide();
        player.css('left','50%');
        elem.append(player);
        
        var size = imageSize('.dev');
        player.width(size.width);
        player.height(size.height);
        return player;
	
	
    };

})( jQuery );
(function( $ ) {
    $.fn.fall = function(){
        var elem = this;
        var midsize = $(window).height()/2;
        elem.css('top','0px');
        elem.fadeIn().animate({"top": "+="+midsize+"px"},10000);

    };
})( jQuery );



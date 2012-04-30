$(document).ready(function(){
    module("Story", {

	teardown: function() {

	    $('#game').empty();
	}
    });
    test("Affiche une story",function(){
        //Arrange
        var story = 'une story';
        
        //Acta
        $('#game').story(story);
        
        //Assert
        equal($('#game .story').html(), story);
    });

    test("Affiche une story apres quelques secondes", function(){
        //Arrange
        var clock = this.sandbox.useFakeTimers();
        var story = 'une story';
        var time = 2;
	var interval = 2000;
        
        //Act
        $('#game').story(story,{'time':time});
        
        //Assert
        equal($('#game .story').html(), ""); 
        clock.tick(time*interval+1);
        equal($('#game .story').html(), story);
        clock.restore();
    });
    test("Affiche une story sous une autre classe après quelques secondes", function(){
        //Arrange
        var clock = this.sandbox.useFakeTimers();
        var sousstory='une sous story';
        var time = 2;
	var interval=2000;
        var classe ='.sousStory';
        
        //Act
        $('#game').story(sousstory,{'time':time,'classes':classe});
        
        //Assert
        equal($('#game '+classe).html(), ""); 
        clock.tick(time*interval+1);
        equal($('#game '+classe).html(), sousstory);
        clock.restore();
        
    });
    test("Peut lancer une fonction après execution",function(){
        //Arrange 
        var clock = this.sandbox.useFakeTimers();
	var interval = 2000;
        var apres='après';
        var func = function(){
	    
            $('#game').html(apres);
        };
        
        //Act
        $('#game').story('me',{'callback':func});
        //Assert
        clock.tick(interval);
        equal($('#game').html(),apres);
        clock.restore(); 
	
    });
    test("Change le message si il est chainé",function(){
        //Arrange
        var clock = this.sandbox.useFakeTimers();
	var interval = 2000;
        var message1='test';
        var message2='test2';
        
        //Act
        $('#game').story(message1).story(message2);
        
        //Assert
        equal($('#game .story').html(),message1);
        clock.tick(interval);
        equal($('#game .story').html(),message2);
        clock.restore();
    });
    test("Change le message si il est chainé plusieurs fois",function(){
        //Arrange
        var clock = this.sandbox.useFakeTimers();
	var interval = 2000;
        
        //Act
        $('#game').story('test',{time:2}).story('test2',{time:2}).story('test3');
        
        //Assert
        equal($('#game .story').html(),'');
        clock.tick(interval*2);
        equal($('#game .story').html(),'test');
        clock.tick(interval*2);
        equal($('#game .story').html(),'test2');
        clock.tick(interval);
        equal($('#game .story').html(),'test3');
        clock.restore();
    });
    test("Peut chainer deux styles différentes",function(){
        //Arrange
        var clock = this.sandbox.useFakeTimers();
	var interval = 2000;
        
        //Act
        $('#game').story('start')
            .story('test',{time:3,classes:'.me'})
            .story('test2',{time:1})
            .story('test3',{classes:'.me'})
            .story('test4',{classes:'.trois'});
        
        //Assert
        equal($('#game .story').html(),'start');
        clock.tick(interval*3);
        equal($('#game .me').html(),'test');
        clock.tick(interval*1);
        equal($('#game .story').html(),'test2');
        clock.tick(interval);
        equal($('#game .me').html(),'test3');
        equal($('#game .trois').html(),'test4');
        clock.restore();
    });
    
    module("Dev", {

	teardown: function() {

	    $('#game').empty();
	}
    }); 
    test("Display a dev",function(){
        //Arrange
        
        //Act
        $('#game').playerDev();
        
        //Assert
        equal($('#game .dev').size(),1);
	
    });
    
});

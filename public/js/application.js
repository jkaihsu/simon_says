$(document).ready(function(){

  $('#get_color').on('click', function(e){
    e.preventDefault();
    // var cellNum = Math.floor(Math.random() * 9)+1;
    // var cellColor = (Math.random()*0xFFFFFF<<0).toString(16);
    console.log('click on #get_color');

    $.ajax ({
      type: "POST",
      url: "/color"
    }).done(function(data){ 
      
      console.log(data);
      $('#color_me li:nth-child(' + data.cell +')').css('background-color',  data.color );
      console.log('i am here');

    }).fail(function(){
      console.log('not this time')
    })

  });

  $('#clear_color').on('click', function(e){
    console.log('click on #clear_color');

    // $('#color_me li').each(function(i, cell){
    //   $(cell).css('background-color', 'white');
    //   console.log(i);
    //   console.log(cell);
    // })
    $('#color_me li').css('background-color', 'white');
  })


});
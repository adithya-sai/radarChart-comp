var data = [];
var data1=[];
d3.csv("players.csv", function(error, csv_data)
{
    csv_data.forEach(function (d) 
    {
        data.push(
        {      
            className: d.player,
            player: d.player,
            axes:   [
            {axis: "First serve %", value: Math.log(+d.firstServe)},
            {axis: "Average number of aces", value: Math.log(+d.ace)},
            {axis: "Fastest serve(mph)", value: Math.log(+d.fastServe)},
            {axis: "  Average 1st serve speed(mph)", value: Math.log(+d.avgFirstServe)},
            {axis: "Average 2nd serve speed(mph)", value: Math.log(+d.avgSecServe)} 
                    ]  
        });
        data1.push(
        {      
            className: d.player,
            player: d.player,
            axes:   [
            {axis: "break point conversion %", value: Math.log(+d.break)},
            {axis: "Return points %", value: Math.log(+d.return)},
            {axis: "Average number of winners", value: Math.log(+d.winner)},
            {axis: "Average total points won per game", value: Math.log(+d.total)},
            {axis: "Net points won %", value: Math.log(+d.net)} 
                    ]  
        });
    });
    console.log(data); 
    RadarChart.defaultConfig.levelTick = true;
    RadarChart.defaultConfig.radius = 6;
    RadarChart.draw(".chart-container", data);
    RadarChart.draw(".chart-container1", data1);
   // RadarChart.draw(".chart-container", data1);

});

$( document ).ready(function() 
    {
        $('#agassi').click(function()
        {   
            $('.Andre').toggle();
        });
        $('#Murray').click(function()
        {   
            $('.Murray').toggle();
        });
        $('#Roddick').click(function()
        {   
            $('.Roddick').toggle();
        });
        $('#Ferrer').click(function()
        {   
            $('.Ferrer').toggle();
        });
        $('#Davydenko').click(function()
        {   
            $('.Davydenko').toggle();
        });
        $('#Youzhny').click(function()
        {   
            $('.Youzhny').toggle();
        });
        $('#Fish').click(function()
        {   
            $('.Fish').toggle();
        });
        $('#Hewitt').click(function()
        {   
            $('.Hewitt').toggle();
        });
        $('#Melzer').click(function()
        {   
            $('.Melzer').toggle();
        });
        $('#Potro').click(function()
        {   
            $('.Potro').toggle();
        });
        $('#Ferrero').click(function()
        {   
            $('.Ferrero').toggle();
        });
        $('#Isner').click(function()
        {   
            $('.Isner').toggle();
        });
        $('#Tipsarevic').click(function()
        {   
            $('.Tipsarevic').toggle();
        });
        $('#Blake').click(function()
        {   
            $('.Blake').toggle();
        });
        $('#Verdasco').click(function()
        {   
            $('.Verdasco').toggle();
        });
        $('#Gonzalez').click(function()
        {   
            $('.Gonzalez').toggle();
        });
        $('#Lopez').click(function()
        {   
            $('.Lopez').toggle();
        });
        $('#Robredo').click(function()
        {   
            $('.Robredo').toggle();
        });
         $('#Haas').click(function()
        {   
            $('.Haas').toggle();
        });
          $('#Berdych').click(function()
        {   
            $('.Berdych').toggle();
        });
           $('#Wawrinka').click(function()
        {   
            $('.Wawrinka').toggle();
        });
            $('#Federer').click(function()
        {   
            $('.Federer').toggle();
        });
            $('#Ginepri').click(function()
        {   
            $('.Ginepri').toggle();
        });
            $('#Gasquet').click(function()
        {   
            $('.Gasquet').toggle();
        });
            $('#Nadal').click(function()
        {   
            $('.Nadal').toggle();
        });
            $('#Kohlschreiber').click(function()
        {   
            $('.Kohlschreiber').toggle();
        });
            $('#Djokovic').click(function()
        {   
            $('.Djokovic').toggle();
        });
            $('#Nalbandian').click(function()
        {   
            $('.Nalbandian').toggle();
        });

    });



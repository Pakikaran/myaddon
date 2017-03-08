$(document).ready(function () {
    var convert_button = $(".convert_button button");
    var loader = $(".loader");
    var ajax_data = $(".ajax_data");
    var section2 = $(".section2");
    convert_button.click(function () {
        section2.css({"display":"block"});
        var value_input = parseFloat($(".value_input input").val());
        ajax_data.html("");
        loader.css({
            "display":"block"
        });
        var from = $(".convert_from select").val();
        var to =  $(".convert_to select").val();
        $.ajax({
            type: "GET",
            dataType: "json",
            data: "from="+from+"&to="+to,
            url: "http://rate-exchange.herokuapp.com/fetchRate",
            success: function(data){
                loader.css({
                    "display":"none"
                });
                if(data.Error === "Invalid parameters"){
                    ajax_data.html("<p class='error'>Invalid parameters</p>");
                }else{
                    var total = value_input*data.Rate;
                    ajax_data.html("<p>"+value_input+" "+data.From+" = "+total+" "+data.To+"</p>");
                }
            }
        });
    });
});
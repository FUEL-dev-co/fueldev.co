var FuelCo = window.FuelCo || {};

FuelCo = {

    config : function(){

    },

    init : function(){

        FuelCo.$fuelBtn = $('.logo');

        FuelCo.config();
        FuelCo.bindings();
    },

    bindings : function(){

        FuelCo.$fuelBtn.on('click', function(e){FuelCo.tearOpen(e)});

    },

    tearOpen : function(e){
        e.preventDefault();
        $('.lower-wrap').animate(
            {
                top : 400
            },
            {
                specialEasing: {
                    duration: 200,
                    easing: "easeOutBounce"
                }
            }
        );
        return false;

    }
};




$(function(){

    FuelCo.init();

});
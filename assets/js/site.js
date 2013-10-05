var FuelCo = window.FuelCo || {};

FuelCo = {

    config : function(){

    },

    init : function(){

        FuelCo.$fuelBtn = $('.logo');
        FuelCo.$tornOpen = false;

        FuelCo.config();
        FuelCo.bindings();
    },

    bindings : function(){

        FuelCo.$fuelBtn.on('click', function(e){FuelCo.tearOpen(e)});

    },

    tearOpen : function(e){
        e.preventDefault();
        if (FuelCo.$tornOpen === true)
        {
            return;
        }
        $('.lower-wrap').animate(
            {
                top : 400
            },
            {
                specialEasing: {
                    duration: 200,
                    easing: "easeOutBounce"
                },
                complete : function(){
                    FuelCo.$tornOpen = true;
                }
            }
        );
        return false;
    },

    tearClose : function(e){

        $('.lower-wrap').animate(
            {
                top : 0
            },
            {
                specialEasing: {
                    duration: 200,
                    easing: "easeOutBounce"
                },
                complete : function(){
                    FuelCo.$tornOpen = false;
                }
            }
        );
    }
};




$(function(){

    FuelCo.init();

});
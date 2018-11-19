type = ['','info','success','warning','danger'];


demo = {
    initPickColor: function(){
        $('.pick-class-label').click(function(){
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if(display_div.length) {
            var display_buttons = display_div.find('.btn');
            display_buttons.removeClass(old_class);
            display_buttons.addClass(new_class);
            display_div.attr('data-class', new_class);
            }
        });
    },

    initFormExtendedDatetimepickers: function(){
        $('.datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
         });
    },

    initDocumentationCharts: function(){
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

        dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };

        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        md.startAnimationForLineChart(dailySalesChart);
    },

    initDashboardPageCharts: function(){

        /* ----------==========     Daily Sales Chart initialization    ==========---------- */

        dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };

        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        md.startAnimationForLineChart(dailySalesChart);



        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

        dataCompletedTasksChart = {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };

        optionsCompletedTasksChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
        }

        var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

        // start animation for the Completed Tasks Chart - Line Chart
        md.startAnimationForLineChart(completedTasksChart);



        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

        var dataEmailsSubscriptionChart = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

          ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
        };
        var responsiveOptions = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];
        var emailsSubscriptionChart = Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);

        //start animation for the Emails Subscription Chart
        md.startAnimationForBarChart(emailsSubscriptionChart);

    },

    initGoogleMaps: function(){
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
          zoom: 13,
          center: myLatlng,
          scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
          styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]

        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"Hello World!"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    },

	showNotification: function(from, align,message,type){
    	

    	$.notify({
        	icon: "notifications",
        	message: message

        },{
            type: type,
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
	}



}

$(document).ready(function(){
	 $('#formAddDrug').removeAttr('novalidate');
	 if( $('#phone-validate').length != 0){
		 $("input[name='next']").click(function(){
			 if ( $('#phone-validate').val().length > 0 && !$('#phone-validate').val().match(/(09|01[2|6|8|9])+([0-9]{8})\b/g))
				 {
				 	$('#phone-validate').after('<label id="phone-error" class="error" for="phone">This field is invalid.</label>');
				 	return false;
				 }
		 });
	 }
	 
//	 if( $('#bookBed').length != 0){
//		 $('#bookBed').click(function(){
//			 if ( $('#roomTypeID-error').length != 0){
//				 $('#roomTypeID-error').remove();
//			 }
//			 if ( $('#patientID-error').length != 0){
//				 $('#patientID-error').remove();
//			 }
//			 if( $('#roomTypeID').length != 0 && !$('#roomTypeID').val() ){
//				 $('#roomTypeID').after('<label id="roomTypeID-error" class="error" for="phone">Please select an item in the list.</label>')
//				 return false;
//			 }
//			 if( $('#patientID').length != 0 && !$('#patientID').val() ){
//				 $('#patientID').after('<label id="patientID-error" class="error" for="phone">Please select an item in the list.</label>')
//				 return false;
//			 }
//			 if( $('#department').length != 0 && !$('#department').val() ){
//				 $('#department').after('<label id="department-error" class="error" for="phone">Please fill this field.</label>')
//				 return false;
//			 }
//		 })
//	 }
})

function myValidate(el){
	var form = $(el);
	var isValidate = form.valid();
	var selections = form.find("select");
	var inputNumber = form.find("input[type='number']");
	var inputText = form.find("input[type='text']");
	
	if(selections.length != 0){
		selections.each(function(index){
			if( !$(this).val() ){
				 $(this).after('<label id="'+$(this).attr('name')+'-error" class="error" for="'+$(this).attr('name')+'">Please select an item in the list.</label>')
				 isValidate = false;
			 }
		});
	}
	if(inputText.length != 0){
		inputText.each(function(index){
			if ( !$(this).val() ){
				$(this).after('<label id="'+$(this).attr('name')+'-error" class="error" for="'+$(this).attr('name')+'">Please fill this field.</label>')
				 isValidate = false;
			}
		});
	}
	if(inputNumber.length != 0){
		inputNumber.each(function(index){
			if( !$(this).val().match(/^\d+$/)){
				$(this).after('<label id="'+$(this).attr('name')+'-error" class="error" for="'+$(this).attr('name')+'">This field is invalid.</label>')
				 isValidate = false;
			}else{
				var min = $(this).data('min');
				var max = $(this).data('max');
				if (min > $(this).val() || $(this).val() > max){
					$(this).after('<label id="'+$(this).attr('name')+'-error" class="error" for="'+$(this).attr('name')+'">Please enter a valid number beetween '+min+' to '+max+'.</label>')
					 isValidate = false;
				}
			}
		})
	}
	
	
	return isValidate;
}

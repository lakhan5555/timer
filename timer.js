function showTimer(){
	var time = prompt('Enter the timer in the form: "hr: min: sec"');

	timer_div = document.getElementById('timer_div');
	timer_div.innerHTML = time;
	my_timer = setInterval(function(){
		var hr = 0;
		var min = 0;
		var sec = 0;
		var time_up = false;
		t = time.split(":");
		hr = parseInt(t[0]);
		min = parseInt(t[1]);
		sec = parseInt(t[2]);
		if(sec == 0) {
			if(min > 0){
				sec = 59;
				min--;
			}
			else if(hr > 0){
				min = 59;
				sec = 59;
				hr--;
			}
			else{
				time_up = true;
			}
		}	
		else{
			sec--;
		}	
		if(hr < 10)
			hr = "0" + hr;
		if(min < 10)
			min = "0" + min;
		if(sec < 10)
			sec = "0" + sec;
		time = hr + " :" + min + " :" + sec;
		if(time_up)
			time = "TIME UP";
		timer_div = document.getElementById("timer_div");
		timer_div.innerHTML = time;
		if(time_up)
			clearInterval(my_timer);
	}, 1000);
}

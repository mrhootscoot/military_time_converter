function convert_to_24hourmilitary_time_tool()
{
	var stand = document.getElementById("standard-time");
	var military = document.getElementById("military_time_tool");
	military.options[military.selectedIndex].text = stand.options[stand.selectedIndex].value;
	
}
function standard_time_conversion()
{
	var stand = document.getElementById("standard-time");
	var military = document.getElementById("military_time_tool");
	stand.options[stand.selectedIndex].text = military.options[military.selectedIndex].value;
	
}


//Created by Shimon Mizrahi. 

/**
 * currentDate function:
 * The func is insert into Data field the current data toda as default value.
 */
function currentDate()
{
    document.getElementById("GregorianId").valueAsDate = new Date();    
}

/**
 * conversionToHebrew function:
 * the func is converting Gregorian date to Hebrew date.
 */
function conversionToHebrew() {
    var fullDate = document.getElementById("GregorianId").value;
    var arr = fullDate.split('-'); //fullDate wil be decompose into arr array.
    var year = arr[0];
    var month = arr[1];
    var day = arr[2];
    var jsonResult=httpGet(year,month,day); //jsonResult = Xml data from www.hebcal.com server by REST API Network architecture.
    var obj=JSON.parse(jsonResult);
    document.getElementById("HebrewId").innerHTML = obj.hebrew;
    document.getElementById("Mydiv").style.display="block"; //display an explanation of the Hebrew date.
    document.getElementById("Myspan").style.display="block"; //display an explanation of the Hebrew date.
}

/**
 * httpGet function.
 * The func get 3 arguments that Gregorian represents date, and by using Get request ask from server Hebrew date,
 * so the func return Hebrew date who stored Xml data.
 * @param {*} year 
 * @param {*} month 
 * @param {*} day 
 */
function httpGet(year,month,day)
{
    var xmlHttp = new XMLHttpRequest();
    url=`https://www.hebcal.com/converter?cfg=json&gy=${year}&gm=${month}&gd=${day}&g2h=1`; //The requested date is sent here.
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}




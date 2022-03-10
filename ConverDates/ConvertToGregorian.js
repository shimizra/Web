 
/**
 * conversionToGregorian function:
 * The func get 3 arguments that Hebrew represents date.
 * the func is converting Hebrew date to Gregorian date.
 * @param {*} year 
 * @param {*} month 
 * @param {*} day 
 */
function conversionToGregorian(year, month, day) {
    var jsonResult=httpGet(year,month,day); //jsonResult = Xml data from www.hebcal.com server by REST API Network architecture.
    var obj=JSON.parse(jsonResult);
    document.getElementById("GregorianId").innerHTML = obj.gd +"-"+ obj.gm + "-" + obj.gy; //display an explanation of the Gregorian date.
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
    url=`https://www.hebcal.com/converter?cfg=json&hy=${year}&hm=${month}&hd=${day}&h2g=1`; //The requested date is sent here.
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

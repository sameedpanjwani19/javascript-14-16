var students = [];

var students = new Array();

var colors = ["Yellow", "Orange", "Red", "Purple", "Blue"];
document.write("String Array: " + colors + "<br/>" + "<br/>" + "<br/>");

var marks = [203, 212, 288, 233, 264];
document.write("Number Array: " + marks + "<br/>" + "<br/>" + "<br/>");

var bool = [true, false, false, true];
document.write("Boolean Array: " + bool + "<br/>" + "<br/>" + "<br/>");

var data = ["Usama", "Zia", 23, true];
document.write("Mixed Array: " + data + "<br/>" + "<br/>" + "<br/>");

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];
var count = 0;
var i = 0;

document.write("Qualification" + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>" + "<br/>" + "<br/>");

var studentNames = ["Sameed", "sami", "ali"];
var studentMarks = [467, 475, 389];
var index = 0;

document.write("Score of " + studentNames[index] + " is " + studentMarks[index] + ". Percentage: " + ((studentMarks[index++] / 500) * 100) + "<br/>");
document.write("Score of " + studentNames[index] + " is " + studentMarks[index] + ". Percentage: " + ((studentMarks[index++] / 500) * 100) + "<br/>");
document.write("Score of " + studentNames[index] + " is " + studentMarks[index] + ". Percentage: " + ((studentMarks[index++] / 500) * 100) + "<br/>");
document.write("<br/>" + "<br/>");

var colorNames = [];

var input = prompt("What color you wants to add to the beginning?");
colorNames.push(input);

document.write("Updated array: " + colorNames + "<br/>");

input = prompt("What color you wants to add to the end?");
colorNames.push(input);

document.write("Updated array: " + colorNames + "<br/>");

input = prompt("Add two more color to the beginning/nEnter first color: ");
colorNames.unshift(input);
input = prompt("Add two more color to the beginning/nEnter second color: ");
colorNames.unshift(input);

document.write("Updated array: " + colorNames + "<br/>");

colorNames.shift();

document.write("Updated array: " + colorNames + "<br/>");

colorNames.pop();

document.write("Updated array: " + colorNames + "<br/>");

var indexNo = +prompt("Which index you wants to add a color: ");
input = prompt("Please enter your color name: ");
colorNames.splice(indexNo, 0, input);

document.write("Updated array: " + colorNames + "<br/>");

indexNo = +prompt("At which index you wants to delete a color: ");
var deleteCount = +prompt("how many colors you want to delete ");
colorNames.splice(indexNo, deleteCount);

document.write("Updated array: " + colorNames + "<br/>");


var studentMarks = [45, 98, 34, 53, 67, 88];
document.write("Score of Students: " + studentMarks + "<br/>");
document.write("Ordered Score of Students: " + studentMarks.sort() + "<br/>" + "<br/>" + "<br/>");

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "Multan"];
document.write("Cities List:" + "<br/>" + cities + "<br/>" + "<br/>");
var selectedCities = [];
selectedCities = cities.slice(2, 5);
document.write("Selected cities List:" + "<br/>" + selectedCities + "<br/>" + "<br/>" + "<br/>");

var arr = ["This", "is", "my", "cat"];
document.write("Array:" + "<br/>" + arr + "<br/>" + "<br/>");
var joinarr = arr.join(" ");
document.write("String:" + "<br/>" + joinarr + "<br/>" + "<br/>" + "<br/>");

var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
var out;
document.write("Devices:" + "<br/>" + devices + "<br/>" + "<br/>");

out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>" + "<br/>" + "<br/>");

var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
var out;
document.write("Devices:" + "<br/>" + devices + "<br/>" + "<br/>");

out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>" + "<br/>" + "<br/>");

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
var index = 0;
document.write("<select>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("</select>");

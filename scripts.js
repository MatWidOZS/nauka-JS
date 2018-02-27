/*var name = prompt('Jak masz na imię?');*/
//alert('Witaj, ' + name);
//console.log('Witaj, ' + name);

var a = 2.45,
	h = 12,
	triangleArea;

triangleArea = a*h/2;

console.log('Triangle field with base a = ' + a + ' and height h = ' + h + ' is equal to: ' + triangleArea);

a = prompt('Podaj wartość podstawy trójkąta.');
h = prompt('Podaj wartość wysokości trójkąta.');

triangleArea = a*h/2;

console.log('Triangle field with base a = ' + a + ' and height h = ' + h + ' is equal to: ' + triangleArea);

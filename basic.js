// Chrome Dev Tools Console Games with JavaScript
var a = 1;
var b = 2;

var c = function () { return a + b; };
var d = function () { return a * b; };

var e = function () { console.log("a: " + a);console.log("b: " + b);console.log("c: " + c());console.log("d: " + d()); };

// c, d, and e are functions call them like c(); d(); etc.
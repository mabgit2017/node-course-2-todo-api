var person = function Person(first) {
  this.firstName = first;
 }
var user = {name: 'andrew', age: 25, timeid : function() { return Date();}}
var usebix= [thingbis= {name:'andrew'},25, function() { return Date();}];
var {name} = user;
console.log(name);
var {age , timeid} = user;
console.log(age);
console.log(timeid);
var obj=new timeid();
console.log('obj',obj);
var {thing} = user;
console.log(thing);

/*var {thingbis} = usebix;
 
 console.log('thb', thingbis);*/
/* what does "var {something}" do? 
you're talking about destructuring.
var something creates a variable called something and stores whatever you assign to it.
 var { something } when assigned an object will look for a property called something on that object and assign its value to the variable something.
 Mark as helpful (3) */
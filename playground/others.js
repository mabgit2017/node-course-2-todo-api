var person = function Person(first) {
  this.firstName = first;
 }
var user = {name: 'andrew', age: 25, timeid : function() { return Date();}}
var {name} = user;
console.log(name);
var {age , timeid} = user;
console.log(age);
console.log(timeid);
var obj=new timeid();
console.log('obj',obj);
var {thing} = user;
console.log(thing);

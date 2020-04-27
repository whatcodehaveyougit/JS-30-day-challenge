# JS Reference Vs Copying

Interesting lesson on how to make copies of primitive data, arrays and objects.

With primitive data it is very straightforward, things load synchronously and that is that.

In short using the spread operator or Array.from is the best way to make a copy of an array.
This means that we can edit the copy of the array without making changes to the original one.  

Object.assign is the way to do it for objects but this only goes one level deep, there
is the hack to do it fully

const dev2 = JSON.parse(JSON.stringify(wes));

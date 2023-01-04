// Topic : Apply

/* 
    # What is apply?
    - It works same as call but it will take parameters as array.
    - Not like call which take parameters as individually.

    # Note
    - Internally apply is using call.
*/

function usingApply(objectName) {
  console.log(this.name1);
  console.log(objectName);
  console.log("Hello, World!");
}

const object1 = {
  name1: "Value1",
  name2: "Value2",
  name3: "Value3",
};

const object2 = {
  name1: "Value1",
  name2: "Value2",
  name3: "Value3",
};

// usingApply.call(); === usingApply();
usingApply.call(object1, ["I am object1"]); // (objectName for this, argument)
usingApply.call(object2, ["I am object2"]); // Calling object 1 method for object 2

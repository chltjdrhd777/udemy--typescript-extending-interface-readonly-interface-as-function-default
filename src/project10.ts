//Readonly = like private in class, Interface can set the readonly option to properties not to allow others to change values "after making specific objects"
interface Forced {
  readonly name: string;
}

class inherited implements Forced {
  name = "things"; // readonly not means that I cannot put the value outside the interface but,
}

let practice1: Forced; // order to adhere to interface forced. and also it is OK to use class name "inherited" because, anyway, "inherited" inherits class "forced"

practice1 = new inherited();
//practice1.name = 'want to change'; //That's it. "readonly" makes me not to be allowed to change the properties' value after I make a specific object.

////////////////////////////////////////////////////////////////////////////////////////////
//extending interfaces = like extending a class between classes.
// It is used when I want to bring interfaces together and make them act like a one integrated interface.

interface FatherInt {
  name: string;
  age: number;
  function(): void;
}

interface SonInt extends FatherInt {
  a: "string";
}
//Then, I make one object following SonInt, this object must follow all proprties in FatherInt and SonInt.

let slave: SonInt;
slave = {
  a: "string",
  name: "Adnerson",
  age: 28,
  function() {
    console.log("does it work?");
  }
};

//What if I set the type of object as FaterInt? Neeless to say, It doesn't have to put a SonInt's property in the object.
// The difference between extending a class and extending a interface is that, amonst interfaces, they can be combined no matter how many things in constrast with extending a class which is only possible to extend only one class.

/////////////////////////////////////////////////////////////////////////////////////////////////
//Interface as a default of function structure
// I can use interface not only for the purpose of shared structure of objects, but also for the pursose of shared "function" for example,

interface sharedFuntion {
  (n1: number, n2: number, n3: string, n4: string[]): number; // It is similar to the structure of normal interface method, only exception is there is no name for this
}

let sharedF: sharedFuntion;
let sharedF2: sharedFuntion;
let sharedF3: sharedFuntion;
sharedF = (a: number, b: number) => {
  //If I impose string on a parameter "a", then it makes an error because I previously set the type of prameter as number.
  return a + b;
};
sharedF2 = (c: number, d: number) => {
  return c + d;
};

sharedF3 = (a, b, c, d) => {
  // I dont have to set the exact types because this already inherit the information of sharedFunction.
  return a + b + c.length + d[0].length / 2;
};

const result = sharedF3(2, 3, "Hello", ["World.", "ddddddd", "Ya,whatever"]);
console.log(result); // 13

////////////////////////////////////////////////////////////////////////////
//optional properties,values and even methods = I can set the optional condition in properties and values by putting "?" behind each fragment. for example,
interface optional {
  name: string;
  age?: number; // By doing this, I don't have to stict to realizing an age property when it is directly used or used as a material for like inheritance
}

class InheritOption implements optional {
  name = "Anderson";
  //age = 23; <----- it doesn't show an error even though I didn't write the age property because it is optional
}

const reali = new InheritOption();
console.log(reali); //{name:'Anderson'}

//////In case of an optional parameter.

function option1(n?: string): void {
  if (n) {
    console.log("There is");
  } else {
    console.log("Im sorry there isnt");
  }
}

option1(); // It outputs "Im sorry..." because there is an optional condition on a prameter "n". If I delete "?" then It makes an error to require one parameter.

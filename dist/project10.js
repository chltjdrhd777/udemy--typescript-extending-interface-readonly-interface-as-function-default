class inherited {
    constructor() {
        this.name = "things"; // readonly not means that I cannot put the value outside the interface but,
    }
}
let practice1; // order to adhere to interface forced. and also it is OK to use class name "inherited" because, anyway, "inherited" inherits class "forced"
practice1 = new inherited();
//Then, I make one object following SonInt, this object must follow all proprties in FatherInt and SonInt.
let slave;
slave = {
    a: "string",
    name: "Adnerson",
    age: 28,
    function() {
        console.log("does it work?");
    }
};
let sharedF;
let sharedF2;
let sharedF3;
sharedF = (a, b) => {
    //If I impose string on a parameter "a", then it makes an error because I previously set the type of prameter as number.
    return a + b;
};
sharedF2 = (c, d) => {
    return c + d;
};
sharedF3 = (a, b, c, d) => {
    // I dont have to set the exact types because this already inherit the information of sharedFunction.
    return a + b + c.length + d[0].length / 2;
};
const result = sharedF3(2, 3, "Hello", ["World.", "ddddddd", "Ya,whatever"]);
console.log(result); // 13
class InheritOption {
    constructor() {
        this.name = "Anderson";
        //age = 23; <----- it doesn't show an error even though I didn't write the age property because it is optional
    }
}
const reali = new InheritOption();
console.log(reali); //{name:'Anderson'}
//////In case of an optional parameter.
function option1(n) {
    if (n) {
        console.log("There is");
    }
    else {
        console.log("Im sorry there isnt");
    }
}
option1(); // It outputs "Im sorry..." because there is an optional condition on a prameter "n". If I delete "?" then It makes an error to require one parameter.
//# sourceMappingURL=project10.js.map
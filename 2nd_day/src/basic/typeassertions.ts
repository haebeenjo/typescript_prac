// angle-bracket 
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// as
let someValue1: any = "this is a string";
let strLength1: number = (someValue1 as string).length;
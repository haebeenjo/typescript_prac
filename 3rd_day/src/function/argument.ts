function sum(a: number, b?: number): number {
  return a + b; // error, "strictNullChecks": true 
}
sum(10, 20); // 30
sum(10, 20, 30); // error, too many parameters
sum(10); // error, too few parameters

export {sum};

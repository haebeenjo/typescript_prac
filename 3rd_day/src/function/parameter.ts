function sum(a: number, b = 100): number {
    return a + b;
  }
  const result1 = sum(10, undefined); // 110
//   const result2 = sum(10, 20, 30); // error, too many parameters
  const result3 = sum(10); // 110
  
  console.log({ result1, result3 });

  // 모듈화 시키므로써 다른 파일에 sum이 있어도 오류가 발생하지 않음
  export {sum};
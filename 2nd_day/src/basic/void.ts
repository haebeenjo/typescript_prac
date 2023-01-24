// 타입스크립트 리턴 -> : 타입명
function warnUser(): void {
    console.log("This is my warning message");
}

function warnUser1(): boolean {
    console.log("This is my warning message");
    return true;
}

let unusable: void = undefined;
unusable = null; // 성공  `--strictNullChecks` 을 사용하지 않을때만
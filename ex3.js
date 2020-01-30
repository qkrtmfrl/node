let a=10;
if(a > 11){
    console.log("a가 11보다 커유~!");
} else if(a == 11){
    console.log("a가 11이여유~!");
} else {
    console.log("a가 11보다 작어유~!");
}

const blood = 2;
switch(blood){
    case 0:
        console.log("당신의 혈액형은 0형입니다.");
        break;
    case 1:
        console.log("당신의 혈액형은 AB형입니다.");
        break;
    case 2:
        console.log("당신의 혈액형은 B형입니다.");
        break;
    case 3:
        console.log("당신의 형액형은 A형입니다.");
        break;
    default:
        console.log("당신은 지구인이 아닙니다. 인간도 아닙니다.");
}
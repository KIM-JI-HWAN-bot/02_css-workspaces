let text = "메뉴5";
// 사용자가 메뉴1~메뉴4를 골라서, 해당 메뉴를 실행

// if (text === "메뉴1") {
//   // 실행됨
// } else if (text === "메뉴2") {
// }

switch (text) {
  case "메뉴1": {
    // 실행됨
    console.log(1);
    break;
  }
  case "메뉴2": {
    console.log(2);
    // 실행됨
    break;
  }
  case "메뉴3": {
    console.log(3);
    // 실행됨
    break;
  }
  case "메뉴4": {
    console.log(4);
    // 실행됨
    break;
  }
  default: {
    console.log(5);
  }
}

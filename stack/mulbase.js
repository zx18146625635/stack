'use strict';
/*
 *author 湛兴
 *2016-8-18
 *栈的实现类
 */
function Stack() {
  this.dataStore = [];
  this.top = 0;
}

//压入栈方法
Stack.prototype.push = function (element) {
 this.dataStore[this.top++] = element;
};

//出栈方法
Stack.prototype.pop = function () {
  if (this.top == 0) {
    return undefined;
  }else {
    var lastItem = this.dataStore.pop();
    this.top--;
    return lastItem;
  }
};

//查找栈元素方法
Stack.prototype.peek = function (element) {
  return this.dataStore[this.top-1];
};

//返回栈内元素数量
Stack.prototype.length = function () {
  return this.top;
};

//清空栈里面元素
Stack.prototype.clear = function () {
  this.top = 0;
  this.dataStore.length = 0;
};

Stack.prototype.toString = function () {
  return this.dataStore.join('|');
};

//进制数转换
//n 数字
//b 几进制数
//函数最后返回计算的结果
function mulBase(n,b) {
  var stackNum = new Stack();
  do{
    stackNum.push(n%b);
    n = Math.floor(n/b);

  }while(n>0);
  var converted = "";
  do {
    converted += stackNum.pop();
  } while (stackNum.dataStore.length > 0);
  return converted;
};

//回文的判断
function isPalindrome(str) {
  var stack = new Stack();
  var converted = "";
  for (var i = 0; i < str.length; i++) {
    stack.push(str[i])
  }
  do {
    converted += stack.pop();
  } while (stack.dataStore.length > 0);
  if (str == converted) {
    return true;
  } else {
    return false;
  }
};

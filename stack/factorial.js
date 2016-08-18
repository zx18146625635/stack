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

function factorial(n) {
  var stack = new Stack();
  do {
    stack.push(n--);
  } while (n > 0);
  var num = 1;
  do {
    num *= stack.pop();
  } while (stack.dataStore.length > 0);
  return num;
}

console.log(factorial(5));

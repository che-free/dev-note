# 클래스 선언 방법 (ES5)
Class/Object 선언 방법.


### 리터럴 방식 Object 생성
```js
var Person = {
    firstName : "Micheal",
    lastName : "Jackson",
    getFullName : function() {
        return this.firstName + ' ' + this.lastName;
    }
}

Person.getFullName();
```


### 함수 방식 클래스 선언
```js
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var p1 = new Person("Micheal", "Jackson");
p1.getFullName();
```


### 함수 + 프로토타입(prototype) 방식 (※ 일반적인 클래스 선언 방법)
```js
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
}

var p1 = new Person("Micheal", "Jackson");
p1.getFullName();
```


### 즉시 실행함수(IIFE) + 함수 + 프로토타입(prototype) 방식
```js
var Person = (function () {
    function PersonA(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    PersonA.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };

    return PersonA;
}());
 
var p1 = new Person("Micheal", "Jackson");
p1.getFullName();
```


### 즉시 실행함수(IIFE) + 내부 속성/함수 숨기기
```js
var Person = (function() {
    "use strict";

    var $this = {};

    $this.init = function(firstName, lastName) {
        $this.firstName = firstName;
        $this.lastName = lastName;
    }

    $this.getFullName = function () {
        return $this.firstName + ' ' + $this.lastName;
    };

    $this.privateFunction = function() {
        // ...
    }

    return {
        init: $this.init,
        getFullName: $this.getFullName
    }
})();

Person.init("Micheal", "Jackson");
Person.getFullName();
```


//클래서 선언문 
class Point {
   constructor(point) {
      this.point = point
      console.log(new.target.name)
   }

   static getTile() {
      return 'title'
   }

   get getPoint() {
      return this.point
   }

   set setPoint(point) {
      this.point = point
   }
}
new Point()

const obj = new Point()
obj.getPoint
// debugger;
//클래스 표현식

const Point2 = class {
   getPoint() {
      return console.log('클래스 표현식')
   }
}

const obj2 = new Point2()
obj2.getPoint()
// debugger;

Point2.prototype.getTitle = () => {
   return console.log('타이틀')
}

obj2.getTitle()

// debugger;

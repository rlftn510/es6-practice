class Cup {
   constructor(name){
      this.name = name
   }
   get getNmae() {
      console.log(this.name)
   }
}

class SubCup extends Cup {
   set setName(name) {
      this.name = name
   }
}


class Point3 extends Array {
   constructor() {
      super()
   }
   getTotal() {
      let total = 0;
      for (const value of this) {
         total += value
      }
      return console.log(total)
   }
}

const obj3 = new Point3()
obj3.push(10,20,30)
obj3.getTotal()


const Ball = {
   getName() {
      console.log('rrr')
   }
}

const Jump = {
   getName() {
      super.getName()
   }
}
Object.setPrototypeOf(Jump, Ball)
Jump.getName()




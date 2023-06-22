function parseCount(a) {
   let parseResult = Number.parseFloat(a);
   if (Number.isNaN(parseResult)) {
      throw new Error("Невалидное значение");
   }
   return parseResult;
}

function validateCount(b) {
   try {
      return parseCount(b);
   } catch (error) {
      return error;
   }
}

class Triangle {
   constructor (a, b, c) {
      if (a + b < c || a + c < b || b + c < a) {
         throw new Error ("Треугольник с такими сторонами не существует")
      }
      this.a = a;
      this.b = b;
      this.c = c; 
   }

   get perimeter() {
      return this.a + this.b + this.c;
   }
   
   get area() {
      const p = this.perimeter / 2;
      return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
   }     
}  

function getTriangle(d, e, f) {
   try {
      return new Triangle(d, e, f);
   } catch (error) {
      return  new Object( {
         get perimeter() {
            return "Ошибка! Треугольник не существует";
         },
         get area() {
            return "Ошибка! Треугольник не существует";
         }
      });
   }
}



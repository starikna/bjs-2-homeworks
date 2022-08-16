function parseCount(string) {
    if (isNaN(string)) {
      throw new Error("Невалидное значение");
    }
    return Number.parseInt(string);
}
       
function validateCount(string) {
    try {
      const numberOfPurchases2 = parseCount(string);
      return numberOfPurchases2
     } catch (err) {
      return err;
    }
  }
  
  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;

      if (
        this.a + this.b < this.c ||
        this.b + this.c < this.a ||
        this.a + this.c < this.b
      ) {
        throw new Error("Треугольник с такими сторонами не существует");
      } 
    }
  
    getPerimeter() {
      return Number(this.a + this.b + this.c); 
    };
  
    getArea() {
      const semiPerimeter = this.getPerimeter() / 2;
      return Number(Math.sqrt(
        semiPerimeter *
          (semiPerimeter - this.a) *
          (semiPerimeter - this.b) *
          (semiPerimeter - this.c)
      ).toFixed(3)); 
    };
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (err) {
      return {
      getArea: () => "Ошибка! Треугольник не существует",
      getPerimeter: () => "Ошибка! Треугольник не существует"
    };
  }
}
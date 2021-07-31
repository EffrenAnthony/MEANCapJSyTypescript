var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona2 = /** @class */ (function () {
    function Persona2(edad, altura, dni) {
        this.edad = edad;
        this.altura = altura;
        this.dni = dni;
    }
    return Persona2;
}());
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(edad, altura, dni, matricula) {
        var _this = _super.call(this, edad, altura, dni) || this;
        _this.matricula = matricula;
        return _this;
    }
    return Alumno;
}(Persona2));
var persona2 = new Persona2(27, 1.69, '213123');
var alumno = new Alumno(27, 1.69, '213123', '2312');
persona2 = alumno;
// alumno = persona2

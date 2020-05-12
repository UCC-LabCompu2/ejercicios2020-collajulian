/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Conversion de unidades, de metro, yardas, pies y pulgadas.
 * @method Conversor
 * @param {string} id, Este tiene los inputs de metro, yardas, pies o pulgadas
 * @param {number} valor, contiene el valor inputs de metro, yardas, pies o pulgadas
 * @return
 */
function Conversor (id,valor) {
    if (isNaN(valor)){
        alert("Se ingreso un valor invalido");
        document.unidades.unid_metro.value = "";
        document.unidades.unid_pulgada.value = "";
        document.unidades.unid_pie.value = "";
        document.unidades.unid_yarda.value = "";
    }else if (id == "metro"){
        document.unidades.unid_pulgada.value = 39.3701*valor;
        document.unidades.unid_pie.value = 3.2808*valor;
        document.unidades.unid_yarda.value = 1.0936*valor;
    }else if (id == "pulgada"){
        document.unidades.unid_metro.value = 0.0254*valor;
        document.unidades.unid_pie.value = 0.08333*valor;
        document.unidades.unid_yarda.value = 0.02777*valor;
    }else if (id == "pie"){
        document.unidades.unid_pulgada.value = 11.9999*valor;
        document.unidades.unid_metro.value = 0.3047*valor;
        document.unidades.unid_yarda.value = 0.3333*valor;
    }else if (id == "yarda"){
        document.unidades.unid_pulgada.value = 35.9999*valor;
        document.unidades.unid_pie.value = 3*valor;
        document.unidades.unid_metro.value = 0.9144*valor;
    }


}
function convertirGR(id) {
var grad, rad;
if (id=="grados"){

    grad = document.getElementById("grados").value;
    rad = (grad*Math.PI)/180;
}else if (id=="radianes"){
    rad = document.getElementById("radianes").value;
    grad = (rad*180)/Math.PI;
}
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;


}
function mostrar_ocultar(valorMO) {
if(valorMO== "val_mostrar"){
    document.getElementById("divMO").style.display = 'block';
}else if(valorMO== "val_ocultar"){
    document.getElementById("divMO").style.display = 'none';
}
}

function calcularsuma() {
var num1,num2;

num1=Number(document.getElementsByName("sum_num1") [0].value);
num2=Number(document.getElementsByName("sum_num2") [0].value);
    document.getElementsByName("sum_total") [0].value=num1+num2;

}
function calcularresta() {
    var num1,num2;

    num1=Number(document.getElementsByName("res_num1") [0].value);
    num2=Number(document.getElementsByName("res_num2") [0].value);
    document.getElementsByName("res_total") [0].value=num1-num2;

}
function calcularmul() {
    var num1,num2;

    num1=Number(document.getElementsByName("mul_num1") [0].value);
    num2=Number(document.getElementsByName("mul_num2") [0].value);
    document.getElementsByName("mul_total") [0].value=num1*num2;

}
function calculardiv() {
    var num1,num2;

    num1=Number(document.getElementsByName("div_num1") [0].value);
    num2=Number(document.getElementsByName("div_num2") [0].value);
    document.getElementsByName("div_total") [0].value=num1/num2;

}
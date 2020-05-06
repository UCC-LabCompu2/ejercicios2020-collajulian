/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
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
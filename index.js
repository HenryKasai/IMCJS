const button = document.getElementById("enviar");
const buttonclick = (e) => {
    e.preventDefault();
    let kg = document.getElementById("massa").value;
    if (Number(kg) && kg > 0 && kg < 800) {
        let m = document.getElementById("altura").value;
        if (Number(m) && m > 0.40 && m < 3) {
            let imc = kg / (m ** m);
            const div = document.getElementById("resultado");
            const resultado = () => {
                div.insertAdjacentHTML("afterbegin", `<p>Seu IMC é de ${imc.toFixed(2)}.</p>`);
            }
            if (imc < 17) {
                resultado();
                div.insertAdjacentHTML("beforeend", "<p>Diagnóstico: Muito abaixo do peso.</p>");
            } if (imc >= 17 && imc <= 18.49) {
                resultado();
                div.insertAdjacentHTML("beforeend", "<p>Diagnóstico: Abaixo do peso.</p>");
            } if (imc >= 18.5 && imc <= 24.99) {
                resultado();
                div.insertAdjacentHTML("beforeend", "<p>Diagnóstico: Peso normal.</p>");
            } if (imc >= 25 && imc <= 29.99) {
                resultado();
                div.insertAdjacentHTML("beforeend", "<p>Diagnóstico: Acima do peso.</p>");
            } if (imc >=  30 && imc <= 34.99) {
                resultado();
                div.insertAdjacentHTML("beforeend", "<p>Diagnóstico: Obesidade I.</p>");
            } if (imc >= 35 && imc <= 40) {
                resultado();
                div.insertAdjacentHTML("beforeend", "<p>Diagnóstico: Obesidade II (severa).</p>");
            } if (imc > 40) {   
                resultado();
                div.insertAdjacentHTML("beforeend", "<p>Diagnóstico: Obesidade III (mórbida).</p>");
            }
        } else {
            alert("Valor inválido.");
        }
    } else {
        alert("Valor inválido.");
    }
}
button.addEventListener("click", buttonclick);
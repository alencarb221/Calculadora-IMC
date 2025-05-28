function calcular() {
            let peso = document.getElementById('peso').value
            let altura = document.getElementById('altura').value
            let res = document.getElementById('resultado')
           
            let imc = parseFloat((peso / (altura * altura)).toFixed(2))
             if(peso === '' || altura === '') {
                res.innerHTML = 'Preencha todos os campos!'
             } else if(imc < 18.5) {
                res.innerHTML = `Seu IMC é ${imc} e você está <strong>ABAIXO</strong> do peso`
            } else if(imc < 25) {
               res.innerHTML = `Seu IMC é ${imc} e você está no seu peso <strong>NORMAL</strong>`
            } else if(imc < 30) {
                res.innerHTML = `Seu IMC é ${imc} e você está com <strong>SOBREPESO</strong>`
            } else if(imc < 35 ) {
                res.innerHTML = `Seu IMC é ${imc} e você está com <strong>OBESIDADE GRAU I</strong>`
            } else if(imc < 40 ) {
                res.innerHTML = `Seu IMC é ${imc} e você está com <strong>OBESIDADE GRAU II(SEVERA)</strong>`
            } else if(imc > 40) {
                res.innerHTML = `Seu IMC é ${imc} e você está com <strong>OBESIDADE GRAU III(MÓRBIDA)</strong>`
            }
            }
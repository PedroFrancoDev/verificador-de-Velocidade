var btn = document.getElementById('btn');
        btn.addEventListener('click', clicar);

        function clicar() {
            var velocidade = document.getElementById('velocidade');
            var valorDaVelocidade = Number(velocidade.value);
            var resultado = document.getElementById('resultado');

            if(valorDaVelocidade > 300) {
                return resultado.innerText = `Você esta andando com velocidade de ${valorDaVelocidade}km/h. Está MULTADO!`;
            } else if( valorDaVelocidade == 0) {
                return resultado.innerText = 'O seu carro não esta em movimento!';
            } else {
                return resultado.innerText = `A sua velocidade é de ${valorDaVelocidade}km/h. Estas de parabéns!`;
            }
        }
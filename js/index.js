mes.onchange = () => {
    switch(mes.value.toLowerCase()){
        case "janeiro":
            nome.innerHTML = "Rei"
        break;
        case "fevereiro":
            nome.innerHTML = "Mô";
            break;
          case "março":
            nome.innerHTML = "Cupido";
            break;
          case "abril":
            nome.innerHTML = "Apaixonado";
            break;
          case "maio":
            nome.innerHTML = "Pagodeiro";
            break;
          case "junho":
            nome.innerHTML = "Cara Perfeito";
            break;
          case "julho":
            nome.innerHTML = "Mensageiro";
            break;
          case "agosto":
            nome.innerHTML = "Perturbado";
            break;
          case "setembro":
            nome.innerHTML = "Gueri Gueri";
            break;
          case "outubro":
            nome.innerHTML = "Coração";
            break;
          case "novembro":
            nome.innerHTML = "Linda Voz";
            break;
          case "dezembro":
            nome.innerHTML = "Criado Mudo";
            break;
          default:
        }
      };
      dia.onchange = () => {
        if (dia.value >= 1 && dia.value <= 3) {
            nome.innerHTML += "Que tanto fez ou tanto faz";
        } else if (dia.value >= 4 && dia.value <= 6) {
            nome.innerHTML += "Que desabou o barraco";
        } else if (dia.value >= 7 && dia.value <= 9) {
            nome.innerHTML += "Que  largou o freio";
        } else if (dia.value >= 10 && dia.value <= 12) {
            nome.innerHTML += "Que quer futicar";
        } else if (dia.value >= 13 && dia.value <= 15) {
            nome.innerHTML += "Que tem fogo na roupa";
        } else if (dia.value >= 16 && dia.value <= 18) {
            nome.innerHTML += "Que se apaixonou pela pessoa errada";
        } else if (dia.value >= 19 && dia.value <= 21) {
            nome.innerHTML += "Que desliga e vem depressa";
        } else if (dia.value >= 22 && dia.value <= 24) {
            nome.innerHTML  +="Que está a deriva";
        } else if (dia.value >= 25 && dia.value <= 27) {
            nome.innerHTML += "Que segura o samba";
        } else if (dia.value >= 28 && dia.value <= 31) {
            nome.innerHTML += "Que ninguém ama";
        } else{
            nome.innerHTML += "Dia inválido";
        }
    };
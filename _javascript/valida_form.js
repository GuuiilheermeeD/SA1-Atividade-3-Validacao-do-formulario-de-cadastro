//função para totalizar valor de assinatura mensal
function totaliza() {
    total = 0.00;
    //plano mensal
    if (document.form.planos[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if (document.form.planos[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if (document.form.planos[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if (document.form.premiere[0].checked)
        total = total + 60.00;
    //Premiere controle
    if (document.form.premiere[1].checked)
        total = total + 80.00;
    document.form.total.value = total.toFixed(2);
}

var bntAss = document.getElementById('bntAssin');

function validarTudo() {
    let conform = true

    if (caixasVazias()) {
        alert('preencha as caixa!');
        conform = false;
    }
    if (validarDados()) {
        alert('preencha as os dados corretamente!');
        conform = false;
    }

    if (checkSx()) {
        alert('Selecione o seu Sexo!');
        conform = false;
    }

    if (requiridas()) {
        alert('Selecione um time!')
        conform = false;
    }
    if (checkPlano()) {
        alert('Selecione o seu plano!');
        conform = false;
    }

    if (checkPrime()) {
        alert('Selecione qual será o seu plano premiere!');
        conform = false;
    }
    if (checkData()) {
        alert('Somente maiores de 18 anos podem se cadastrar!');
        conform = false;
    }

    if (confereLogin()) {
        alert("O login ou a senha está incorreta");
        conform = false;
    }


    if (conform == true) {
        bntAss.disabled = false;
        conform = false;
    } else {
        bntAss.disabled = true;
    }

    return conform;
}

function caixasVazias() {
    let conform = false

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let fone = document.getElementById("cel");
    let nasc = document.getElementById("nascimento");
    let sx = document.getElementById("sexo");
    let salario = document.getElementById("salario");
    let cpf = document.getElementById("cpf");
    let time = document.getElementById("time");
    let login = document.getElementById("login");
    let senha = document.getElementById("senha");

    nome.style.backgroundColor = '#ffffff';
    email.style.backgroundColor = '#ffffff';
    fone.style.backgroundColor = '#ffffff';
    nasc.style.backgroundColor = '#ffffff';
    sx.style.backgroundColor = '#ffffff';
    salario.style.backgroundColor = '#ffffff';
    cpf.style.backgroundColor = '#ffffff';
    login.style.backgroundColor = '#ffffff';
    senha.style.backgroundColor = '#ffffff';

    //O check de cada input vazio.
    if (nome.value == '') {
        nome.style.backgroundColor = '#ffebeb';
        conform = true;
    }
    if (email.value == '') {
        email.style.backgroundColor = '#ffebeb';
        conform = true;
    }
    if (fone.value == '') {
        fone.style.backgroundColor = '#ffebeb';
        conform = true;
    }
    if (nasc.value == '') {
        nasc.style.backgroundColor = '#ffebeb';
        conform = true;
    }
    if (sx.value == '') {
        sx.style.backgroundColor = '#ffebeb';
        conform = true;
    }
    if (salario.value == '') {
        salario.style.backgroundColor = '#ffebeb';
        conform = true;
    }
    if (cpf.value == '') {
        cpf.style.backgroundColor = '#ffebeb';
        conform = true;
    }
    if (time.value == '') {
        time.style.backgroundColor = '#ffebeb';
        conform = true;
    }
    if (login.value == '') {
        login.style.backgroundColor = '#ffebeb';
        conform = true;
    }
    if (senha.value == '') {
        senha.style.backgroundColor = '#ffebeb';
        conform = true;
    }
    return conform
}

function checkSx() {
    let sx = document.getElementsByName("sexo")
    let conform = true;
    let i;

    for (i = 0; i < sx.length; i++) {
        if (sx[i].type == "radio") {
            if (sx[i].checked == true) {
                conform = false;
            }
        }
    }
    return conform
}

function requiridas() {
    let conform = false;

    let myform = document.forms['form'] || document.formulario;
    if (myform.times.value == "0" || myform.times.selectedIndex == 0) {
        conform = true
    }

    return conform
}

function checkPlano() {
    let plan = document.getElementsByName("planos")
    let conform = true;
    let i;

    for (i = 0; i < plan.length; i++) {
        if (plan[i].type == "radio") {
            if (plan[i].checked == true) {
                conform = false;
            }
        }
    }
    return conform
}

function checkPrime() {
    let prem = document.getElementsByName("premiere")
    let conform = true;
    let i;

    for (i = 0; i < prem.length; i++) {
        if (prem[i].type == "radio") {
            //console.log(i)
            if (prem[i].checked == true) {
                conform = false;
                //console.log(i)
            }
        }
    }
    return conform
}

function validarDados() {
    let conform = false

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let fone = document.getElementById("cel");
    let salario = document.getElementById("salario");
    let cpf = document.getElementById("cpf");


    //expreção regular de caracteres
    let regexCar = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ]/;
    //expreção regular de numeros
    let regExNum = /^[0-9]/;
    let regExTel = /\(\d{2}\)\s\d{4,5}\-\d{4}/;
    //expreção regular e CPF         
    let regExCpf = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/; // desse jeito é obrigatorio colocar a pontuação!
    let regExEmail = /^([-a-zA-Z0-9_-]*@(gmail|yahoo|ymail|rocketmail|bol|hotmail|live|msn|ig|globomail|oi|pop|inteligweb|r7|folha|zipmail).(com|info|gov|net|org|tv)(.[-a-z]{2})?)*$/;

    //cor da letra caso esteja certo
    nome.style.color = '#000000'
    email.style.color = '#000000'
    fone.style.color = '#000000'
    salario.style.color = '#000000'
    cpf.style.color = '#000000'

    //lógica
    //caso o nome receber quaisquer dados que não seja caracter  se tornara 'true' (verdadeiro)
    if (!regexCar.test(nome.value)) {
        //cor da letra caso esteja errado
        conform = true;
        nome.style.color = '#f45b42';
    }

    if (!regExEmail.test(email.value)) {
        conform = true;
        email.style.color = '#f45b42';
    }

    if (!regExTel.test(fone.value)) {
        conform = true;
        fone.style.color = '#f45b42';
    }
    if (!regExNum.test(salario.value)) {
        conform = true;
        salario.style.color = '#f45b42';
    }
    if (!regExCpf.test(cpf.value)) {
        conform = true;
        cpf.style.color = '#f45b42';
    }

    return conform
}
// mascara do celular
function mascara(tell, cell) {
    varUm = tell
    varDois = cell
    setTimeout("execmascara()", 1)
}

function execmascara() {
    varUm.value = varDois(varUm.value)
}

function mtel(mask) {
    mask = mask.replace(/\D/g, ""); //Remove tudo o que não é dígito
    mask = mask.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    mask = mask.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return mask;
}

// mascara do cpf
function maskCpf(cpf1, cpf2) {
    varUm = cpf1
    varDois = cpf2
    setTimeout("mascaraCpf()", 1)
}

function mascaraCpf() {
    varUm.value = varDois(varUm.value)
}

function mCPF(mCPF) {
    mCPF = mCPF.replace(/\D/g, ""); //Remove tudo o que não é dígito
    mCPF = mCPF.replace(/(\d{3})(\d)/, "$1.$2"); //Primeiro "."//
    mCPF = mCPF.replace(/(\d{3})(\d)/, "$1.$2"); //Segundo "."//
    mCPF = mCPF.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Traço "-"/
    return mCPF;
}
// mascara do Salario
function maskSalario(grana, dindin) {
    varDinheiro = grana
    varDindin = dindin
    setTimeout("mascaraSalario()", 1)
}

function mascaraSalario() {
    varDinheiro.value = varDindin(varDinheiro.value)
}

function maskSall(salario) {
    salario = salario.replace(/\D/g, ""); //Remove tudo o que não é dígito
    salario = salario.replace(/(\d)(\d{3})(\d{3})(\d{5}$)/, "$1.$2.$3.$4");
    salario = salario.replace(/(\d)(\d{3})(\d{5}$)/, "$1.$2.$3"); //Casa Milhão//
    salario = salario.replace(/(\d)(\d{5}$)/, "$1.$2"); //
    salario = salario.replace(/(\d{2}$)/, ",$1"); //dois numeros apos a virgula ",00"//
    return salario;
}

//Função é para automatizar as mascaras REGEX
function id(cp) {
    return document.getElementById(cp);
}
window.onload = function () {
    id('cpf').onkeyup = function () {
        maskCpf(this, mCPF);
    }
    id('cel').onkeyup = function () {
        mascara(this, mtel);
    }
    id('salario').onkeyup = function () {
        maskSalario(this, maskSall);
    }
}

//Função para verificar a data de nascimento;
function checkData() {
    let conform = false;
    let data = new Date(document.getElementById('nascimento').value);
    let dataHj = new Date().getFullYear();
    let ano = data.getFullYear();

    nascimento.style.color = '#000000'

    //Caso escolha o dia de amanha ou posteriores ao mesmo
    if (ano > dataHj) {
        document.getElementById('nascimento').value = null;
    }
    // Aqui define a idade para maiores de 18 anos;
    else if (ano > (dataHj - 18)) {
        nascimento.style.color = '#f45b42'
        conform = true;

    }
    return conform;
}

setInterval(tempo, 1000);

var seg = 1;

function tempo() {
    document.getElementById('cronometro').innerHTML = seg;
    seg++;
}

//Validação com JSON
function confereLogin() {
    let conform = false
    let loginJSON = '{"loginJ": "Usuario"}';
    let senhaJSON = '{"senhaJ":"Abc$123"}';

    let login = JSON.parse(loginJSON);
    let senha = JSON.parse(senhaJSON);
    if (login.loginJ === document.form.login.value && senha.senhaJ === document.form.senha.value)
        conform = false;
    else {
        document.form.login.focus();
        document.form.senha.focus();

        conform = true;
    }
    return conform;
}
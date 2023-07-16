/*
Operadores lógicos

&& ---> E ---> Pessoa EXIGENTE / Pessoa OBEDIENTE
    true  && true  = true  =ou= verdadeiro && verdadeiro = verdadeiro
    true  && false = false =ou= verdadeiro && falso      = falso
    false && false = false =ou= falso      && falso      = falso

    Mariazinha é exigente. ---->  Ela não quer o Joãozinho...
    Qualidade: Bonito && Inteligente && Programador && Ter Carro
    Joãozinho ---> Não e Bonito && Inteligente && Tem carro
    Resultado === FALSO (false) (não sem enquada)

||      OU      Tanto faz /  Filho Espertinho
    true  || true  = true  =ou= verdadeiro || verdadeiro = verdadeiro
    true  || false = true  =ou= verdadeiro || falso      = verdadeiro
    false || false = false =ou= falso      || falso      = falso

    Luluzinha não e tão exigente. ----> Ela quer o Paulinho
    Qualidade: Bonito || Inteligente || programador || Tem carro
    Paulinho ---> Não e Bonito || Burro ||Não e programador || tem carro
    Resultador === Verdadeiro (True) (Se enquadra)

!   Operador de Negação (O cara do alcontrario)
    !true  = false  =ou= !verdade = falso
    !false = true   =ou= !falso   = Verdade
*/
console.log(true && true && true) // verdade
console.log(false && true && true) // Falso
console.log("-------------------------------")
console.log(true || true || true) // Verdadeiro
console.log(false || true || true) // verdadeiro
console.log(false || false || false) // false
console.log("-------------------------------")
console.log(!true) // falso
console.log(!false) // verdadeiro

// EX ---> Altenticação de BANCO
const digitarASenha = true
const digitarOToken = true
const numeroDaConta = true

if(digitarASenha || digitarOToken || numeroDaConta){
    console.log("Logado com sucesso")
}else{
    console.log("Autenticação FALHOU")
}

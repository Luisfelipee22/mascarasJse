let input = document.querySelector
("#cpf")
// querySelector: tag, id, classe
// para id e classe utilixar a mesma notação usada pelo css
// () função anônima
// => arrow function
// function nome( )
//{
//}
input.addEventListener("keypress", () =>
{
    let inputlenght = input.value.length
    if(inputlenght==3 || inputlenght==7){
        input.value+="."
    }
    else if (inputlenght==11){
   input.value+="-" 
}
})

const inputcnpj=document.querySelector
("cnpj")
input.addEventListener("keypress", () =>)
{
    let inputlength = input.value.length
    

}
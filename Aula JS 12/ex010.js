var agora = new Date
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

//console.log(diaSem)

switch(diaSem) { 
    case 0:
        console.log('Domingo')
        break
}
switch(diaSem) {
     case 1:
        console.log('Segunda')
        break
}
switch(diaSem) {
    case 2:
       console.log('Terça')
       break
}
switch(diaSem) {
    case 3:
       console.log('Quarta')
       break
}
switch(diaSem) {
    case 4:
       console.log('Quinta')
       break
}
switch(diaSem) {
    case 5:
       console.log('Sexta')
       break
}
switch(diaSem) {
    case 6:
       console.log('Sábado')
       break
}
switch(diaSem) {
    default:
       console.log('[ERRO] Dia inválido!')
       break
}
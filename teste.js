const real = 100;

console.log(new Intl.NumberFormat("pt-br",
 { style: 'currency', currency: 'BRL'})
.format(real))



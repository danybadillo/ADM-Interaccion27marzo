$(document).ready(function(){
$('.imgLiquidNoFill').imgLiquid({
    fill: false
})
   // Escala y Recorta la imagen para que quepa exacto en su contenedor
   $('.imgLiquidFill').imgLiquid()


$('.v-center').each(function() {

  elementoPadre = $(this)

  elementosHijos = elementoPadre.children()

  alturaHijos = 0

  elementosHijos.each(function() {
    elementoHijo = $(this)

    alturaHijos += elementoHijo.height()
  })

  diferencia = elementoPadre.height()-alturaHijos

  espacioSuperior = diferencia / 2

  elementoPadre.css({
    paddingTop: espacioSuperior
  })

})

   console.log('Landing Lista')

})

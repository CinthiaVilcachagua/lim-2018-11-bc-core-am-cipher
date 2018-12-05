// //Creamos la variable y llamamos a los valores del form2,
//   //llamamos al boton de Siguiente
  const btnNext = document.getElementById('boton_siguiente');
//   //creamos la variable y llamamos a los valores del form 2
  const id = document.getElementById('respuesta_id');
//  //llamamos a la variable y respuesta de password
  const password = document.getElementById('respuesta_password');

  const btnStart = document.getElementById('boton_empezar');

  const btnReturn = document.getElementById('boton_volver');

  const btnFinish = document.getElementById('boton_finalizar')



  // funcion captar Letras
  const captarLetras = (word,n) => {
    let resultWord = '';
    for(let i = 0; i < n; i++){
      resultWord += word[i];
    }
    return resultWord;
  }

  btnStart.addEventListener('click', () => {
      document.getElementById('principal_screen').setAttribute('class','ocultar'); //desaparece el form1
      document.getElementById('form_screen').setAttribute('class','visible'); //aperece el form2
      document.getElementById('cuerpo').setAttribute('class','fondo2')
  })

  //
    btnNext.addEventListener('click', () => {
      document.getElementById('form_screen').setAttribute('class','ocultar'); //desaparece el form2
      document.getElementById('result_screen').setAttribute('class','visible'); //aparece el form3
      document.getElementById('cuerpo').setAttribute('class','fondo3');

      const offset = parseInt(document.getElementById('offset').value);

      let string1= document.getElementById('id-1').value;
      let string2= document.getElementById('id-2').value;
      let string3= document.getElementById('id-3').value;

      string1 = captarLetras(string1,2);
      string2 = captarLetras(string2,2);
      string3 = captarLetras(string3,2);


      id.value = '2018' + cipher.encode(offset,string1) + cipher.encode(offset,string2) + cipher.encode(offset,string3); //si colocamos el parseInt en la funcion
      id.disabled ='disabled';



      password.value = cipher.decode(offset,string3) + cipher.decode(offset,string2) + cipher.decode(offset,string1); // se coloca value, porque yo inserto el valor a un input
      //seia getelemnetbyid solo si yo inserto el texto a un p o h1, etc.
      password.disabled = 'disabled'; //para que nadie pueda tocarlo
  })

  btnReturn.addEventListener('click',() => {
     window.location.href = "index.html" // para hacer reinicio de pantalla.
  })

  btnFinish.addEventListener('click', () => {
     window.close(); //para que mi ventana se cierre.
  })

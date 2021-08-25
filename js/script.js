let nombreusuario = prompt( 'Ingresa tu nombre' );
alert( '¡Hola! ' + nombreusuario );

let anioNacimiento = parseInt( prompt( 'Ingresa el año de tu nacimiento' ));
let edad = 2021 - anioNacimiento;
alert( 'Tienes ' + edad );

let ciudadNacimiento = prompt( '¿En qué ciudad naciste?' );
let paisNacimiento = prompt( '¿En qué país naciste?' );

alert( nombreusuario + 'tienes ' + edad + ' años y naciste en ' + ciudadNacimiento + ', ' + paisNacimiento );


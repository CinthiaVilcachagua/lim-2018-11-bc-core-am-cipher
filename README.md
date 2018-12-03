# Code Generator

Code Generator, es una aplicación web dirigida a los jóvenes universitarios que recien ingresan a su alma mater, para que se facilite el generado de su código de acceso a las intranet de dichas universidades.


## Resumen del proyecto

¿Qué tengo que hacer exactamente(como usuario)? En esta aplicación llenarás tus datos personales(tales como tu nombre, Apelido Paterno y Materno), esto servirá para que el usuario pueda genar su ID de ingreso(cifrando) y su PASsWORD(descifrando), asi mismo indicando un desplazamiento específico (_offset_) que vendría a ser el "número de vacante alcanzada" a la hora de su Ingreso a su Universidad.

Para genera el ID decidí, coger las 2 primeras letras de cada dato (nombre y apellidos) y cifrarlas.
Para generar el PASSWORD fue basicamente como el ID, coger las 2 primeras letras y descifrarlas, solamente que en este caso me devolveria primero las 2 primeras letras del apellido materno, luego la del paterno y finalmente las del Nombre.

## Objetivo del Producto
Permite al usuario poder generar su clave de acceso a la intranet de su Universida con su datos personales, asi mismo si se olvida su ID o PASSWORD, podre acceder nuevamente y verificar su clave de acceso con sus mismos datos.

## Usuarios del Producto
- Universidades
- Cachimbos de universidades
- Institutos
- Ingresantes a Institutos

## Instalación
- No necesita instalación, solo tendrá que dirigirse al siguiente enlace [Code Generator](https://cinthiavilcachagua.github.io/lim-2018-11-bc-core-am-cipher/src/)

export const preguntasPHP = [
  {
    categoria: "PHP",
    pregunta: "¿Cómo crear una variable y cómo se concatena?",
    respuesta:
      "Se crea con el signo $, el nombre puede empezar con una letra o guión bajo, nunca con un número. Se puede concatenar utilizando el “ . ”",
  },
  {
    categoria: "PHP",
    pregunta: "¿Cuáles son los tipos de datos?",
    respuesta:
      "interger (entero), float (decimal), string, boolean, null, object.",
  },
  {
    categoria: "PHP",
    pregunta: "¿Cómo puedo saber el tipo de dato de una variable?",
    respuesta:
      "Se puede utilizar el método gettype, el cual recibe por parámetros la variable y devuelve su tipo de dato.",
  },
  {
    categoria: "PHP",
    pregunta:
      "¿Qué significa PHP? y ¿Como hago para utilizarlo dentro de un archivo HTML?",
    respuesta:
      "Es un Procesador Previo al Hipertexto y se puede utilizar abriendo las etiquetas <?PHP y se cierra ?>",
  },
  {
    categoria: "PHP",
    pregunta: "¿Para qué sirve ECHO? Ejemplifica",
    respuesta:
      "Sirve para imprimir string o una variable en el HTML. <H1> <?PHP echo “hola mundo” ?> <H1>",
  },
  {
    categoria: "PHP",
    pregunta: "¿Cual es la diferencia entre var_dump() y gettype() ?",
    respuesta:
      "La diferencia es que var_dump() se usa para saber el tipo y el valor de una variable y gettype() solo retorna el tipo.",
  },
  {
    categoria: "PHP",
    pregunta: "¿Cual es la diferencia del elseif entre PHP y Javascript?",
    respuesta:
      "La diferencia es que en PHP el elseIf se escribe todo junto y en JS va separado.",
  },
  {
    categoria: "PHP",
    pregunta: "¿Cuáles son las condicionales iguales a JS?",
    respuesta:
      "El switch y los ternarios se escriben y funcionan de la misma manera que en javascript",
  },
  {
    categoria: "PHP",
    pregunta: "¿Los ciclos son diferentes a JS?",
    respuesta:
      "El FOR, WHILE Y DO WHILE, se escriben y funcionan de la misma manera que en javascript",
  },
  {
    categoria: "PHP",
    pregunta: "¿Las funciones y sus tipados son iguales a JS?",
    respuesta:
      "En el caso de su sintaxis no hay diferencia con excepción del tipado que este se aplica delante de la prop.",
  },
  {
    categoria: "PHP",
    pregunta: "¿Cómo se crea un Array y cómo se le puede agregar valores?",
    respuesta:
      "El array se crea de la misma manera que en js pero declarando la variable con el signo $. Para agregarle un nuevo valor al array simplemente se utiliza el método array_push que recibe el array y el nuevo elemento, el mismo se posiciona al final.",
  },
  {
    categoria: "PHP",
    pregunta: "¿Cómo se utiliza el foreach?",
    respuesta:
      "Se utiliza para recorrer arrays y nos permite utilizar los elementos de manera individual por iteración. Su sintaxis, a diferencia de javascript se escribe el foreach todo junto y en minúscula y recibe por parámetros el array seguido del as y el elemento por iteración.",
  },
  {
    categoria: "PHP",
    pregunta: "¿Cuáles son las funciones más comunes para Arrays?",
    respuesta:
      "count permite saber la cantidad de elementos, array_push agrega un nuevo valor en el último lugar, array_pop retorna y elimina el último elemento, in_array Recibe el string y permite saber si un elemento existe dentro del array.",
  },
  {
    categoria: "PHP",
    pregunta: "¿Para qué sirve array_merge?",
    respuesta:
      "Permite combinar dos o más arrays en uno solo. Recibe los arrays por parámetros y retorna un nuevo array combinado.",
  },
];

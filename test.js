const examData = {
  examen1: {
    title: "test1",
    questions: [
      {
        question:
          "El conductor de una motocicleta que lleva una persona en el asiento trasero...",
        options: [
          "Debe utilizar el casco protector y aconsejar al acompañante que lo utilice",
          "Debe utilizar el casco protector y sera responsable de que lo utiilice el acompañante",
          "Debe utilizar el casco protector y sera responsable de que lo utilice el acompañante pero solo en vias interurbanas",
        ],
        correct: 1,
      },
    ],
  },
  seguridad: {
    title: "Seguridad Vial y Conducción",
    questions: [
      {
        question:
          "¿Cuál es la distancia de frenado a 50 km/h en condiciones normales?",
        options: ["15 metros", "25 metros", "35 metros", "45 metros"],
        correct: 1,
      },
      {
        question: "¿Qué es el aquaplaning?",
        options: [
          "Derrape en curva",
          "Pérdida de adherencia por agua",
          "Frenado brusco",
          "Aceleración excesiva",
        ],
        correct: 1,
      },
      {
        question: "¿Cuándo debe revisar la presión de los neumáticos?",
        options: [
          "Solo cuando se vean desinflados",
          "Mensualmente y en frío",
          "Solo antes de viajes largos",
          "Una vez al año",
        ],
        correct: 1,
      },
      {
        question: "¿Qué debe hacer si sufre un deslumbramiento nocturno?",
        options: [
          "Cerrar los ojos",
          "Mirar hacia el arcén derecho",
          "Encender las luces largas",
          "Acelerar",
        ],
        correct: 1,
      },
      {
        question: "¿Cuál es el efecto del alcohol en la conducción?",
        options: [
          "Mejora la concentración",
          "Reduce los tiempos de reacción",
          "Aumenta los tiempos de reacción",
          "No tiene efectos",
        ],
        correct: 2,
      },
      {
        question: "¿Qué debe comprobar antes de iniciar un viaje?",
        options: [
          "Solo el combustible",
          "Neumáticos, luces, frenos y niveles",
          "Solo los documentos",
          "Solo el aceite",
        ],
        correct: 1,
      },
      {
        question:
          "¿Cuál es la velocidad máxima recomendada con lluvia intensa?",
        options: [
          "La misma que en seco",
          "20 km/h menos",
          "La mitad de la normal",
          "10 km/h menos",
        ],
        correct: 1,
      },
      {
        question: "¿Qué debe hacer si el vehículo se incendia?",
        options: [
          "Intentar apagarlo con agua",
          "Alejarse y llamar a los bomberos",
          "Abrir el capó",
          "Continuar conduciendo",
        ],
        correct: 1,
      },
      {
        question: "¿Cuándo están prohibidos los sistemas de comunicación?",
        options: [
          "Siempre",
          "Solo de noche",
          "Si requieren uso de las manos",
          "Solo en autopistas",
        ],
        correct: 2,
      },
      {
        question: "¿Qué es la conducción eficiente?",
        options: [
          "Conducir muy rápido",
          "Conducir ahorrando combustible",
          "Conducir solo de día",
          "Usar siempre la quinta marcha",
        ],
        correct: 1,
      },
      {
        question:
          "¿Cuál es la distancia de seguridad recomendada en autopista?",
        options: [
          "50 metros",
          "100 metros",
          "La velocidad dividida por 2",
          "3 segundos de diferencia",
        ],
        correct: 3,
      },
      {
        question: "¿Qué debe hacer ante una situación de pánico o estrés?",
        options: [
          "Acelerar",
          "Parar en un lugar seguro",
          "Continuar sin cambios",
          "Tocar el claxon",
        ],
        correct: 1,
      },
      {
        question: "¿Cuándo debe usar el cinturón en asientos traseros?",
        options: [
          "Solo en autopistas",
          "Solo los adultos",
          "Siempre todos los ocupantes",
          "Solo de noche",
        ],
        correct: 2,
      },
      {
        question: "¿Qué debe hacer si ve un animal en la carretera?",
        options: [
          "Acelerar para pasarlo rápido",
          "Reducir velocidad y tocar el claxon",
          "Frenar bruscamente",
          "Cambiar de carril bruscamente",
        ],
        correct: 1,
      },
      {
        question: "¿Cuál es el factor más importante en la seguridad vial?",
        options: [
          "La velocidad del vehículo",
          "El comportamiento del conductor",
          "El tipo de vehículo",
          "Las condiciones meteorológicas",
        ],
        correct: 1,
      },
      {
        question: "¿Qué debe llevar en el botiquín del vehículo?",
        options: [
          "Solo vendas",
          "Material de primeros auxilios básico",
          "Medicamentos recetados",
          "Comida",
        ],
        correct: 1,
      },
      {
        question: "¿Cuándo es más peligrosa la fatiga?",
        options: [
          "Por la mañana",
          "Al mediodía",
          "Por la tarde-noche",
          "No es peligrosa",
        ],
        correct: 2,
      },
      {
        question: "¿Qué debe hacer si otro conductor le hace gestos agresivos?",
        options: [
          "Responder igual",
          "Ignorarlo y mantener la calma",
          "Acelerar",
          "Parar y discutir",
        ],
        correct: 1,
      },
      {
        question: "¿Qué indica la luz de presión de aceite encendida?",
        options: [
          "Todo bien",
          "Presión baja de aceite - parar motor",
          "Falta gasolina",
          "Batería baja",
        ],
        correct: 1,
      },
      {
        question: "¿Para qué sirve el sensor de oxígeno (sonda lambda)?",
        options: [
          "Para la velocidad",
          "Para optimizar la mezcla aire-combustible",
          "Para los frenos",
          "Para las luces",
        ],
        correct: 1,
      },
      {
        question:
          "¿Qué debe comprobar si el consumo de combustible aumenta mucho?",
        options: [
          "Solo el precio",
          "Filtros, presión neumáticos y estilo de conducción",
          "Solo el aceite",
          "Nada",
        ],
        correct: 1,
      },
      {
        question: "¿Cuándo debe sustituir el líquido de frenos?",
        options: [
          "Nunca",
          "Según especificaciones del fabricante",
          "Solo si no frena",
          "Cada mes",
        ],
        correct: 1,
      },
      {
        question: "¿Qué puede causar que el motor 'petardee'?",
        options: [
          "Bujías en mal estado",
          "Filtro de aire sucio",
          "Combustible de mala calidad",
          "Todas las anteriores",
        ],
        correct: 3,
      },
      {
        question: "¿Para qué sirve el sistema de alimentación de combustible?",
        options: [
          "Para las luces",
          "Para llevar combustible del depósito al motor",
          "Para los frenos",
          "Para la climatización",
        ],
        correct: 1,
      },
      {
        question:
          "¿Qué debe hacer si detecta una fuga de líquidos bajo el vehículo?",
        options: [
          "Ignorarla",
          "Identificar el líquido y reparar la fuga",
          "Continuar hasta casa",
          "Acelerar más",
        ],
        correct: 1,
      },
      {
        question: "¿Cuál es la función principal del sistema de refrigeración?",
        options: [
          "Calentar el habitáculo",
          "Mantener el motor a temperatura óptima",
          "Enfriar los frenos",
          "Limpiar el motor",
        ],
        correct: 1,
      },
      {
        question:
          "¿Qué documento acredita las características técnicas del vehículo?",
        options: [
          "El seguro",
          "La ficha técnica",
          "El carnet de conducir",
          "La ITV",
        ],
        correct: 1,
      },
      {
        question: "¿Para qué sirve la válvula EGR?",
        options: [
          "Para ahorrar combustible",
          "Para reducir emisiones de NOx",
          "Para enfriar el motor",
          "Para la radio",
        ],
        correct: 1,
      },
      {
        question: "¿Qué debe hacer si el vehículo no arranca?",
        options: [
          "Forzar más",
          "Comprobar batería, combustible y bujías",
          "Llamar siempre a grúa",
          "Acelerar a fondo",
        ],
        correct: 1,
      },
      {
        question: "¿Cuándo debe cambiar el filtro de habitáculo?",
        options: [
          "Nunca",
          "Según mantenimiento o si huele mal",
          "Solo en verano",
          "Cada semana",
        ],
        correct: 1,
      },
    ],
  },

  shen: {
    title: "Mecánica y Mantenimiento del Vehículo",
    questions: [
      {
        question: "¿Para qué sirve el ABS?",
        options: [
          "Para acelerar mejor",
          "Para evitar el bloqueo de ruedas al frenar",
          "Para ahorrar combustible",
          "Para la dirección asistida",
        ],
        correct: 1,
      },
    ],
  },

  mecanica: {
    title: "Mecánica y Mantenimiento del Vehículo",
    questions: [
      {
        question: "¿Para qué sirve el ABS?",
        options: [
          "Para acelerar mejor",
          "Para evitar el bloqueo de ruedas al frenar",
          "Para ahorrar combustible",
          "Para la dirección asistida",
        ],
        correct: 1,
      },
      {
        question: "¿Cuál es la función del airbag?",
        options: [
          "Ahorrar combustible",
          "Proteger en caso de colisión",
          "Mejorar la visibilidad",
          "Ayudar al frenado",
        ],
        correct: 1,
      },
      {
        question: "¿Qué indica la luz roja del aceite en el cuadro?",
        options: [
          "Falta de combustible",
          "Presión baja de aceite",
          "Temperatura alta",
          "Batería descargada",
        ],
        correct: 1,
      },
      {
        question: "¿Cuándo debe cambiar el aceite del motor?",
        options: [
          "Cada 5,000 km",
          "Según especificaciones del fabricante",
          "Solo cuando se vea negro",
          "Una vez al año",
        ],
        correct: 1,
      },
      {
        question: "¿Qué documentos debe llevar siempre en el vehículo?",
        options: [
          "Solo el carnet",
          "Permiso, tarjeta ITV y seguro",
          "Solo la tarjeta ITV",
          "Solo el seguro",
        ],
        correct: 1,
      },
      {
        question: "¿Para qué sirve el líquido de frenos?",
        options: [
          "Para limpiar",
          "Para transmitir la fuerza de frenado",
          "Para enfriar el motor",
          "Para la dirección",
        ],
        correct: 1,
      },
      {
        question:
          "¿Cada cuánto debe pasar la ITV un turismo de menos de 10 años?",
        options: [
          "Cada año",
          "Cada 2 años",
          "Cada 4 años hasta los 10 años, luego cada 2",
          "Solo cuando se averíe",
        ],
        correct: 2,
      },
      {
        question: "¿Qué indica el testigo de temperatura del motor?",
        options: [
          "Falta de combustible",
          "Sobrecalentamiento del motor",
          "Presión baja de aceite",
          "Batería descargada",
        ],
        correct: 1,
      },
      {
        question: "¿Cuál es la presión correcta de los neumáticos?",
        options: [
          "Siempre 2 bar",
          "La que indique el fabricante",
          "La máxima posible",
          "No importa",
        ],
        correct: 1,
      },
      {
        question: "¿Qué debe hacer si se enciende el testigo de batería?",
        options: [
          "Continuar hasta casa",
          "Parar lo antes posible",
          "Acelerar más",
          "No hacer caso",
        ],
        correct: 1,
      },
      {
        question: "¿Para qué sirve el ESP?",
        options: [
          "Para ahorrar combustible",
          "Para mantener la estabilidad del vehículo",
          "Para mejorar el sonido",
          "Para la climatización",
        ],
        correct: 1,
      },
      {
        question: "¿Cuándo debe cambiar las pastillas de freno?",
        options: [
          "Solo si hacen ruido",
          "Cuando estén gastadas según revisión",
          "Una vez al año",
          "Solo si no frenan",
        ],
        correct: 1,
      },
      {
        question: "¿Qué elementos son obligatorios llevar en el vehículo?",
        options: [
          "Solo las luces",
          "Triángulos, chaleco y rueda de repuesto",
          "Solo el gato",
          "Solo el chaleco",
        ],
        correct: 1,
      },
      {
        question: "¿Para qué sirve el filtro de aire?",
        options: [
          "Para la radio",
          "Para limpiar el aire que entra al motor",
          "Para el aire acondicionado",
          "Para los frenos",
        ],
        correct: 1,
      },
      {
        question: "¿Qué debe comprobar en los neumáticos?",
        options: [
          "Solo la presión",
          "Presión, dibujo y estado general",
          "Solo el color",
          "Solo el tamaño",
        ],
        correct: 1,
      },
      {
        question: "¿Cuál es la función del catalizador?",
        options: [
          "Ahorrar combustible",
          "Reducir las emisiones contaminantes",
          "Mejorar la potencia",
          "Enfriar el motor",
        ],
        correct: 1,
      },
      {
        question: "¿Qué indica la luz de check engine?",
        options: [
          "Todo funciona bien",
          "Problema en el motor o sistema de emisiones",
          "Falta gasolina",
          "Batería baja",
        ],
        correct: 1,
      },
      {
        question: "¿Cuándo debe cambiar las escobillas del limpiaparabrisas?",
        options: [
          "Una vez al año",
          "Cuando no limpien correctamente",
          "Solo en invierno",
          "Cada 50,000 km",
        ],
        correct: 1,
      },
      {
        question: "¿Para qué sirve el líquido refrigerante?",
        options: [
          "Para limpiar",
          "Para mantener la temperatura del motor",
          "Para los frenos",
          "Para la dirección",
        ],
        correct: 1,
      },
      {
        question: "¿Qué debe hacer si se pincha un neumático?",
        options: [
          "Continuar despacio",
          "Parar en lugar seguro y cambiarlo",
          "Acelerar para llegar antes",
          "Llamar a grúa siempre",
        ],
        correct: 1,
      },
      {
        question: "¿Cuál es la vida útil aproximada de una batería?",
        options: ["1 año", "3-5 años", "10 años", "Toda la vida del coche"],
        correct: 1,
      },
      {
        question: "¿Para qué sirven las bujías?",
        options: [
          "Para la iluminación",
          "Para encender la mezcla en el motor",
          "Para los frenos",
          "Para la radio",
        ],
        correct: 1,
      },
      {
        question: "¿Qué debe hacer antes de levantar el vehículo con gato?",
        options: [
          "Nada especial",
          "Asegurar que esté en terreno firme y nivelado",
          "Encender el motor",
          "Quitar la rueda",
        ],
        correct: 1,
      },
      {
        question: "¿Cuándo debe revisar el nivel de aceite?",
        options: [
          "Con el motor caliente",
          "Con el motor frío y en terreno llano",
          "Solo en el taller",
          "Una vez al año",
        ],
        correct: 1,
      },
      {
        question: "¿Qué combustible debe usar en su vehículo?",
        options: [
          "El más barato",
          "El que especifique el fabricante",
          "Siempre gasolina 98",
          "Cualquiera",
        ],
        correct: 1,
      },
      {
        question: "¿Para qué sirve el sistema de dirección asistida?",
        options: [
          "Para ahorrar combustible",
          "Para facilitar el manejo del volante",
          "Para los frenos",
          "Para la suspensión",
        ],
        correct: 1,
      },
      {
        question: "¿Qué debe hacer si huele a gas en el vehículo?",
        options: [
          "Encender la radio",
          "Parar, ventilar y revisar",
          "Continuar despacio",
          "Acelerar",
        ],
        correct: 1,
      },
      {
        question: "¿Cuál es la función de los amortiguadores?",
        options: [
          "Ahorrar combustible",
          "Controlar el movimiento de la suspensión",
          "Mejorar la velocidad",
          "Para la dirección",
        ],
        correct: 1,
      },
      {
        question: "¿Qué puede causar el consumo excesivo de combustible?",
        options: [
          "Neumáticos mal inflados",
          "Filtros sucios",
          "Conducción agresiva",
          "Todas las anteriores",
        ],
        correct: 3,
      },
      {
        question: "¿Cuándo debe cambiar el filtro de combustible?",
        options: [
          "Nunca",
          "Según mantenimiento programado",
          "Solo si no arranca",
          "Una vez al mes",
        ],
        correct: 1,
      },
    ],
  },
};

# Guion de defensa — Módulo GPS (diapositivas 14 a 21)

**Duración objetivo:** ~12 minutos (margen cómodo bajo el límite de 15).
**Tono:** primera persona, pausado, sin leer palabra por palabra. Los números en **negrita** son los que conviene no equivocar.

> Ritmo: habla a ~130 palabras por minuto y respeta las pausas (`…`). Si vas apurado de tiempo, recorta primero las frases marcadas con *(opcional)*.

---

## 14 · Título del módulo — *~1:00*

> **Transición flexible** (sirva como sirva que termine tu compañera): no repite su última frase, sino que se apoya en la arquitectura, que es la base de todo.

«Muchas gracias, [nombre]. Como acaban de ver, toda la aplicación se sostiene sobre esa arquitectura modular: cuatro módulos independientes que se comunican entre sí.

Yo me encargué del **segundo**: el módulo de **localización en tiempo real y detección de proximidad**.

En pocas palabras, este módulo le da a la aplicación el sentido del lugar. Sabe dónde está parado el visitante dentro del parque, lo guía hacia cada montículo y detecta el momento exacto en que llega. Ese dato es el que dispara, justo a tiempo, el contenido en realidad aumentada que verán más adelante.

Les voy a contar qué me propuse, cómo lo construí y, sobre todo, los resultados que lo respaldan.»

*(avanzas)*

---

## 15 · Objetivos — *~1:15*

«El objetivo general fue implementar ese módulo de localización en tiempo real con detección de proximidad, en iOS, para el Parque Arqueológico Kaminaljuyú.

Ese objetivo lo dividí en cinco metas concretas:

- **Geolocalizar:** rastrear la ubicación del visitante en tiempo real.
- **Mapear:** dibujar los **once** puntos de interés y la ruta del recorrido sobre un mapa.
- **Detectar la proximidad:** calcular automáticamente cuándo el visitante llega a cada montículo.
- **Comunicar:** una interfaz que le pasa al módulo de realidad aumentada las coordenadas y los eventos de llegada.
- Y **validar** todo esto con pruebas de usuario en dispositivo físico.

Estos cinco objetivos son el hilo de toda mi presentación; al final vuelvo a ellos para mostrar que se cumplieron.»

*(avanzas)*

---

## 16 · Metodología: ocho fases — *~1:45*

«El módulo lo desarrollé con una metodología **iterativa e incremental**, en **ocho fases**. La idea es que cada fase deja una pieza funcionando y la siguiente se apoya en ella, en lugar de construir todo de golpe.

Empecé por el entorno y las herramientas. Luego la geolocalización en tiempo real. Después los datos: los once puntos de interés del parque. Sobre eso, la parte matemática, que calcula distancias y direcciones. Luego la capa del mapa, con los marcadores y la ruta. Después la detección de proximidad, que es el corazón del módulo. Luego la gestión del recorrido guiado y la interfaz con realidad aumentada. Y por último, la validación con usuarios.

Un detalle importante: como fue un trabajo en equipo, el **contrato** entre mi módulo y el de realidad aumentada lo acordamos desde temprano. Eso nos permitió avanzar en paralelo sin bloquearnos.»

*(avanzas)*

---

## 17 · Decisiones de diseño — *~1:30*

«Cada tecnología que elegí responde a un beneficio concreto, no fue por moda.

Usé **CoreLocation**, la base de ubicación de iOS, para tener la mayor precisión posible y descartar las señales malas.

Para medir distancias usé la **fórmula de Haversine**: es precisa a pocos metros y muy rápida de calcular, sin la complejidad de otras fórmulas que no aportaban un beneficio real.

Para detectar la llegada hice un **geofencing por software**, es decir, por cálculo propio. Eso me evitó tener que instalar sensores o antenas dentro del parque.

Para el mapa elegí **Google Maps**, porque tiene buena cartografía de Guatemala y le resulta familiar al visitante.

Y usé **Combine**, el sistema reactivo de Swift, para que las partes del módulo se avisen solas cuando algo ocurre. *(opcional)*»

*(avanzas)*

---

## 18 · Arquitectura y flujo — *~1:30*

«Por dentro, el módulo es una **tubería de datos**. La señal del sistema entra por el servicio de ubicación, pasa por el cálculo de distancia y dirección, luego por el servicio de proximidad, y de ahí a la gestión del recorrido.

Todo eso termina en una sola pieza: la fachada **GPSModuleInterface**. Es el **contrato** con el módulo de realidad aumentada: expone **nueve** datos y **tres** avisos de eventos, y el módulo de RA los consume sin tener que conocer nada de la lógica interna. Así los módulos quedan desacoplados.

Y una ventaja concreta de este diseño modular: cuando cambiamos del recorrido de prueba al recorrido real del parque, solo tuve que editar el catálogo de puntos. Los cálculos, la proximidad y la navegación no se tocaron.»

*(avanzas)*

---

## 19 · Cómo detecta la llegada — *~1:30*

«Esta es la función central del módulo: saber que el visitante llegó, sin que tenga que tocar nada.

Funciona en tres pasos. **Primero** limpio la señal: descarto las lecturas de GPS poco confiables. **Segundo**, corrijo el margen: ajusto la distancia según el propio error del GPS, para no disparar el contenido ni muy lejos ni encima del punto. Y **tercero**, aviso al llegar: cuando el visitante está a **veinticinco metros** del montículo, se emite el aviso una sola vez.

Esos veinticinco metros no son arbitrarios: los calibré según el error típico del GPS al aire libre y el tamaño de los montículos. La escala de cercanía va de *lejos* a *llegó*, y en cada nivel la app reacciona distinto, hasta que aparece el contenido en realidad aumentada.»

*(avanzas)*

---

## 20 · Resultados: usuarios — *~2:30*  ⭐ *(aquí bajás el ritmo)*

«Y aquí están los resultados, que es lo que respalda todo lo anterior.

Validé el módulo con **ciento un participantes**, en un recorrido de prueba en el campus de la Universidad del Valle. Cada uno completó el recorrido en realidad aumentada y respondió una encuesta sobre su experiencia.

Las cuatro preguntas que miden mi módulo salieron muy bien. La ubicación coincidió con la real para el **93 %**. La guía para llegar sin perderse, **94 %**. El mapa, también **94 %**. Y la mejor valorada de todas fue la **detección automática de la llegada: 96 %** de respuestas favorables, con un promedio de **4.73 sobre 5**. Es decir, la función central del módulo fue, además, la que mejor funcionó para la gente.

Y lo importante no es solo que los números son altos. Antes de las pruebas definí **dos criterios de aceptación**: al menos **80 %** de respuestas favorables y un promedio de al menos **4 sobre 5**. Las **cuatro** dimensiones cumplieron **ambos** criterios, y con buen margen.

Esto quiere decir que los objetivos no se quedaron en el papel: quedaron **validados por los usuarios**.»

*(avanzas)*

---

## 21 · Resultados: rendimiento técnico — *~2:00*  ⭐ *(cierre del módulo)*

«Esa percepción de los usuarios la respaldé además con **mediciones técnicas**. Instrumenté la aplicación y la corrí **quince veces** de forma controlada.

De más de **cuatro mil doscientas** lecturas de GPS, el módulo aceptó el **99.9 %**; solo se descartaron cuatro por baja calidad. La precisión promedio fue de casi **cinco metros**, y el **97 %** de las lecturas estuvo por debajo de cinco metros. El cálculo de distancia a los once puntos toma **centésimas de milisegundo**, así que no afecta la fluidez de la aplicación. Y la actualización se mantuvo estable, alrededor de una vez por segundo.

Además documenté **cuatro casos de prueba** sobre los flujos críticos —adquisición, cálculo, detección de llegada y avance del recorrido— y los **cuatro pasaron**.

Con esto, los **cinco objetivos quedaron cumplidos y validados**, tanto por la percepción de los usuarios como por las métricas técnicas.

Y toda esta información de ubicación y llegada es la que recibe el siguiente módulo, el de **realidad aumentada**, para colocar los modelos 3D en el lugar correcto. Los dejo entonces con el tercer módulo.»

*(fin de tu parte — das paso al módulo 03)*

---

### Resumen de tiempos

| Slide | Tema | Tiempo |
|---|---|---|
| 14 | Título / transición | ~1:00 |
| 15 | Objetivos | ~1:15 |
| 16 | Metodología | ~1:45 |
| 17 | Decisiones | ~1:30 |
| 18 | Arquitectura | ~1:30 |
| 19 | Detección | ~1:30 |
| 20 | Resultados · usuarios | ~2:30 |
| 21 | Resultados · técnico | ~2:00 |
| **Total** | | **~12:00** |

**Si te sobra tiempo:** detente más en la slide 20 (los criterios de aceptación) y en la 17.
**Si te falta tiempo:** recorta las frases *(opcional)* y acelera la 16 y la 18.

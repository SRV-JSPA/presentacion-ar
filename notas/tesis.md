<!-- Trabajo_de_graduación_observaciones.docx · convertido el 2026-11-15 con convertir_tesis.py. Cita como tesis.md:<línea>. -->

UNIVERSIDAD DEL VALLE DE GUATEMALA

Facultad de Ingeniería

[IMG:figuras-tesis/image1.png]

Implementación de un módulo de localización en tiempo real con detección de proximidad en iOS implementando Swift y librerías de Google para el Parque Arqueológico Kaminaljuyú.

Trabajo de graduación en la modalidad de Megaproyecto presentado por José Santiago Pereira Alvarado para optar por el grado académico de Licenciatura en Ingeniería en Ciencias de la computación y tecnologías de la información.

Guatemala,

2026

UNIVERSIDAD DEL VALLE DE GUATEMALA

Facultad de Ingeniería

[IMG:figuras-tesis/image1.png]

Implementación de un módulo de localización en tiempo real con detección de proximidad en iOS implementando Swift y librerías de Google para el Parque Arqueológico Kaminaljuyú.

Trabajo de graduación en la modalidad de Megaproyecto presentado por José Santiago Pereira Alvarado para optar por el grado académico de Licenciatura en Ingeniería en Ciencias de la computación y tecnologías de la información.

Guatemala,

2026

Vo.Bo.

____________________________________

(grado académico y nombre del asesor)

Tribunal examinador:

____________________________________

(grado académico y nombre del examinador)

____________________________________

(grado académico y nombre del examinador)

____________________________________

(grado académico y nombre del examinador)

Fecha de aprobación del examen de graduación:

(Guatemala, _____ de __________ de 2026)

ÍNDICE

LISTA DE CUADROS

Cuadro 1. Frecuencia de respuestas por pregunta del módulo GPS (escala 1–5). 42

Cuadro 2. Resumen estadístico de las preguntas del módulo GPS. 42

Cuadro 3. Métricas técnicas agregadas del módulo de GPS. 45

Cuadro 4. Casos de prueba del módulo GPS y su resultado. 47

Cuadro 5. Comparación de los resultados obtenidos con los criterios de aceptación 48

LISTA DE FIGURAS

Figura 1. Infraestructura del proyecto: Podfile y gestión segura de la clave de API. 29

Figura 2. Configuración del CLLocationManager en LocationService y solicitud de permiso de ubicación. 31

Figura 3. Distribución de respuestas a la pregunta 10 (coincidencia entre la ubicación mostrada y la real). 32

Figura 4. Distribución del error horizontal reportado por CoreLocation durante las corridas controladas (n = 4201 lecturas). 32

Figura 5. Modelo de datos POILocation y catálogo POIRegistry. 33

Figura 6. Implementación de la fórmula de Haversine y del cálculo de rumbo en GeoUtils. 35

Figura 7. Vista del mapa en la aplicación: marcadores diferenciados y polilínea del recorrido. 37

Figura 8. Distribución de respuestas a la pregunta 13 (utilidad del mapa para ubicar los montículos). 28

Figura 9. Lógica de proximidad: ProximityService y el enumerado ProximityLevel. 38

Figura 10. Distribución de respuestas a la pregunta 12 (detección automática de la llegada). 39

Figura 11. Guía de navegación: distancia y dirección hacia el siguiente montículo. 41

Figura 12. Distribución de respuestas a la pregunta 11 (distancia y dirección para llegar sin perderse). 41

Figura 13. Participantes durante las pruebas de usuario del recorrido en realidad aumentada. 44

Figura 14. Comparación consolidada de las cuatro preguntas del módulo GPS. 44

Figura 15. Frecuencia medida de actualización del GPS por corrida. 46

Figura 16. Consumo de memoria por corrida. 46

RESUMEN

El presente trabajo describe el desarrollo de un módulo de localización en tiempo real para la aplicación móvil ArTourKaminaljuyú. Esta aplicación acompaña al visitante durante su recorrido por el Parque Arqueológico Kaminaljuyú, ubicado en la zona 7 de la Ciudad de Guatemala. El parque cuenta con once puntos de interés, cada uno asociado a un montículo prehispánico.

El módulo cumple dos funciones principales. Primero, muestra al visitante su ubicación dentro del parque sobre un mapa interactivo. Segundo, detecta cuando el visitante se encuentra cerca de un montículo. En ese momento, el módulo envía un aviso al componente de realidad aumentada, el cual superpone sobre el entorno real una reconstrucción tridimensional de la estructura original.

Para el desarrollo se usó la plataforma iOS, con los lenguajes Swift y SwiftUI. La aplicación obtiene la ubicación del dispositivo mediante el GPS integrado, muestra el mapa del parque con el apoyo de Google Maps y calcula la distancia entre el visitante y cada montículo mediante una fórmula geodésica estándar.

El trabajo se organizó en ocho etapas sucesivas. La última etapa consistió en pruebas de campo dentro de la Universidad del Valle de Guatemala. El resultado es un módulo funcional, validado en condiciones reales de uso. Este módulo también puede servir como base para futuros proyectos que busquen poner en valor el patrimonio arqueológico guatemalteco mediante tecnologías móviles.

ABSTRACT

This paper describes the development of a real-time location module for the ArTourKaminaljuyú mobile app. This app guides visitors during their tour of the Kaminaljuyú Archaeological Park, located in Zone 7 of Guatemala City. The park features eleven points of interest, each associated with a pre-Hispanic mound.

The module serves two main functions. First, it shows visitors their location within the park on an interactive map. Second, it detects when a visitor is near a mound. At that moment, the module sends a notification to the augmented reality component, which superimposes a three-dimensional reconstruction of the original structure onto the real environment.

The iOS platform was used for development, along with the Swift and SwiftUI programming languages. The app obtains the device’s location via the built-in GPS, displays the park map using Google Maps, and calculates the distance between the visitor and each mound using a standard geodetic formula.

The project was organized into eight successive stages. The final stage consisted of field testing at the Universidad del Valle de Guatemala. The result is a functional module, validated under real-world conditions. This module can also serve as a foundation for future projects that seek to highlight Guatemala’s archaeological heritage through mobile technologies.

# I. INTRODUCCIÓN

El Parque Arqueológico Kaminaljuyú se ubica dentro del perímetro urbano de la Ciudad de Guatemala. El sitio conserva una de las expresiones urbanas más tempranas de la civilización maya en el altiplano central de Guatemala. Durante siglos funcionó como un centro político, económico y ceremonial de gran escala, con cientos de montículos distribuidos sobre el valle. Hoy el crecimiento de la ciudad ha reducido el sitio a un área delimitada que preserva once estructuras principales abiertas al público.

La visita presencial al sitio enfrenta una limitación particular. Las edificaciones originales no se encuentran a la vista; en su lugar, el visitante observa elevaciones cubiertas de vegetación. Esta condición dificulta la interpretación del lugar al visitante no especializado. Existe entonces una brecha entre la evidencia física conservada y la comprensión que el visitante obtiene del recorrido.

Las tecnologías móviles ofrecen una vía para cerrar esa brecha. La realidad aumentada permite superponer modelos tridimensionales sobre la imagen real que capta la cámara del teléfono. La geolocalización permite determinar la posición del visitante dentro del sitio y vincular esa posición con los contenidos digitales que corresponden a cada lugar. La combinación de ambas tecnologías habilita experiencias de interpretación directamente en el sitio, sin requerir infraestructura permanente dentro del parque.

Sobre esta base se desarrolló ArTourKaminaljuyú, una aplicación móvil nativa para iOS. La aplicación acompaña al visitante durante su recorrido por los once puntos de interés del parque. Cuando el visitante se aproxima a una estructura, la aplicación superpone sobre la cámara del dispositivo una reconstrucción tridimensional de la edificación original. El visitante puede entonces observar el aspecto que tuvo el montículo antes de su deterioro.

El proyecto se desarrolló de manera modular. Un equipo de estudiantes se dividió el trabajo en componentes independientes pero interoperables. Cada integrante asumió la responsabilidad de uno de esos componentes.

El presente trabajo aborda el módulo de GPS y navegación de la aplicación. Este módulo tiene tres responsabilidades principales. Primero, determina la posición del visitante dentro del parque en tiempo real. Segundo, calcula la distancia y la dirección hacia cada punto de interés y detecta el momento en que el visitante llega a un montículo. Tercero, comunica estos eventos al módulo de realidad aumentada para que active las reconstrucciones correspondientes.

El documento se organiza en varias secciones. Primero presenta los objetivos, los antecedentes, la justificación, los alcances y las limitaciones. Después expone el marco teórico y la metodología. Finalmente muestra los resultados, las conclusiones y las recomendaciones.

# II. OBJETIVOS

## 2.1 Objetivo general

Implementar un módulo de localización en tiempo real con detección de proximidad en iOS implementando Swift y librerías de Google para el Parque Arqueológico Kaminaljuyú.

## 2.2 Objetivos específicos

- Programar un servicio de geolocalización en tiempo real para rastrear continuamente la ubicación del usuario dentro del parque arqueológico Kaminaljuyú, mediante las librerías nativas de iOS.
- Construir la representación visual de los puntos de interés y la ruta del tour guiado sobre un mapa en la aplicación para que el usuario visualice el recorrido completo y pueda ubicar los montículos dentro del parque arqueológico Kaminaljuyú, mediante la integración de herramientas de mapeo, carga de coordenadas y colocación de marcadores diferenciados en la aplicación móvil iOS.
- Calcular la proximidad geoespacial entre la ubicación del usuario y los puntos de interés arqueológicos para determinar automáticamente cuándo el usuario ha llegado a un montículo, mediante la implementación de fórmulas para cálculo de distancias, geofencing lógico y la lógica de navegación secuencial del recorrido en la aplicación móvil iOS.
- Desarrollar un protocolo de comunicación entre el módulo GPS y el módulo VR para transmitir coordenadas, metadatos y eventos de proximidad de los puntos de interés, permitiendo al módulo VR determinar dónde desplegar los modelos 3D al detectar la llegada del usuario a un montículo, mediante la implementación de una interfaz en la aplicación móvil iOS.
- Comprobar el funcionamiento del módulo GPS para validar que los servicios de geolocalización, representación visual, cálculos de proximidad y comunicación con el módulo AR operan correctamente, mediante la ejecución de pruebas de usuario en dispositivo físico dentro de la Universidad del Valle de Guatemala.

# III. ANTECEDENTES

La integración de tecnologías de geolocalización y realidad aumentada en el patrimonio cultural ha experimentado un crecimiento sostenido desde principios del siglo XXI. Las primeras iniciativas surgieron en Europa, impulsadas por programas de investigación de la Unión Europea, y más adelante se extendieron a Asia y a América Latina. Diversos proyectos internacionales y regionales han explorado la combinación de GPS, navegación móvil y contenido digital superpuesto, con el objetivo común de enriquecer la experiencia del visitante en sitios arqueológicos y centros históricos

Uno de los proyectos pioneros fue ARCHEOGUIDE, financiado por la Unión Europea y evaluado en el sitio arqueológico de Olimpia, Grecia (Vlahakis et al., 2002). Este sistema combinó posicionamiento GPS con lecturas de brújula y seguimiento visual de imagen para superponer reconstrucciones tridimensionales de monumentos destruidos sobre su ubicación original. ARCHEOGUIDE demostró la viabilidad de usar coordenadas GPS como disparador de contenido AR en sitios arqueológicos al aire libre. Sin embargo, dependía de hardware especializado que limitaba su accesibilidad.

Posteriormente, el proyecto MART desarrolló una guía turística AR para el palacio Gyeongbokgung, en Seúl, Corea del Sur (Koo et al., 2019). Esta guía superpuso personajes virtuales tridimensionales animados sobre los edificios patrimoniales. La evaluación con usuarios demostró que la experiencia AR mejoró de forma significativa la comprensión histórica y la satisfacción del visitante frente a las guías tradicionales.

En el contexto latinoamericano, una aplicación móvil combinó AR y navegación GPS para recorridos culturales en la Plaza Cisneros de Medellín, Colombia (Hincapié et al., 2021). El estudio incluyó un diseño experimental con dos grupos de visitantes, con la aplicación y sin ella. Los resultados mostraron que el grupo experimental alcanzó mejores niveles de aprendizaje y de retención del conocimiento sobre el patrimonio cultural. Este antecedente resulta relevante para ArTourKaminaljuyú por dos razones. Primero, valida de forma empírica que la combinación de GPS con AR mejora los resultados de aprendizaje del visitante en un contexto latinoamericano urbano. Segundo, su modelo de recorrido guiado por puntos de interés es análogo a la navegación secuencial del presente proyecto.

Las aplicaciones de realidad aumentada basadas en ubicación (Location-Based Augmented Reality, LBAR) constituyen una categoría consolidada. Estas aplicaciones utilizan el sensor GPS del dispositivo para guiar al usuario hacia ubicaciones específicas. Al llegar a cada ubicación, activan el contenido digital correspondiente. Dos casos confirman la efectividad de este patrón arquitectónico. El primero es una aplicación LBAR para el distrito histórico de Doltso, en Kastoria, Grecia (Kleftodimos et al., 2023). El segundo es un juego serio de GPS-AR para la aldea renacentista de Caldana, Italia, evaluado con 79 niños (Capecchi et al., 2023). En conjunto, ambos casos validan el patrón tanto para turistas adultos como para audiencias jóvenes en contextos educativos.

Las revisiones bibliométricas más recientes analizaron 1201 documentos publicados entre 2012 y 2021 (Boboc et al., 2022). Estos estudios sitúan la línea de investigación como una tendencia internacional consolidada. Al mismo tiempo, evidencian la escasa representación de proyectos centroamericanos en la literatura.

En el contexto guatemalteco, el antecedente más directo es el proyecto KAN, desarrollado por Creatividad Gráfica, S.A. con apoyo de SENACYT (Creatividad Gráfica, S.A., 2018-presente). El proyecto inició en 2018 y se aplicó en el Parque Arqueológico Kaminaljuyú. KAN reconstruyó digitalmente las pirámides ubicadas debajo de los montículos. De esta forma, los visitantes pudieron visualizarlas mediante realidad aumentada. ArTourKaminaljuyú se diferencia de KAN por varios elementos:

• un módulo de navegación GPS con detección de proximidad;

• una ruta guiada secuencial con conectores intermedios;

• un indicador visual de dirección;

• una arquitectura formal de integración GPS-AR basada en el patrón publicador-suscriptor;

• un desarrollo nativo para iOS dentro de un proceso académico universitario.

En síntesis, los antecedentes revisados demuestran que la combinación de navegación GPS con realidad aumentada en sitios de patrimonio cultural es un enfoque validado a nivel internacional. La literatura aporta evidencia empírica de su efectividad. ArTourKaminaljuyú se inserta en esta línea como una de las primeras iniciativas académicas que aplica esta convergencia tecnológica al patrimonio arqueológico maya en Guatemala.

# IV. JUSTIFICACIÓN

El Parque Arqueológico Kaminaljuyú enfrenta un problema de interpretación. Las estructuras originales ya no son visibles. El visitante encuentra elevaciones cubiertas de vegetación en lugar de las edificaciones ceremoniales que caracterizaron al sitio en su época. Esta brecha entre lo que queda a la vista y lo que el sitio significó históricamente limita el valor educativo del recorrido y reduce el atractivo del parque para el público general.

Los antecedentes revisados demuestran que la combinación de navegación GPS con realidad aumentada ofrece una solución efectiva a este tipo de problema. Proyectos evaluados en Europa, Asia y América Latina confirman que esta convergencia tecnológica mejora la comprensión histórica del visitante y la retención del conocimiento sobre el patrimonio cultural. Aplicar este enfoque al Parque Arqueológico Kaminaljuyú tiene, por lo tanto, un fundamento empírico sólido.

Sin embargo, los mismos antecedentes revelan una ausencia. La región centroamericana está sub-representada en la literatura y no se identificó, en los antecedentes revisados, otra aplicación académica que combine GPS y realidad aumentada para el patrimonio arqueológico maya. El único proyecto previo aplicado al parque es KAN, el cual reconstruye las estructuras mediante realidad aumentada pero no incluye un sistema de navegación que guíe al visitante entre los montículos. ArTourKaminaljuyú cubre esa ausencia con un recorrido guiado por puntos de interés, respaldado por la detección automática de proximidad.

Dentro de ArTourKaminaljuyú, el módulo de geolocalización y navegación GPS resuelve dos necesidades que la aplicación requiere para cumplir su propósito. La primera es ubicar al visitante dentro del parque en tiempo real. Sin esta información, la aplicación no puede guiarlo a lo largo del recorrido ni ofrecerle una ruta coherente. La segunda es detectar el momento en que el visitante llega a cada estructura. Sin esta detección, el módulo de realidad aumentada no sabría cuándo activar las reconstrucciones tridimensionales. Por esta razón, el módulo de GPS no es un complemento opcional de la aplicación, sino la condición necesaria para que la experiencia funcione.

El desarrollo del módulo dentro de un proyecto académico de graduación aporta un beneficio adicional. El código, la arquitectura y las decisiones de diseño quedan documentados y disponibles para futuras iniciativas de puesta en valor del patrimonio arqueológico guatemalteco mediante tecnologías móviles. Esto reduce el costo de entrada para otros proyectos académicos o institucionales que busquen aplicar un enfoque similar a otros sitios del país, tanto mayas como de otras tradiciones culturales.

Finalmente, el proyecto permitió aplicar en un contexto real las competencias centrales de la carrera de Ingeniería en Ciencias de la Computación y Tecnologías de la Información. El desarrollo integró conocimientos de arquitectura de software, geolocalización, matemática aplicada al cálculo de distancias geodésicas y seguridad en el manejo de credenciales. También exigió coordinar interfaces entre módulos desarrollados por distintos integrantes del equipo.

# V. ALCANCES Y LIMITACIONES

## 5.1 Alcances

El propósito del módulo fue proveer al visitante una experiencia de recorrido guiado dentro del Parque Arqueológico Kaminaljuyú. El alcance comprendió cinco funciones principales: la geolocalización en tiempo real, el cálculo de distancias y rumbo hacia cada punto de interés, la detección de proximidad a los montículos, la navegación secuencial por una ruta predefinida y la integración con el módulo de realidad aumentada (AR) del proyecto.

En cuanto a la cobertura geográfica, el módulo contempló los 11 puntos de interés (POI) preservados dentro del parque: los montículos 3, 5, 6, 7, 8, 12, 13 y 14, la Acrópolis, La Palangana y un punto de inicio desde el cual el usuario comenzó el recorrido. Cada POI se registró con sus coordenadas geográficas precisas (latitud y longitud), obtenidas mediante levantamiento de campo. Cada registro incluyó también metadatos asociados: nombre, descripción arqueológica, período de construcción e información histórica. Durante el desarrollo y las pruebas iterativas, se utilizó además un recorrido de prueba reducido en el campus de la Universidad del Valle de Guatemala. Este recorrido replicó la estructura de la ruta con un subconjunto de puntos. Su función fue validar la lógica de navegación y proximidad fuera del sitio, antes de la calibración final con las coordenadas de campo del parque.

Desde la perspectiva técnica, el módulo implementó los siguientes componentes funcionales:

- Servicio de localización en tiempo real: obtuvo de forma continua la posición del usuario mediante el sistema GPS del dispositivo. Utilizó CoreLocation en iOS. El servicio empleó el permiso de ubicación "cuando está en uso" (when in use) para equilibrar la funcionalidad con la privacidad del usuario.
- Cálculo de distancia mediante la fórmula de Haversine: calculó la distancia ortodrómica entre dos puntos sobre la superficie terrestre. El cálculo asumió un radio terrestre de 6 371 000 metros. Esta fórmula aportó la precisión adecuada para las distancias cortas del recorrido dentro del parque.
- Cálculo de rumbo (bearing): determinó el ángulo de dirección desde la posición del usuario hacia el siguiente punto de interés. Este valor alimentó un indicador visual de tipo flecha que orientó al visitante durante el recorrido.
- Detección de proximidad: sistema de geofencing por software que evaluó de forma continua la distancia entre el usuario y el POI objetivo. En Android, el umbral de llegada guiada se configuró en 10 metros, con un umbral de 2 metros para los conectores intermedios y un radio de inicio de recorrido de 20 metros. En iOS, el umbral de llegada guiada se estableció en 25 metros para compensar la variabilidad de la señal GPS en el entorno del parque, con un umbral de 2 metros para los conectores intermedios y un radio de inicio de 20 metros.
- Navegación por ruta predefinida con conectores: definió una ruta secuencial que guió al usuario desde el punto de inicio a través de todos los POI en un orden preestablecido. Entre cada par de POI, el módulo definió waypoints intermedios que trazaron el camino peatonal real dentro del parque. Con ello, la flecha de dirección no señaló en línea recta a través de áreas inaccesibles. La clase RouteNavigator gestionó la progresión automática por estos waypoints.
- Visualización cartográfica: integró el Google Maps SDK para representar en un mapa 2D la posición del usuario en tiempo real. El mapa incluyó marcadores personalizados que indicaron la orientación del dispositivo.
- Interfaz de integración con el módulo AR: expuso los eventos y estados del recorrido (llegada a un POI, estado del tour, POI actual) a través de un patrón de publicador-suscriptor. Este patrón permitió al módulo de realidad aumentada reaccionar a los eventos de navegación y desplegar los modelos 3D (.obj) correspondientes al POI alcanzado.

El alcance del módulo fue exclusivamente la experiencia de navegación dentro del perímetro del Parque Arqueológico Kaminaljuyú. No contempló la navegación vial externa (routing de calles o transporte público) para llegar al parque, ni funciones de navegación fuera de los límites del sitio. El módulo operó bajo la premisa de que el usuario se encontraba físicamente dentro del parque y había otorgado los permisos de ubicación correspondientes.

## 5.2 Limitaciones

El módulo de GPS y navegación presentó las siguientes limitaciones. Estas se relacionan con la tecnología utilizada, el contexto geográfico del sitio y las decisiones de diseño del proyecto:

- Precisión de la señal GPS: la exactitud de la posición reportada por el receptor GPS dependió de factores ambientales ajenos al control de la aplicación. La vegetación densa, la cercanía de estructuras construidas alrededor del parque y el fenómeno de multipath pudieron degradar la precisión de la posición estimada.
- Dependencia de la conectividad a Internet: la visualización del mapa 2D mediante el Google Maps SDK requirió conexión a Internet para descargar los tiles cartográficos. El módulo de localización GPS funcionó sin conexión de datos, pero la experiencia de mapa se degradó de forma notable sin conectividad. El módulo no implementó almacenamiento en caché de tiles para uso sin conexión.
- Disponibilidad de ARGeoTrackingConfiguration: en iOS, la configuración ARGeoTrackingConfiguration de Apple no estuvo disponible en Guatemala. Esta configuración combina GPS, datos cartográficos de Apple y visión por computadora para anclar el contenido AR con alta precisión geoespacial. Por esta razón, el módulo iOS utilizó ARWorldTrackingConfiguration como alternativa. En consecuencia, el posicionamiento de los modelos 3D en AR dependió por completo de las coordenadas GPS procesadas por el módulo de navegación, sin la asistencia del Visual Positioning System (VPS) de Apple. En Android, el módulo utilizó la API Geospatial de ARCore con soporte de Google VPS, cuya cobertura en el área del parque pudo presentar variabilidad.
- Consumo de batería: la obtención continua de la posición GPS, el renderizado del mapa en tiempo real y la ejecución simultánea del módulo de realidad aumentada (que empleó la cámara y procesamiento de visión por computadora) generaron un consumo energético elevado. El módulo no implementó estrategias de ahorro, como la reducción dinámica de la frecuencia de muestreo GPS con el usuario estacionario, ni la suspensión selectiva de los servicios de ubicación.
- Dependencia de servicios de terceros: el módulo dependió de Google Cloud Platform para el funcionamiento del Google Maps SDK. Cualquier interrupción de este servicio, cambio en las políticas de uso, modificación de los modelos de facturación o restricción de cuotas de la API pudo afectar la operación del módulo. La cuenta de Google Cloud utilizada fue personal; la transición a la cuenta institucional de la universidad quedó pendiente.
- Condiciones atmosféricas y ambientales: las condiciones meteorológicas adversas, como la lluvia intensa, la nubosidad extrema o las tormentas eléctricas, pudieron afectar la recepción de las señales GPS. Además, la ionosfera y la troposfera introdujeron retardos variables en la propagación de las señales satelitales. El módulo no corrigió estos retardos, ya que tales correcciones corresponden a receptores de grado geodésico y no a los receptores GPS de los dispositivos móviles comerciales.

# VI. MARCO TEÓRICO

## 6.1 Sistemas globales de navegación por satélite

Un sistema global de navegación por satélite (GNSS, Global Navigation Satellite System) es una infraestructura de satélites artificiales que ofrece servicios de posicionamiento, navegación y sincronización a receptores situados sobre la superficie terrestre. En la actualidad existen cuatro GNSS operativos a nivel global: el Sistema de Posicionamiento Global de los Estados Unidos (GPS), el sistema ruso GLONASS, el sistema europeo Galileo y el sistema chino BeiDou. Los dispositivos móviles modernos combinan señales de varios de estos sistemas para mejorar la precisión y la disponibilidad del servicio (Kaplan y Hegarty, 2006).

El GPS fue el primer GNSS en alcanzar operatividad plena. El Departamento de Defensa de los Estados Unidos lo desarrolló en sus inicios. En su estado actual, proporciona información continua de posición, velocidad y tiempo a los usuarios que cuentan con el hardware receptor adecuado.

La formación nominal del sistema GPS se compone de 24 satélites distribuidos en seis planos orbitales, con cuatro satélites por plano. Estos satélites emiten señales de navegación referenciadas a relojes atómicos de alta precisión. Dichos relojes se sincronizan con la base de tiempo del sistema GPS. Las transmisiones se realizan en dos frecuencias, denominadas L1 y L2, mediante una técnica de acceso múltiple por división de código. Cada satélite utiliza un código pseudoaleatorio (PRN) propio, que permite al receptor identificarlo de forma única.

Los receptores de navegación suelen emplear un reloj de cristal para reducir el costo y el tamaño. Por ello, se requieren mediciones simultáneas a cuatro satélites como mínimo. Estas mediciones resuelven las cuatro incógnitas del problema de navegación: latitud, longitud, altitud y el desfase del reloj del receptor respecto al tiempo del sistema.

Para acelerar el tiempo de fijación de posición en entornos móviles, los dispositivos actuales recurren al GPS Asistido (A-GPS, Assisted GPS). Esta técnica aprovecha la red celular o la red Wi-Fi para descargar los datos de efemérides y almanaque de los satélites. De esta forma, el receptor obtiene su primera posición en segundos en lugar de minutos. Esta capacidad resulta crítica para aplicaciones móviles que requieren disponibilidad inmediata.

La precisión de un receptor GPS en un dispositivo móvil de uso civil depende de una combinación de fuentes de error que afectan la medición de pseudorangos. Entre las principales se encuentran los errores de reloj del satélite y del receptor, los retardos de propagación atmosféricos (ionosférico y troposférico), los errores de efemérides de los satélites, el ruido del receptor y el efecto multipath (Kaplan y Hegarty, 2006).

El efecto multipath resulta relevante en el contexto de las aplicaciones móviles en entornos urbanos o semiurbanos. Este fenómeno ocurre cuando la señal del satélite llega al receptor no solo por la trayectoria directa, sino también a través de reflexiones en edificios, árboles u otras superficies. Estas reflexiones causan errores en los pseudorangos que pueden dominar el presupuesto total de error del sistema (Kaplan y Hegarty, 2006).

Un parque arqueológico combina árboles, estructuras y cielo abierto. En este tipo de entorno, el multipath constituye una fuente de variabilidad en la posición reportada.

## 6.2 Tecnologías alternativas de localización en espacios físicos

Más allá de los GNSS, la literatura técnica reconoce varias tecnologías capaces de determinar o inferir la posición de un dispositivo móvil dentro de un espacio físico. Cada una presenta ventajas y limitaciones particulares. La selección entre ellas depende del tipo de entorno, de la precisión requerida y de la infraestructura disponible.

Las redes Wi-Fi permiten estimar la ubicación a partir de las direcciones MAC de los puntos de acceso visibles y de la intensidad de su señal. Esta técnica, conocida como Wi-Fi Positioning System (WPS), funciona mejor en entornos interiores con alta densidad de redes. En espacios abiertos y despoblados como un parque arqueológico, su cobertura resulta limitada.

Las redes celulares aportan una técnica similar basada en la triangulación entre torres de telefonía. Su precisión típica oscila entre varias decenas y cientos de metros. Esta magnitud resulta insuficiente para detectar la llegada a estructuras separadas por pocas decenas de metros.

Los beacons de Bluetooth de Baja Energía (BLE, Bluetooth Low Energy) son pequeños dispositivos emisores que anuncian su identidad de forma periódica. Un dispositivo móvil cercano puede detectar su presencia y estimar la distancia a partir de la intensidad de la señal recibida (RSSI, Received Signal Strength Indicator). Apple define el estándar iBeacon y Google el estándar Eddystone sobre esta base común. Los beacons habilitan micro-ubicación con precisión de pocos metros, pero exigen desplegar hardware físico en cada punto de interés. También requieren una fuente de energía, con el consiguiente costo de mantenimiento.

La tecnología de banda ultra ancha (UWB, Ultra-Wideband) permite medir distancias con precisión centimétrica mediante el tiempo de vuelo de la señal. Es la tecnología que emplean los dispositivos AirTag de Apple. Su limitación principal reside en la necesidad de hardware específico tanto en el entorno como en el dispositivo del visitante. Al momento de este trabajo, el UWB no se encuentra disponible en todos los teléfonos del mercado.

La comunicación de campo cercano (NFC, Near Field Communication) permite la lectura automática de etiquetas pasivas cuando el dispositivo se aproxima a pocos centímetros. Resulta útil para registrar la llegada a un punto concreto. Sin embargo, exige la interacción activa del visitante y limita el rango útil a un contacto casi directo con la etiqueta física.

La localización visual basada en visión por computadora se apoya en el reconocimiento de imágenes o estructuras del entorno. Los frameworks ARKit (Apple) y ARCore (Google) incorporan técnicas de localización y mapeo simultáneos (SLAM, Simultaneous Localization and Mapping). Estas técnicas resultan efectivas para alinear modelos virtuales con el entorno real a corta distancia, pero requieren puntos de referencia visualmente estables. En un parque arqueológico donde la vegetación cambia con las estaciones, su utilidad como mecanismo principal de localización es limitada. En cambio, resultan complementarias al GNSS para el anclaje fino del contenido de realidad aumentada.

Para el caso del Parque Arqueológico Kaminaljuyú, la combinación de las condiciones físicas del sitio y las necesidades funcionales de la aplicación favoreció al GNSS como mecanismo principal de localización. El sitio ofrece cielo abierto suficiente para la recepción satelital, los dispositivos de los visitantes ya cuentan con hardware receptor incorporado y no se requiere infraestructura física adicional dentro del parque. Las demás tecnologías se consideraron como opciones de respaldo o de evaluación futura, incluidas en las recomendaciones del presente trabajo.

## 6.3 Plataformas de desarrollo para aplicaciones móviles

El desarrollo de una aplicación móvil se puede abordar desde varios enfoques tecnológicos. La elección del enfoque condiciona el acceso a los sensores del dispositivo, el rendimiento de las operaciones en tiempo real y el costo de mantenimiento del producto final.

El desarrollo nativo consiste en construir la aplicación con los lenguajes y herramientas provistos por el fabricante del sistema operativo. En iOS, el lenguaje oficial actual es Swift, con el framework de interfaz SwiftUI. En Android, el lenguaje oficial es Kotlin, con el framework Jetpack Compose. El desarrollo nativo ofrece el mayor rendimiento, el acceso completo a las APIs del sistema y la integración más fiel con el diseño del sistema operativo. Su limitación principal consiste en que cada plataforma requiere una base de código separada, lo que duplica el esfuerzo de desarrollo para proyectos que buscan presencia en iOS y Android.

El desarrollo multiplataforma permite escribir una base de código única que se ejecuta en varios sistemas operativos. Entre las opciones más consolidadas se encuentran Flutter (Google), React Native (Meta), .NET MAUI (Microsoft) e Ionic con Capacitor. Estas herramientas reducen el costo de desarrollo y aceleran el tiempo de salida al mercado. En contraste, el acceso a funciones específicas del sistema operativo requiere capas de puentes (bridges) que pueden limitar el rendimiento o retrasar la adopción de nuevas APIs del sistema.

Las aplicaciones web progresivas (PWA, Progressive Web Apps) ejecutan la lógica dentro del navegador móvil. Ofrecen portabilidad total y no requieren distribución a través de las tiendas oficiales. Sin embargo, el acceso a sensores avanzados, como el receptor GPS en segundo plano o las APIs de realidad aumentada, resulta limitado o inexistente. Por esta razón, las PWA no se consideraron una opción viable para una aplicación que requiere acceso continuo al GPS y a la cámara con superposición de modelos tridimensionales.

Para ArTourKaminaljuyú, el requisito de integrar realidad aumentada con rendimiento fluido y acceso continuo a los sensores del dispositivo favoreció el desarrollo nativo. Apple ofrece el framework ARKit, con capacidades avanzadas de rastreo de superficies, oclusión y anclaje a coordenadas geográficas. Google ofrece su equivalente ARCore. El equipo del proyecto se organizó para desarrollar versiones nativas paralelas en iOS y Android, con una división de responsabilidades por plataforma. El presente trabajo se concentra en la versión iOS.

## 6.4 Frameworks de geolocalización en plataformas móviles

Cada plataforma móvil nativa expone un conjunto de APIs específicas para el acceso a los servicios de ubicación. Estas APIs abstraen la complejidad del hardware receptor y gestionan los permisos del usuario.

En Android, el componente principal es la Fused Location Provider API, parte de los Google Play Services. Esta API combina las lecturas del GPS, de las redes Wi-Fi y de las celdas celulares para entregar una posición consolidada. Expone niveles de prioridad similares a los de iOS y permite el monitoreo de regiones geográficas mediante la Geofencing API.

En iOS, el framework CoreLocation cumple la misma función. Está disponible desde iOS 2.0 y provee los mecanismos para determinar la ubicación geográfica, la altitud y la orientación de un dispositivo (Apple Inc., 2026b). Dado que el presente trabajo se concentra en la versión iOS de la aplicación, la descripción detallada se centra en este framework.

El componente central del framework es la clase CLLocationManager. El desarrollador utiliza este objeto para iniciar, configurar y detener la entrega de eventos de ubicación hacia la aplicación. La clase da acceso a varias modalidades: actualizaciones de posición estándar y significativas, monitoreo de regiones geográficas y obtención de la orientación del dispositivo mediante la brújula integrada (Apple Inc., 2026b).

Antes de que una aplicación acceda a los datos de ubicación, el sistema operativo debe obtener el consentimiento del usuario. Este consentimiento se solicita mediante un diálogo de autorización que gestiona CLLocationManager. El usuario puede modificar esta decisión en cualquier momento desde la aplicación Configuración del dispositivo (Apple Inc., 2026b).

El framework define dos niveles principales de autorización a través del enumerador CLAuthorizationStatus. El primero, asociado a la clave NSLocationWhenInUseUsageDescription, restringe el acceso a la ubicación mientras la aplicación está activa en primer plano. El segundo, vinculado a NSLocationAlwaysAndWhenInUseUsageDescription, extiende el acceso a la ejecución en segundo plano (Apple Inc., 2026b).

Además, el enumerador CLAccuracyAuthorization establece si la aplicación recibe la ubicación con precisión completa o aproximada. Esta decisión también queda en manos del usuario (Apple Inc., 2026b).

La clase CLLocation encapsula la información de posición que reporta el sistema. Esta clase contiene los valores de latitud, longitud, altitud, rumbo y velocidad del dispositivo en cada instante (Apple Inc., 2026b).

La estructura CLLocationCoordinate2D representa las coordenadas geográficas. Esta estructura almacena la latitud y la longitud en el marco de referencia geodésico WGS 84 (World Geodetic System 1984). Se trata del mismo estándar internacional que utiliza el GPS, adoptado por CoreLocation como sistema de coordenadas nativo (Apple Inc., 2026b). Esta coincidencia de marcos de referencia garantiza la compatibilidad directa entre las coordenadas que reporta el dispositivo y las coordenadas de los puntos de interés del registro de montículos del módulo.

Para el monitoreo reactivo de los cambios de autorización y de las actualizaciones de posición, CoreLocation expone dos elementos adicionales. El primero es la estructura CLLocationUpdate, que contiene la información de ubicación de cada ciclo de actualización. El segundo es el actor CLMonitor, que permite observar condiciones configurables de forma asíncrona (Apple Inc., 2026b).

Dos propiedades de CLLocationManager resultaron relevantes para el diseño del módulo GPS: desiredAccuracy y distanceFilter. La primera permite especificar el nivel de precisión de las actualizaciones de ubicación. Este nivel determina qué fuentes de hardware activa el sistema operativo. La solicitud de alta precisión activa el receptor GPS del dispositivo. Los niveles menores se satisfacen con Wi-Fi o señal celular, con un menor consumo energético (Apple Inc., 2026b).

La segunda propiedad establece el desplazamiento mínimo, en metros, que debe producirse antes de que el sistema notifique una nueva actualización a la aplicación. De esta forma, se evita el procesamiento innecesario cuando el dispositivo permanece estático (Apple Inc., 2026b).

En ArTourKaminaljuyú, la clase LocationService configuró estas propiedades con prioridad en la precisión y la continuidad de las actualizaciones. Ambas resultaron indispensables para la detección de proximidad a los montículos con un umbral de 25 metros. Se estableció desiredAccuracy en kCLLocationAccuracyBestForNavigation y distanceFilter en kCLDistanceFilterNone. De este modo, el sistema entregó todas las actualizaciones de posición sin filtrarlas por desplazamiento. Esta decisión favoreció la fiabilidad de la navegación por encima del ahorro energético. El documento registró este punto como una de las limitaciones del módulo relativas al consumo de batería.

## 6.5 Calculo de distancias sobre la superficie terrestre

El GPS, y por extensión CoreLocation, opera sobre el sistema de coordenadas WGS 84 (World Geodetic System 1984). Este marco de referencia geodésico modela la forma de la Tierra como un elipsoide achatado en los polos. Además, define la latitud y la longitud como ángulos medidos desde el centro de dicho elipsoide (Kaplan y Hegarty, 2006).

Esta representación angular de la posición tiene una consecuencia práctica. La distancia entre dos puntos en coordenadas geográficas no se calcula con la fórmula de distancia euclidiana. Dicha fórmula opera sobre un plano cartesiano y no considera la curvatura de la superficie terrestre (Sinnott, 1984).

Varias formulaciones matemáticas resuelven este problema con distintos niveles de precisión y de complejidad computacional.

La aproximación equirectangular trata una porción pequeña de superficie terrestre como un plano cartesiano, con una corrección por el coseno de la latitud media. Es la más simple y la más rápida. Su error crece con la distancia y con la latitud. Resulta útil solo para distancias muy cortas o como aproximación inicial dentro de un cálculo más amplio.

La ley esférica de los cosenos calcula la distancia angular entre dos puntos a partir de las coordenadas geográficas. Opera sobre un modelo esférico de la Tierra. Su desventaja reside en la pérdida de precisión numérica cuando los puntos se encuentran muy cercanos entre sí, debido a que la función coseno aplana su variación cerca del cero.

La fórmula de Haversine resuelve el cálculo de la distancia de círculo mayor entre dos puntos sobre una esfera a partir de sus coordenadas de latitud y longitud. Sinnott (1984) la formalizó con base en identidades trigonométricas esféricas conocidas desde el siglo XIX. La expresión central de la fórmula calcula primero el valor haversine del ángulo central entre los dos puntos. Para ello aplica la identidad hav(θ) = sin²(θ/2), tanto a la diferencia de latitudes como a la diferencia de longitudes ponderada por el coseno de las latitudes. Después aplica la función arcoseno para recuperar el ángulo central. Por último, multiplica ese ángulo por el radio de la Tierra para obtener la distancia en metros (Sinnott, 1984). Su principal ventaja es la estabilidad numérica para distancias cortas, donde la ley de los cosenos pierde precisión.

La fórmula de Vincenty opera sobre el elipsoide completo y ofrece mayor precisión geodésica. Resulta la opción recomendada cuando se requiere exactitud centimétrica sobre distancias de miles de kilómetros. Su contrapartida es la complejidad del cálculo iterativo y una posible falta de convergencia para puntos casi antípodas.

El método de Bowring y otras aproximaciones elipsoidales ofrecen alternativas intermedias entre Haversine y Vincenty. Resultan menos conocidas en el desarrollo de software móvil, pero están disponibles en bibliotecas geodésicas especializadas.

Para distancias de decenas o pocos cientos de metros, como las que separan los montículos del Parque Arqueológico Kaminaljuyú, la fórmula de Haversine representa un equilibrio adecuado entre precisión y simplicidad computacional. Estas características la hacen idónea para dispositivos móviles.

El cálculo del rumbo (bearing) entre dos puntos geográficos complementa el cálculo de distancia. Los sistemas de navegación que orientan al usuario hacia el siguiente destino también lo requieren. El rumbo se define como el ángulo medido en sentido horario desde el norte verdadero hasta la dirección que une el punto de origen con el de destino. Se expresa en grados, dentro del rango [0°, 360°].

Su cálculo sobre la esfera utiliza la función trigonométrica atan2. Esta función recibe dos argumentos: el seno de la diferencia de longitudes ponderado por el coseno de la latitud de destino, y una expresión que combina los cosenos y senos de ambas latitudes. La función devuelve el ángulo en el cuadrante correcto, sin ambigüedad (Sinnott, 1984).

En el módulo GPS de ArTourKaminaljuyú, la clase GeoUtils.swift implementó tanto la distancia Haversine como el cálculo de bearing. Los componentes ProximityService, TourManager y RouteNavigator consumieron sus resultados para tomar decisiones de navegación en tiempo real.

## 6.6 Geofencing y detección de proximidad

El término geofencing designa la técnica mediante la cual un sistema de software define perímetros virtuales sobre el espacio geográfico real. El sistema genera eventos programáticos cuando un dispositivo móvil cruza dichos límites, al entrar o al salir de la zona delimitada (Apple Inc., 2026b).

Una geocerca (geofence) es una región geográfica abstracta anclada a unas coordenadas centrales y definida por un radio de alcance. Dentro de esa región, el sistema monitorea de forma continua la posición del dispositivo para determinar su relación espacial con el perímetro (Apple Inc., 2026b).

Esta técnica constituye el mecanismo fundamental por el cual las aplicaciones de navegación y los servicios basados en localización reaccionan a la posición física del usuario sin interacción manual. De este modo, habilita comportamientos como la activación de contenido contextual, el avance en un recorrido guiado o la notificación de llegada a un punto de interés.

La detección de proximidad admite varias implementaciones. Cada una presenta ventajas y limitaciones distintas.

El geofencing nativo basado en GPS es el enfoque descrito al inicio de esta sección. iOS lo expone a través de CLRegion y CLCircularRegion dentro de CoreLocation. Android lo expone a través de la Geofencing API dentro de los Google Play Services. El sistema operativo monitorea las regiones a bajo nivel y notifica a la aplicación los eventos de entrada y salida. Sus limitaciones principales incluyen un tope en el número de regiones simultáneas por aplicación, un radio mínimo impuesto por el hardware y la falta de personalización del algoritmo de evaluación (Apple Inc., 2026b).

El cálculo manual de distancia constituye una alternativa. En este enfoque, la aplicación recibe las actualizaciones de posición y calcula de forma explícita la distancia hacia cada punto de interés. Al cruzar un umbral configurado, dispara el evento correspondiente. Este enfoque elimina las restricciones del geofencing nativo, pero traslada a la aplicación la responsabilidad de ejecutar el cálculo en cada actualización.

Los beacons BLE habilitan la detección de proximidad en espacios donde el GPS no alcanza la precisión requerida. Cada beacon se asocia a un punto de interés. El dispositivo móvil detecta su presencia y estima la distancia a partir del RSSI. Esta técnica resulta robusta en interiores y en espacios con alta densidad de obstáculos. Requiere, en cambio, la instalación y el mantenimiento de hardware físico en cada punto.

Las etiquetas NFC permiten que el visitante registre activamente su llegada a cada punto. El visitante acerca su dispositivo a la etiqueta y la aplicación recibe el identificador del punto. Esta técnica tiene la ventaja de que no depende de la precisión del GPS. Sus desventajas son la necesidad de infraestructura física, su vulnerabilidad al deterioro ambiental y la carga cognitiva que impone al visitante al exigirle una acción manual en cada parada.

El reconocimiento visual mediante ARKit o ARCore permite detectar la cercanía a un punto cuando la cámara apunta a una referencia visual conocida. Este enfoque resulta útil para la activación de contenido de realidad aumentada, pero no sustituye al sistema de navegación general entre puntos.

Para el módulo GPS de ArTourKaminaljuyú, el cálculo manual de distancia ofreció ventajas concretas frente al geofencing nativo. La clase ProximityService materializó este enfoque, con el apoyo de TourManager para el avance de la ruta guiada. En cada actualización de CLLocationManager, el servicio evaluó si la distancia calculada hacia el montículo objetivo fue menor o igual al umbral configurado de 25 metros. En ese momento, se disparó el evento de llegada correspondiente.

La elección de este diseño frente al geofencing nativo respondió a tres ventajas concretas:

- Eliminó la limitación en el número de regiones simultáneas. Así, el módulo gestionó los once puntos de interés del parque sin restricciones del sistema operativo.
- Otorgó control total sobre el umbral de proximidad. Este umbral se ajustó según las características físicas del terreno y la separación real entre montículos.
- Permitió integrar la lógica de detección en el flujo reactivo del módulo mediante publicadores Combine. De esta forma, conservó una arquitectura coherente y desacoplada.

El umbral de 25 metros no fue arbitrario. Respondió a la intersección entre la precisión típica del GPS civil en exteriores y las dimensiones físicas de los montículos del parque. La mayoría de estos montículos presentaron bases de extensión superior a ese radio. Un umbral menor habría aumentado el riesgo de falsos negativos por la variabilidad del GPS. Un umbral mayor habría disparado el evento de llegada antes de que el visitante tuviera visibilidad directa del montículo. En ese caso, se habría degradado la coherencia entre la experiencia física y la respuesta del módulo AR.

Esta calibración ilustró cómo las decisiones de implementación del módulo GPS se fundamentaron en los principios teóricos del posicionamiento satelital y en las condiciones del entorno arqueológico donde operó la aplicación.

Además del umbral de llegada, el módulo GPS incorporó una compensación explícita del ruido de la señal para las decisiones de disparo por cercanía. La distancia cruda calculada rara vez descendió por debajo del nivel de incertidumbre del propio receptor. Por ejemplo, al permanecer sobre el punto objetivo con una precisión reportada de 10 metros, la distancia medida osciló alrededor de esa magnitud. Por ello, la función compensatedDistance de GeoUtils restó de la distancia calculada la precisión horizontal (horizontalAccuracy) que CoreLocation reportó en cada lectura. Este valor se acotó a un tope máximo de 10 metros para evitar sobrecompensaciones.

De este modo, la distancia efectiva reflejó con mayor fidelidad la cercanía física real del visitante al montículo. Así, los disparos de contenido ocurrieron a la distancia esperada y no cuando el usuario ya se encontraba sobre el punto. La interfaz pública del módulo expuso esta distancia compensada junto con la precisión horizontal instantánea. Los componentes consumidores tomaron sus decisiones de activación sobre una medida ya saneada del ruido del GPS. Entre estos componentes se encontraron la presentación de los modelos 3D en realidad aumentada y la guía virtual en video.

## 6.7 SDKs de visualización cartográfica

Un SDK de cartografía es una biblioteca que provee a una aplicación los componentes necesarios para mostrar un mapa interactivo, dibujar elementos sobre él y responder a la interacción del usuario. En el ecosistema iOS, existen varias alternativas consolidadas.

Apple MapKit es el framework de cartografía nativo del sistema operativo. Está disponible sin costo adicional y se integra de forma directa con el resto de las APIs de Apple. Provee los mapas de la propia infraestructura cartográfica de Apple. Su limitación principal reside en la cobertura y el nivel de detalle, que resultan más uniformes en ciertas regiones del mundo que en otras. En Guatemala, el detalle urbano y de puntos de interés puede ser menor que el de otros proveedores.

Google Maps SDK para iOS es la biblioteca de desarrollo de Google que integra la infraestructura cartográfica de Google Maps dentro de aplicaciones nativas para la plataforma Apple. El SDK da al desarrollador acceso programático a la visualización de mapas, la colocación de marcadores, el trazado de rutas y el control de la cámara del mapa (Google LLC, 2026). Sus principales ventajas son la cobertura global, el nivel de detalle de la cartografía urbana en Guatemala y la familiaridad del usuario promedio con su interfaz. La contrapartida es un modelo de facturación basado en uso, con un cupo gratuito mensual y cargos por carga adicional.

Mapbox es un proveedor independiente de infraestructura cartográfica basada en datos de OpenStreetMap. Ofrece SDKs para iOS y Android con alta capacidad de personalización visual. Permite al desarrollador diseñar el aspecto del mapa (colores, tipografías, densidad de información) con detalle. Su modelo de facturación también se basa en uso, con cupo gratuito mensual.

Las bibliotecas basadas directamente en OpenStreetMap (OSM) representan la opción abierta y sin costo de licencia. OSM es un proyecto colaborativo que mantiene una base de datos cartográfica libre. Bibliotecas como MapLibre GL Native permiten renderizar sus datos en aplicaciones móviles. Su cobertura y nivel de detalle dependen de las contribuciones de la comunidad en cada región.

Para ArTourKaminaljuyú, Google Maps SDK ofreció el nivel de detalle requerido para la zona 7 de la Ciudad de Guatemala, con la familiaridad de la interfaz para el visitante promedio. Esta familiaridad reduce la curva de aprendizaje de la aplicación.

El componente central del SDK es GMSMapView, una vista especializada que encapsula la lógica de renderizado cartográfico. Esta vista se configura mediante la clase GMSMapViewOptions. Las versiones modernas del SDK adoptaron este patrón para separar la configuración inicial de la instanciación del objeto (Google LLC, 2026).

La vista se integró en aplicaciones SwiftUI mediante el patrón UIViewRepresentable. Este patrón actuó como puente entre el sistema de vistas imperativo de UIKit, sobre el que opera el SDK, y el paradigma declarativo de SwiftUI. En el módulo GPS de ArTourKaminaljuyú, la clase MapViewRepresentable implementó esta integración.

La representación de elementos sobre el mapa se realizó a través de objetos superpuestos, denominados overlays. Los marcadores se implementaron mediante la clase GMSMarker. Permitieron señalizar posiciones geográficas sobre el mapa mediante la asociación de una coordenada CLLocationCoordinate2D con un ícono visual configurable en color, imagen y tamaño (Google LLC, 2026). Las polilíneas se implementaron mediante GMSPolyline. Trazaron trayectorias sobre el mapa a partir de secuencias de coordenadas geográficas unidas por segmentos continuos, con color y grosor personalizables. Este fue el mecanismo utilizado para visualizar la ruta de recorrido entre los montículos del parque (Google LLC, 2026).

En el módulo GPS de ArTourKaminaljuyú, los marcadores se diferenciaron según su función. La posición del usuario se representó con una flecha direccional, que rotó según el rumbo del dispositivo. El punto de partida se representó con un marcador de bandera verde. Cada punto de interés se representó con un marcador rojo, de mayor tamaño para los montículos con un modelo 3D asociado. El POI objetivo del recorrido se resaltó con un color dorado para facilitar la orientación visual del visitante.

El control de la cámara del mapa abarcó el encuadre y el nivel de zoom de la vista cartográfica. Se gestionó a través de la clase GMSCameraPosition, que define la posición central del mapa, el nivel de zoom y la orientación. La clase GMSCameraUpdate aplicó estos valores para producir transiciones animadas o instantáneas (Google LLC, 2026). Esta capacidad resultó importante en el módulo GPS. La vista del mapa debió recentrarse sobre la posición del visitante conforme este avanzó por el parque. De esta forma, el recorrido visualizado permaneció siempre dentro del encuadre visible.

La integración del SDK en el proyecto se realizó mediante CocoaPods, el gestor de dependencias de ArTourKaminaljuyú. La dependencia GoogleMaps se declaró en el Podfile del proyecto. La distribución del SDK a través de CocoaPods incluyó los frameworks necesarios para el renderizado cartográfico, el acceso a los tiles de mapa de Google y la gestión de la clave API. Esta clave se inyectó en el punto de entrada de la aplicación mediante GMSServices.provideAPIKey() (Google LLC, 2026). La gestión segura de esta clave se realizó a través de un archivo .xcconfig excluido del repositorio Git. Este mecanismo evitó la exposición de credenciales en el control de versiones. La sección metodológica correspondiente lo detalla.

## 6.8 Patrones y frameworks de programación asincrónica

El manejo de operaciones asíncronas constituye una necesidad central en el desarrollo de aplicaciones móviles. Las actualizaciones de posición GPS, las respuestas de red y los cambios de estado del usuario ocurren fuera del hilo principal. La aplicación debe recibirlos y propagarlos a los componentes interesados sin bloquear la interfaz.

El ecosistema de desarrollo iOS ha incorporado varios enfoques a lo largo de su evolución.

El patrón delegado (delegate) es el enfoque histórico de Cocoa. Un objeto declara un protocolo con los métodos que notificará a su delegado. El objeto consumidor adopta el protocolo y recibe las notificaciones. Es simple y expresivo para una única relación cliente-servidor, pero se vuelve pesado cuando varios componentes necesitan reaccionar al mismo evento.

Los closures y los completion handlers permiten pasar una función como argumento al punto donde se ejecutará. Son adecuados para operaciones puntuales que terminan con un único resultado. Su limitación aparece cuando se encadenan varias operaciones asíncronas, lo que puede derivar en estructuras conocidas como callback hell.

NotificationCenter ofrece un mecanismo de publicación y suscripción basado en nombres de notificación. Cualquier componente puede emitir una notificación con información asociada y cualquier componente puede suscribirse a notificaciones con un nombre específico. Su desventaja reside en la falta de tipado estático. El sistema no verifica en tiempo de compilación que el emisor y el suscriptor compartan la misma estructura de datos.

RxSwift es la implementación para Swift de ReactiveX, una iniciativa de código abierto que trajo a varios lenguajes el paradigma de programación reactiva. Introdujo en el ecosistema iOS las abstracciones de Observable, Observer y operadores de transformación. Su contrapartida son el peso de la biblioteca externa y la curva de aprendizaje asociada.

El modelo de concurrencia nativo de Swift, basado en async/await, se incorporó al lenguaje en Swift 5.5. Permite escribir código asíncrono con la estructura de código síncrono. Introduce los conceptos de actor para la protección de estado compartido y de tarea estructurada para la coordinación de operaciones concurrentes. Es la dirección actual del lenguaje para la mayoría de los casos de concurrencia puntual.

La programación reactiva es un paradigma de desarrollo de software. Se orienta al manejo de flujos de datos asíncronos y a la propagación automática de cambios a través de una cadena de componentes interesados en dichos datos (Apple Inc., 2026a). En el modelo imperativo tradicional, el código consulta el estado de una fuente de datos en momentos determinados. El modelo reactivo invierte esta relación. Los componentes se suscriben a las fuentes de eventos y reciben notificaciones automáticas cada vez que la fuente emite un nuevo valor, sin consultas periódicas (Apple Inc., 2026a). Este paradigma resulta adecuado para las aplicaciones móviles en las que múltiples fuentes de eventos asíncronos deben coordinarse sin bloquear el hilo principal de la interfaz de usuario. Entre esas fuentes se encontraron las actualizaciones de posición GPS, los cambios de estado del tour y las detecciones de proximidad.

El framework Combine, introducido por Apple en iOS 13, es la implementación nativa de este paradigma para la plataforma Apple. Provee una API unificada basada en tres conceptos fundamentales: el publicador (Publisher), el suscriptor (Subscriber) y los operadores (Operators) (Apple Inc., 2026a). Un publicador es un tipo que emite una secuencia de valores a lo largo del tiempo. De forma opcional, termina con un evento de completado o con un error. Un suscriptor es un tipo que se registra en el publicador para recibir y procesar esos valores. Los operadores son métodos que se encadenan entre el publicador y el suscriptor. Transforman, filtran, combinan o controlan el flujo de valores antes de que lleguen al destinatario final (Apple Inc., 2026a).

Combine es el equivalente, en el ecosistema Apple, de frameworks como RxJava o RxKotlin de la plataforma Android. Su ventaja frente a RxSwift es la integración nativa en el sistema operativo y el aprovechamiento del sistema de tipos de Swift. Combine y async/await no son excluyentes. El primero resulta adecuado para la propagación de cambios de estado a través de cadenas de componentes, en especial cuando se integra con SwiftUI. El segundo encaja mejor en operaciones de un único resultado o en flujos de control secuencial. En la práctica, un mismo proyecto suele emplear ambos según la naturaleza de cada caso.

En el módulo GPS de ArTourKaminaljuyú, Combine cumplió un rol central en la arquitectura de comunicación entre componentes. La clase GPSModuleInterface se implementó como ObservableObject. Expuso nueve propiedades @Published que el módulo AR pudo observar desde SwiftUI. Estas propiedades reflejaron en la interfaz el estado actual del tour, la posición del usuario y el progreso del recorrido (Apple Inc., 2026a). El wrapper de propiedad @Published es un publicador que emite el nuevo valor cada vez que la propiedad cambia. Así, elimina la necesidad de notificaciones manuales entre capas.

Además, GPSModuleInterface expuso tres publicadores:

- poiArrivedPublisher: emitió el montículo alcanzado cuando TourManager detectó la llegada al POI de la ruta guiada.
- tourCompletedPublisher: señalizó la finalización del recorrido completo.
- proximityArrivedPublisher: emitió el montículo que ProximityService detectó durante la exploración por cercanía.

Estos publicadores constituyeron la interfaz reactiva por la cual el módulo AR se suscribió a los eventos de navegación del módulo GPS, sin acoplar sus implementaciones.

## 6.9 Lenguajes y frameworks de interfaz para iOS

El desarrollo nativo para iOS admite distintas combinaciones de lenguaje y framework de interfaz. Cada combinación corresponde a una etapa en la evolución de la plataforma.

Objective-C es el lenguaje histórico de la plataforma. Su framework de interfaz asociado es UIKit, que opera bajo un paradigma imperativo. El desarrollador programa cada modificación visual de la vista de forma explícita, en respuesta a los eventos del sistema. Este modelo ofrece control fino sobre el comportamiento de la interfaz, pero exige mantener de forma manual la coherencia entre el estado de la aplicación y la representación visual.

Swift es el lenguaje de programación de propósito general que Apple desarrolló para construir aplicaciones en sus plataformas. Su diseño enfatiza la seguridad de tipos, el rendimiento de ejecución y la expresividad sintáctica (Apple Inc., 2026c). A diferencia de su predecesor Objective-C, Swift es un lenguaje compilado y de tipado estático. Incorpora inferencia de tipos y manejo seguro de valores opcionales mediante el tipo Optional. También incluye un sistema de protocolos que permite definir contratos de comportamiento desacoplados de la jerarquía de herencia. Este patrón se conoce como programación orientada a protocolos (Apple Inc., 2026c).

SwiftUI es el framework de construcción de interfaces de usuario que Apple introdujo en iOS 13. Se basa en el paradigma declarativo: el desarrollador describe el estado deseado de la interfaz y el sistema calcula y aplica las actualizaciones necesarias para alcanzarlo. En contraste, el enfoque imperativo de UIKit exige programar cada modificación visual (Apple Inc., 2026d).

La combinación Swift + SwiftUI representa la dirección actual del desarrollo iOS. UIKit sigue presente para funcionalidades que SwiftUI aún no cubre o para proyectos legados. SwiftUI puede incorporar vistas de UIKit mediante los protocolos UIViewRepresentable y UIViewControllerRepresentable, lo que permite mezclar ambos enfoques dentro de una misma aplicación.

Estas características hicieron de Swift un lenguaje adecuado para el desarrollo de módulos con interfaces públicas bien definidas. Tal fue el caso de GPSModuleInterface. Un protocolo expresó su contrato hacia el módulo AR y garantizó los tipos y la disponibilidad de cada propiedad y publicador expuesto.

En SwiftUI, el protocolo ObservableObject es el mecanismo central que conecta el estado de la lógica de negocio con la interfaz. Este protocolo permite a una clase declarar propiedades observables mediante el wrapper @Published. Cuando una de estas propiedades cambia, SwiftUI invalida las vistas que dependen de ella y las reconstruye con el nuevo estado (Apple Inc., 2026d).

En ArTourKaminaljuyú, GPSModuleInterface implementó este protocolo y expuso las nueve propiedades @Published del módulo GPS. Entre ellas se encontraron la posición actual, el POI objetivo, la distancia al siguiente montículo y el estado del tour. De este modo, cualquier vista SwiftUI del módulo AR que las observara se actualizó en tiempo real, sin lógica de refresco manual.

El protocolo App gobierna el ciclo de vida de una aplicación SwiftUI y define su punto de entrada. La estructura Scene representa la ventana principal de contenido (Apple Inc., 2026d). En ArTourKaminaljuyú, el archivo ArTourKaminaljuyuApp.swift implementó este protocolo. También fue el punto donde se inicializó el Google Maps SDK mediante GMSServices.provideAPIKey(), antes de construir cualquier vista.

La instancia compartida de GPSModuleInterface se inyectó en el árbol de vistas mediante el contenedor de dependencias AppContainer y el modificador .environmentObject, en el punto de entrada de la aplicación. Las vistas la consumieron con el wrapper @EnvironmentObject. Al tratarse de una única instancia creada por el contenedor, su referencia se mantuvo estable a través de las reconstrucciones del árbol de vistas. Así, el estado del módulo GPS conservó su coherencia durante toda la sesión de uso.

## 6.10 Gestión de dependencias en proyectos iOS

La mayoría de los proyectos incorporan bibliotecas de terceros que proveen funcionalidades específicas. Así evitan reimplementar soluciones ya existentes y probadas. Un gestor de dependencias es una herramienta que automatiza la descarga, la instalación, la actualización y la vinculación de estas bibliotecas dentro del proyecto. De esta forma, garantiza que las versiones utilizadas sean compatibles entre sí y reproducibles en cualquier entorno de desarrollo del equipo.

Sin un gestor de dependencias, la incorporación manual de bibliotecas en Xcode exige configurar las rutas de búsqueda de encabezados, los frameworks, las fases de compilación y los linker flags. Este proceso es propenso a errores y difícil de mantener consistente entre los miembros de un equipo.

El ecosistema iOS ofrece varias opciones consolidadas. Carthage adopta una filosofía minimalista. Compila las dependencias en frameworks binarios y deja al desarrollador la tarea de vincularlos manualmente al proyecto. Esta separación mantiene el proyecto de Xcode con menos modificaciones, pero traslada parte del trabajo al desarrollador.

CocoaPods es el gestor de dependencias de referencia histórico para proyectos Swift y Objective-C en el ecosistema Apple. Su repositorio central ofrece más de cien mil bibliotecas (CocoaPods Org., 2026). Su funcionamiento se basa en un archivo de configuración denominado Podfile, ubicado en la raíz del proyecto. En este archivo, el desarrollador declara las dependencias requeridas. Para cada biblioteca indica su nombre y, de forma opcional, su versión o rango de versiones aceptables.

Al ejecutar el comando pod install, CocoaPods resuelve el grafo de dependencias, descarga las bibliotecas necesarias y genera un archivo Podfile.lock. Este archivo congela las versiones exactas instaladas. Así, todos los miembros del equipo trabajan con las mismas versiones (CocoaPods Org., 2026). Como resultado, CocoaPods genera un workspace de Xcode que reemplaza al archivo .xcodeproj original. Este workspace contiene el proyecto principal y un proyecto auxiliar denominado Pods, encargado de compilar todas las dependencias declaradas.

Swift Package Manager (SPM) es la alternativa nativa de Apple, incorporada al propio Xcode. Permite declarar y resolver dependencias sin herramientas externas. Su integración se realiza desde la interfaz gráfica de Xcode o mediante un archivo Package.swift. SPM es la dirección oficial recomendada para proyectos nuevos. Su limitación histórica ha sido la compatibilidad con bibliotecas distribuidas únicamente a través de otros gestores.

En ArTourKaminaljuyú, CocoaPods fue el gestor seleccionado para integrar el Google Maps SDK. Al momento del desarrollo, dicho SDK requirió CocoaPods como método de distribución oficial para iOS. Esta fue una condición del proveedor y no una decisión del equipo. SPM no fue compatible con la versión del Google Maps SDK utilizada en el proyecto (CocoaPods Org., 2026).

El Podfile del proyecto declaró la dependencia GoogleMaps bajo el identificador de destino de la aplicación. El archivo Podfile.lock generado quedó registrado en el repositorio Git del proyecto, en GitHub. De esta forma, se garantizó la reproducibilidad del entorno de compilación entre los integrantes del equipo.

# VII. METODOLOGÍA

## 7.1 Enfoque de la investigación

El presente trabajo adoptó un enfoque de investigación aplicada. Este tipo de investigación se orienta a resolver un problema concreto mediante el desarrollo de un artefacto tecnológico, en lugar de generar conocimiento teórico nuevo. El problema concreto que motivó el proyecto fue la limitación interpretativa del Parque Arqueológico Kaminaljuyú para el visitante no especializado. El artefacto tecnológico resultante fue el módulo de GPS y navegación de la aplicación móvil ArTourKaminaljuyú.

La validación del artefacto adoptó un enfoque cuantitativo basado en la percepción del usuario final. Un conjunto de participantes utilizó la aplicación en un entorno controlado y respondió un instrumento estructurado. Las respuestas se procesaron mediante estadística descriptiva. Este enfoque evaluó directamente las dimensiones del módulo que impactan la experiencia del visitante: la coincidencia entre la ubicación mostrada y la real, la utilidad de la guía de navegación, la fiabilidad de la detección de llegada y la claridad de la representación cartográfica.

## 7.2 Metodología de desarrollo

El desarrollo del módulo siguió una metodología iterativa e incremental organizada en ocho fases secuenciales. Cada fase produjo un incremento funcional del módulo, con una capacidad verificable al terminar su ejecución. Las fases posteriores reutilizaron y extendieron los componentes construidos en las fases anteriores. Esta estrategia permitió validar de forma temprana las decisiones de diseño antes de añadir capas de complejidad.

El proyecto formó parte de un desarrollo coordinado entre varios integrantes del equipo. Cada integrante asumió la responsabilidad de un módulo distinto de la aplicación. Esta organización exigió definir con anticipación el contrato de interfaz entre el módulo de GPS y el módulo de realidad aumentada. El contrato quedó formalizado en la clase GPSModuleInterface, cuya implementación se completó en la séptima fase. La definición temprana del contrato permitió que ambos módulos avanzaran en paralelo sin bloquearse de forma mutua.

## 7.3 Selección y justificación de tecnologías

La selección de tecnologías se apoyó en el panorama de alternativas descrito en el marco teórico. Cada decisión obedeció a un criterio concreto derivado de los requisitos del proyecto y de las limitaciones del entorno de operación.

La plataforma de desarrollo seleccionada fue iOS nativo. Esta decisión respondió al requisito de integrar realidad aumentada con rendimiento fluido y acceso continuo a los sensores del dispositivo. Las alternativas multiplataforma consideradas no ofrecieron esta integración directa.

El lenguaje seleccionado fue Swift con el framework de interfaz SwiftUI. Esta combinación representa la dirección actual del desarrollo iOS. SwiftUI permite describir la interfaz de forma declarativa y se integra de manera natural con Combine, el framework reactivo utilizado para la propagación de estado del módulo.

El framework de geolocalización seleccionado fue CoreLocation. Es la API nativa de iOS para el acceso a los servicios de ubicación. Expone las abstracciones necesarias para la configuración de precisión, la gestión de permisos y la recepción de actualizaciones de posición en tiempo real.

El algoritmo de cálculo de distancias seleccionado fue la fórmula de Haversine. Las alternativas evaluadas en el marco teórico ofrecieron o bien menor precisión en distancias cortas (aproximación equirectangular, ley esférica de los cosenos) o bien mayor complejidad computacional sin un beneficio proporcional de precisión (Vincenty, Bowring). La separación típica entre los montículos del Parque Arqueológico Kaminaljuyú es de decenas de metros, un rango en el cual Haversine ofrece el equilibrio adecuado entre precisión y simplicidad.

La técnica de detección de proximidad seleccionada fue el cálculo manual de distancia. Las alternativas basadas en infraestructura física, como los beacons BLE y las etiquetas NFC, habrían requerido desplegar y mantener hardware dentro del parque. El geofencing nativo de CoreLocation habría impuesto limitaciones en el número de regiones simultáneas y en el radio mínimo configurable. El cálculo manual eliminó estas restricciones y permitió integrar la lógica de detección de forma natural dentro del flujo reactivo del módulo.

El SDK de visualización cartográfica seleccionado fue Google Maps SDK para iOS. La cobertura y el nivel de detalle de la cartografía urbana en Guatemala, junto con la familiaridad del visitante promedio con la interfaz, justificaron la elección frente a MapKit, Mapbox y las bibliotecas basadas en OpenStreetMap.

El framework de programación asíncrona seleccionado fue Combine. Su integración nativa con SwiftUI y su encaje con el patrón publicador-suscriptor adoptado para la comunicación entre módulos lo situaron por encima de las alternativas basadas en delegados, closures o bibliotecas externas como RxSwift.

El gestor de dependencias seleccionado fue CocoaPods. Esta elección obedeció a una restricción externa. En el momento del desarrollo, el Google Maps SDK para iOS se distribuyó únicamente a través de CocoaPods. Esta condición excluyó a Swift Package Manager como alternativa viable para el proyecto.

## 7.4 Herramientas de desarrollo

El trabajo utilizó un conjunto limitado y consolidado de herramientas, con el fin de minimizar la fricción operativa y concentrar el esfuerzo en el desarrollo del módulo.

Xcode funcionó como entorno de desarrollo integrado, compilador y depurador. CocoaPods actuó como gestor de dependencias para la integración del Google Maps SDK. Git funcionó como sistema de control de versiones, con GitHub como plataforma remota de colaboración y respaldo. Los dispositivos iPhone de los integrantes del equipo se utilizaron tanto para las pruebas durante el desarrollo como para las pruebas de usuario finales.

La seguridad de las credenciales de acceso a las API se gestionó mediante archivos de configuración de Xcode excluidos del control de versiones. Esta práctica evitó la exposición de claves sensibles en los repositorios compartidos.

## 7.5 Técnicas de validación

La validación del módulo se diseñó para evaluar su funcionamiento desde la perspectiva del visitante final. El objetivo específico de validación del proyecto estableció comprobar que los servicios de geolocalización, representación visual, cálculos de proximidad y comunicación con el módulo de realidad aumentada operaran correctamente mediante pruebas de usuario en dispositivo físico. En consecuencia, la validación se diseñó alrededor de las dimensiones del módulo que el visitante percibe de forma directa durante el uso de la aplicación.

Las pruebas se ejecutaron en el campus de la Universidad del Valle de Guatemala, donde se habilitó un recorrido de prueba equivalente en estructura al recorrido real del parque. Esta elección obedeció a la viabilidad logística de convocar a un número representativo de participantes dentro del tiempo del proyecto. La validación en el sitio arqueológico se consideró parte del trabajo futuro.

Un total de 101 personas participó en las pruebas. Cada participante completó el recorrido en realidad aumentada en un dispositivo iOS y, al finalizar, respondió un instrumento de evaluación de la experiencia de uso. El instrumento utilizó una escala de Likert de cinco niveles, con los valores del uno al cinco asociados a los grados “Totalmente en desacuerdo”, “En desacuerdo”, “Neutral”, “De acuerdo” y “Totalmente de acuerdo”.

Cuatro afirmaciones del instrumento correspondieron al módulo GPS. La primera evaluó la coincidencia entre la ubicación mostrada en la aplicación y la ubicación real del participante. La segunda evaluó la utilidad de la distancia y la dirección mostradas para llegar al siguiente montículo sin perderse. La tercera evaluó la fiabilidad de la detección automática de la llegada a cada montículo. La cuarta evaluó la utilidad del mapa para ubicar los montículos dentro del recorrido.

Las respuestas se procesaron mediante estadística descriptiva. Para cada afirmación se calcularon la media, la mediana, la moda, la desviación estándar y los porcentajes de respuestas favorables (valores 4 y 5), neutrales (valor 3) y desfavorables (valores 1 y 2). Estos indicadores permitieron evaluar el nivel de aceptación de cada dimensión del módulo y la dispersión de las valoraciones entre los participantes.

Para declarar validada cada dimensión del módulo se definieron dos criterios de aceptación. El primero exige un porcentaje de respuestas favorables (valores 4 y 5) igual o mayor al 80% sobre el total de participantes. El segundo exige una media aritmética igual o mayor a 4.0 sobre 5 en la escala Likert aplicada. Una dimensión se consideró validada solo cuando cumplió ambos criterios de forma simultánea. El umbral del 80% refleja un nivel amplio de acuerdo entre los participantes y el umbral de 4.0 corresponde al nivel “De acuerdo” de la escala utilizada.

## 7.6 Fases de desarrollo del módulo

El desarrollo del módulo se organizó en ocho fases secuenciales. La primera fase consistió en la configuración del entorno de desarrollo. El trabajo utilizó Xcode como entorno de desarrollo integrado y CocoaPods como gestor de dependencias. Con estas herramientas se integró la biblioteca Google Maps SDK para iOS, que proveyó las capacidades de visualización cartográfica de la aplicación. La seguridad de las credenciales de acceso a las API se gestionó mediante archivos de configuración de Xcode excluidos del control de versiones. Esta práctica de seguridad informática evitó la exposición de claves sensibles en los repositorios compartidos.

La segunda fase implementó el servicio de geolocalización en tiempo real mediante el framework CoreLocation del sistema operativo iOS. Se configuraron los permisos de acceso a la ubicación del dispositivo, tanto en el código como en los archivos de configuración de la aplicación, conforme a las políticas de privacidad de la plataforma Apple. Se desarrolló la clase LocationService, responsable de tres funciones. Primero, inicializó el gestor de ubicación del sistema. Segundo, se suscribió a las actualizaciones de posición GPS. Tercero, publicó la coordenada actual del usuario mediante el patrón reactivo Combine, propio del ecosistema Swift. Este enfoque permitió que otros componentes del módulo, y en su momento el módulo de realidad aumentada, consumieran la posición del usuario de forma desacoplada, sin depender directamente de la fuente de datos. Este servicio incorporó además filtros de calidad sobre las lecturas de ubicación. El servicio descartó las lecturas con precisión horizontal inválida o superior a 30 metros. También descartó las lecturas con una antigüedad mayor a cinco segundos. De este modo, solo las posiciones suficientemente fiables alimentaron la lógica de navegación.

La tercera fase diseñó y desarrolló los modelos de datos y el registro de puntos de interés del recorrido. Se definió la estructura POILocation, que encapsuló todos los atributos relevantes de cada montículo: identificador único, coordenadas geográficas, nombre, descripción histórica, período de construcción e imágenes asociadas. Posteriormente, se construyó el POIRegistry, un componente centralizado que almacenó las coordenadas precisas de los once puntos de interés conservados dentro del Parque Arqueológico Kaminaljuyú, obtenidas directamente en campo mediante dispositivos GPS. Este enfoque de separar el modelo de datos del resto de la lógica respondió al principio de diseño de responsabilidad única, propio de la ingeniería de software.

La cuarta fase implementó el núcleo matemático de navegación en la clase GeoUtils, que concentró los cálculos geoespaciales. Esta clase contuvo la implementación del algoritmo de Haversine. Dicho algoritmo calculó la distancia en metros entre dos coordenadas geográficas y consideró la curvatura de la superficie terrestre, con un radio medio de la Tierra de 6 371 000 metros. La clase también contuvo el cálculo de bearing. Este cálculo determinó el ángulo de dirección, en grados, entre la posición actual del usuario y un punto de destino. El resultado se normalizó para indicar si el destino se encontró a la izquierda o a la derecha del rumbo actual. Sobre estos cálculos se construyó ProximityService. En cada actualización de posición, este servicio evaluó si el visitante ingresó al radio de llegada definido para cada montículo.

La quinta fase desarrolló la capa de visualización cartográfica del módulo. Se implementó MapViewRepresentable, un componente que integró el visor de mapas de Google Maps SDK para iOS dentro del paradigma declarativo de SwiftUI mediante el protocolo UIViewRepresentable. Este componente permitió renderizar el mapa interactivo, posicionar los marcadores de cada montículo y trazar la polilínea de la ruta de recorrido. Además, se construyó RouteConfig, que definió los conectores entre cada par de montículos consecutivos. Con estos conectores, la ruta dibujada en pantalla siguió los caminos reales del parque en lugar de líneas rectas entre coordenadas.

La sexta fase implementó el servicio de proximidad avanzado mediante ProximityService. Este servicio integró el flujo de posición GPS con la lógica de detección para clasificar en tiempo real el nivel de cercanía del visitante respecto a cada punto de interés. Se definió el enumerado ProximityLevel con los estados far, visible, near y arrived. Con estos estados, la interfaz de usuario reaccionó de forma diferenciada según la distancia al punto de interés. El servicio calculó además una distancia efectiva que compensó el ruido del GPS. La función compensatedDistance de GeoUtils restó de la distancia cruda la precisión horizontal reportada por CoreLocation, acotada a un máximo de 10 metros. Esta medida saneada se expuso a los módulos consumidores para que sus disparos de contenido ocurrieran a la cercanía física esperada. Este servicio expuso un publicador arrivalPublisher, que emitió eventos cuando el visitante alcanzó el umbral de llegada a un montículo, conforme al patrón reactivo de Combine. Este enfoque desacopló por completo la detección de la presentación. Así, cualquier componente, incluido el módulo de realidad aumentada, pudo suscribirse a los eventos de llegada sin conocer los detalles de la lógica GPS.

La séptima fase desarrolló los componentes de gestión del recorrido guiado. RouteNavigator administró la secuencia de waypoints de la ruta completa. Este componente avanzó de forma automática al siguiente punto objetivo cuando el visitante entró dentro del umbral de llegada configurado. Además, expuso en todo momento la distancia al destino actual. Sobre este navegador se construyó TourManager, que gestionó el estado global del recorrido mediante el enumerado TourState, con los estados idle, navigatingToStart, navigatingToPOI, atPOI, returning y completed. Este componente coordinó el avance entre montículos, el regreso al punto de inicio al finalizar el tour y la emisión de notificaciones de estado hacia la capa de presentación. Por último, se desarrolló GPSModuleInterface como la fachada pública del módulo GPS. Esta fachada expuso solo los elementos que el módulo de realidad aumentada necesitó consumir: el publicador de llegada a los POI y el estado observable del recorrido. Esta interfaz constituyó el contrato formal entre ambos módulos del equipo de desarrollo. Su diseño aplicó el patrón Facade y principios de programación por contratos.

La octava fase ejecutó la validación del módulo mediante las técnicas descritas en la sección 7.5. Un grupo de 101 participantes completó el recorrido de prueba habilitado en el campus de la Universidad del Valle de Guatemala y respondió el instrumento de evaluación de la experiencia de uso. Los resultados se procesaron mediante estadística descriptiva y se analizaron a la luz de las decisiones de diseño adoptadas durante las fases anteriores. El análisis completo se presenta en la sección de resultados y discusión del presente trabajo.

# VIII. RESULTADOS Y DISCUSIÓN

## 8.1 Configuración del entorno de desarrollo

Como resultado de esta etapa se estableció la infraestructura técnica del módulo GPS. El proyecto se creó en Xcode, como entorno de desarrollo integrado. La gestión de dependencias externas se implementó mediante CocoaPods. A partir de un archivo Podfile declarativo, CocoaPods descarga las bibliotecas indicadas, resuelve sus dependencias transitivas y produce un archivo .xcworkspace. Este archivo reemplaza al .xcodeproj como punto de entrada del proyecto. La dependencia que el módulo consumió fue Google Maps SDK para iOS, que provee el componente de visualización cartográfica interactiva. Su clave de API se inyecta en el arranque de la aplicación mediante GMSServices.provideAPIKey().

La gestión segura de las credenciales se implementó mediante archivos .xcconfig. Este mecanismo nativo de Xcode separa las variables de compilación del código fuente. La clave de API se almacena en un archivo Secrets.xcconfig, excluido del control de versiones mediante .gitignore. Un archivo Secrets.xcconfig.example, con valores de marcador de posición, se mantiene en el repositorio como plantilla para los nuevos integrantes del equipo. En tiempo de ejecución, la clave se lee desde el diccionario Info.plist mediante Bundle.main.infoDictionary. De este modo, la cadena literal de la clave no aparece en ningún archivo rastreado por Git.

Este resultado evidencia la aplicación de buenas prácticas de seguridad informática y de reproducibilidad del entorno. El uso de CocoaPods, con su archivo Podfile.lock versionado, garantiza que todos los integrantes del equipo compilen con las mismas versiones de las bibliotecas. Por su parte, la externalización de la clave de API evita su exposición en el repositorio. Esta exposición constituye una de las fallas de seguridad más frecuentes en los proyectos móviles.

[IMG:figuras-tesis/image2.png]

Figura 1. Infraestructura del proyecto: Podfile y gestión segura de la clave de API.

Fuente: elaboración propia.

## 8.2 Implementación del servicio de geolocalización en tiempo real

Como resultado de esta etapa se implementó LocationService, un servicio de geolocalización centralizado. Este servicio encapsula la interacción con el framework nativo CoreLocation de iOS. El servicio implementa los protocolos ObservableObject y CLLocationManagerDelegate. De este modo, integra el patrón reactivo que permite a los componentes consumidores suscribirse de forma automática a los cambios de ubicación, sin consultas periódicas.

El componente central del servicio es una instancia privada de CLLocationManager. Esta instancia se configuró para priorizar la precisión y la continuidad de las actualizaciones. La precisión deseada se fijó en kCLLocationAccuracyBestForNavigation y el filtro de distancia en kCLDistanceFilterNone. De este modo, el sistema entrega todas las actualizaciones de posición sin filtrarlas por desplazamiento. Además, el tipo de actividad se configuró como .fitness y se desactivó la pausa automática de actualizaciones.

El servicio expone cuatro propiedades publicadas mediante @Published: currentLocation (CLLocation con la coordenada actual, su precisión y altitud), currentHeading (CLHeading con la orientación del dispositivo), authorizationStatus (estado de autorización de permisos) e isLocationReady (indicador booleano que se activa cuando la precisión horizontal del fix GPS es igual o mejor que 5 metros).

Como parte de este servicio se implementaron filtros de calidad sobre las lecturas de ubicación. El servicio descarta las lecturas con precisión horizontal inválida o peor que 30 metros. También descarta las lecturas con una antigüedad mayor a cinco segundos. Así, solo las posiciones suficientemente fiables alimentan la lógica de navegación. El flujo de permisos se delegó a la clase auxiliar LocationPermissionsHelper. Esta clase gestiona la solicitud de autorización de ubicación “mientras la app está en uso” (clave NSLocationWhenInUseUsageDescription), conforme a las directrices de privacidad de Apple.

La fiabilidad percibida de la geolocalización se evaluó mediante la pregunta 10 del instrumento. De los 101 participantes, el 93.1% respondió de forma favorable (75 respuestas de “5 = Totalmente de acuerdo” y 19 de “4 = De acuerdo”). Un 4.0% se mantuvo neutral y un 3.0% respondió de forma desfavorable. La media fue de 4.63 sobre 5, con una desviación estándar de 0.74.

Estos resultados indican que la configuración de máxima precisión del CLLocationManager, combinada con el descarte de lecturas poco fiables, produjo buenos resultados. La amplia mayoría de los participantes percibió la ubicación mostrada como coincidente con su posición real. La decisión de priorizar la precisión y la frecuencia sobre el ahorro energético se reflejó en esta valoración positiva. Esta decisión es coherente con la limitación de consumo de batería ya documentada. El pequeño porcentaje de respuestas neutrales o desfavorables concuerda con la variabilidad del GPS civil en exteriores descrita en el marco teórico (efecto multipath y cobertura arbórea). El módulo no puede eliminar esa variabilidad por completo.

La valoración perceptual anterior se complementó con una validación técnica mediante 15 corridas controladas de la aplicación instrumentada. En estas corridas, LocationService entregó un total de 4 201 lecturas de ubicación, de las cuales 4 197 se aceptaron y 4 se descartaron por el filtro de calidad (0.10%). Las cuatro lecturas descartadas correspondieron a la razón "low_accuracy" (precisión horizontal peor que 30 metros); no se registraron descartes por antigüedad ni por precisión inválida. Este resultado confirma que la configuración del servicio produjo un flujo continuo de posiciones utilizables, con una tasa de aceptación global del 99.90%.

En cuanto a la precisión horizontal reportada por CoreLocation, la media global fue de 4.97 m con una mediana de 4.75 m y un P90 también de 4.75 m. El valor de 4.75 m aparece de forma predominante porque iOS cuantiza horizontalAccuracy en escalones discretos. El 97.74% de las lecturas presentó una precisión igual o mejor que 5 metros, el 98.12% igual o mejor que 10 metros y el 99.90% igual o mejor que 30 metros. El valor peor registrado fue de 27.77 m, por debajo del umbral de descarte configurado. Estos valores confirman que la configuración kCLLocationAccuracyBestForNavigation entregó, en el contexto de prueba, una precisión acorde con los requerimientos del módulo.

[IMG:figuras-tesis/image3.png]

Figura 2. Configuración del CLLocationManager en LocationService y solicitud de permiso de ubicación.

Fuente: elaboración propia.

Figura 3. Distribución de respuestas a la pregunta 10 (coincidencia entre la ubicación mostrada y la real).

Fuente: elaboración propia a partir de la encuesta a usuarios.

[IMG:figuras-tesis/image4.png]

Figura 4. Distribución del error horizontal reportado por CoreLocation durante las corridas controladas (n = 4 201 lecturas).

Fuente: elaboración propia a partir de la instrumentación PerformanceLogger.

## 8.3 Modelos de datos y registro de puntos de interés

Como resultado de esta etapa se definieron los modelos de datos centrales del módulo y se construyó el catálogo de puntos de interés. La estructura POILocation se implementó como un struct de Swift que encapsula los atributos de cada montículo. Estos atributos son el identificador único (String), la coordenada geográfica (CLLocationCoordinate2D del framework CoreLocation), el nombre, el período de construcción y la información histórica. La estructura incluye también los metadatos de renderizado tridimensional que consume el módulo de realidad aumentada: la ruta al archivo del modelo 3D, la escala base, la altitud, la rotación base y los parámetros de animación de oscilación vertical. Por último, cada punto define su propio umbral de llegada.

El componente POIRegistry centraliza el catálogo. Lo expone mediante una propiedad que permite a los componentes consumidores acceder al conjunto completo o consultar un punto por identificador, sin acoplarse a los detalles de almacenamiento interno. De esta forma, aplica el principio de responsabilidad única. El diseño del recorrido contempla once puntos de interés del parque: ocho montículos numerados (3, 5, 6, 7, 8, 12, 13 y 14), la Acrópolis, La Palangana y el punto de inicio del tour.

La separación del catálogo de datos respecto de la lógica de navegación aportó una ventaja concreta. El cambio entre el recorrido de prueba y el recorrido real del parque se realizó con la sola modificación de los datos del registro, sin alterar los servicios de cálculo, proximidad o navegación. Esta característica confirma el beneficio de la arquitectura modular propuesta. El modelo de datos actúa como una fuente única de verdad, desacoplada de sus consumidores.

[IMG:figuras-tesis/image5.png]

Figura 5. Modelo de datos POILocation y catálogo POIRegistry.

Fuente: elaboración propia.

## 8.4 Implementación del núcleo matemático de navegación

Como resultado de esta etapa se implementó el núcleo matemático de navegación en la clase GeoUtils. Esta clase se estructuró como un enum sin casos (un patrón de Swift equivalente a una clase utilitaria no instanciable) y concentra los cálculos geoespaciales del módulo. La función distanceInMeters(from:to:) calcula la distancia en metros entre dos coordenadas mediante la fórmula de Haversine. Este cálculo emplea un radio terrestre de 6 371 000 metros para contemplar la curvatura de la superficie.

La función bearing(from:to:) calcula el ángulo azimutal entre dos coordenadas mediante la función atan2 y lo normaliza al rango [0°, 360°]. Por su parte, la función normalizeDeg180 expresa ese rumbo de forma relativa, para indicar si el destino se encuentra a la izquierda o a la derecha del usuario. La clase incorpora además la función compensatedDistance. Esta función resta de la distancia calculada la precisión horizontal reportada por CoreLocation (acotada a un máximo de 10 metros) para compensar el ruido del GPS. Su detalle se retoma en la etapa 6.

Sobre estas funciones se construyeron, en etapas posteriores, la detección de proximidad (ProximityService) y la navegación guiada (TourManager y RouteNavigator). Estos componentes consumen GeoUtils para todas sus decisiones de navegación en tiempo real. La elección de la fórmula de Haversine frente a alternativas más costosas, como Vincenty, resultó adecuada para las distancias cortas del recorrido. Esta fórmula ofreció una precisión suficiente con un bajo costo computacional, apropiado para la ejecución continua en un dispositivo móvil. La validación de usuario de la distancia y la dirección mostradas se presenta en la etapa 7, donde estos cálculos se integran en la guía de navegación.

La idoneidad de esta elección se corroboró de forma empírica mediante la instrumentación. Durante las 15 corridas controladas se midió el tiempo de cómputo del cálculo Haversine aplicado a los once puntos de interés del catálogo en cada actualización de posición. La latencia media fue de 0.0103 milisegundos por actualización, con un máximo global de 0.4258 milisegundos. Estos valores sitúan el costo del núcleo matemático en el orden de los microsegundos. En consecuencia, el módulo puede ejecutar el cálculo en cada actualización de ubicación (aproximadamente una vez por segundo) sin generar impacto perceptible en el hilo principal ni en la fluidez de la interfaz.

[IMG:figuras-tesis/image6.png]

Figura 6. Implementación de la fórmula de Haversine y del cálculo de rumbo en GeoUtils.

Fuente: elaboración propia.

## 8.5 Desarrollo de la capa de visualización cartográfica

Como resultado de esta etapa se implementaron los componentes responsables de la representación visual del recorrido sobre el mapa interactivo. El componente RouteConfig define la secuencia de navegación mediante la lista ordenada de puntos de interés y un conjunto de coordenadas intermedias denominadas conectores. Estos conectores representan los tramos del camino real del parque entre cada par de montículos consecutivos. La constante routeConnectorsEnabled los activa o desactiva según el recorrido activo sea el del parque o el de prueba. De este modo, la polilínea dibujada sigue el camino físico real en lugar de trazarse en línea recta entre coordenadas.

El componente de mayor complejidad de esta etapa es MapViewRepresentable. Este componente implementa el protocolo UIViewRepresentable de SwiftUI para integrar el Google Maps SDK dentro del ecosistema declarativo de la aplicación. Su método makeUIView instancia la vista del mapa una sola vez, posiciona la cámara inicial con un nivel de zoom apropiado para el área del recorrido y registra los marcadores mediante instancias de GMSMarker.

Los marcadores se diferencian por su función. La posición del usuario se representa con una flecha direccional que rota según el rumbo del dispositivo. El punto de partida se representa con un marcador de bandera verde. Cada punto de interés se representa con un marcador rojo, de mayor tamaño para los montículos con modelo 3D asociado. El montículo objetivo activo del tour se resalta en color dorado.

El método updateUIView cumple tres funciones. Actualiza la posición y la orientación del marcador del usuario, anima la cámara para seguir su desplazamiento y redibuja la polilínea cuando el TourManager asigna las coordenadas del recorrido activo. La gestión del estado gráfico se delegó a una clase Coordinator, que persiste durante el ciclo de vida de la vista. Así se evita recrear los objetos gráficos en cada actualización.

La utilidad del mapa se evaluó mediante la pregunta 13 del instrumento. De los 101 participantes, el 94.1% respondió de forma favorable (83 respuestas de “5” y 12 de “4”). Un 3.0% se mantuvo neutral y un 3.0% respondió de forma desfavorable. La media fue de 4.71 sobre 5, con una desviación estándar de 0.75.

La valoración positiva confirma que la representación cartográfica cumplió su objetivo de orientación espacial. Esta representación combinó marcadores diferenciados por función, el resaltado del montículo objetivo y la polilínea trazada sobre los caminos reales mediante conectores. El pequeño número de respuestas desfavorables puede relacionarse con la dependencia del mapa respecto de la conectividad a Internet para descargar los tiles cartográficos.

[IMG:figuras-tesis/image7.png]

Figura 7. Vista del mapa en la aplicación: marcadores diferenciados y polilínea del recorrido.

Fuente: elaboración propia.

Figura 8. Distribución de respuestas a la pregunta 13 (utilidad del mapa para ubicar los montículos).

Fuente: elaboración propia a partir de la encuesta a usuarios.

## 8.6 Implementación del servicio de proximidad avanzado

Como resultado de esta etapa se implementaron los componentes que clasifican en tiempo real el nivel de cercanía del visitante respecto a cada punto de interés. El componente AppConfig centraliza las constantes operativas del módulo. Entre ellas se encuentra el umbral de llegada guiada, fijado en 25 metros. Este umbral se calibró con base en tres factores: el margen de error horizontal típico del GPS en un entorno abierto, el tamaño promedio de los montículos como superficies de destino y la coherencia con la experiencia esperada del visitante al acercarse a cada estructura.

El componente ProximityService implementa el geofencing por software del módulo. Ante cada actualización de ubicación que emite LocationService, el servicio calcula mediante GeoUtils la distancia del usuario a los puntos de interés del registro. Después filtra los puntos que se encuentran dentro del radio de visibilidad e identifica el más cercano. Cuando el tour está en curso, identifica en cambio el punto objetivo.

El servicio publica mediante @Published el resultado de proximidad más reciente, que incluye el punto detectado, la distancia y el nivel de cercanía. Además, emite un evento de llegada a través de un PassthroughSubject del framework Combine cuando el usuario cruza el umbral configurado. El nivel de cercanía se categoriza mediante el enumerado ProximityLevel en cuatro estados: far, visible, near y arrived.

El servicio expone también una distancia efectiva que compensa el ruido del GPS. La función compensatedDistance de GeoUtils resta la precisión horizontal reportada, acotada a 10 metros. Los módulos consumidores emplean esta distancia para que sus disparos de contenido ocurran a la cercanía física esperada, y no cuando el usuario ya se encuentra sobre el punto. Este enfoque desacopla por completo la detección de la presentación. Así, cualquier componente puede suscribirse a los eventos de llegada sin conocer los detalles internos de la lógica GPS.

La fiabilidad de la detección de llegada se evaluó mediante la pregunta 12 del instrumento. Esta fue la afirmación mejor valorada del módulo. El 96.0% de los 101 participantes respondió de forma favorable (80 respuestas de “5” y 17 de “4”), frente a un 3.0% neutral y un 1.0% desfavorable. Su media de 4.73 sobre 5 fue la más alta del módulo y presentó la menor dispersión (desviación estándar de 0.61).

Este resultado respalda dos decisiones de diseño del módulo. La primera fue la adopción de un geofencing por software con umbral ajustable de 25 metros, en lugar del geofencing nativo de CoreLocation. La segunda fue la compensación explícita del ruido del GPS. La combinación de ambas produjo una detección de llegada que casi todos los participantes percibieron como automática y confiable. Este es precisamente el comportamiento buscado, para que el contenido en realidad aumentada se active en el momento adecuado sin intervención del usuario.

A nivel técnico, el comportamiento del servicio quedó también respaldado por las corridas controladas. En las 15 corridas se registraron, para cada actualización de ubicación, la distancia calculada hacia el punto objetivo y el nivel de proximidad asignado por el enumerado ProximityLevel. Las transiciones entre far, visible, near y arrived se produjeron en los umbrales esperados, sin oscilaciones entre estados adyacentes. En las corridas en que el recorrido se completó, el evento de llegada se emitió una sola vez por cada punto objetivo, en el instante en que la distancia compensada cruzó el umbral de 25 metros. No se registraron disparos duplicados ni llegadas no detectadas durante los recorridos completados.

[IMG:figuras-tesis/image8.png]

Figura 9. Lógica de proximidad: ProximityService y el enumerado ProximityLevel.

Fuente: elaboración propia.

Figura 10. Distribución de respuestas a la pregunta 12 (detección automática de la llegada).

Fuente: elaboración propia a partir de la encuesta a usuarios.

## 8.7 Desarrollo de la gestión del recorrido guiado y la interfaz de comunicación

Como resultado de esta etapa se implementaron los componentes de orquestación del recorrido guiado y la fachada pública de comunicación entre módulos. El componente RouteNavigator administra la navegación por los conectores intermedios. Recibe una lista de coordenadas y un radio de llegada propio. En cada ciclo de actualización, determina cuál es el siguiente conector objetivo y avanza de forma automática cuando el usuario cruza ese radio. De este modo, la dirección indicada en el mapa refleja en todo momento el tramo inmediato del camino y no el destino final del segmento.

El componente TourManager orquesta el estado del recorrido guiado mediante el enumerado TourState, con los estados idle, navigatingToStart, navigatingToPOI, atPOI, returning y completed. Mantiene el índice del montículo actual y, en cada actualización de posición, evalúa mediante GeoUtils la distancia al objetivo. Al cruzar el umbral de llegada de 25 metros, marca el estado atPOI y emite el evento poiArrivedPublisher.

El avance al siguiente montículo se dispara cuando el usuario solicita continuar, mediante el evento nextPOIRequested originado en el módulo de realidad aumentada. Así, el visitante puede recorrer el montículo antes de avanzar. El estado completo del tour se publica de forma reactiva mediante propiedades @Published. Este estado incluye el objetivo actual, la distancia y el rumbo al objetivo, las coordenadas de la ruta y el estado general.

Por último, se implementó GPSModuleInterface como la fachada pública del módulo GPS hacia el resto de la aplicación. La clase sigue el patrón de diseño Singleton mediante la propiedad estática shared. De este modo, garantiza una única instancia activa cuyo estado leen todos los módulos consumidores. De forma interna, instancia y gestiona de manera privada los tres servicios principales: LocationService, ProximityService y TourManager. Los interconecta mediante suscripciones de Combine almacenadas en un conjunto de AnyCancellable.

La interfaz expone nueve propiedades de solo lectura, marcadas como @Published private(set): la coordenada actual del usuario, la precisión horizontal de la ubicación, el rumbo del dispositivo en grados, el punto de interés objetivo del tour, la distancia en metros al objetivo, el ángulo azimutal hacia el objetivo, el estado general del tour, las coordenadas de la polilínea de la ruta activa y el resultado de proximidad al punto más cercano. Además, expone tres publicadores de eventos: poiArrivedPublisher (emite el POILocation alcanzado en la ruta guiada), tourCompletedPublisher (señaliza la conclusión del recorrido) y proximityArrivedPublisher (emite el montículo detectado por proximidad durante la exploración).

La eficacia de la guía de navegación se evaluó mediante la pregunta 11 del instrumento. El 94.1% de los 101 participantes respondió de forma favorable (76 respuestas de “5” y 19 de “4”), frente a un 4.0% neutral y un 2.0% desfavorable. La media fue de 4.66 sobre 5, con una desviación estándar de 0.70.

Esta valoración integra el resultado de varias etapas: el cálculo de distancia y rumbo (etapa 4), la navegación por conectores que evita trazar la dirección en línea recta a través de áreas inaccesibles (RouteNavigator) y la publicación reactiva del objetivo y su rumbo (TourManager y GPSModuleInterface). La amplia mayoría de los participantes llegó a cada montículo sin perderse. Este hecho confirma que la cadena completa de guiado funcionó de forma integrada. El patrón Singleton con fachada pública cumplió su propósito. Constituyó el contrato formal entre el módulo GPS y el módulo de realidad aumentada, que consumió estos datos sin acoplarse a la implementación interna.

[IMG:figuras-tesis/image9.png]

Figura 11. Guía de navegación: distancia y dirección hacia el siguiente montículo.

Fuente: elaboración propia.

Figura 12. Distribución de respuestas a la pregunta 11 (distancia y dirección para llegar sin perderse).

Fuente: elaboración propia a partir de la encuesta a usuarios.

## 8.8 Validación y verificación del módulo

Como resultado de esta etapa se ejecutó la validación del módulo GPS mediante pruebas de usuario. Estas pruebas se realizaron sobre el recorrido de prueba habilitado en el campus de la Universidad del Valle de Guatemala. Participaron 101 personas, quienes completaron el recorrido en realidad aumentada y respondieron el instrumento de evaluación de la experiencia de uso. Las cuatro afirmaciones correspondientes al módulo GPS (preguntas 10 a 13) evaluaron, respectivamente, la coincidencia entre la ubicación mostrada y la real, la utilidad de la distancia y la dirección para llegar sin perderse, la detección automática de la llegada y la utilidad del mapa para ubicar los montículos. La frecuencia de respuestas y el resumen estadístico de cada afirmación se presentan en los cuadros 1 y 2.

Cuadro 1. Frecuencia de respuestas por pregunta del módulo GPS (escala 1–5).

| Pregunta | 1 | 2 | 3 | 4 | 5 | n |
|---|---|---|---|---|---|---|
| Pregunta 10 | 1 | 2 | 4 | 19 | 75 | 101 |
| Pregunta 11 | 1 | 1 | 4 | 19 | 76 | 101 |
| Pregunta 12 | 1 | 0 | 3 | 17 | 80 | 101 |
| Pregunta 13 | 2 | 1 | 3 | 12 | 83 | 101 |

Fuente: elaboración propia a partir de la encuesta a usuarios (n = 101).

Cuadro 2. Resumen estadístico de las preguntas del módulo GPS.

| Pregunta | Media | Mediana | Moda | Desv. est. | % Fav. (4-5) | % Neutral (3) | % Desf. (1-2) |
|---|---|---|---|---|---|---|---|
| Pregunta 10 | 4.63 | 5 | 5 | 0.74 | 93.1% | 4.0% | 3.0% |
| Pregunta 11 | 4.66 | 5 | 5 | 0.70 | 94.1% | 4.0% | 2.0% |
| Pregunta 12 | 4.73 | 5 | 5 | 0.61 | 96.0% | 3.0% | 1.0% |
| Pregunta 13 | 4.71 | 5 | 5 | 0.75 | 94.1% | 3.0% | 3.0% |

Fuente: elaboración propia a partir de la encuesta a usuarios (n = 101).

En conjunto, las cuatro afirmaciones del módulo GPS obtuvieron medias entre 4.63 y 4.73 sobre 5 y porcentajes de respuestas favorables entre el 93.1% y el 96.0%. Estos valores indican una valoración alta y constante de las funcionalidades de geolocalización, navegación, detección de proximidad y visualización cartográfica. La afirmación mejor valorada fue la detección automática de llegada (media de 4.73; 96.0% favorable). Este resultado respalda las decisiones de diseño del geofencing por software y la compensación del ruido del GPS. Las cuatro distribuciones presentan la moda y la mediana en el valor máximo (5) y dispersiones bajas (desviaciones estándar entre 0.61 y 0.75). Estos datos reflejan un alto grado de acuerdo entre los participantes.

El pequeño porcentaje de respuestas neutrales o desfavorables en cada afirmación concuerda con las limitaciones ya identificadas del módulo: la variabilidad del GPS civil por efecto multipath y cobertura arbórea, y la dependencia del mapa respecto de la conectividad a Internet. Estos factores salen del control de la aplicación. En conjunto, los resultados proporcionan respaldo empírico al cumplimiento de los objetivos del módulo GPS. Cabe señalar que esta validación se realizó sobre el recorrido de prueba de la Universidad del Valle de Guatemala y no sobre el Parque Arqueológico Kaminaljuyú. La validación en el sitio, con el catálogo completo de once puntos de interés y sus coordenadas de campo, queda como parte del trabajo futuro.

Un análisis comparativo entre las cuatro afirmaciones permite leer el perfil de aceptación del módulo con mayor profundidad. La pregunta 12 (detección automática de la llegada) obtuvo simultáneamente la media más alta (4.73) y la menor desviación estándar (0.61). Esta combinación indica que no solo fue la dimensión mejor valorada, sino también la que generó mayor consenso entre los participantes. En contraste, la pregunta 13 (utilidad del mapa) presentó una media alta (4.71) pero la mayor dispersión del conjunto (0.75). Esta mayor dispersión responde a los dos participantes que respondieron con el valor mínimo (1), un comportamiento que no se observó en las demás preguntas. La pregunta 10 (coincidencia entre la ubicación mostrada y la real) obtuvo la media más baja del conjunto (4.63), con dos respuestas desfavorables y cuatro neutrales. Este resultado es coherente con la naturaleza del fenómeno evaluado: la precisión del GPS civil es más variable que la lógica de proximidad, que opera sobre esa precisión y la compensa.

Los casos neutrales y desfavorables se distribuyen entre las cuatro afirmaciones con un patrón acumulado reducido: por pregunta, entre 4 y 7 participantes de 101 valoraron de forma no favorable, lo que representa entre el 4.0% y el 6.9% del total. La coincidencia parcial entre los perfiles de respuesta sugiere que una fracción de estos participantes experimentó condiciones de medición menos favorables (por ejemplo, lecturas con mayor variabilidad del GPS en el momento específico de su sesión). El instrumento mide percepción y no comportamiento objetivo; las métricas técnicas recogidas en las corridas controladas y descritas en la sección 8.9 complementan esta limitación.

[IMG:figuras-tesis/image10.png]

Figura 13. Participantes durante las pruebas de usuario del recorrido en realidad aumentada.

Fuente: elaboración propia.

Figura 14. Comparación consolidada de las cuatro preguntas del módulo GPS.

Fuente: elaboración propia a partir de la encuesta a usuarios.

## 8.9 Pruebas técnicas y mediciones de rendimiento

De forma complementaria a la validación perceptual presentada en la sección 8.8, se ejecutaron 15 corridas controladas de la aplicación instrumentada. Esta instrumentación, registró en cada actualización de posición un conjunto de métricas técnicas del módulo: la precisión horizontal reportada por CoreLocation, la antigüedad del fix, el intervalo entre lecturas consecutivas, la latencia de cómputo del cálculo Haversine aplicado a los once puntos de interés, la distancia al objetivo del tour, la huella de memoria del proceso y el nivel de batería del dispositivo. Las métricas se agregan en el cuadro 3 y se discuten a continuación.

Cuadro 3. Métricas técnicas agregadas del módulo de GPS

| Métrica | Valor |
|---|---|
| Corridas analizadas | 15 |
| Lecturas totales | 4 201 |
| Lecturas aceptadas | 4 197 |
| Lecturas descartadas | 4 |
| Tasa de aceptación global | 99.90% |
| Razón de descarte | low_accuracy (precisión > 30 m) |
| Precisión horizontal media | 4.97 m |
| Precisión horizontal mediana | 4.75 m |
| Precisión horizontal P90 | 4.75 m |
| Precisión horizontal peor | 27.77 m |
| % de lecturas con precisión ≤ 5 m | 97.74% |
| % de lecturas con precisión ≤ 10 m | 98.12% |
| Frecuencia media de actualización | 0.993 Hz |
| Intervalo medio entre lecturas | 1.007 s |
| Antigüedad media del fix | 0.103 s |
| Latencia media del cálculo Haversine (11 POIs) | 0.0103 ms |
| Latencia máxima del cálculo Haversine | 0.4258 ms |
| Memoria media del proceso | 541 MB |
| Memoria pico del proceso | 692 MB |
| Consumo de batería — bloque mañana | 36.8 %/h |
| Consumo de batería — bloque tarde | 28.7 %/h |

Fuente: elaboración propia

La precisión horizontal reportada por CoreLocation presentó una distribución fuertemente concentrada en el rango de 2.5 a 5 metros. De las 4 201 lecturas registradas, 4 076 cayeron en este rango y 30 en el rango de 0 a 2.5 metros. Esto significa que el 97.74% de las lecturas presentó una precisión igual o mejor que 5 metros, el umbral que el módulo clasifica como "precisión buena" mediante el indicador isLocationReady. Un 1.62% adicional presentó una precisión entre 5 y 25 metros, dentro del rango utilizable para la lógica de llegada guiada. Solo cuatro lecturas (0.10%) presentaron una precisión peor que 30 metros y fueron descartadas por el filtro de calidad. La precisión mediana y P90 de 4.75 metros refleja la cuantización de horizontalAccuracy que iOS reporta en escalones discretos; la media de 4.97 metros, levemente superior, incorpora el efecto de los picos ocasionales de hasta 27.77 metros.

La configuración del LocationService con desiredAccuracy en kCLLocationAccuracyBestForNavigation y distanceFilter en kCLDistanceFilterNone tuvo como objetivo de diseño un flujo continuo de actualizaciones a aproximadamente 1 Hz. Los datos de las corridas confirman este comportamiento. La frecuencia media de actualización fue de 0.993 Hz, con un intervalo medio entre lecturas consecutivas de 1.007 segundos. La antigüedad media del fix al momento de ser procesado fue de 0.103 segundos. Este valor sitúa cada actualización por debajo del umbral de descarte por antigüedad (5 segundos) con un margen amplio, lo que indica que las posiciones alimentaron la lógica de navegación en un estado prácticamente actual.

[IMG:figuras-tesis/image11.png]

Figura 15. Frecuencia media de actualización del GPS por corrida

Fuente: elaboración propia.

La latencia del cálculo Haversine aplicado a los once puntos de interés en cada actualización se midió como un indicador de la eficiencia del núcleo matemático descrito en la sección 8.4. La latencia media fue de 0.0103 milisegundos y el máximo global de 0.4258 milisegundos. Estos valores confirman que el cálculo opera en el orden de los microsegundos y resulta despreciable frente al intervalo de actualización de 1 segundo. El módulo puede, en consecuencia, ejecutar la detección de proximidad en cada actualización sin impacto perceptible sobre la fluidez de la interfaz ni sobre el hilo principal.

La huella de memoria del proceso completo de la aplicación presentó una media de 541 MB y un pico máximo de 692 MB en el conjunto de las 15 corridas. Es importante aclarar que este valor corresponde al proceso completo, que incluye la precarga del módulo de realidad aumentada, los modelos tridimensionales y los videos de la guía virtual, y no al módulo GPS de forma aislada. El valor relevante de esta métrica es la estabilidad: no se registró crecimiento acumulado de memoria entre corridas sucesivas, lo que indica que el módulo no introduce fugas de memoria a lo largo de las sesiones.

El consumo de batería se midió por bloques, dado que iOS reporta el nivel de batería en escalones discretos de 5%, lo que impide medir el drenaje con precisión en corridas de 4 a 5 minutos. El primer bloque de prueba (6 corridas, 40.8 minutos de uso continuo) presentó un consumo del 25% de la batería, equivalente a 36.8 %/h. El segundo bloque de prueba (9 corridas, 52.3 minutos de uso continuo) presentó también un consumo del 25%, equivalente a 28.7 %/h. Al igual que la memoria, este consumo corresponde al proceso completo de la aplicación, en el que la cámara de realidad aumentada y la pantalla encendida dominan sobre el GPS. El patrón confirma la limitación ya documentada en la metodología: la decisión de priorizar la precisión y la continuidad de las actualizaciones sobre el ahorro energético tiene un costo medible, aunque dentro de márgenes aceptables para sesiones típicas de recorrido.

[IMG:figuras-tesis/image12.png]

Figura 16. Consumo de memoria por corrida.

Fuente: elaboración propia.

Para formalizar la verificación funcional del módulo se documentaron cuatro casos de prueba sobre los flujos críticos. Cada caso describe el flujo evaluado, la precondición necesaria, los pasos de ejecución, el resultado esperado y el resultado obtenido durante las corridas controladas descritas en la sección 8.9. El cuadro 4 presenta el resumen de los cuatro casos.

Cuadro 4. Casos de prueba del módulo GPS y su resultado

| ID | Flujo evaluado | Resultado esperado | Resultado obtenido | Veredicto |
|---|---|---|---|---|
| CP-01 | Adquisición inicial de posición y descarte de lecturas de baja calidad. | LocationService entrega un flujo de lecturas con precisión ≤ 30 m; las lecturas peores se descartan y se registra la razón. | 4 197 de 4 201 lecturas aceptadas; 4 descartadas por "low_accuracy". Precisión media 4.97 m. | Aprobado |
| CP-02 | Cálculo de distancia y rumbo entre la posición del usuario y los once POIs del catálogo. | GeoUtils entrega la distancia Haversine y el bearing en cada actualización; la latencia es despreciable frente al intervalo de 1 s. | Latencia media 0.0103 ms, máxima 0.4258 ms. Resultados coherentes con las coordenadas registradas en POIRegistry. | Aprobado |
| CP-03 | Detección automática de llegada al cruzar el umbral de 25 m del POI objetivo. | ProximityService emite el evento arrivalPublisher una sola vez por POI al cruzar el umbral; TourManager transita al estado atPOI. | Evento emitido exactamente una vez por POI alcanzado en las corridas completadas; sin disparos duplicados ni llegadas no detectadas. | Aprobado |
| CP-04 | Avance secuencial del recorrido y transiciones de TourState. | TourManager transita a navigatingToPOI, atPOI, navigatingToPOI (siguiente), …, returning, completed sin saltar estados. | Secuencia de transiciones completa y correcta en las corridas en que se recorrió la ruta completa; GPSModuleInterface publicó cada cambio de estado. | Aprobado |

Fuente: elaboración propia (15 corridas controladas).

## 8.10 Comparación con los criterios de aceptación

La sección 7.5 de la metodología estableció dos criterios de aceptación aplicables a cada una de las cuatro dimensiones del módulo evaluadas por el instrumento: un porcentaje de respuestas favorables igual o mayor al 80% y una media aritmética igual o mayor a 4.0 sobre 5. Una dimensión se considera validada cuando cumple ambos criterios de forma simultánea. El cuadro 5 presenta la comparación entre los valores obtenidos y los criterios establecidos.

Cuadro 5. Comparación de los resultados obtenidos con los criterios de aceptación.

| Pregunta | % Favorable obtenido | Criterio (≥ 80%) | Media obtenida | Criterio (≥ 4.0) | Veredicto |
|---|---|---|---|---|---|
| P.10 (geolocalización) | 93.1% | Cumplido | 4.63 | Cumplido | Validado |
| P.11 (guía de navegación) | 94.1% | Cumplido | 4.66 | Cumplido | Validado |
| P.12 (detección de llegada) | 96.0% | Cumplido | 4.73 | Cumplido | Validado |
| P.13 (utilidad del mapa) | 94.1% | Cumplido | 4.71 | Cumplido | Validado |

Fuente: elaboración propia a partir de la encuesta a usuarios y los criterios definidos en la sección 7.5.

Las cuatro dimensiones del módulo cumplen los dos criterios con un margen amplio. El porcentaje de respuestas favorables superó el umbral del 80% en todos los casos con un diferencial de entre 13 y 16 puntos porcentuales. Las medias superaron el umbral de 4.0 con un diferencial de entre 0.63 y 0.73 unidades. Este cumplimiento conjunto permite declarar al módulo validado según los parámetros establecidos en la metodología y sustenta el cumplimiento del objetivo específico de validación del proyecto.

Como respaldo adicional a esta validación perceptual, los resultados técnicos descritos en la sección 8.9 confirman que el módulo opera dentro de las expectativas de diseño: la tasa de aceptación de lecturas es del 99.90%, la frecuencia de actualización se mantiene estable en 0.993 Hz y la latencia del núcleo matemático se sitúa en el orden de los microsegundos. La convergencia entre la valoración perceptual del usuario y las métricas técnicas del módulo refuerza la conclusión de que el módulo cumple los objetivos planteados.

## 8.11 Cuantificación del impacto de las limitaciones

Las limitaciones del módulo documentadas en la sección correspondiente se discuten a continuación con las magnitudes observadas durante las corridas controladas y las pruebas de usuario.

La precisión de la señal GPS presentó la variabilidad inherente al receptor civil, pero su impacto fue acotado durante las pruebas. El 97.74% de las lecturas se mantuvo con una precisión igual o mejor que 5 metros y solo el 0.10% superó el umbral de descarte de 30 metros. Este desempeño refleja condiciones ambientales favorables en el recorrido de prueba de la UVG, con buena visibilidad del cielo. En el Parque Arqueológico Kaminaljuyú, la mayor cobertura arbórea sobre algunos tramos del recorrido podría elevar el porcentaje de lecturas con precisión degradada. El módulo mantiene su filtro de calidad activo, por lo que el impacto esperado consistiría en una menor densidad de lecturas aceptadas, no en una degradación directa de la lógica de navegación.

La dependencia del mapa respecto de la conectividad a Internet se manifestó en la encuesta como la fuente principal de dispersión en la pregunta 13 (utilidad del mapa), que presentó la desviación estándar más alta del conjunto (0.75) y dos respuestas desfavorables de valor mínimo. El módulo de localización GPS opera sin conectividad, pero la visualización cartográfica depende de la descarga de tiles del Google Maps SDK. El módulo no implementó almacenamiento en caché offline, lo que establece un piso de conectividad para la experiencia completa del usuario.

La indisponibilidad de ARGeoTrackingConfiguration en Guatemala obligó al módulo iOS a utilizar ARWorldTrackingConfiguration como alternativa. En consecuencia, el posicionamiento de los modelos tridimensionales en realidad aumentada dependió por completo de las coordenadas GPS procesadas por el módulo de navegación, sin el refuerzo del Visual Positioning System de Apple. Esta limitación amplifica la importancia de la precisión del módulo GPS: cada error de posicionamiento se traslada directamente al anclaje visual de los modelos. Las métricas técnicas de la sección 8.9 confirman que la precisión alcanzada (media de 4.97 m, con el 97.74% de las lecturas por debajo de 5 m) resultó suficiente para que el módulo de realidad aumentada obtuviera la detección de llegada mejor valorada por los participantes (pregunta 12: 96.0% favorable).

El consumo de batería se cuantificó en 36.8 %/h en el primer bloque de prueba y 28.7 %/h en el segundo bloque de prueba. Estos valores corresponden al proceso completo de la aplicación, con la cámara de realidad aumentada activa y la pantalla encendida de forma continua. El módulo no implementó estrategias de ahorro como la reducción dinámica de la frecuencia de muestreo con el usuario estacionario; esta queda identificada como una optimización pendiente.

La dependencia de servicios de terceros, en particular el Google Maps SDK sobre una cuenta personal de Google Cloud, no se manifestó durante las pruebas como una incidencia operativa, pero constituye un riesgo de continuidad reconocido. La transición a la cuenta institucional de la universidad quedó pendiente al cierre del proyecto.

Las condiciones atmosféricas y ambientales no introdujeron efectos observables durante las corridas de prueba. Las 15 corridas se ejecutaron bajo condiciones meteorológicas estables; una evaluación en condiciones adversas (lluvia intensa, tormenta eléctrica) quedó fuera del alcance temporal del proyecto y se reserva como trabajo complementario.

En conjunto, las limitaciones identificadas tienen magnitudes acotadas en el contexto evaluado. La convergencia entre la valoración perceptual positiva de los 101 participantes y las métricas técnicas de las 15 corridas controladas respalda la conclusión de que el módulo cumple sus objetivos dentro del alcance establecido para el presente trabajo. La validación en el sitio arqueológico, bajo las condiciones ambientales reales del parque y con el catálogo completo de puntos de interés, queda identificada como el siguiente paso natural del proyecto.

# IX. CONCLUSIONES

## 9.1 El trabajo cumplió el objetivo general planteado

La aplicación ArTourKaminaljuyú incorporó un módulo de localización en tiempo real con detección de proximidad para iOS. El módulo utilizó Swift, el framework CoreLocation y el Google Maps SDK dentro de un diseño modular organizado en ocho componentes. El resultado operó de forma validada en condiciones reales de uso durante las pruebas de campo.

## 9.2 El servicio de geolocalización en tiempo real quedó operativo en LocationService

Este componente encapsuló CLLocationManager con una configuración de máxima precisión (kCLLocationAccuracyBestForNavigation) y descartó las lecturas con precisión horizontal peor que 30 metros o con antigüedad mayor a cinco segundos. La exposición reactiva de la ubicación, la orientación y el estado de autorización se concretó mediante propiedades @Published, conforme al primer objetivo específico.

## 9.3 La capa de visualización cartográfica cubrió los once puntos de interés del recorrido

El componente MapViewRepresentable integró el Google Maps SDK dentro del ecosistema declarativo de SwiftUI mediante el protocolo UIViewRepresentable. Los marcadores se diferenciaron por función (posición del usuario, inicio del tour, montículos ordinarios y montículo objetivo) y la polilínea se trazó sobre los conectores que replican el camino peatonal real del parque, en cumplimiento del segundo objetivo específico.

## 9.4 El cálculo de proximidad geoespacial funcionó mediante geofencing por software

La fórmula de Haversine implementada en GeoUtils, el umbral de llegada de 25 metros calibrado para el entorno abierto y la compensación explícita del ruido del GPS mediante compensatedDistance habilitaron la detección automática de la llegada a cada montículo sin intervención del usuario. Con ello se cumplió el tercer objetivo específico.

## 9.5 La interfaz de comunicación con el módulo de realidad aumentada quedó definida en GPSModuleInterface

La fachada pública expuso nueve propiedades reactivas y tres publicadores de eventos mediante el patrón Singleton y el framework Combine. Este contrato formal permitió al módulo de realidad aumentada consumir los eventos de llegada, los metadatos del punto objetivo y el estado del recorrido sin acoplarse a los detalles internos de la lógica GPS, conforme al cuarto objetivo específico.

## 9.6 La validación con usuarios respaldó el funcionamiento del módulo

Las pruebas de campo con 101 participantes sobre el recorrido del campus de la Universidad del Valle de Guatemala arrojaron medias entre 4.63 y 4.73 sobre 5 y porcentajes de respuestas favorables entre el 93.1% y el 96.0% en las cuatro afirmaciones del instrumento asociadas al módulo. La dispersión fue baja (desviaciones estándar entre 0.61 y 0.75) y la moda se ubicó en el valor máximo en todas las preguntas. La afirmación mejor valorada fue la detección automática de llegada (media de 4.73; 96.0% favorable). Estos resultados cumplieron el quinto objetivo específico.

## 9.7 El módulo contribuyó a cerrar la brecha interpretativa del Parque Arqueológico Kaminaljuyú

La capa de datos espaciales desarrollada en este trabajo soporta la activación del contenido en realidad aumentada en el momento y en el lugar correctos. De este modo, los montículos actualmente cubiertos de vegetación recuperan para el visitante la referencia visual de su forma original y atienden el problema original planteado en la introducción.

## 9.8 La arquitectura modular propuesta se validó como base reutilizable

El cambio entre el recorrido de prueba del campus y el recorrido real del parque exigió únicamente la modificación de los datos del POIRegistry, sin alterar los servicios de cálculo, proximidad ni navegación. Esta propiedad confirma el valor del diseño como fundamento tecnológico para futuras iniciativas de puesta en valor del patrimonio arqueológico guatemalteco mediante tecnologías móviles.

# X. RECOMENDACIONES

## 10.1 Validar el módulo en el Parque Arqueológico Kaminaljuyú

La validación con usuarios reportada en este trabajo se ejecutó sobre el recorrido de prueba del campus de la Universidad del Valle de Guatemala. Resta aplicar el instrumento de evaluación con el catálogo completo de once puntos de interés y las coordenadas de campo del parque. Esta medición confirmará el desempeño del módulo bajo la vegetación, la topografía y las construcciones circundantes del sitio.

## 10.2 Incorporar el almacenamiento en caché de los tiles cartográficos

La capa de localización opera sin conexión, pero la vista cartográfica requiere Internet para descargar los tiles del Google Maps SDK. Un recorte predescargado del área del parque evitaría la degradación del mapa cuando la señal de datos sea intermitente dentro del sitio.

## 10.3 Completar la migración a la cuenta institucional de Google Cloud

La clave de API utilizada durante el desarrollo pertenece a una cuenta personal. El traslado de la clave a la cuenta institucional de la Universidad del Valle de Guatemala desacopla la operación del módulo de la disponibilidad individual y asigna la facturación y las cuotas a la institución.

## 10.4 Evaluar ARGeoTrackingConfiguration cuando Apple habilite su cobertura en Guatemala

El módulo iOS utilizó ARWorldTrackingConfiguration ante la ausencia del servicio geoespacial de Apple en el país. La disponibilidad futura de este servicio permitiría anclar los modelos tridimensionales con precisión submétrica y reducir el efecto del ruido GPS sobre la experiencia de realidad aumentada.

# XI. LITERATURA CITADA

Boboc, R. G., Băutu, E., Gîrbacia, F., Popovici, N. y Popovici, D. M. (2022). Augmented reality in cultural heritage: An overview of the last decade of applications. Applied Sciences, 12(19), 9859. https://doi.org/10.3390/app12199859

Capecchi, I., Bernetti, I., Borghini, T. y Caporali, A. (2023). CaldanAugmenty – Augmented reality and serious game app for urban cultural heritage learning. En L. T. De Paolis, P. Arpaia y M. Sacco (Eds.), Extended reality. XR Salento 2023 (Lecture Notes in Computer Science, Vol. 14219, pp. 339–349). Springer. https://doi.org/10.1007/978-3-031-43404-4_22

Hincapié, M., Díaz, C., Zapata-Cárdenas, M. I., Toro Ríos, H. de J., Valencia, D. y Güemes-Castorena, D. (2021). Augmented reality mobile apps for cultural heritage reactivation. Computers and Electrical Engineering, 93, 107281. https://doi.org/10.1016/j.compeleceng.2021.107281

Kaplan, E. D. y Hegarty, C. J. (Eds.). (2006). Understanding GPS: Principles and applications (2.ª ed.). Artech House.

Kleftodimos, A., Evagelou, A., Triantafyllidou, A., Grigoriou, M. y Lappas, G. (2023). Location-based augmented reality for cultural heritage communication and education: The Doltso district application. Sensors, 23(10), 4963. https://doi.org/10.3390/s23104963

Koo, S., Kim, J., Kim, C., Kim, J. y Cha, H. S. (2019). Development of an augmented reality tour guide for a cultural heritage site. ACM Journal on Computing and Cultural Heritage, 12(4), Artículo 24. https://doi.org/10.1145/3317552

Sinnott, R. W. (1984). Virtues of the haversine. Sky and Telescope, 68(2), 158.

Vlahakis, V., Ioannidis, N., Karigiannis, J., Tsotros, M., Gounaris, M., Stricker, D., Gleue, T., Daehne, P. y Almeida, L. (2002). Archeoguide: An augmented reality guide for archaeological sites. IEEE Computer Graphics and Applications, 22(5), 52-60. https://doi.org/10.1109/MCG.2002.1028726

A. Referencias de la red o de internet

Apple Inc. (2026a). Combine. Apple Developer Documentation. https://developer.apple.com/documentation/combine

Apple Inc. (2026b). Core Location. Apple Developer Documentation. https://developer.apple.com/documentation/corelocation

Apple Inc. (2026c). The Swift programming language. Apple Developer Documentation. https://docs.swift.org/swift-book/

Apple Inc. (2026d). SwiftUI. Apple Developer Documentation. https://developer.apple.com/documentation/swiftui

CocoaPods Org. (2026). CocoaPods: A dependency manager for Swift and Objective-C Cocoa projects. https://cocoapods.org

Creatividad Gráfica, S.A. (2018-presente). Proyecto KAN: Realidad aumentada para parques arqueológicos de Guatemala. https://kan.com.gt/

Google LLC. (2026). Maps SDK for iOS. Google for Developers. https://developers.google.com/maps/documentation/ios-sdk

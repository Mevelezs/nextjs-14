# -----------------> Inicio Nextjs <---------------------
https://nextjs.org/docs/pages/api-reference/create-next-app

What is your project named?  my-app
Would you like to use TypeScript? Yes
Would you like to use ESLint?  Yes
Would you like to use Tailwind CSS?  No / Yes
Would you like to use `src/` directory?  Yes
Would you like to use App Router? (recommended)  Yes
Would you like to customize the default import alias (@/*)?  Yes

# ---------------------> Routing <-----------------------
1. Para crear rutas estaticas basta con crear una carpeta dentro del app y dentro de esa crpeta crear un archivo page.tsx que será leidi por default en la ruta 
`localhost:3000/nombrecatpeta`

2. Para crear rutas dinámocas basts con encerrar la carpeta dentro de corchetes y automaticamente las props que le llegan al componente que se está renderizado dentro de ella llagan por parametro.

# ---------> Cómo crear Layout en Next.js <--------------
1. Es lo que se visualiza en la pagina sin importar la ruta en la que se este ej: headers, footers ...

2. Hay dos tipos de layoud -> el que se agrega al RootLoyout global dentro del body encima o debajo del children que renderiza el main de la app -> Los "layouts locales" que estan a nivel de carpeta y renderizan solo para unos paths determonados (Tanto los layouts como la page tienen que tener este nombre para que puedan renderizar).Donde seaplique el layout local, las rutas que están dentro de su misma carpeta y la de más abajo lo tomarán, las que tiene un nive superior o están en otra carpata no se ven afectadas

# ------> Cómo funciona la navegación en Next.js <-------

1. Se utiliza el componente <Link href="/aas"> para la navegación interna; si se necesita navegar fuera de la aplicación un anchor estaría bien

# -----> Manejo de parámetros en rutas en Next.js <-------

1. Hay otra forma de hacer las rutas dinámicas, con este cambio podemos tomar las subrutas que hay dentro de la carpeta dinamica e incluso acceder a las rutas que tienen el path de la carpeta que contiene la misma. A parte de esto el tamaño de la subrutas no importa los tomará dinamicamente
 ej: `[[...categories]]`

# -------------------> searchParams <---------------------

1. Los searchParams son los datos que enviamos o recibimos por query.

# React Server Components en Next.js: notación "use Client"

1. Componentes que son de maquetación, que no tienen estado (componentes de tipo servidor)

2. Elementos que van cambiando y son dinámicos ( compnentes de tipo cliente )

3. Para que un componente pase directamente al cliente y no al servidor se usa 
`"use client"`, como buena practica poner loc componentes de tipo cliente hasta el final de la piramide puesto que una vez confugurado el use client en un componente, sus hijos tomarán también esta forma.

# -------------> CSS Modules en Next.js 13 <------------
**BEM CSS**. **BEM CSS es una metodología de nomenclatura para definir las clases en los nodos HTML** del documento. Es decir, es **una manera de nombrar las clases de los nodos de tu HTML para posteriormente atacarlos con CSS de una manera fácil, sencilla y clara**. El objetivo de BEM es dar mucha más **transparencia y claridad en tu estructura HTML y CSS**. BEM te dice cómo se relacionan las clases entre sí, lo que es particularmente útil en secciones complejas del documento. Todas las clases del proyecto pueden encajar con esta filosofía. **BEM** son tres siglas. * **B** de **bloque**. * **E** de **elemento**. * **M** de **modificador**. Un **bloque** es **una sección independiente que tiene significado propio por sí solo**. Contiene todos los nodos HTML de una estructura a la que te estés refiriendo. Un **elemento** son **porciones más pequeñas internas a un bloque**. Se usa para ir dividiendo el bloque en segmentos más pequeños. Un **modificador** sirve para **modificar algunas propiedades de un bloque o elemento**.

# --> blur 
https://blurred.dev/

# -> Manejo de variables de entorno en Next.js
1. Las variables de entorno se manejan como de costunbre y se solicitan con el process.env; estas variables siempre son ocultas, si por alguna razopn se quiere exponer una variable de entorno en el cliente => en el .env llamamos la variable con el prefijo `NEXT_PUBLIC_NOMBRE_VARIABLE="nombre variable"` y se usa el componente donde fue llamada como cliente.

# --> Shoppify
1. shopify.dev -> iniciar tienda como desarrollador -> productos -> cargar productos -> canales de ventas -> configuración de aplicaciones y canales de venta -> desarrollar aplicaciones  -> permitir desarrollar aplicaciones personalizadas -> permitir desarrollo de aplicaciones -> crear una aplicación -> crear aplicación -> permisos (dar permisos) -> credenciales api (instalar) -> el token se muestra una ves (copiar)

==> shopify.parners -> entra a la tienda -> copiar el host -> agregarlo en el .env



==> entrar a la doc de la tienda => https://shopify.dev/docs/api/admin-rest/2023-10/resources/product#get-products?ids=632910392,921728736 => hacer el fetch con le host y el tokoen el en endpoind dado

# --> Route Grouping en Next.js

1. Son carpetas que evaden la creación de los segmentos de ruta; se crea la carpeta con la siguiente nomenclatura `(nombreCarpeta)` y si está en la raiz del src todo lo que esté dentro como el layout, la page o el routing quedarán el la ruta principal (No es recomendable hacerlo para todo)

# --> Implementando páginas de Not Found y error global

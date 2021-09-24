# Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Notes (Spanish)
		            S T A C K   T E C N O L Ó G I C O

Grupo de tecnologías que, usadas de manera conjunta en un proyecto, nos permiten crear una aplicación completa.
Podemos crear aplicaciones desde la parte de front hasta la parte back usando una misma tecnología como base.
Cada stack de programación sugiere la utilización de una serie de herramientas.

MEAN STACK
    MongoDB (se puede sustituir pro otra base de datos) se acopla con JS
    Express (backend)
    Angular (fontend)
    NodeJS	(base)


	            		    A N G U L A R

Es uno de los frameworks más importantes para el desarrollo de apps de tipo SPA (single page application), aplicaciones que piden al servidor la página y la envía completa para que sea más ágil la interacción con el usuario, sin refresh constante.

Las aplicaciones generadas con Angular son multiplataforma, por lo que pueden funcionar en diferentes dispositivos. Se basa en el patrón de desarrollo MVC.


        *** Modelo Vista Controlador
            separación entre los datos y el controlador de la vista.
            Entre el modelo y la vista no se van a comunicar, sólo 
            mediante el controlador. ***


PWA
Aplicaciones Web Progresivas
Crea webs que se parezcan al concepto que tenemos de apps móviles.
Características
	Alto rendimiento
	Trabajo offline
	Poco gasto de batería
	Poco gasto de datos

Podemos utilizar Angular en combinación con frameworks como Ionic NativeScript o ReactNative para crear apps nativas móviles, lo que ofrece acceso a las diferentes APIs nativas del SO.

Todo va a ser generado en HTML y CSS por lo que podemos renderizarlo en todos los navegadores. Crea plantillas muy eficientes y fáciles para el usuario.

Disponemos de una herramienta para la línea de comandos que aligera el trabajo del desarrollador. Además, se encuentra totalmente adaptado al trabajo con librerías de testing.

Podemos llegar a crear complejas animaciones dentro del navegador de
manera sencilla.

Angular crea los proyectos mediante componentes, los cuales por lo general contiene un archivo para CSS, uno para HTML y un TS pero puede contener otros archivos que enriquecen el componente.

            			ng new 'nom_proyecto'

el componente padre controla todos los componentes hijos. Estos, tienen sus propios archivos para estructurar sus estilos, etiquetas y funcionalidades.

Está programado para poder utilizar Typescript.


                        			A R C H I V O S

Al crear un proyecto, se generan carpetas y archivos importantes necesarios para el mismo. Por ejemplo en /SRC podemos encontrar:
Carpeta más importantes
	ASSETS
	Componentes externos que se van a utilizar
	ENVIROMENTS
	Contiene dos archivos que son para producción y desarrollo para el desarrollo tanto en back como en front.
		environment.prod.ts	producción
		environment.ts		desarrollo
	APP
	Es donde se van a guardar las nuevas aplicaciones que se van a crear dentro del proyecto. Es el componente padre, que se forma de 
		app-routing.module.ts
		app.component.css
		app.component.html
		app.component.spec.ts (tests)
		app.component.ts (padre)
		app.module.ts (Dependencias de la componente)
	Todas las aplicaciones tendrán archivos parecidos pero este es el componente del que dependen los demás

Archivos importantes
    package.json
    Contiene todas las dependencias que contiene el proyecto.

    main.ts
    Arranca toda la aplicación. Importa las librerías de Angular. Llama al módulo principal que va a arrancar
	la aplicación, que por defecto es AppModule.

    node_modules
    Maneja las dependencias que se instalen en la aplicación

    .gitignore
    Crea el archivo que le indica a GitHub que archivos no va a subir e ignorará los cambios
	que hagan en ellos.

    README.md
    Intrucciones sobre Angular y las específicas del proyecto

    angular.json
    Es el corazón del proyecto, por lo que contiene todos los servicios y herramientas que se utilizarán.
    Se puede cambiar el prefijo de los componentes en está parte, por defecto tienen el prefijo APP


                			C O M P O N E N T E S

Para crear una componente se necesita
                        		ng generate/g component/c 'nom_componente'
Crea cuatro archivos con el archivo de testing
		nom_comp.component.html
		nom_comp.component.css
		nom_comp.component.ts
y modifica el archivo
		app.module.ts
en el cual integra el componente nuevo para que el proyecto lo tenga listo para mostrar en cualquier componente
	Selector
	La etiqueta con la que se llamará al componente.
	templateUrl
	Llama al archivo que contiene todo lo que se va a deplegar en la página.
	Se puede cambiar por TEMPLATE en donde se puede diseñar lo que va a mostrar la página, con etiquetas de HTML. Sólo conviene cuando es un contenido pequeño.
	styleUrls
	Llama el archivo que contiene los estilos para ese componente.
	app.component.ts
	Tiene todos los modelos que se creen. Este componente se puede llamar en app-routing.module.ts para que sea una página independiente a la principal, con su propio "dominio/nombre"
		/nom_comp
    Esto con el formato
		                {path: 'nom_pestaña', component: 'Nom_Comp'}
    @Component
    Decorador del componente, donde describe la etiqueta con la que se llama al componente y las rutas en donde se encuentran sus recursos.


                            JERARQUIA DE COMPONENTES

Arranca a partir de AppComponent, donde van a llamar a las componentes que se van creando, con su selector.
También se pueden llamar a un componente dentro de otro con el mismo selector y así este quedaría dentro del primero componente.

INTERPOLACIÓN (variables)
Permite usar las variables de los controladores y visualizarlas en las plantillas de HTML.
En los dobles llaves ({{}}) no es posible crear variables, no se puede
utilizar de incremento, decremento o crear objetos.

INTERPOLACIÓN (métodos)
Se pueden mostrar las acciones que el método indique.

PROPERTY BINDING
Enlace de propiedades. Modifica atributos del HTML desde un método del
.TS

EVENT BINDING (evento)
Enlaza eventos para interectuar con ellos.
$event : recupera información del evento.
	

                   			    M Ó D U L O S

Parte de la aplicación que se crea independientemente con todos sus recursos, para que tengan un mejor control y definición. Debe tener una tarea en específico principal. Para crear el módulo
                                		ng g module 'nom_modulo' --routing
crea dos archivos con los que se van a administrar todos los hijos
que dependerán del módulo
		nom_mod-routing.module.ts
		nom_mod.module.ts
Dentro de app-routing.module.ts se llaman a los hijos que tendrá el módulo recién creado con el fin de poder tenerlos en las rutas que le asigne el proyecto en general a dicho módulo.
Estos hijos serán llamados en el routing del módulo creado en los 
routes
		path: '',
		component: NomModComponent,
		children: ['lista de hijos']
Se debe registrar en app.module.ts, importandolo para que pueda ser 
llamado desde la app principal.


@NgModule
Decorador que le va a proveer servicios al módulo, convierte a las clases de typescript en herramientas que usará el projecto porque serán módulos.
DECLARATIONS llama a todos los componentes que exiten dentro del módulo para que interactuen con todos los elementos del módulo.
IMPORTS llama a otros módulos que se van a usar que está fuera del
módulo.
PROVIDERS son proveedores de datos para el módulo, en esta parte se llama a los servicios.


	***Es recomendable crear una carpeta para mantener los componentes
       hijos del módulo dentro de ella y tener un orden en los archivos
       del proyecto***


                			B O O T S T R A P

Framework de HTML y CSS. Ayudan a crear los formatos de las páginas en Angular con el fin de agilizar el diseño con sus plantillas. Se instala con
                	   	npm i bootstrap
En el archivo angular.json se definen los estilos que va a utilizar el proyecto, en la parte de styles, donde llamaremos a la carpeta de bootstrap.
Es necesario instalar jquery ya que es el que nos ayuda a utilizar 
JavaScript.
Para poder utilizar los elementos que bootstrap nos ofrece, es necesario conocer el código. En la página de Bootstrap se encuentran los códigos necesarios para incluir el diseño.


                			    N G   F O R
Arreglo dentro del template. Las variables que van a contener el resultado del ciclo o su condicional, deben estar declarados ya sea en forma global en el nom_comp.component.ts o en forma local en el mismo ciclo.

            			       N G   IF
Es una condicional dentro del diseño, que se aplicará dependiendo de si cumple con ella o no. La variable se puede llenar dentro de un archivo json (se utiliza principalmente para APIs o dentro del proyecto en un .ts


        	     ***{{ 'var' }} para llamar a una variable***


                			  S E R V I C I O S
Se genera con
        		ng g service 'nom_servicio'
Genera dos archivos
		            'nom_serv'.service.ts
Es una clase que define métodos para los datos que se relacionan con los componentes que lo llaman.


                			F O R M U L A R I O S

FORMULARIOS POR TEMPLATES
Los formularios controlados por plantillas son los más sencillos. Se necesita un modelo en donde se enlistan las características de lo que el formulario necesita.

MODELOS
Los modelos llevan la estructura de formato como normalmente rige los projectos en Angular
        			'nom_mod'.model.ts
en dicho archivo se va a describir una clase que contiene todos los atributos que va a pedir el formulario.
Para poder llamar al formulario en alguna parte del módulo, se debe declarar primero FORMSMODULE en 'nom'.module.ts de ese módulo.

FORMULARIOS REACTIVOS
Se basan en que el componente maneja los datos por lo que da más opciones para el tipo de datos y las características que tendrán los formularios, es por eso que estos formularios son más flexibles.
Para poder utilizarlos, se debe importar al módulo
                                        			ReactiveFormsModule
Lo más recomendable es utilizar un modelo, para mantener los datos organizados.


                			    R U T A S

Por lo general, HTML utiliza la etiqueta href para llamar a una ruta, ya sea fuera de la página creada o dentro de ella.
Si se trabaja en Angular, el framework ayuda a no utilizar href para las rutas locales con el fin de aprovechar todos los beneficios de realizar una Sigle Page Application lo cual significa que se puede llamar a otra página con ROUTERLINK y con ello no recarga la página, lo que hace más eficiente tanto al proyecto como el flujo del mismo para el usuario.
	
    routerLinkActive
    De da una clase a la etiqueta cuando estamos en la  etiqueta de la ruta que tiene routerLink

Las rutas también pueden ser dinámicas mediante un parámetro. Estos,
son llamados anteponiendo a su nombre dos puntos (:)


                			A P I   C A L L S

Se utilizan servicios para poder llamar las API, no son necesarias pero garantizan un mejor control
                				ng g s 'nom' --skipTests


            			E N V I R O M E N T S

Esta carpeta tiene los archivos necesarios para administrar las URL's que se utilizan, tanto en desarrollo como en producción. Se llama a estás dentro de los servicios ya que normalmente son los que las usan.


                			     G U A R D S

Guardia que se encarga de vigilar todo el tiempo a cada ruta que vayas y que cumpla con las reglas que le indicas. Sirve para que los usuarios entren sólo a las partes que se les está permitiendo.
Se crean con
        		ng g guard 'nom' --skipTests

Al crearlo, se debe elegir el tipo de activaciones en las que se va a dejar pasar. Se pueden restrigir el acceso con CanActivateChild o dar toda la libertad con CanActivate


            			   C O M A N D O S

	ng serve -o         Abre en el navegador el proyecto, sin -o sólo indica 
                        la dirección en el localhost a la cual se accede manualmente.
	ng build (--prod)	Crea los archivos en modo desarrollo o producción
                        para poder mondarlo en un servidor. Crea una carpeta dist, donde se guardan
						los archivos necesarios para montar la página.
	--skipTests		    Al crear un componente, si se le indica lo anterior,
                        se omiten los archivos de testing.


                				H T T P

Recuperar datos desde la aplicación, con un módulo de Http llamado HTTPCLIENT. Llama los datos del servidor a través del internet el cual los envía a un servicio de la aplicación y estos mismos los pueden enviar de regreso.

Los métodos son de API REST para hacer las peticiones:
	GET
	POST
	PUT
	PATCH
	DELETE

La URL es a donde se va a pedir y envíar la información, dependiendo del verbo del API

Las cabeceras son variables y explican que se pide o envía y se van personalizando para satisfacer las necesidades de la aplicación.

El body es lo que se está pidiendo al servidor y se tiene una estructura que reconozca la base de datos.


    		     D E C O R A D O R   @ I N P U T

El atributo se crea en el archivo .ts Se importa el decorador INPUT primero.
Se llaman como funciones
            			@Input() nom_var = 'valores'
Dentro de los paréntesis se escribe el nombre que se le dará al atributo fuera del componente. Este atributo se utiliza en el componente padre.


	    	    D E C O R A D O R   @ O U T P U T

Este decorador se utiliza para emitir eventos. Se define en el componente hijo.
     	@Output nom_va = 'valores'



DOBLE ENLACE / TWO WAY BIDING

ngModel es un atributo que nos va a ayudar para el manejo de variables
Se encuentra en el módulo FORMSMODULE que se encuentra en
	                                            			@angular/forms
por lo que se debe llamar en el app.module o en el módulo que le corresponde.

Para utilizarlo en este caso, se debe llamar con paréntesis y corchetes [(ngModel)]. Esto lo que le indica a la variable es que está doblemente enlazada con el input: si se cambia el valor en el input, también se modifica en la variable y viceversa
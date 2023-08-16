# Casting-app
Proyecto final del bootcamp Fullstack web developer.

Es un proyecto desarrollado por 8 programadores, en el cual se emuló una aplicación que permitiria conectar agencias de publicidad o departamentos de mercadeo de distintas empresas con talentos nuevos o poco conocidos en el medio laboral, permitiendo mejorar los tiempos de busqueda de talento, reduccion de costo y muchos beneficios mas...

![Rodaje](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVqJ0XCbF_uWWd7RR-I55YY13WmGvWQ1rQg&usqp=CAU)

# **Casting-app** | Proyecto Final

## **📌 OBJETIVOS**

-  Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize** Falta incluir tecnologías.
-  Poner en práctica recursos avanzados de estilos y diseño (UX : UI).
-  Demostrar los conceptos aprendidos en la carrera.
-  Aprender mejores prácticas.
-  Aprender y practicar el workflow de GIT.
-  Utilizar y practicar testing.

<br />

---

## **⏱ HORARIOS Y FECHAS**

El proyecto final tiene una duración máxima de tres semanas. Se inicia la primera semana con un Kick-Off, y se agendará una corrección personalizada la última semana.

Se tendran tres springs (demo) uno semanal con el objetivo de poder revizar y modificar el proyecto antes de la entrega final.

<br />

---

## **📋 PARA COMENZAR...**

1. Clona el repositorio en tu computadora para comenzar a trabajar. Este repositorio contiene un **`BoilerPlate`** con la estructura general del proyecto, tanto del servidor como del cliente. El boilerplate cuenta con dos carpetas: **`api`** y **`client`**. En estas carpetas estará el código del back-end y el front-end respectivamente.
  
<br />

---

## **📖 ENUNCIADO GENERAL**

La idea de este proyecto es construir una aplicación web hdgjhfgkygjf:

-  hfcgs,dfgl
-  kjsdcfhusfy7if
-  jksdfhliuyfsifgh
-  jkhfcuSIDFYUILDSHFYLIUFH
-  KJHCGGHKYUSGVVF

<br />

---

<div align="center">

## **📁 INSTRUCCIONES**

</div>

<br />

### **🖱 BASE DE DATOS**

Para nuestra Base de Datos, utilizamos las tecnologías de Sequelize y PostgreSQL. En total hemos creado 18 modelos con sus respectivas relaciones. 

**📍 MODELO 1 | Admin
<br />

**📍 MODELO 2 | Applied
<br />

**📍 MODELO 3 | Company
<br />

**📍 MODELO 4 | CompanySelectedAsFav
<br />

**📍 MODELO 5 | DisableCompany
<br />

**📍 MODELO 6 | DisableEvent
<br />

**📍 MODELO 7 | DisableTalent
<br />

**📍 MODELO 8 | Event
<br />

**📍 MODELO 9 | Messenger
<br />

**📍 MODELO 10 | Payment
<br />

**📍 MODELO 11 | Report
<br />

**📍 MODELO 12 | Reviews
<br />

**📍 MODELO 13 | SubscriptionPayment
<br />

**📍 MODELO 14 | SubscriptionPlan
<br />

**📍 MODELO 15 | Talent
 <br />

**📍 MODELO 16 | TalentApplied
<br />

**📍 MODELO 17 | TalentSelectedAsFav
<br />

**📍 MODELO 18 | ToContact
<br />

### **🖱 BACK-END**

📍Controladores y Manejadores en CastinApp

Introducción: 

    En el contexto de la aplicación CastinApp, que se centra en la gestión de casting para eventos y talentos, los controladores (controllers) y manejadores (handlers) desempeñan un papel esencial para garantizar la funcionalidad eficiente y ordenada de la plataforma. Estos componentes permiten una estructura modular y la separación de responsabilidades, contribuyendo así a un código más mantenible y escalable.


🖱 Alcances de los Controladores en CastinApp

    En la arquitectura de CastinApp, los controladores desempeñan un papel crucial en la coordinación de diversas áreas clave de la plataforma. Los alcances específicos de los controladores son:

   📌 Gestión del Flujo de Trabajo: Los controladores en cada segmento, como "admin," "companies," "events," "talents," etc., gestionan el flujo de trabajo específico para cada entidad. Por ejemplo, los controladores de "companies" manejan la lógica detrás de las acciones relacionadas con las empresas inscritas en la plataforma.

   📌 Interacción con la Base de Datos: Los controladores interactúan con la base de datos para realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en los datos pertinentes. Por ejemplo, los controladores de "events" pueden crear eventos, listarlos, actualizarlos y eliminarlos según sea necesario.

   📌 Validación y Seguridad: Los controladores son responsables de validar los datos de entrada y garantizar la seguridad de la información. Esto es especialmente importante en aspectos como "forms," donde los usuarios envían información relevante para el casting.

Arquitectura Controller en castinApp:

📁controller
<br />
   📁admin
   <br />
     📋 adminControllers.js   
     <br />
   📁companies
   <br />
     📋 companiesController.js
     <br />
     📋 conditionPlanController.js
     <br />
     📋 talentContactController.js
     <br />
     📋 talentFavoriteController.js
     <br />
   📁events
   <br />
     📋 companyFormController.js
     <br />
     📋 eventsController.js
     <br />
     📋 talentFormController.js
     <br />
   📁payments
     📋 companypaymentsController.js
     📋 paymentsController.js
   📁plans
   <br />
     📋 plansController.js
     <br />
   📁report
   <br />
     📋 reportController.js
     <br />
   📁reviews
   <br />
     📋 reviewsController.js
     <br />
   📁talents
   <br />
     📋 companyfavoriteController.js
     <br />
     📋 postulationsController.js
     <br />
     📋 talentsController.js
         
    
🖱 Importancia de los Manejadores en CastinApp

  Los manejadores desempeñan un papel vital en CastinApp para manejar interacciones específicas y eventos clave dentro de la plataforma. Su relevancia se destaca en:

  📌 Respuesta a Solicitudes de Usuarios: Los manejadores se utilizan para responder a las solicitudes de los usuarios, como la creación de eventos, la inscripción de talentos o la gestión de pagos. Cada segmento tiene sus propios manejadores para garantizar una experiencia de usuario fluida y personalizada.

  📌 Eventos Asincrónicos: En un entorno donde los eventos pueden ocurrir de manera asincrónica, como "reviews" o "payments," los manejadores son cruciales para gestionar y responder a estos eventos en tiempo real.

  📌 Mantenimiento de la Aplicación: Los manejadores también son esenciales para el mantenimiento y la actualización continua de CastinApp. Permiten agregar nuevas funcionalidades, ajustar la lógica existente y solucionar problemas de manera específica y modular.


Arquitectura Handler en castinApp:

📁handlers
<br />
  📁admin
  <br />
    📋 adminHandlers.js
    <br />
  📁companies
  <br />
    📋 companiesHandler.js
    <br />
    📋 conditionPlanHandler.js
    <br />
    📋 talentContactHandler.js
    <br />
    📋 talentFavoritehandler.js
    <br />
  📁emails
  <br />
    📋 emailsHandler.js
    <br />
  📁events
  <br />
    📋 eventsHandler.js
    <br />
  📁forms
  <br />
    📋 companiesFormHandler.js
    <br />
    📋 eventFormHandler.js 
    <br />
    📋 talentFormHandler.js
    <br />
  📁payments
  <br />
    📋 companiesPaymentsHandler.js
    <br />
    📋 paymentsHandler.js
    <br />
  📁plans
  <br />
    📋 planHandler.js
    <br />
  📁reports
  <br />
    📋 reportHandler.js  
    <br />
  📁reviews
  <br />
    📋 reviewsHandler.js
    <br />
  📁talents
  <br />
    📋 companyFavoriteHandler.js
    <br />
    📋 postulationsHandler.js
    <br />
    📋 talentsHandler.js

    

🖱 Conclusión

  En la aplicación CastinApp, los controladores y manejadores son pilares fundamentales que permiten una gestión eficiente de la plataforma. A través de una estructura modular y la separación de responsabilidades, los controladores coordinan acciones y la lógica de negocio en diferentes segmentos. Los manejadores responden a eventos y solicitudes, asegurando una experiencia fluida y personalizada para los usuarios. En conjunto, estos componentes contribuyen al desarrollo de una plataforma escalable, mantenible y eficiente para la gestión de casting y talentos.

<br />

---

<br />

### **🖱 FRONT-END**

Para cada una de las vistas desarrolladas y diseñadas se aplicaron las siguientes tecnologías: 
- React js
- Redux
- Css modules
- Bootstrap
- Toastify
- NodeMailer
- Formspree
- Chart.js
- Figma
- Paypal developer
- Auth 0

**📍 LANDING PAGE |

Esta es la vista inicial del proyecto, donde se va a mostrar información de la aplicación de forma general, como por ejemplo:

- Navbar dinámico. Se encuentran los accesos al login y distintas secciones del landing
- Main scrolling. Se puede ver una imagen de presentacion, un slider con los evento correspondientes a empresas con el plan premium, la informacion de los servicios ofrecidos, tips para el usuario y un formulario para contactar al equipo de Casting App. 
- Footer. Contiene el acceso al dashboard para ingresar mediante un login a la cuenta de administrador, donde se podran ver métricas, deshabilitar, eliminar y habilitar usuarios y/o eventos,

<br />

**📍 LOGIN REGISTRO |

Esta ventana divide la aplicación en dos partes de acuerdo al tipo de usuario que se registra o se logea. Estos usuarios pueden ser "Talentos" o "Empresas". Se integro el servicio de Auth 0 para poder ingresar con la autorización de terceros o tambien de manera local.

Una vez registrado, se redirige al usuario al home correspondiente

<br />

A continuación detallaremos cada una de las vistas correspondiente al usuario Empresa, las cuales tendrán acceso a una Navbar lateral general. Dicha Navbar permite la redirección a: Home, Perfil, Reviews, Salir y Ajustes.

**📍 HOME PAGE EMPRESA |

-  Navbar superior. Permite redirigir al usuario a: Crear Evento, Eventos Finalizados, Talentos Contratados y Una vista de Planes. 
-  Carta de perfil. Sección que muestra una carta con la imagen y la información del usuario (nombre y plan actual)
-  Eventos Publicados. Una sección que muestra los eventos publicados por la empresa con la opción de poder editarlos o finalizarlos.
-  Postulantes Conectados. En esta sección se podrán visualizar los postulantes a eventos que fueron contactados, los cuales pueden ser rechazados o contratados. 
-  Postulantes Favoritos: En esta sección se podrán visualizar los talentos seleccionados como Favoritos, pudiendo eliminarlo, enviar un mensaje y tambien contiene una busqueda por nombre.

<br />

**📍 HOME PAGE TALENTO |

-  Navbar superior. Permite redirigir al usuario a: Crear Evento, Eventos Finalizados, Talentos Contratados y Una vista de Planes. 
-  Sección que muestra una carta con la imagen y la informacion del usuario (nombre y plan actual)
-  Cuando se le hace click a una Card deberá redirigir al detalle de ese país específico.
-  Botones/Opciones para **filtrar** por continente y por tipo de actividad turística.
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población.
-  Paginado: el listado de países se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 10 países por página.

<br />

**📍 DETAIL PAGE |** en esta vista se deberá mostrar toda la información específica de un país:

-  ID (Código de tres letras).
-  Nombre.
-  Imagen de la bandera.
-  Continente.
-  Capital.
-  Subregión (si tiene).
-  Área (si tiene).
-  Población.

<br />

**📍 FORM PAGE |**: en esta vista se encontrará el formulario para crear una actividad turística.

Este formulario debe ser **controlado completamente con JavaScritp**. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

-  Nombre.
-  Dificultad.
-  Duración.
-  Temporada.
-  Posibilidad de seleccionar/agregar varios países en simultáneo.
-  Botón para crear la actividad turística.

> [**IMPORANTE**]: es requisito que el formulario de creación esté validado sólo con JavaScript. Puedes agregar las validaciones que consideres. Por ejemplo: que el nombre de la actividad no pueda contener números, o que la duración no pueda exceder determinado valor, etc.

<br />

---

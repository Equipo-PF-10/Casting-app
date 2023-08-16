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

-  ID. 
-  Email. 
-  Password. 

<br />

**📍 MODELO 2 | Applied

-  ID. 
-  Date.
-  changeData.
-  Active.
-  Status.
-  Talentreviews.
-  TalentreviewsComentary.
-  Companyreviews.
-  CompanyreviewsComentary.
-  EventId.

<br />

**📍 MODELO 3 | Company
- ID.
- Name.
- Image.
- Country.
- Available.
- Domain.
- descriptionShort.
- Instagram.
- Facebook.
- phoneNumber.
- numberPosts.
- Plan.
- conditionPlan.
- planFree.
- Linkedin.
- Twitter.
- Password.
- Email.
- industryMain.
- Description.
- creationDate.
- expirationDate.
- Reviews.
- reviewsCount.

<br />

**📍 MODELO 4 | CompanySelectedAsFav
- Id.
- Name.
- Logo.
- Country.
- Available.
- Domain.
- descriptionShort.
- Instagram.
- Facebook.
- Linkedin.
- Twitter.
- Password.
- Email.
- industryMain.
- Description.
- phoneNumber.
- Plan.
- conditionPlan.
- creationDate.
- expirationDate.
- Reviews.
- reviewsCount.

  <br />

**📍 MODELO 5 | DisableCompany
- Id.
- Name.
- Image.
- Country.
- Available.
- Domain.
- descriptionShort.
- Instagram.
- Facebook.
- phoneNumber.
- numberPosts.
- Plan.
- conditionPlan.
- Linkedin.
- Twitter.
- Password.
- Email.
- industryMain.
- Description.
- creationDate.
- expirationDate.
- Reviews.
- reviewsCount.

<br />

**📍 MODELO 6 | DisableEvent
- Id.
- Name.
- Image.
- shortDescription.
- Detail.
- Active.
- Ubication.
- habilityRequired.
- habilitySalary.
- creationDate.
- expirationDate.
- changeDate.
- Contact.
- CompanyId.

<br />

**📍 MODELO 7 | DisableTalent
- Id.
- Email.
- Name.
- Dni.
- Password.
- Available.
- aboutMe.
- Image.
- Gender.
- Nationality.
- Ubication.
- Hability.
- Contexture.
- Weight.
- ethnicOrigin.
- dateComeBack.
- socialNework.
- Portfolio.
- Contact.
- Reviews.
- reviewsCount.


<br />

**📍 MODELO 8 | Event
- Id.
- Name.
- Image.
- shortDescription.
- Description.
- Active.
- Ubication.
- habilityRequired.
- Salary.
- creationDate.
- expirationDate.
- changeDate.
- Contact.

<br />

**📍 MODELO 9 | Messenger
- Name.
- Email.
- Content.
- Read.

<br />

**📍 MODELO 10 | Payment
- Id.
- orderId.
- Amount.
- Status.
- buyerName.
- mercadoPagoPaymentId.
- returnUrl.
- notificationUrl.

<br />

**📍 MODELO 11 | Report
- Id.
- Text.
- Report.
- CompanyId.
- TalentId.

<br />

**📍 MODELO 12 | Reviews
- Id.
- Text.
- Rating.
- CompanyId.
- TalentId.

<br />

**📍 MODELO 13 | SubscriptionPayment
- Id.
- paymentId.
- planType.
- paymentDate.
- expirationDate.
- Price.
- Taxes.

<br />

**📍 MODELO 14 | SubscriptionPlan
- Id.
- Name.
- Description.
- Price.

<br />

**📍 MODELO 15 | Talent
- Id.
- Email.
- Name.
- Dni.
- Password.
- Available.
- aboutMe.
- Image.
- Gender.
- Nationality.
- Ubication.
- Hability.
- Contexture.
- Weight.
- Height.
- ethnicOrigin.
- dateComeBack.
- socialNetwork.
- Portfolio.
- Contact.
- Reviews.
- reviewsCount.
- creationDate.

 <br />

**📍 MODELO 13 | TalentApplied
- Id.
- TalentId.
- AppliedId.

<br />

**📍 MODELO 14 | TalentSelectedAsFav
- Id.
- Email.
- Name.
- Dni.
- Password.
- Available.
- aboutMe.
- Image.
- Gender.
- Nationality.
- Ubication.
- Hability.
- Contexture.
- Weight.
- Height.
- ethnicOrigin.
- dateComeback.
- socialNetwork.
- Portfolio.
- Contact.
- Reviews.
- reviewsCount.

<br />

**📍 MODELO 15 | ToContact
- Id.
- Date.
- changeDate.
- Active.
- Status.
- Talentreviews.
- TalentreviewsComentary.
- Companyreviews.
- CompanyreviewsComentary.
- EvemtId.

<br />

### **🖱 BACK-END**

Para esta parte deberás construir un servidor utilizando **NodeJS** y **Express**. Tendrás que conectarlo con tu base de datos mediante **Sequelize**.

En una primera instancia:
Tu servidor deberá contar con las siguientes rutas:

#### **📍 GET | /sefrAEr**

-  sdfasdfsEFf

  
#### **📍 GET | /qwreadfesr**

-  asdfsdfasdfSFF
-  WEFsfSDFsdf
-  sDFSDGFASFVS

#### **📍 GET | /afSEFASDFGA"**

-  gyvghvblkhfv
-  jhyuiasdyfvhoifvh
-  khdfuilhsadciluashci

#### **📍 POST | /afrSFSDFGA**

-  khguifhyluif
-  hdfcgusdgf
-  dfsadfgsfgsadf

#### **📍 GET | /SEFSADFASF**

-  dffsdffff

<br />

---

<br />

### **🖱 FRONT-END**

Se debe desarrollar una aplicación utilizando **React** y **Redux** que contenga las siguientes vistas:

**📍 LANDING PAGE |** deberás crear una página de inicio o bienvenida con:

-  Alguna imagen de fondo representativa al proyecto.
-  Botón para ingresar a la **`home page`**.

<br />

**📍 HOME PAGE |** la página principal de tu SPA debe contener:

-  SearchBar: un input de búsqueda para encontrar países por nombre.
-  Sector en el que se vea un listado de cards con los países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta **`GET /countries`** y deberá mostrar su:
   -  Imagen de la bandera.
   -  Nombre.
   -  Continente.
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

# React

Es un librería que se usa para la contrucción de interfaces de usuario

## JSX

Es JS y HTML, un sistema de plantillas que sirve para React; permite
hacer HTML dentro de JS; nos permite sacasle el mayor provecho a HTML
con JS

## Virtual DOM

Es una virtualización del DOM que permite gestionar el real DOM con los
cambios de estados; gracias a esto podemos omitir la recarga de una page
(Esto permite el uso de SPA).

## Life cicle

Es el proceso mediante el cual se crean y eliminan componetes, esto permite
optimizar y "CRUD"

## State

Estas son variables globales que son accesibles por diversos componentes,
similar a Vuex de Vue

## Event

Son los eventos clasiclos de JS

## Hooks

Son manejadores de los estados que posee react, nos permiten modificar y
gestionar estados dentro de la aplicación, son similares a eventos pero
estan contenidos dentro del life cicle; pueden verse como eventos dentro
del life cicle de un component

## babelrc

Este archivo contiene la invocación a dependencias de babel para poder compilar
JS a versiones entendibles por el navegador además (Para este caso) de poder
entender el codigo de JSX

## webpack.config.js

Este archivo contiene la configuración de webpack, indica a webpack como proceder
con los archivos para compilarlos, procesarlos, moverlos, etc

# Atomic design

- Components: pieza más pequeño (átomo).
- Containers: Muestran la unión de uno o más componentes.
- Pages: Son las secciones / rutas que vamos a tener

# Tipos de componentes

Existen 2 tipos de componentes, los componentes de tipo "stateful" y los componentes
de tipo "stateless"; como sus nombres indican son componentes de que y sin estado,
en una aplicación de React se encuentran los 2 tipos conviviendo usualmente, pues
un componente stateful es simplemente un componente que si hace uso del estado de
React mientras que un componente stateless es un componente que no hace uso del estado
de React, ya sea para simplemente mostrar texto o props de otros componentes, etc.

### Class components

Estos son los componentes que hacen uso de "extendes React.Component"; esto así para
las clases de JS, esta versión de React ya no es muy usada; pero solía ser muy usada,
ha sido desplazada por los componentes de tipo stateless y stateful; se muy similar al
trabajo ordinario con clases

### HOC (High Order Components)

Estos son un tipo de "decorador" dentro de React, tambien ha sido desplazado por los
stateful y los stateless; se usan para extender las funcionalidades de un componente
dandole a estos nuevas función y regresando la nueva "versión" de este componente
(Es realmente muy similar a un decorador)

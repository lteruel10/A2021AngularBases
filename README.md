# Bases
// crear proyuecto angular
* ng new bases
* ng --version //para ver la vesion isntalada

# || significa o y en el ejemplo lo que significa es que si es undefined mostrara ''
   this.heroeBorrado =this.heroes.shift()|| '';


# Referencias locales para usar else en *ngIf sond e Angular
<div *ngIf="heroeBorrado; else noBorrado" class="">
        <h3  >Heroe borrado  <small>{{heroeBorrado}}</small></h3>
</div>

<ng-template #noBorrado >
    <h3  >Ningun Heroe borrado</h3>
</ng-template>


# Modulos
* ng g m nombreModulo //creamos el modulo
* ng g c dbz dbz/mainPage //creamos el componente dbz 
*  ng g c dbz/mainPage --skipTests//evita poner el test 

# FORMULARIOS EL
* prevenir refrescameitno de pantalla con formularios el
* en dbz.module.ts agregar a los imports FormsModule
    *  imports: [
            CommonModule,
            FormsModule
        ]
    * luego agregarmos ngSubmit en el formulario
    <form (ngSubmit)="agregar()" >


* () eschuchar o emite un evento
* [] establecer propiedad a un objeto



* EMITE RECIBE YESTABLECE
            name="nombre"
            [(ngModel)]="nuevo.nombre"//TOMOA LO DEL INPUT a travez de submit..

# COMPONENTES PADRES E HIJOS

@Input() personajes:any[]=[]; //EL @input le dice que tiene o hereda del padre

  @Input('data') personajes:any[]=[];// para evitar la redundancia le cambiamos el nombre al iput de personjes a 'data'











///creado x angular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

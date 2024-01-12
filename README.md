# React-Meetup
## Prueba ténica - APARTADO 1.1

```Javascript
class RegisteredUser {
  constructor(email, password, registration, adult, notificationPreferences, services = []) {
      this.email = email;
      this.password = password;
      this.registration = registration;
      this.adult = adult;
      this.notificationPreferences = notificationPreferences;
      this.services = services;
  }

  changeEmail(newEmail) {
      this.email = newEmail;
  }

  changePassword(newPassword) {
      this.password = newPassword;
  }

  changeAdultContent(adultContent) {
      this.adult = adultContent;
  }

  changeNotificationPreferences(notificationPreferences) {
      this.notificationPreferences = notificationPreferences;
  }

  updateName(newName) {
      this.name = newName;
  }

  updateBirthDate(newBirthDate) {
      this.birthDate = newBirthDate;
  }

  updateCountry(newCountry) {
      this.country = newCountry;
  }

  getTotal() {
      let total = 0;

      this.services.forEach((service, index) => {
          let multimediaContent = service.getMultimediaContent();

          if (typeof service == StreamingService) {
              total += multimediaContent.streamingPrice;
          } else if (typeof service == DownloadService) {
              total += multimediaContent.downloadPrice;
          }

          if (multimediaContent instanceof PremiumContent) {
              total += multimediaContent.additionalFee;
          }
      });
      return total;
  }

}

```

- Utilizar el instaceof para poder realizar comparaciones de  tipos de servicios

- Manejar servicios que no son ni de streaming ni descarga

- El total fijado a un valor float o cualquier otro valor que no sea un entero ya que puede ser un precio variable tipo 9.99 y no fijo a 9.

- Añadir mas funcionalidad a la clase RegisteredUser, para cambiar preferencias de usuario.

- Añadimos metodos para permitir a los usuarios modificar sus preferencias de contenido y ajustar preferencias de la cuenta.

- Añadir poder cambiar el email, cambiar la contraseña, el contenido de adultos o no, cambiar sus notificaciones, fecha de nacimiento de la persona o su pais.

## Prueba ténica - APARTADO 1.2

1. Para el header se requiere una animación para tener un acceso rápido a las distintas páginas cuando hacemos scroll. Se quiere que cuando hacemos scroll down, este tiene que desaparecer y cuando hacemos scroll up tiene que volver a aparecer en la posición de la página dónde te encuentres.

2. Desde el header se puede navegar a las distintas páginas, pero por temas de SEO se requiere que esta navegación se vea reflejada en la url. (Ejemplo: la página de favoritos podría ser /favorites)

3. El botón de añadir a favoritos no está funcionando. Implementa la lógica para añadir y quitar de favoritos.

4. Implementación de algún test. Puede ser e2e, unitario o funcional. En el proyecto encontrarás algunos test que el programador que inició el proyecto, empezó a hacer.

## 1 - Apartado

- Para el header se requiere una animación para tener un acceso rápido a las distintas páginas cuando hacemos scroll. Se quiere que cuando hacemos scroll down, este tiene que desaparecer y cuando hacemos scroll up tiene que volver a aparecer en la posición de la página dónde te encuentres.

Iremos validando a traves de los eventos del scroll cuando el usuario va subiendo o bajando en la web y apartir de hay determinaremos en que momento debe aparecer el header o no.

## 2 - Apartado

- Desde el header se puede navegar a las distintas páginas, pero por temas de SEO se requiere que esta navegación se vea reflejada en la url. (Ejemplo: la página de favoritos podría ser /favorites)

Para ello hemos instalado react-router-dom@6 version 6 para hacer el sistema de rutas y que para ello sea mas cómodo el desplazarte por la página.

## 3 - Apartado

- El botón de añadir a favoritos no está funcionando. Implementa la lógica para añadir y quitar de favoritos.

Para ello usaremos context para poder globalizar la informacion y utilizarla en los componentes que nos sean necesarios para poder mandar la informacion de componente a componente y poder utilizarla en dicho componente para poder agregar o quitar de favoritos.

## 4 - Apartado

- 4. Implementación de algún test. Puede ser e2e, unitario o funcional. En el proyecto encontrarás algunos test que el programador que inició el proyecto, empezó a hacer.

En el archivo de MeetupItem.test.js estamos haciendo pruebas de que useFetch devuelve un objeto con datos. 
Comprobamos tambien si se verifica correctamente el renderizado.
Por ultimo comprobamos que cuando no llegen datos se quede en carga de "Loading..."

## Instalación

Descarga el proyecto y ejecuta en terminal el comando npm install o yarn add, para instalar las dependencias necesarias.

```sh
npm install | npm i | yarn add
```

Lo siguiente es ejecutar el proyecto con npm run start o yarn start

```sh
npm run start | yarn start
```

## Plugins

Dependencias utilizadas fuera del proyecto.

| Dependencias | README |
| ------ | ------ |
| react-router-dom@6 | [https://reactrouter.com/en/main/start/overview] |

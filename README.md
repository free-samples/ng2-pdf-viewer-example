## ng2-pdf-viewer Example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1. It implements the ng2-pdf-viewer component from:

https://github.com/VadimDez/ng2-pdf-viewer/ 


#### Install dependencies

Either use npm or yarn. I used yarn.

###yarn

````
yarn install
````

###npm

````
npm install
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Example loading from another server

```
# From the cloned repo folder
cd src/assets
# Run any server to make the PDF available 
# through http://localhost:9000/another-test.pdf
# I used PHP
php -S localhost:9000
```
Open a browser to open the client. Then click on the **FETCH PDF** button. Rendered PDF should change. You may have to install a plugin to disable CORS policy.



/* Controlador del patrón VISTA-MODELO-CONTROLADOR
*/
/*
import {
    Laptop, Camera, Smartphone, Tablet,
  } from './manager.js';
  
  */

  /*
  const MODEL = Symbol('ShoppingCartModel');
  const VIEW = Symbol('ShoppingCartView');
  const LOAD_MANAGER_OBJECTS = Symbol('Load Manager Objects'); //variable privada
  
  class ManagerController {
    constructor(model, view) {
      this[MODEL] = model;
      this[VIEW] = view;

      //comprobacion funcionamiento
      alert();
  
      this.onLoad(); //cargamos
      this.onInit(); //cargamos
  
      this[VIEW].bindInit(this.handleInit);
  
      // this.onInit();
      // this.onAddCategory();
    }
  
    // en esta ocasion y con diferencia al shopingCart aqui se carga todo de MANERA INTERNA de esta forma no es
    // necesario hacer publicos los constructores de las ENTIDADES importandolas al principio
    // en otras practicas esta carga de objetos se realizará desde el SERVIDOR
    
    [LOAD_MANAGER_OBJECTS]() {
      const category1 = this[MODEL].getCategory('Apple', 'img/brands/apple.png');
      const category2 = this[MODEL].getCategory('HP', 'img/brands/HP.png');
      const category3 = this[MODEL].getCategory('Microsoft', 'img/brands/microsoft.png');
      const category4 = this[MODEL].getCategory('Samsung', 'img/brands/samsung.png');
      category1.description = 'Think Different.';
      category2.description = 'HP makes technology work for you.';
      category3.description = 'Be what\'s next.';
      category4.description = 'Designed For.';
  
      //añado al modelo
      this[MODEL].addCategory(category1, category2, category3, category4);
  
      const product1 = this[MODEL].getProduct('1', 'Apple', 'Laptop Model1', 1100, 'Laptop');
      const product2 = this[MODEL].getProduct('2', 'Apple', 'Camera Model2', 1200, 'Camera');
      const product3 = this[MODEL].getProduct('3', 'Apple', 'Smartphone Model3', 1300, 'Smartphone');
      const product4 = this[MODEL].getProduct('4', 'Apple', 'Tablet Model4', 1400, 'Tablet');
      const product5 = this[MODEL].getProduct('5', 'Apple', 'Laptop Model5', 1500, 'Laptop');
      const product6 = this[MODEL].getProduct('6', 'HP', 'Laptop Model1', 2100, 'Laptop');
      const product7 = this[MODEL].getProduct('7', 'HP', 'Camera Model2', 2200, 'Camera');
      const product8 = this[MODEL].getProduct('8', 'HP', 'Tablet Model3', 2300, 'Tablet');
      const product9 = this[MODEL].getProduct('9', 'HP', 'Smartphone Model4', 2400, 'Smartphone');
      const product10 = this[MODEL].getProduct('10', 'HP', 'Laptop Model5', 2500, 'Laptop');
      const product11 = this[MODEL].getProduct('11', 'Microsoft', 'Laptop Model1', 3100, 'Laptop');
      const product12 = this[MODEL].getProduct('12', 'Microsoft', 'Camera Model2', 3200, 'Camera');
      const product13 = this[MODEL].getProduct('13', 'Microsoft', 'Tablet Model3', 3300, 'Tablet');
      const product14 = this[MODEL].getProduct('14', 'Microsoft', 'Smartphone Model4', 3400, 'Smartphone');
      const product15 = this[MODEL].getProduct('15', 'Microsoft', 'Laptop Model5', 3500, 'Laptop');
      const product16 = this[MODEL].getProduct('16', 'Samsung', 'Laptop Model1', 4100, 'Laptop');
      const product17 = this[MODEL].getProduct('17', 'Samsung', 'Camera Model2', 4200, 'Camera');
      const product18 = this[MODEL].getProduct('18', 'Samsung', 'Tablet Model3', 4300, 'Tablet');
      const product19 = this[MODEL].getProduct('19', 'Samsung', 'Tablet Model4', 4400, 'Tablet');
      const product20 = this[MODEL].getProduct('20', 'Samsung', 'Laptop Model5', 4500, 'Laptop');
  
      product1.url = `https://via.placeholder.com/258x172.jpg?text=${product1.brand}+${product1.model}`;
      product2.url = `https://via.placeholder.com/258x172.jpg?text=${product2.brand}+${product2.model}`;
      product3.url = `https://via.placeholder.com/258x172.jpg?text=${product3.brand}+${product3.model}`;
      product4.url = `https://via.placeholder.com/258x172.jpg?text=${product4.brand}+${product4.model}`;
      product5.url = `https://via.placeholder.com/258x172.jpg?text=${product5.brand}+${product5.model}`;
      product6.url = `https://via.placeholder.com/258x172.jpg?text=${product6.brand}+${product6.model}`;
      product7.url = `https://via.placeholder.com/258x172.jpg?text=${product7.brand}+${product7.model}`;
      product8.url = `https://via.placeholder.com/258x172.jpg?text=${product8.brand}+${product8.model}`;
      product9.url = `https://via.placeholder.com/258x172.jpg?text=${product9.brand}+${product9.model}`;
      product10.url = `https://via.placeholder.com/258x172.jpg?text=${product10.brand}+${product10.model}`;
      product11.url = `https://via.placeholder.com/258x172.jpg?text=${product11.brand}+${product11.model}`;
      product12.url = `https://via.placeholder.com/258x172.jpg?text=${product12.brand}+${product12.model}`;
      product13.url = `https://via.placeholder.com/258x172.jpg?text=${product13.brand}+${product13.model}`;
      product14.url = `https://via.placeholder.com/258x172.jpg?text=${product14.brand}+${product14.model}`;
      product15.url = `https://via.placeholder.com/258x172.jpg?text=${product15.brand}+${product15.model}`;
      product16.url = `https://via.placeholder.com/258x172.jpg?text=${product16.brand}+${product16.model}`;
      product17.url = `https://via.placeholder.com/258x172.jpg?text=${product17.brand}+${product17.model}`;
      product18.url = `https://via.placeholder.com/258x172.jpg?text=${product18.brand}+${product18.model}`;
      product19.url = `https://via.placeholder.com/258x172.jpg?text=${product19.brand}+${product19.model}`;
      product20.url = `https://via.placeholder.com/258x172.jpg?text=${product20.brand}+${product20.model}`;
      product1.description = `Descripción ${product1.model}`;
      product2.description = `Descripción ${product2.model}`;
      product3.description = `Descripción ${product3.model}`;
      product4.description = `Descripción ${product4.model}`;
      product5.description = `Descripción ${product5.model}`;
      product6.description = `Descripción ${product6.model}`;
      product7.description = `Descripción ${product7.model}`;
      product8.description = `Descripción ${product8.model}`;
      product9.description = `Descripción ${product9.model}`;
      product10.description = `Descripción ${product10.model}`;
      product11.description = `Descripción ${product11.model}`;
      product12.description = `Descripción ${product12.model}`;
      product13.description = `Descripción ${product13.model}`;
      product14.description = `Descripción ${product14.model}`;
      product15.description = `Descripción ${product15.model}`;
      product16.description = `Descripción ${product16.model}`;
      product17.description = `Descripción ${product17.model}`;
      product18.description = `Descripción ${product18.model}`;
      product19.description = `Descripción ${product19.model}`;
      product20.description = `Descripción ${product20.model}`;
  
      //añado a distintas categorias
      this[MODEL].addProductInCategory(category1, product1, product2, product3, product4, product5);
      this[MODEL].addProductInCategory(category2, product6, product7, product8, product9, product10);
      this[MODEL].addProductInCategory(category3, product11, product12, product13, product14, product15);
      this[MODEL].addProductInCategory(category4, product16, product17, product18, product19, product20);
    }
  
    // Eventos de aplicación
  
    //evento de carga deberemos invocarlo desde el constructor
    onLoad = () => {
      this[LOAD_MANAGER_OBJECTS]();
      this[VIEW].showProductTypes();
      this[VIEW].showProductTypesInMenu();
      this.onAddCategory();
      this[VIEW].bindProductsTypeList(this.handleProductsTypeList);
      this[VIEW].bindProductsTypeListInMenu(this.handleProductsTypeList);
    };
  
    //carga de inicio debera ser invocado desde constructor
    onInit = () => {
      this[VIEW].showCategories(this[MODEL].categories);
      this[VIEW].bindProductsCategoryList(
        this.handleProductsCategoryList,
      );
    };
  
    onAddCategory = () => {
      this[VIEW].showCategoriesInMenu(this[MODEL].categories);
      this[VIEW].bindProductsCategoryListInMenu(
        this.handleProductsCategoryList,
      );
    };
  
    // Métodos handlers
  
    handleInit = () => { //manejador de inicio, en la VISTA definimos su metodo bind para darle funcionalidad
      this.onInit();
    };
  
    handleProductsCategoryList = (title) => {
      const category = this[MODEL].getCategory(title);
      this[VIEW].listProducts(this[MODEL].getCategoryProducts(category), category.title);
      this[VIEW].bindShowProduct(this.handleShowProduct);
    };
  
    handleProductsTypeList = (type) => {
      const instance = {
        Laptop,
        Camera,
        Smartphone,
        Tablet,
      };
      if (instance[type]) {
        this[VIEW].listProducts(this[MODEL].getTypeProducts(instance[type]), type);
        this[VIEW].bindShowProduct(this.handleShowProduct);
      } else {
        throw new Error(`${type} isn't a type of Product.`);
      }
    };
  
    handleShowProduct = (serial) => {
      try {
        const product = this[MODEL].getProduct(serial);
        this[VIEW].showProduct(product);
        this[VIEW].bindShowProductInNewWindow(
          this.handleShowProductInNewWindow,
        );
      } catch (error) {
        this[VIEW].showProduct(null, 'No existe este producto en la página.');
      }
    };
  
    handleShowProductInNewWindow = (serial) => {
      try {
        const product = this[MODEL].getProduct(serial);
        this[VIEW].showProductInNewWindow(product);
      } catch (error) {
        this[VIEW].showProductInNewWindow(null, 'No existe este producto en la página.');
      }
    };
  }
  
  export default ManagerController;
  */

  //1 variables privadas, lo que viene entre '' es solo a titulo descriptivo
  const MODEL = Symbol('ShoppingCartModel');
  const VIEW = Symbol('ShoppingCartView');
  //2 carga de objetos
  const LOAD_MANAGER_OBJECTS = Symbol('Load Manager Objects'); 

  //1 clase
  class ManagerController {
    constructor(model, view) {
      this[MODEL] = model;
      this[VIEW] = view;

      // lo que haya dentro de onLoad() solo se ejecutara una vez al cargar la pagina
      this.onLoad(); // 3 ejecuto metodo de carga dentro del constructor, luego pintaremos en VISTA
      this.onInit(); // 4 ejecuto metodo inicio
      this[VIEW].bindInit(this.handleInit); // 5 metodo bindInit lo creo en VISTA y ejecuto desde aqui

      //comprobacion funcionamiento
      
    }

    //2 metodo privado[] de carga, esto normalmente se hace desde el servidor
    [LOAD_MANAGER_OBJECTS]() {

      /*
      a 3 categorías, con 4 platos en cada categoría.
      b. 4 alergenos.
      c. 3 menús. Al menos 3 platos en cada menú.
      d. 3 restaurantes.

      */

      // a) creo 3 categorias
      /*p1 = Manager.getInstance().createCategory('entrante', 'Categoria que hace referencia a pequeños platos previos al primerPlato');
       asi lo hacia en la practica 4, ahora this[MODEL] contiene Manager.getInstance()*/
      const categoriaPrimer = this[MODEL].createCategory('primerPlato', 'siempre tendra ensalada, pasta o arroz','themes/assets/images/nepali-momo.png');
      const categoriaSegundo = this[MODEL].createCategory('segundoPlato', 'siempre tendra un pescado y una carne','themes/assets/images/nepali-momo.png');
      const categoriaPostre = this[MODEL].createCategory('postre', 'siempre habra un postre casero','themes/assets/images/nepali-momo.png');
      // a) creo platos 
      const plato1 = this[MODEL].createDish('macarrones', 'macarrones con tomates', ['tomate', 'carne picada'], 'https://via.placeholder.com/258x172.jpg?text=macarrones');
      const plato2 = this[MODEL].createDish('sopa pescado', 'de temporada', ['pescaado temporada', 'fideos', 'repollo', 'cebolla', 'apio'], 'https://via.placeholder.com/258x172.jpg?text=sopaPescado');
      const plato3 = this[MODEL].createDish('solomillo', 'a la pimienta', ['solomillo', 'nata', 'cebolla'], 'https://via.placeholder.com/258x172.jpg?text=solomilloPimienta');
      const plato4 = this[MODEL].createDish('helado a la albahaca', '2 bolas de limon', ['helado limon', 'albahaca', 'azucar'], 'https://via.placeholder.com/258x172.jpg?text=heladoAlbahaca');
      const plato5 = this[MODEL].createDish('frutaVariada', 'distintas frutas', ['naranja', 'platano'], 'https://via.placeholder.com/258x172.jpg?text=frutaVariada');
      const plato6 = this[MODEL].createDish('ensalada de pollo', 'ensalada al estilo gallego', ['lechuga', 'tomate', 'pollo'], 'https://via.placeholder.com/258x172.jpg?text=EnsaladaPollo');
      const plato7 = this[MODEL].createDish('bizcocho de la casa', 'casero', ['bizcocho', 'sirope naranja'], 'https://via.placeholder.com/258x172.jpg?text=bizcocho');
      const plato8 = this[MODEL].createDish('lubina', 'a la espalda', ['lubina', 'sal', 'limon'], 'https://via.placeholder.com/258x172.jpg?text=lubina');
      const plato9 = this[MODEL].createDish('entrecot', 'al gusto', ['entrecot', 'sal'], 'https://via.placeholder.com/258x172.jpg?text=entrecot');
      
      // a) añado 4 platos a cada categoria

      //CATEGORIA primer plato
      this[MODEL].assignCategoryToDish(categoriaPrimer,plato1,plato2,plato6);
      //CATEGORIA segundo plato
      this[MODEL].assignCategoryToDish(categoriaSegundo,plato3,plato8,plato9);
      //CATEGORIA postre
      this[MODEL].assignCategoryToDish(categoriaPostre,plato4,plato5,plato7);


      // b) creo 4 alérgenos
      const alergeno1 = this[MODEL].createAllergen('gluten', ' es una proteína que se encuentra en el trigo, la cebada, el centeno y a veces la avena, ');
      const alergeno2 = this[MODEL].createAllergen('crustaceo', ' Cangrejos, langostas, gambas, langostinos, carabineros, cigalas, etc');
      const alergeno3 = this[MODEL].createAllergen('pescado', ' ademas del pescado la Gelatina de pescado utilizada como soporte de vitaminas o preparados de carotenoides.');
      const alergeno4 = this[MODEL].createAllergen('cacahuete', ' se encuentra además en semillas, pasta y aceites, se puede encontrar en galletas, chocolates, postres, salsas, etc. ');
      // c) creo 3 menús. 
      const menu1 = this[MODEL].createMenu('semana Santa', ' constara de primer plato, segundo plato, postre, pan y una bebida,con opción de vigilia, precio 35 euros,');
      const menu2 = this[MODEL].createMenu('diario', ' constara de primer plato, segundo plato, postre, pan y una bebida, precio 15 euros');
      const menu3 = this[MODEL].createMenu('navidad', ' constara de dos entrantes, primer plato, segundo plato, postre, pan y dos consumiciones y una copa, precio 50 euros');
      // c) añado 3 platos a cada menu
      this[MODEL].assignDishToMenu(menu1,plato1,plato3,plato5);
      this[MODEL].assignDishToMenu(menu2,plato6,plato2,plato4);
      this[MODEL].assignDishToMenu(menu3,plato1,plato2,plato7);

      // d) creo 3 restaurantes
      const restaurante1 = this[MODEL].createRestaurant('El Vergel', ' con capacidad para 100 comensales', this[MODEL].createCoordinate(20, 30));
      const restaurante2 = this[MODEL].createRestaurant('Casa Lucia', ' con capacidad para 70 comensales', this[MODEL].createCoordinate(20, 60));
      const restaurante3 = this[MODEL].createRestaurant('El Patio', ' con capacidad para 80 comensales', this[MODEL].createCoordinate(30, 30));
      
    }

    // 3 añado evento de carga

    /*Al cargarse la página, debemos mostrar en la zona central todas las categorías que
    tengamos disponibles. Además, debe haber un menú con los enlaces a dichas categorías.
    El enlace de inicio de la página deberá mostrar esta distribución nuevamente. */
    onLoad = () => {
      //carga objetos
      this[LOAD_MANAGER_OBJECTS](); // cargo todos los objetos creados
      alert("Los objetos han sido cargados al Manager, dentro de onLOAD");
      //this[VIEW].showProductTypes(); // cargo metodo VISTA con las categorias

      //prueba menu cabecera
      //this[VIEW].showMenuCabecera();


      //para generar menu de categorias en la cabecera una unica vez
      //this.onAddCategory();

      //prueba mostrar categorias
      //this[VIEW].showCategories(this[MODEL].categories);

      this[VIEW].showCategoriesEnParteCentral(this[MODEL].categories);

    };

    //4 +++++++++++++++++++++++++++++ INIT Y MANEJADOR PARA EL INIT
    
    //carga de inicio debera ser invocado desde constructor
    onInit = () => {

      alert("iniciamos el Manager dentro de onInit");

      //pintara todas las categorias que tenemos en el array cargado
      //this[VIEW].showCategories(this[MODEL].categories);
      
      

      this[VIEW].bindProductsCategoryList(
        this.handleProductsCategoryList,
        

      );
      
    };

    handleInit = () => { //manejador de inicio, en la VISTA definimos su metodo bind para darle funcionalidad
      this.onInit();
    };

    // una vez creado estos los metodos init y handlervamos a la VISTA para crear su correspondiente BIND
    //+++++++++++++++++++++++++++ */

    //este metodo se hace para mostrar el menu con las distntas categorias que tenemos
    //invocamos desde onLoad
    onAddCategory = () => {
      this[VIEW].showCategoriesInMenu(this[MODEL].categories);
      this[VIEW].bindProductsCategoryListInMenu(
        this.handleProductsCategoryList,
      );
    };



  } //fin class

  export default ManagerController;



  
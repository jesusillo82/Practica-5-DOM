/* parte VISTA del patrón MODELO-VISTA-CONTROLADOR */


/* quito parte de shoping cart 



const EXCECUTE_HANDLER = Symbol('excecuteHandler');

class ManagerView {
  constructor() {
    this.main = document.getElementsByTagName('main')[0];
    this.categories = document.getElementById('categories');
    this.menu = document.querySelector('.navbar-nav');
    this.productWindow = null;
  }

  instance = {
    Laptop: this.LaptopCharacteristics,
    Camera: this.CameraCharacteristics,
    Smartphone: this.SmartphoneCharacteristics,
    Tablet: this.TabletCharacteristics,
  };

  [EXCECUTE_HANDLER](handler, handlerArguments, scrollElement, data, url, event) {
    handler(...handlerArguments);
    const scroll = document.querySelector(scrollElement);
    if (scroll) scroll.scrollIntoView();
    history.pushState(data, null, url);
    event.preventDefault();
  }

  LaptopCharacteristics(product) {
    return (`<div>Características de portátil. ${product.brand} ${product.model}</div>`);
  }

  CameraCharacteristics(product) {
    return (`<div>Características de cámara. ${product.brand} ${product.model}</div>`);
  }

  SmartphoneCharacteristics(product) {
    return (`<div>Características de teléfono. ${product.brand} ${product.model}</div>`);
  }

  TabletCharacteristics(product) {
    return (`<div>Características de tablet. ${product.brand} ${product.model}</div>`);
  }

  // Métodos para generar la vista.

  showProductTypes() {
    this.categories.replaceChildren();
    this.categories.insertAdjacentHTML('beforeend', `<div class="row" id="type-list">
      <div class="col-lg-3 col-md-6"><a href="#product-list" data-type="Camera">
          <div class="cat-list-image"><img alt="Categoría cámaras" src="img/catcamara.jpg" />
          </div>
          <div class="cat-list-text">
            <h3>Cámaras</h3>
            <div>Digitales y reflex</div>
          </div>
        </a>
      </div>
      <div class="col-lg-3 col-md-6"><a href="#product-list" data-type="Smartphone">
          <div class="cat-list-image"><img alt="Categoría móviles" src="img/catmovi.jpg" />
          </div>
          <div class="cat-list-text">
            <h3>Móviles</h3>
            <div>Modelos exclusivos</div>
          </div>
        </a>
      </div>
      <div class="col-lg-3 col-md-6"><a href="#product-list" data-type="Laptop">
          <div class="cat-list-image"><img alt="Categoría portátiles" src="img/catpportatil.jpg" />
          </div>
          <div class="cat-list-text">
            <h3>Portátiles</h3>
            <div>Intel y AMD</div>
          </div>
        </a>
      </div>
      <div class="col-lg-3 col-md-6"><a href="#product-list" data-type="Tablet">
          <div class="cat-list-image"><img alt="Categoría Tablets" src="img/cattablet.jpg" />
          </div>
          <div class="cat-list-text">
            <h3>Tablets</h3>
            <div>Android y iPad</div>
          </div>
        </a>
      </div>
    </div>`);
  }

  showProductTypesInMenu() {
    const productListMenu = document.getElementById('product-list-menu');
    productListMenu.insertAdjacentHTML('beforeend', `<ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#product-list" data-type="Camera">Cámaras</a></li>
        <li><a class="dropdown-item" href="#product-list" data-type="Laptop">Portátiles</a></li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="#product-list" data-type="Tablet">Tablets</a></li>
        <li><a class="dropdown-item" href="#product-list" data-type="Smartphone">Teléfonos móviles</a></li>
      </ul>`);
  }

  showCategories(categories) {
    if (this.categories.children.length > 1) this.categories.children[1].remove();
    const container = document.createElement('div');
    container.id = 'category-list';
    container.classList.add('row');
    for (const category of categories) {
      container.insertAdjacentHTML('beforeend', `<div class="col-lg-3 col-md-6"><a data-category="${category.title}" href="#product-list">
        <div class="cat-list-image"><img alt="${category.title}" src="${category.url}" />
        </div>
        <div class="cat-list-text">
          <h3>${category.title}</h3>
          <div>${category.description}</div>
        </div>
      </a>
    </div>`);
    }
    this.categories.append(container);
  }

  showCategoriesInMenu(categories) {
    const li = document.createElement('li');
    li.classList.add('nav-item');
    li.classList.add('dropdown');
    li.insertAdjacentHTML('beforeend', `<a class="nav-link dropdown-toggle" href="#" id="navCats" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>`);
    const container = document.createElement('ul');
    container.classList.add('dropdown-menu');

    for (const category of categories) {
      container.insertAdjacentHTML('beforeend', `<li><a data-category="${category.title}" class="dropdown-item" href="#product-list">${category.title}</a></li>`);
    }
    li.append(container);
    this.menu.append(li);
  }

  listProducts(products, title) {
    this.main.replaceChildren();
    if (this.categories.children.length > 1) this.categories.children[1].remove();
    const container = document.createElement('div');
    container.id = 'product-list';
    container.classList.add('container');
    container.classList.add('my-3');
    container.insertAdjacentHTML('beforeend', '<div class="row"> </div>');

    for (const product of products) {
      const div = document.createElement('div');
      div.classList.add('col-md-4');
      div.insertAdjacentHTML('beforeend', `<figure class="card card-product-grid card-lg"> <a data-serial="${product.serial}" href="#single-product" class="img-wrap"><img class="${product.constructor.name}-style" src="${product.url}"></a>
          <figcaption class="info-wrap">
            <div class="row">
              <div class="col-md-8"> <a data-serial="${product.serial}" href="#single-product" class="title">${product.brand} - ${product.model}</a> </div>
              <div class="col-md-4">
                <div class="rating text-right"> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> </div>
              </div>
            </div>
          </figcaption>
          <div class="bottom-wrap">
            <a href="#" data-serial="${product.serial}" class="btn btn-primary float-end"> Comprar </a>
            <div><span class="price h5">${product.price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</span> <br> <small class="text-success">Free shipping</small></div>
          </div>
        </figure>`);
      container.children[0].append(div);
    }
    container.insertAdjacentHTML('afterbegin', `<h1>${title}</h1>`);
    this.main.append(container);
  }

  showProduct(product, message) {
    this.main.replaceChildren();
    if (this.categories.children.length > 1) this.categories.children[1].remove();
    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('mt-5');
    container.classList.add('mb-5');

    if (product) {
      container.id = 'single-product';
      container.classList.add(`${product.constructor.name}-style`);
      container.insertAdjacentHTML('beforeend', `<div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="card">
            <div class="row">
              <div class="col-md-6">
                <div class="images p-3">
                  <div class="text-center p-4"> <img id="main-image" src="${product.url}"/> </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="product p-4">
                  <div class="mt-4 mb-3"> <span class="text-uppercase brand">${product.brand}</span>
                    <h5 class="text-uppercase">${product.model}</h5>
                    <div class="price d-flex flex-row align-items-center">
                      <span class="act-price">${product.price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</span>
                    </div>
                  </div>
                  <p class="about">${product.description}</p>
                  <div class="sizes mt-5">
                    <h6 class="text-uppercase">Características</h6>
                  </div>
                  <div class="cart mt-4 align-items-center">
                    <button id="b-buy" data-serial="${product.serial}" class="btn btn-primary text-uppercase mr-2 px-4">Comprar</button>
                    <button id="b-open" data-serial="${product.serial}" class="btn btn-primary text-uppercase mr-2 px-4">Abrir en nueva ventana</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`);
      const characteristics = container.querySelector('h6');
      characteristics.insertAdjacentHTML('afterend', this.instance[product.constructor.name](product));
    } else {
      container.insertAdjacentHTML(
        'beforeend',
        `<div class="row d-flex justify-content-center">
        ${message}
      </div>`,
      );
    }
    this.main.append(container);
  }

  showProductInNewWindow(product, message) {
    const main = this.productWindow.document.querySelector('main');
    const header = this.productWindow.document.querySelector('header nav');
    main.replaceChildren();
    header.replaceChildren();
    let container;
    if (product) {
      this.productWindow.document.title = `${product.brand} - ${product.model}`;
      header.insertAdjacentHTML('beforeend', `<h1 data-serial="${product.serial}" class="display-5">${product.brand} - ${product.model}</h1>`);
      container = document.createElement('div');
      container.id = 'single-product';
      container.classList.add(`${product.constructor.name}-style`);
      container.classList.add('container');
      container.classList.add('mt-5');
      container.classList.add('mb-5');
      container.insertAdjacentHTML('beforeend', `<div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <div class="card">
              <div class="row">
                <div class="col-md-12">
                  <div class="images p-3">
                    <div class="text-center p-4"> <img id="main-image" src="${product.url}"/> </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="product p-4">
                    <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">${product.brand}</span>
                      <h5 class="text-uppercase">${product.model}</h5>
                      <div class="price d-flex flex-row align-items-center">
                        <span class="act-price">${product.price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</span>
                      </div>
                    </div>
                    <p class="about">${product.description}</p>
                    <div class="sizes mt-5">
                      <h6 class="text-uppercase">Características</h6>
                    </div>
                    <div class="cart mt-4 align-items-center"> <button data-serial="${product.serial}" class="btn btn-primary text-uppercase mr-2 px-4">Comprar</button> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`);
      container.insertAdjacentHTML('beforeend', '<button class="btn btn-primary text-uppercase m-2 px-4" onClick="window.close()">Cerrar</button>');
      container.querySelector('h6').insertAdjacentHTML('afterend', this.instance[product.constructor.name](product));
      main.append(container);
    } else {
      container = document.createElement('div');
      container.classList.add('container');
      container.classList.add('mt-5');
      container.classList.add('mb-5');
      container.insertAdjacentHTML('beforeend', `<div class="row d-flex justify-content-center">${message}</div>`);
    }
    main.append(container);
    this.productWindow.document.body.scrollIntoView();
  }

  // Métodos bind

  
  bindInit(handler) {
    document.getElementById('init').addEventListener('click', (event) => {
      this[EXCECUTE_HANDLER](handler, [], 'body', { action: 'init' }, '#', event);
    });
    document.getElementById('logo').addEventListener('click', (event) => {
      this[EXCECUTE_HANDLER](handler, [], 'body', { action: 'init' }, '#', event);
    });
  }

  bindProductsCategoryList(handler) {
    const categoryList = document.getElementById('category-list');
    const links = categoryList.querySelectorAll('a');
    for (const link of links) {
      link.addEventListener('click', (event) => {
        const { category } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [category],
          '#product-list',
          { action: 'productsCategoryList', category },
          '#category-list',
          event,
        );
      });
    }
  }

  bindProductsCategoryListInMenu(handler) {
    const navCats = document.getElementById('navCats');
    const links = navCats.nextSibling.querySelectorAll('a');
    for (const link of links) {
      link.addEventListener('click', (event) => {
        const { category } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [category],
          '#product-list',
          { action: 'productsCategoryList', category },
          '#category-list',
          event,
        );
      });
    }
  }

  bindProductsTypeList(handler) {
    const typeList = document.getElementById('type-list');
    const links = typeList.querySelectorAll('a');
    for (const link of links) {
      link.addEventListener('click', (event) => {
        const { type } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [type],
          '#product-list',
          { action: 'productsTypeList', type },
          '#type-list',
          event,
        );
      });
    }
  }

  bindProductsTypeListInMenu(handler) {
    const productListMenu = document.getElementById('product-list-menu');
    const links = productListMenu.querySelectorAll('a');
    for (const link of links) {
      link.addEventListener('click', (event) => {
        const { type } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [type],
          '#product-list',
          { action: 'productsTypeList', type },
          '#type-list',
          event,
        );
      });
    }
  }

  bindShowProduct(handler) {
    const productList = document.getElementById('product-list');
    const links = productList.querySelectorAll('a.img-wrap');
    for (const link of links) {
      link.addEventListener('click', (event) => {
        const { serial } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [serial],
          '#single-product',
          { action: 'showProduct', serial },
          '#single-product',
          event,
        );
      });
    }
    const images = productList.querySelectorAll('figcaption a');
    for (const image of images) {
      image.addEventListener('click', (event) => {
        const { serial } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [serial],
          '#single-product',
          { action: 'showProduct', serial },
          '#single-product',
          event,
        );
      });
    }
  }

  bindShowProductInNewWindow(handler) {
    const bOpen = document.getElementById('b-open');
    bOpen.addEventListener('click', (event) => {
      if (!this.productWindow || this.productWindow.closed) {
        this.productWindow = window.open('product.html', 'ProductWindow', 'width=800, height=600, top=250, left=250, titlebar=yes, toolbar=no, menubar=no, location=no');
        this.productWindow.addEventListener('DOMContentLoaded', () => {
          handler(event.target.dataset.serial);
        });
      } else {
        handler(event.target.dataset.serial);
        this.productWindow.focus();
      }
    });
  }
}

export default ManagerView;

*/


// vista modelo Manager
class ManagerView {

  constructor() {

    // parte del HTML ESTATICO del index.html que usare habitualmente
    // elemento main
    this.main = document.getElementsByTagName('main')[0];
    //elemento categories para mostrarlas
    this.categories = document.getElementById('categories');
    //elemento menu
    this.menuCat = document.getElementById('menuCabecera');

    //prueba zona central
    this.zonaCentral = document.getElementById('zona central');

    //prueba zona central titulo
    this.zonaCentralTitulo = document.getElementById('zona central titulo');


    //prueba
    this.parteFijaGris = document.getElementById('parteFijaGris');

  }

  // 4 creamos BIND una vez creados en el CONTROLLER el metodo init onInit y su manejador handleInit
  //una vez creado lo invocamos desde el constructor del CONTROLLER

  bindInit(handler) {
    document.getElementById('init').addEventListener('click', (event) => {
      this[EXCECUTE_HANDLER](handler, [], 'body', { action: 'init' }, '#', event);
    });
    document.getElementById('logo').addEventListener('click', (event) => {
      this[EXCECUTE_HANDLER](handler, [], 'body', { action: 'init' }, '#', event);
    });
  }

  /*
  // 6 creo metodo para pintar los productos por tipo es decir las categorias
  // lo invoco desde el metodo onLoad del CONTROLADOR para que se cargue una sola vez al cargar la pagina
  showProductTypes() {
    this.categories.replaceChildren();


    //esta parte esta de prueba, ESTARA SIEMPRE EN LA PAGINA ES ESTÁTICO ONLOAD
    this.parteFijaGris.insertAdjacentHTML('beforeend', `
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="media">
            <a href="menu/"><img src="themes/assets/images/nepali-momo.png" alt="nepali-momo"> </a>
            <h3 class="media-heading text-primary-theme">NEPALESE LAMB MOMO</h3>
            <p>Steamed dumplings filled with slightly spiced minced meat served with special sauce.</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="media"><a href="menu/"><img src="themes/assets/images/gorkha-special-chicken.png"
                alt="GURKHA SPECIAL CHICKEN"> </a>
            <h3 class="media-heading text-danger-theme">GURKHA SPECIAL CHICKEN</h3>
            <p>Boneless chicken marinated in mustard, smoked chilli, herbs and spices slowly cooked in tandoor. </p>

          </div>
        </div>
        <div class="col-lg-4">
          <div class="media">
            <a href="menu/"><img src="themes/assets/images/lam-tikka.png" alt="Lam Tikka"> </a>
            <h3 class="media-heading">LAMB TIKKA SPECIAL</h3>
            <p>Tender pieces of lamb mixed with our own spices and gently cooked in clay oven. </p>
          </div>
        </div>
      </div>
    </div>`);
  
*/
  showProductTypes() {
    //borro titulo principal y cargo valor
    this.zonaCentralTitulo.replaceChildren();
    this.zonaCentralTitulo.insertAdjacentHTML('beforeend',
      `
      <div class="container">
        <h1>CATEGORIAS</h1>
        <p>
          Estan son las categorias disponibles actualmente.
      </p>
      </div>`);

    this.zonaCentral.replaceChildren();
    alert("mostrando las categorias");
    //esta parte esta de prueba, ESTARA SIEMPRE EN LA PAGINA ES ESTÁTICO ONLOAD
    this.zonaCentral.insertAdjacentHTML('beforeend',
      `
      <div class="container">
        <div class="row">


          <div class="col-lg-4">
            <div class="media">
              <a href="menu/"><img src="themes/assets/images/nepali-momo.png" alt="nepali-momo"> </a>
              <h3 class="media-heading text-primary-theme">NEPALESE LAMB MOMO</h3>
              <p>Steamed dumplings filled with slightly spiced minced meat served with special sauce.</p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="media"><a href="menu/"><img src="themes/assets/images/gorkha-special-chicken.png"
                  alt="GURKHA SPECIAL CHICKEN"> </a>
              <h3 class="media-heading text-danger-theme">GURKHA SPECIAL CHICKEN</h3>
              <p>Boneless chicken marinated in mustard, smoked chilli, herbs and spices slowly cooked in tandoor. </p>

            </div>
          </div>

          <div class="col-lg-4">
            <div class="media">
              <a href="menu/"><img src="themes/assets/images/lam-tikka.png" alt="Lam Tikka"> </a>
              <h3 class="media-heading">LAMB TIKKA SPECIAL</h3>
              <p>Tender pieces of lamb mixed with our own spices and gently cooked in clay oven. </p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="media">
              <a href="menu/"><img src="themes/assets/images/lam-tikka.png" alt="Lam Tikka"> </a>
              <h3 class="media-heading">LAMB TIKKA SPECIAL</h3>
              <p>Tender pieces of lamb mixed with our own spices and gently cooked in clay oven. </p>
            </div>
          </div>

        </div>
      </div>`);
  }


  //prueba MENU CABECERA con categorias
  showMenuCabecera() {
    //añado menu categorias
    this.menuCat.insertAdjacentHTML('beforeend',
      `<li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown">Categorias<b class="caret"></b></a>
      <ul class="dropdown-menu">

        <!-- Aqui cargaremos como enlaces todos los restaurantes que tengos disponibles en el MODELO-->
      

        <li><a href="#">DRINKS</a></li>
        <li><a href="#">STARTERS</a></li>
        <li><a href="#">TANDOORI - CLAY OVEN - DISHES</a></li>
        <li class="divider"></li>
        <li class="dropdown-header">SEAFOOD MAIN COURSES</li>
        <li><a href="#">CHICKEN MAIN COURSES</a></li>
        <li><a href="#">LAMB MAIN COURSES</a></li>
        <li><a href="#">RICE/BREDS</a></li>
        <li><a href="#">ACCOMPANIMENTS</a></li>
      </ul>
    </li>`);

  }







  /*
      // usa atributos personalizados como data-type="Camera", son atributos que crea programador para esta aplicacion
      // todo lo que empiece por data - es atributo personalizado segun HTML
      //usa data-type="Camera" para que cuando clickee se carguen los productos asociados a la Camera
      //lo usan todos los frameworks como Bootstrap
      this.categories.insertAdjacentHTML('beforeend', `<div class="row" id="type-list">
        <div class="col-lg-3 col-md-6"><a href="#product-list" data-type="Camera">
            <div class="cat-list-image"><img alt="Categoría cámaras" src="themes/assets/images/nepali-momo.png" />
            </div>
            <div class="cat-list-text">
              <h3>Cámaras</h3>
              <div>Digitales y reflex</div>
            </div>
          </a>
        </div>
        <div class="col-lg-3 col-md-6"><a href="#product-list" data-type="Smartphone">
            <div class="cat-list-image"><img alt="Categoría móviles" src="themes/assets/images/nepali-momo.png" />
            </div>
            <div class="cat-list-text">
              <h3>Móviles</h3>
              <div>Modelos exclusivos</div>
            </div>
          </a>
        </div>
        <div class="col-lg-3 col-md-6"><a href="#product-list" data-type="Laptop">
            <div class="cat-list-image"><img alt="Categoría portátiles" src="themes/assets/images/nepali-momo.png" />
            </div>
            <div class="cat-list-text">
              <h3>Portátiles</h3>
              <div>Intel y AMD</div>
            </div>
          </a>
        </div>
        <div class="col-lg-3 col-md-6"><a href="#product-list" data-type="Tablet">
            <div class="cat-list-image"><img alt="Categoría Tablets" src="img/cattablet.jpg" />
            </div>
            <div class="cat-list-text">
              <h3>Tablets</h3>
              <div>Android y iPad</div>
            </div>
          </a>
        </div>
      </div>`);
    }
  
    */
  //metodo que pinta las Categorias recibe un iterador con las categorias
  showCategories(categories) {




    if (this.zonaCentral.children.length > 1) this.zonaCentral.children[1].remove();
    const container = document.createElement('div');
    container.id = 'category-list';
    container.classList.add('row');
    for (const category of categories) {
      container.insertAdjacentHTML('beforeend', `<div class="col-lg-3 col-md-6"><a data-category="${category.name}" href="#product-list">
        <div class="cat-list-image"><img alt="${category.name}" src="${category.image}" />
        </div>
        <div class="cat-list-text">
          <h3>${category.name}</h3>
          <div>${category.description}</div>
        </div>
      </a>
    </div>`);
    }
    this.zonaCentral.append(container);
  }

  //creamos menu con las distintas categorias generando una lista a partir del iterador categories
  showCategoriesInMenu(categories) {

  

    /* elimino para hacer prueba
    const li = document.createElement('li');
    li.classList.add('nav-item');
    li.classList.add('dropdown');
    li.insertAdjacentHTML('beforeend', `<a class="nav-link dropdown-toggle" href="#" id="navCats" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>`);
    const container = document.createElement('ul');
    container.classList.add('dropdown-menu');
    */

    //****++++++++++++++++++++++++++++PPRUEBA */
    const li = document.createElement('li');
    li.classList.add('dropdown');
    li.insertAdjacentHTML('beforeend', `<a class="dropdown-toggle" href="#"
			data-toggle="dropdown">Categorías <b class="caret"></b></a>`);
    const container = document.createElement('ul');
    container.classList.add('dropdown-menu');

    //************************************** */

    for (const category of categories) {
      container.insertAdjacentHTML('beforeend', `<li><a data-category="${category.title}" class="dropdown-item" href="#product-list">${category.title}</a></li>`);
    }
    li.append(container);
    this.menuCat.append(li);
  }




  // METIODO PARA MOSTRAR CATEGORIAS EN LA PARTE CENTRAL
  showCategoriesEnParteCentral(categories) {

    if (this.zonaCentralTitulo.children.length > 1) this.zonaCentralTitulo.children[1].remove();
    
    // parte del titulo
    this.zonaCentralTitulo.insertAdjacentHTML('beforeend',
      `
      <div class="container">
        <h1>CATEGORIAS</h1>
        <p>
          Estan son las categorias disponibles actualmente.
      </p>
      </div>
      `);
      //borro hijos zonaCentral
    this.zonaCentral.replaceChildren();
    
    //parte div general
    const container = document.createElement('div');
    container.classList.add('container');
    const hijo = document.createElement('div');
    container.appendChild(hijo);
    hijo.classList.add('row');


    

    for (const category of categories) {
      hijo.insertAdjacentHTML('beforeend', 
      `<div class="col-lg-4">
        <div class="media">
          <a href="menu/">
            <img src="${category.url}" alt="${category.name}" />
          </a>
          <h3 class="media-heading text-danger-theme">${category.name}</h3>
          <p>${category.description}</p>
        </div>
      </div>

      `);
    }
    this.zonaCentral.append(container);
  }




}
export default ManagerView;
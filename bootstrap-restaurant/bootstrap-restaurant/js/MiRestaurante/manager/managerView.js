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




const EXCECUTE_HANDLER = Symbol('excecuteHandler');

// vista modelo Manager
class ManagerView {

  constructor() {

    // parte del HTML ESTATICO del index.html que usare habitualmente
    // elemento main
    this.main = document.getElementsByTagName('main')[0];
    //elemento categories para mostrarlas
    this.categories = document.getElementById('categories');
    //elemento menu categorias
    this.menuCat = document.getElementById('menuCabecera');

    //prueba zona central
    this.zonaCentral = document.getElementById('zonaCentral');

    //prueba zona central titulo
    this.zonaCentralTitulo = document.getElementById('zonaCentralTitulo');

    //parte carrusel para mostrar el contenido de los arrays
    this.mostrarCarrusel = document.getElementById('mostrarCarrusel');

    //mostrar interior arrays
    this.mostrarContenidoArray = document.getElementById('mostrarContenidoArrays');



    //mostrar platos aleatorios al final
    this.aleatorioCarrusel = document.getElementById('myCarousel4');






    //prueba
    this.parteFijaGris = document.getElementById('parteFijaGris');

  }

  [EXCECUTE_HANDLER](handler, handlerArguments, scrollElement, data, url, event) {
    handler(...handlerArguments);
    const scroll = document.querySelector(scrollElement);
    if (scroll) scroll.scrollIntoView();
    history.pushState(data, null, url);
    event.preventDefault();
  }

  // 4 creamos BIND una vez creados en el CONTROLLER el metodo init onInit y su manejador handleInit
  //una vez creado lo invocamos desde el constructor del CONTROLLER

  bindInit(handler) {
    //click en INICIO
    document.getElementById('init').addEventListener('click', (event) => {
      handler(); //ejecuto handler cuando haga click sobre elemento init,( boton INICIO) this.handleInit llegara desde el CONTROLLER y ejecutara el metodo oonInit()
    });
    //click en logo MiRestaurante
    document.getElementById('logo').addEventListener('click', (event) => {
      handler();
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
  //data-bs-category son atributos personalizados, se usan para luego cargar todo lo asociado a esa categoria

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

  /*creamos menu con las distintas categorias generando una lista a partir del iterador categories
  usamos atributo personalizado con el nombre de la categoria que hara referencia al enlace #product-list
  <a data-bs-category="${category.name}" class="dropdown-item" href="#product-list">${category.name}</a> */
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
    li.insertAdjacentHTML('beforeend', `<a class="dropdown-toggle" href="#" id="menuCate"
			data-toggle="dropdown">Categorías <b class="caret"></b></a>`);
    const container = document.createElement('ul');
    container.classList.add('dropdown-menu');

    //************************************** */

    for (const category of categories) {
      container.insertAdjacentHTML('beforeend', `<li><a data-category="${category.name}" class="dropdown-item" href="#product-list">${category.name}</a></li>`);
    }
    li.append(container);
    this.menuCat.append(li);
  }


  //creamos menu con las distintas categorias generando una lista a partir del iterador categories
  showRestaurantInMenu(restaurantes) {



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
    li.insertAdjacentHTML('beforeend', `<a class="dropdown-toggle" href="#" id="menuRestaurante"
			data-toggle="dropdown">Restaurantes <b class="caret"></b></a>`);
    const container = document.createElement('ul');
    container.classList.add('dropdown-menu');

    //************************************** */

    for (const restaurante of restaurantes) {
      container.insertAdjacentHTML('beforeend', `<li><a data-category="${restaurante.name}" class="dropdown-item" href="#product-list">${restaurante.name}</a></li>`);
    }
    li.append(container);
    this.menuCat.append(li);
  }

  //creamos menu con alergenos
  showAlergenostInMenu(alergenos) {

    const li = document.createElement('li');
    li.classList.add('dropdown');
    li.insertAdjacentHTML('beforeend', `<a class="dropdown-toggle" href="#" id="menuAlergeno"
			data-toggle="dropdown">Alérgenos <b class="caret"></b></a>`);
    const container = document.createElement('ul');
    container.classList.add('dropdown-menu');

    //************************************** */

    for (const alergeno of alergenos) {
      container.insertAdjacentHTML('beforeend', `<li><a data-category="${alergeno.name}" class="dropdown-item" href="#product-list">${alergeno.name}</a></li>`);
    }
    li.append(container);
    this.menuCat.append(li);
  }


  //adjuntamos menus al menu
  showMenusInMenu(menus) {

    const li = document.createElement('li');
    li.classList.add('dropdown');
    li.insertAdjacentHTML('beforeend', `<a class="dropdown-toggle" href="#" id="menuDeMenus"
			data-toggle="dropdown">Menús <b class="caret"></b></a>`);
    const container = document.createElement('ul');
    container.classList.add('dropdown-menu');

    //************************************** */

    for (const menu of menus) {
      container.insertAdjacentHTML('beforeend', `<li><a data-category="${menu.name}" class="dropdown-item" href="#product-list">${menu.name}</a></li>`);
    }
    li.append(container);
    this.menuCat.append(li);
  }




  // METIODO PARA MOSTRAR CATEGORIAS EN LA PARTE CENTRAL
  showCategoriesEnParteCentral(categories) {

    // if (this.zonaCentralTitulo.children.length > 1) this.zonaCentralTitulo.children[1].remove();
    this.zonaCentralTitulo.replaceChildren();
    this.zonaCentral.replaceChildren();


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
    container.id = 'category-list';
    container.classList.add('container');
    const hijo = document.createElement('div');
    container.appendChild(hijo);
    hijo.classList.add('row');




    for (const category of categories) {
      hijo.insertAdjacentHTML('beforeend',
        `<div class="col-lg-4">
        <div class="media">
          <a data-category="${category.name}" href="#product-list">
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




  //METODO MUESTRA CONTENIDO DE LOS ARRAYS
  // METIODO PARA MOSTRAR CATEGORIAS EN LA PARTE CENTRAL
  showCategoriesEnParteCentral(categories) {

    // if (this.zonaCentralTitulo.children.length > 1) this.zonaCentralTitulo.children[1].remove();
    this.zonaCentralTitulo.replaceChildren();
    this.zonaCentral.replaceChildren();


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
    container.id = 'category-list';
    container.classList.add('container');
    const hijo = document.createElement('div');
    container.appendChild(hijo);
    hijo.classList.add('row');




    for (const category of categories) {
      hijo.insertAdjacentHTML('beforeend',
        `<div class="col-lg-4">
           <div class="media">
             <a data-category="${category.name}" href="#product-list">
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


  // metodo que dado un nombre de una categoria muestra todos los platos asociados a la misma (products es un iterador)
  listProducts(products, name) {
    //this.main.replaceChildren();
    if (this.zonaCentral.children.length > 1) this.zonaCentral.children[1].remove();
    const container = document.createElement('div');
    container.id = 'product-list';
    container.classList.add('container');
    container.classList.add('my-3');



    container.insertAdjacentHTML('beforeend', '<div class="row"> </div>');

    for (const product of products) {
      const div = document.createElement('div');
      div.classList.add('col-md-4');
      div.insertAdjacentHTML('beforeend', `<figure class="card card-product-grid card-lg"> <a data-serial="${product.name}" href="#single-product" class="img-wrap"><img class="${product.name}-style" src="${product.image}"></a>
          <figcaption class="info-wrap">
            <div class="row">
              <div class="col-md-8"> <a data-serial="${product.name}" href="#single-product" class="title">${product.name}</a> </div>
              <div class="col-md-4">
                <div class="rating text-right"> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> </div>
              </div>
            </div>
          </figcaption>
          <div class="bottom-wrap">
            <a href="#" data-serial="${product.name}" class="btn btn-primary float-end"> Mostrar ficha</a>
            </div>
        </figure>`);
      container.children[0].append(div);
    }
    container.insertAdjacentHTML('afterbegin', `<h1>${name}</h1>`);
    this.zonaCentral.append(container);
  }


  //MOSTRAR INTERIOR ARRAYS
  mostrarInteriorArrays(products, title) {


    // if (this.zonaCentralTitulo.children.length > 1) this.zonaCentralTitulo.children[1].remove();
    this.zonaCentralTitulo.replaceChildren();
    this.zonaCentral.replaceChildren();


    // parte del titulo
    this.zonaCentralTitulo.insertAdjacentHTML('beforeend',
      `
       <div class="container">
         <h1>Platos disponibles actualmente</h1>
         <p>
           Estos son los platos asociados a la categoria ${title}.
       </p>
       </div>
       `);
    //borro hijos zonaCentral
    this.zonaCentral.replaceChildren();

    //parte div general
    const container = document.createElement('div');
    container.id = 'product-list';
    container.classList.add('container');
    const hijo = document.createElement('div');
    container.appendChild(hijo);
    hijo.classList.add('row');




    for (const product of products) {
      hijo.insertAdjacentHTML('beforeend',
        `<div class="col-lg-4">
         <div class="media">
           <a data-serial="${product.name}" href="#product-list">
             <img src="${product.image}" alt="${product.name}" />
           </a>
           <h3 class="media-heading text-danger-theme">${product.name}</h3>
           <p>${product.description}</p>
         </div>
       </div>
 
       `);
    }
    this.zonaCentral.append(container);










    //this.main.replaceChildren();
    /*
    if (this.mostrarContenidoArray.children.length > 1) this.mostrarContenidoArray.children[1].remove();
    const container = document.createElement('div');
    container.id = 'product-list';
    container.classList.add('container');
    container.classList.add('my-3');



    container.insertAdjacentHTML('beforeend', '<div class="row"> </div>');

    for (const product of products) {
      const div = document.createElement('div');
      div.classList.add('col-md-4');
      div.insertAdjacentHTML('beforeend', `<figure class="card card-product-grid card-lg"> <a data-serial="${product.name}" href="#single-product" class="img-wrap"><img class="${product.name}-style" src="${product.image}"></a>
          <figcaption class="info-wrap">
            <div class="row">
              <div class="col-md-8"> <a data-serial="${product.name}" href="#single-product" class="title">${product.name}</a> </div>
              <div class="col-md-4">
                <div class="rating text-right"> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> </div>
              </div>
            </div>
          </figcaption>
          <div class="bottom-wrap">
            <a href="#" data-serial="${product.name}" class="btn btn-primary float-end"> Mostrar ficha</a>
            </div>
        </figure>`);
      container.children[0].append(div);
    }
    container.insertAdjacentHTML('afterbegin', `<h1>${name}</h1>`);
    this.mostrarContenidoArray.append(container);
  }

  */
  }


  // mostrar datos menus, recibe menu por parámetro para pintar
  mostrarDatosRestaurante(product) {


    this.zonaCentralTitulo.replaceChildren();
    this.zonaCentral.replaceChildren();


    // parte del titulo
    this.zonaCentralTitulo.insertAdjacentHTML('beforeend',
      `
     <div class="container">
       <h1>Características</h1>
       <p>
         Estas son las características del restaurante  ${product.name}.
     </p>
     </div>
     `);
    //borro hijos zonaCentral
    this.zonaCentral.replaceChildren();

    //parte div general
    const container = document.createElement('div');
    container.id = 'product-list';
    container.classList.add('container');
    const hijo = document.createElement('div');
    container.appendChild(hijo);
    hijo.classList.add('row');

    hijo.insertAdjacentHTML('beforeend',
      `<div class="col-lg-4">
       <div class="media">
         <h3 class="media-heading text-danger-theme">${product.name}</h3>
         <h4>Descripcion ${product.description}</h4>
         <h4>Coordenadas localizacion :${product.location}</h4>

       </div>
     </div>

     `);

    this.zonaCentral.append(container);
  }



  /* ++++++++++++++++++++++++++ mostrar Productos en parte carrusel */
  // metodo que dado un nombre de una categoria muestra todos los platos asociados a la misma (products es un iterador)

  listProductsCarrusel(products, name) {
    //this.main.replaceChildren();
    if (this.mostrarCarrusel.children.length > 1) this.mostrarCarrusel.children[1].remove();

    //padre
    const container = document.createElement('div');
    container.id = 'myCarousel1';
    container.classList.add('carousel-slide');
    container.setAttribute("data-ride", "carousel");
    //hijo1
    const hijoContainer1 = document.createElement('div');
    hijoContainer1.classList.add('carousel-inner');
    //añado hijo
    container.appendChild(hijoContainer1);

    //inserto controlador carrusel
    container.insertAdjacentHTML('beforeend', `<a class="left carousel-control" href="#myCarousel1" data-slide="prev"><span
    class="glyphicon glyphicon-chevron-left"></span></a><a class="right carousel-control" href="#myCarousel1" data-slide="next"><span
    class="glyphicon glyphicon-chevron-right"></span></a>
      `);


    // ESTRUCTURA PARA ITEM ACTIVO
    //creo nieto
    const nietoContainer = document.createElement('div');
    nietoContainer.classList.add('item-active');
    //creo nieto2
    const nietoContainer2 = document.createElement('div');
    nietoContainer2.classList.add('item');
    //creo nieto3
    const nietoContainer3 = document.createElement('div');
    nietoContainer3.classList.add('item');



    //creo hijo del nieto
    const hijoNieto = document.createElement('div');
    hijoNieto.classList.add('row');

    //creo hijo nieto2
    const hijoNieto2 = document.createElement('div');
    hijoNieto2.classList.add('row');

    //creo hijo nieto 3
    const hijoNieto3 = document.createElement('div');
    hijoNieto3.classList.add('row');

    //añado nieto 1
    nietoContainer.appendChild(hijoNieto);
    //añado nieto 2
    nietoContainer2.appendChild(hijoNieto2);
    //añado nieto 3
    nietoContainer3.appendChild(hijoNieto3);

    //añado a la estructura nieto
    //nietoContainer.insertAdjacentHTML('beforeend', '<div class="row"> </div>');

    alert(" generando estructurra html 1");

    /*IMPORTANTE si se crea sólo un elemento con createElement y 
    se inserta en varias posiciones, no se copia, sino que se mueve de posición, esto implica que
    al ejecutar appendChild(div) no apareceran 9 inserciones sino solo 3 las demas se copian
    solucion: https://developer.mozilla.org/es/docs/Web/API/Node/appendChild
    */

    for (const product of products) {
      let div = document.createElement('div');

      //clono para solucionar el problema
      let div1 = div.cloneNode(false);
      let div2 = div.cloneNode(false);

      //para div
      div.classList.add('col-md-4');
      div.insertAdjacentHTML('beforeend', `<img src="${product.image}" alt="Generic placeholder image">
      <h4>${product.name}</h4>
      <!-- boton con enlace para añadir al carrito-->
      <p><a class="btn btn-default" href="#" role="button">Add to cart &raquo;</a></p>`);

      //par div1
      div1.classList.add('col-md-4');
      div1.insertAdjacentHTML('beforeend', `<img src="${product.image}" alt="Generic placeholder image">
      <h4>${product.name}</h4>
      <!-- boton con enlace para añadir al carrito-->
      <p><a class="btn btn-default" href="#" role="button">Add to cart &raquo;</a></p>`);

      //para div2
      div2.classList.add('col-md-4');
      div2.insertAdjacentHTML('beforeend', `<img src="${product.image}" alt="Generic placeholder image">
      <h4>${product.name}</h4>
      <!-- boton con enlace para añadir al carrito-->
      <p><a class="btn btn-default" href="#" role="button">Add to cart &raquo;</a></p>`);


      //container.children[0].append(div);
      hijoNieto.appendChild(div);
      hijoNieto2.appendChild(div1);
      hijoNieto3.appendChild(div2);





    }
    //container.insertAdjacentHTML('afterbegin', `<h1>${products.name}</h1>`);
    //this.mostrarCarrusel.append(container);

    /*
    // ESTRUCTURA PARA ITEM 
    const hijoItem = document.createElement('div');
    hijoItem.classList.add('item-active');
    //añado hijo a hijoItem
    const nietoItem = document.createElement('div');
    nietoItem.classList.add('row');

    //añado nietoItem
    hijoItem.appendChild(nietoItem);

    //añado a la estructura
    //hijoContainer1.appendChild(nietoItem);
    */
    //hijoContainer1.appendChild(nietoItem);
    //añado a la estructura nieto
    //nietoContainer2.insertAdjacentHTML('beforeend', '<div class="row"> </div>');







    //añado nieto
    hijoContainer1.appendChild(nietoContainer);
    //añado nieto2
    hijoContainer1.appendChild(nietoContainer2);

    //añado nieto3
    hijoContainer1.appendChild(nietoContainer3);







    //añado a la estructura
    //hijoContainer1.appendChild(nietoItem);

    container.insertAdjacentHTML('afterbegin', `<h1>${products.name}</h1>`);
    this.mostrarCarrusel.append(container);



  }


  //metodo que muestra 3 platos de forma aleatoria
  mostrarPlatosAleatorio(platos) {

    //parte tras menu de navegacion

    //insertar elementos en el carrusel

    //generar 3 platos de forma aleatoria

    //this.main.replaceChildren();
    if (this.aleatorioCarrusel.children.length > 1) this.aleatorioCarrusel.children[1].remove();

    //padre
    /*
    const container = document.createElement('div');
    container.id='myCarousel4';
    container.classList.add('carousel-slide');
    container.setAttribute("data-ride", "carousel");
    //hijo1
    const hijoContainer1 = document.createElement('div');
    hijoContainer1.classList.add('carousel-inner');
    //añado hijo
    container.appendChild(hijoContainer1);

    
    // ESTRUCTURA PARA ITEM ACTIVO
    //creo nieto
    const nietoContainer0 = document.createElement('div');
    nietoContainer0.classList.add('item-active');
    //creo nieto2
    const nietoContainer1 = document.createElement('div');
    nietoContainer1.classList.add('item');
    //creo nieto3
    const nietoContainer2 = document.createElement('div');
    nietoContainer2.classList.add('item');
    


    

   //añado a la estructura nieto
    //nietoContainer.insertAdjacentHTML('beforeend', '<div class="row"> </div>');
    */

    this.aleatorioCarrusel.insertAdjacentHTML('beforeend', `
    <div class="carousel-inner">
    <div class="item active" data-bs-interval="2500">
      <div class="row featurette">

        <div class="col-md-7">
          <h2 class="featurette-heading">${platos[0].name} <span class="text-muted">Espectacular.</span></h2>
          <p class="lead">${platos[0].description}.</p>
        </div>
        <div class="col-md-5">
          <img src=${platos[0].image} alt=${platos[0].name}>
        </div>

      </div>
    </div>


    <div class="item" data-bs-interval="2500">
      <div class="row featurette">
        <div class="col-md-5">
          <img src=${platos[1].image} alt=${platos[1].name}>
        </div>
        <div class="col-md-7">
          <h2 class="featurette-heading">${platos[1].name}<span class="text-muted">Delicioso.</span></h2>
          <p class="lead">${platos[1].description}</p>
        </div>
      </div>
    </div>


    <div class="item" data-bs-interval="2500">
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">${platos[2].name}<span class="text-muted">Increible.</span></h2>
          <p class="lead">${platos[2].description}</p>
        </div>
        <div class="col-md-5">
          <img class="img-circle" src=${platos[2].image} alt=>
        </div>
      </div>
    </div>
  </div>`);

    /*IMPORTANTE si se crea sólo un elemento con createElement y 
    se inserta en varias posiciones, no se copia, sino que se mueve de posición, esto implica que
    al ejecutar appendChild(div) no apareceran 9 inserciones sino solo 3 las demas se copian
    solucion: https://developer.mozilla.org/es/docs/Web/API/Node/appendChild
    */

    //PUEDO DEVOLVER PRIMERO 3 PLATOS DE FORMA ALEATORIA DESDE ARRAY PLATOS
    // Y GUARDARLOS EN UN ARRAY PARA DESPUES RECORRER LOS 3 PLATOS



    /*
    //ejecuto 3 veces
    for (let i=0;i<platos.length;i++) {
      let div = document.createElement('div');
      //para div
      div.classList.add('row-featurette');
      div.insertAdjacentHTML('beforeend', `
      <div class="col-md-7">
              <h2 class="featurette-heading">${platos[i].name}<span class="text-muted">It's very very testy</span></h2>
              <p class="lead">${platos[i].description}.</p>
            </div>
            <div class="col-md-5">
              <img src="${platos[i].image}" alt="Generic placeholder image">
            </div>`);
    
      //añado a cada nieto i
      nietoContainer+i.appendChild(div);
    }
    



    //añado nieto
    hijoContainer1.appendChild(nietoContainer0);
    //añado nieto2
    hijoContainer1.appendChild(nietoContainer1);

    //añado nieto3
    hijoContainer1.appendChild(nietoContainer2);


     




    //añado a la estructura
    //hijoContainer1.appendChild(nietoItem);

    this.mostrar3platos.append(container);

    */






  }




  //+++++++++++++++++++++++ metodos bind para generar los productos (platos) asociados a cada categoria 

  //una vez pintado el HTML con showCategoriesEnParteCentral(categories) recojo cada uno de los enlaces y les asigno un
  //manejador de evento al hacer click para cada una de las categorias ( conseguidas mediante atributo personalizado en dataset.category)
  //productos de  categoria en zona central.
  //el manejador de eventos lo recibira por parámetro siendo este handleProductsCategoryList del CONTROLADOR el cual tras recibir 
  //la categoria desde dataset conseguira todos los platos de dicha categoria mostrandolos en la VISTA medinate el método
  //this[VIEW].mostrarInteriorArrays(this[MODEL].getDishesInCategory(categoria), categoria.title);

  bindProductsCategoryList(handler) {
    const categoryList = document.getElementById('category-list'); //lo recojo de las categorias pintadas
    const links = categoryList.querySelectorAll('a'); //selecciono todos los enlaces

    //para cada enlace a asigno escucha pasando al handler el atributo data-category para saber que tiene que mostrar
    for (const link of links) {
      link.addEventListener('click', (event) => {
        handler(event.currentTarget.dataset.category);
      });
    }
  }


  // metodo bin para asignar manejador de evento a cada uno de los platos de manera que sean clickeables. Usamos atributo product-list
  bindShowProduct(handler) {
    const productList = document.getElementById('product-list');
    //const links = productList.querySelectorAll('a.img-wrap');


    //para mi ejericio
    const links = productList.querySelectorAll('a h3');

    console.log("contenido html enlaces desde el nomre"+links);
    
    
    // asigno manejador a los enlaces del nombre
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
    //const images = productList.querySelectorAll('figcaption a');

    //para mi ejercicio
    const images = productList.querySelectorAll('a');

    console.log("contenido html enlace desde imagenes");
    console.log(images);


    
    // asigno manejador a los enlaces desde la imagen pasandole el atributo serial desde currentTarget
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

  //productos categoria para menu cabecera
  /*
  bindProductsCategoryListInMenu(handler) {
    const navCats = document.getElementById('navCats');
    const links = navCats.nextSibling.querySelectorAll('a');
    for (const link of links) {
      link.addEventListener('click', (event) => {
        handler(event.currentTarget.dataset.category);
      });
    }
  }
  */


  //modifico metodo anterior bind
  bindProductsCategoryListInMenu(handler) {
    const menuCat = document.getElementById('menuCate');
    const links = menuCat.nextSibling.querySelectorAll('a');
    for (const link of links) {
      link.addEventListener('click', (event) => {
        handler(event.currentTarget.dataset.category);
      });
    }
  }


  //bind para alergenos
  bindProductsAlergenosListInMenu(handler) {
    const menuAler = document.getElementById('menuAlergeno');
    const links = menuAler.nextSibling.querySelectorAll('a');
    for (const link of links) {
      link.addEventListener('click', (event) => {
        handler(event.currentTarget.dataset.category);
      });
    }
  }

  //bind para restaurante
  bindProductsRestauranteListInMenu(handler) {
    const menuRes = document.getElementById('menuRestaurante');
    const links = menuRes.nextSibling.querySelectorAll('a');
    for (const link of links) {
      link.addEventListener('click', (event) => {
        handler(event.currentTarget.dataset.category);
      });
    }
  }

  //bind para menu
  bindProductsMenuListInMenu(handler) {
    const menu = document.getElementById('menuDeMenus');
    const links = menu.nextSibling.querySelectorAll('a');
    for (const link of links) {
      link.addEventListener('click', (event) => {
        handler(event.currentTarget.dataset.category);
      });
    }
  }


  //metodo muestra la VISTA con los datos de cada plato o un mensaje en caso de que no se pueda cargar
  showProduct(product, message) {

    this.zonaCentralTitulo.replaceChildren();
    this.zonaCentral.replaceChildren();


    // parte del titulo
    this.zonaCentralTitulo.insertAdjacentHTML('beforeend',
      `
     <div class="container" id="central">
       <h1>Características</h1>
       <p>
         Estas son las características del plato <b> ${product.name}</b>.
     </p>
     </div>
     `);
    //borro hijos zonaCentral
    //this.zonaCentral.replaceChildren();





    // METODO  DE PABLO

    //this.main.replaceChildren();
    //if (this.categories.children.length > 1) this.categories.children[1].remove();
    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('mt-5');
    container.classList.add('mb-5');

    //si existe genero el HTML
    if (product) {
      container.id = 'single-product';
      container.classList.add(`${product.constructor.name}-style`);
      container.insertAdjacentHTML('beforeend', `<div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="card">
            <div class="row">
              <div class="col-md-6">
                <div class="images p-3">
                  <div class="text-center p-4"> <img id="main-image" src="${product.image}"/> </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="product p-4">

                  <div class="mt-4 mb-3"> 
                    <p> descripción</p>
                    <span class="text-uppercase">${product.description}</span>
                  </div>
                  
              
                  <div class="sizes mt-5">
                    <p> ingredientes</p>
                    <span class="text-uppercase">${product.ingredients}</span>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`);

      //const characteristics = container.querySelector('h6');
      //characteristics.insertAdjacentHTML('afterend', this.instance[product.constructor.name](product));

    } else {
      container.insertAdjacentHTML(
        'beforeend',
        `<div class="row d-flex justify-content-center">
        ${message}
      </div>`,
      );
    }
    this.zonaCentral.append(container);
  }



  //++++++++++++++++++++++++++++++++++++++++


}
export default ManagerView;
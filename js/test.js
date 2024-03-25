

// ------------------------------funcion test entidades-------------------------
function creacionEntidadesTest() {

  console.log('##########--------~~~~~~~~~~~~~~~~~~ CREACIÓN DE OBJETOS DE ENTIDAD ~~~~~~~~~~~~~~~~~~-------- ##########');


  //--------------------------------------------------
  console.log('########## Objeto Dish ##########');
  try {
    let p1 = Manager.getInstance().createDish();
  } catch (error) {
    console.log(error.toString());
  }
  try {
    // creacion correcta
    p1 = Manager.getInstance().createDish('ensalada de pollo', 'ensalada al estilo gallego', ['lechuga', 'tomate', 'pollo'], 'https://via.placeholder.com/258x172.jpg?text=EnsaladaPollo');
  } catch (error) {
    console.log(error.toString());
  }


  //operamos con el plato creado y devuelto
  console.log("toString----" + p1.toString());

  console.log("nombre----" + p1.name);
  console.log("descripción----" + p1.description);
  console.log("ingredientes----" + p1.ingredients);
  console.log("URL de la imagen----" + p1.image);


  //--------------------------------------------------
  console.log('########## Objeto Category ##########');

  try {
    let p1 = Manager.getInstance().createCategory();
  } catch (error) {
    console.log(error.toString());
  }
  try {
    // creacion correcta
    p1 = Manager.getInstance().createCategory('entrante', 'Categoria que hace referencia a pequeños platos previos al primerPlato');
  } catch (error) {
    console.log(error.toString());
  }


  //operamos con la categoria creado y devuelto
  console.log("toString----" + p1.toString());
  console.log("nombre----" + p1.name);
  console.log("descripción----" + p1.description);

  //--------------------------------------------------
  console.log('########## Objeto Allergen ##########');

  try {
    let p1 = Manager.getInstance().createAllergen();
  } catch (error) {
    console.log(error.toString());
  }
  try {
    // creacion correcta
    p1 = Manager.getInstance().createAllergen('gluten', ' es una proteína que se encuentra en el trigo, la cebada, el centeno y a veces la avena, ');
  } catch (error) {
    console.log(error.toString());
  }

  //operamos con el alergeno creado y devuelto
  console.log("toString----" + p1.toString());
  console.log("nombre----" + p1.name);
  console.log("descripción----" + p1.description);

  //--------------------------------------------------
  console.log('########## Objeto Menu ##########');

  try {
    let p1 = Manager.getInstance().createMenu();
  } catch (error) {
    // EmptyValueException: Error: The parameter name can't be empty.
    console.log(error.toString());
  }
  try {
    // creacion correcta
    p1 = Manager.getInstance().createMenu('fin de semana', ' constara de dos entrantes, primer plato, segundo plato, postre, pan y una bebida, precio 25 euros');
  } catch (error) {
    console.log(error.toString());
  }

  //operamos con el plato creado y devuelto
  console.log("toString----" + p1.toString());
  console.log("nombre----" + p1.name);
  console.log("descripción----" + p1.description);



  //--------------------------------------------------
  console.log('########## Objeto Coordinate ##########');
  console.log('no existe coleccion con su almacenamiento');


  try {
    p1 = Manager.getInstance();
    p2 = new Coordinate();

  } catch (error) {
    // EmptyValueException: Error: The parameter name can't be empty.
    console.log(error.toString());
  }

  try {
    p2 = new Coordinate(200, 20);
  } catch (error) {
    // latirud fuera de rango, valor invalido
    console.log(error.toString());
  }

  try {
    p2 = new Coordinate(20, 200);
  } catch (error) {
    // longitud fuera de rango, valor invalido
    console.log(error.toString());
  }



  try {
    // creacion correcta
    objetoCoordinate = new Coordinate(20, 30);
  } catch (error) {
    console.log(error.toString());
  }

  //operamos con el objeto creado y devuelto
  console.log("toString----" + objetoCoordinate.toString());
  console.log("latitude----" + objetoCoordinate.latitude);
  console.log("longitude----" + objetoCoordinate.longitude);


  //--------------------------------------------------
  console.log('########## Objeto Restaurant ##########');

  try {
    p1 = Manager.getInstance().createRestaurant();
  } catch (error) {
    // EmptyValueException: Error: The parameter name can't be empty.
    console.log(error.toString());
  }
  try {
    // creacion correcta
    p1 = Manager.getInstance().createRestaurant('El Vergel', ' con capacidad para 100 comensales', objetoCoordinate);
  } catch (error) {
    console.log(error.toString());
  }

  //operamos con el restaurante creado y devuelto
  console.log("toString----" + p1.toString());
  console.log("nombre----" + p1.name);
  console.log("descripción----" + p1.description);
  console.log("location, es un objeto coordinate----" + p1.location);


 
  console.log("");
  console.log('##########--------~~~~~~~~~~~~~~~~~~ TEST MÉTODOS AÑADIR a COLECCIONES DEL MANAGER ~~~~~~~~~~~~~~~~~~-------- ##########');

  const manager = Manager.getInstance();
  //--------------------------------------------------
  console.log('########## addCategoria ##########');
  const categoria1 = Manager.getInstance().createCategory('primerPlato', 'siempre tendra ensalada, pasta o arroz');
  const categoria2 = Manager.getInstance().createCategory('segundoPlato', 'siempre tendra un pescado y una carne');
  const categoria3 = Manager.getInstance().createCategory('postre', 'siempre habra un postre casero');
  const categoria4 = Manager.getInstance().createCategory('sobremesa', 'tras el cafe, dulces y orujos');
  const categoria5 = Manager.getInstance().createCategory('coctel', 'diversas copas');
  const categoriaDeassign = Manager.getInstance().createCategory('entreplatos', 'sorbetes');


  //Excepciones
  //categoria no puede ser null
  try {
    manager.addCategory();
  } catch (error) {
    console.log(error.toString());
  }

  //no es un objeto categoria
  try {
    manager.addCategory(hola);
  } catch (error) {
    console.log(error.toString());
  }

  //funcionamiento correcto
  try {
    manager.addCategory(categoria1);

  } catch (error) {
    console.log(error.toString());
  }


  //categoria ya existe
  try {
    manager.addCategory(categoria1);
  } catch (error) {
    console.log(error.toString());
  }

  //multiargumentos
  manager.addCategory(categoria2, categoria3);

  //encadenacion
  manager.addCategory(categoria4).addCategory(categoria5);

  //mustro coleccion
  console.log('muestro coleccion categories');

  try {

    for (const category of manager.getterCategories()) {
      console.log(category.toString());
    }

  } catch (error) {
    console.log(error.toString());
  }

  //--------------------------------------------------
  console.log('########## addMenu ##########');

  const menu1 = Manager.getInstance().createMenu('fin de semana', ' constara de dos entrantes, primer plato, segundo plato, postre, pan y una bebida, precio 25 euros');
  const menu2 = Manager.getInstance().createMenu('diario', ' constara de primer plato, segundo plato, postre, pan y una bebida, precio 15 euros');
  const menu3 = Manager.getInstance().createMenu('navidad', ' constara de dos entrantes, primer plato, segundo plato, postre, pan y dos consumiciones y una copa, precio 50 euros');
  const menu4 = Manager.getInstance().createMenu('semana Santa', ' constara de primer plato, segundo plato, postre, pan y una bebida,con opción de vigilia, precio 35 euros,');
  const menu5 = Manager.getInstance().createMenu('fin año', ' constara de dos entrantes, primer plato, segundo plato, postre, pan y barra libre, precio 60 euros');
  const menuDeassign = Manager.getInstance().createMenu('san valentin', ' constara de dos entrantes, primer plato, segundo plato, postre, pan y cava, precio 60 euros');


  //Excepciones
  //menu no puede ser null
  try {
    manager.addMenu();
  } catch (error) {
    console.log(error.toString());
  }

  //no es un objeto menu
  try {
    manager.addMenu(categoria1);
  } catch (error) {
    console.log(error.toString());
  }

  //funcionamiento correcto
  try {
    manager.addMenu(menu1);

  } catch (error) {
    console.log(error.toString());
  }


  //menu ya existe
  try {
    manager.addMenu(menu1);
  } catch (error) {
    console.log(error.toString());
  }

  //multiargumentos
  manager.addMenu(menu2, menu3);

  //encadenacion
  manager.addMenu(menu4).addMenu(menu5);

  //mustro coleccion
  console.log('muestro coleccion Menu');

  try {

    for (const menu of manager.getterMenus()) {
      console.log(menu.toString());
    }

  } catch (error) {
    console.log(error.toString());
  }



  //--------------------------------------------------
  console.log('########## addDish ##########');

  //creo platos para operar
  const plato1 = Manager.getInstance().createDish('macarrones', 'macarrones con tomates', ['tomate', 'carne picada'], 'https://via.placeholder.com/258x172.jpg?text=macarrones');
  const plato2 = Manager.getInstance().createDish('sopa pescado', 'de temporada', ['pescaado temporada', 'fideos', 'repollo', 'cebolla', 'apio'], 'https://via.placeholder.com/258x172.jpg?text=sopaPescado');
  const plato3 = Manager.getInstance().createDish('solomillo', 'a la pimienta', ['solomillo', 'nata', 'cebolla'], 'https://via.placeholder.com/258x172.jpg?text=solomilloPimienta');
  const plato4 = Manager.getInstance().createDish('helado a la albahaca', '2 bolas de limon', ['helado limon', 'albahaca', 'azucar'], 'https://via.placeholder.com/258x172.jpg?text=heladoAlbahaca');
  const plato5 = Manager.getInstance().createDish('teypastas', 'te con pastas', ['te', 'pasta salada'], 'https://via.placeholder.com/258x172.jpg?text=teYpastas');
  const platoDesassign = Manager.getInstance().createDish('bizcocho de la casa', 'casero', ['bizcocho', 'sirope naranja'], 'https://via.placeholder.com/258x172.jpg?text=bizcocho');



  //Excepciones
  //plato no puede ser null
  try {
    manager.addDish();
  } catch (error) {
    console.log(error.toString());
  }

  //no es un objeto Dish
  try {
    manager.addDish(categoria1);
  } catch (error) {
    console.log(error.toString());
  }

  //funcionamiento correcto
  try {
    manager.addDish(plato1);

  } catch (error) {
    console.log(error.toString());
  }

  //plato ya existe
  try {
    manager.addDish(plato1);

  } catch (error) {
    console.log(error.toString());
  }


  //multiargumentos
  manager.addDish(plato2, plato3);

  //encadenacion
  manager.addDish(plato4).addDish(plato5);


  //--------------------------------------------------
  console.log('########## adRestaurant ##########');

  //creo restaurantes para operar
  const restaurante1 = Manager.getInstance().createRestaurant('El Vergel', ' con capacidad para 100 comensales', objetoCoordinate);
  const restaurante2 = Manager.getInstance().createRestaurant('Casa Lucia', ' con capacidad para 70 comensales', objetoCoordinate);
  const restaurante3 = Manager.getInstance().createRestaurant('El Patio', ' con capacidad para 80 comensales', objetoCoordinate);
  const restaurante4 = Manager.getInstance().createRestaurant('LucasYSole', ' con capacidad para 50 comensales', objetoCoordinate);
  const restaurante5 = Manager.getInstance().createRestaurant('Atardecer', ' con capacidad para 100 comensales', objetoCoordinate);



  //Excepciones
  //restaurante no puede ser null
  try {
    manager.addRestaurant();
  } catch (error) {
    console.log(error.toString());
  }

  //no es un objeto Dish
  try {
    manager.addRestaurant(categoria1);
  } catch (error) {
    console.log(error.toString());
  }

  //funcionamiento correcto
  try {
    manager.addRestaurant(restaurante1);

  } catch (error) {
    console.log(error.toString());
  }

  //plato ya existe
  try {
    manager.addRestaurant(restaurante1);

  } catch (error) {
    console.log(error.toString());
  }


  //multiargumentos
  manager.addRestaurant(restaurante2, restaurante3);

  //encadenacion
  manager.addRestaurant(restaurante4).addRestaurant(restaurante5);

  //mustro coleccion
  console.log('muestro coleccion Restaurantes');

  try {

    for (const restaurante of manager.getterRestaurant()) {
      console.log(restaurante.toString());
    }

  } catch (error) {
    console.log(error.toString());
  }

  //--------------------------------------------------
  console.log('########## addAllergen ##########');

  const alergeno1 = Manager.getInstance().createAllergen('gluten', ' es una proteína que se encuentra en el trigo, la cebada, el centeno y a veces la avena ');
  const alergeno2 = Manager.getInstance().createAllergen('crustaceo', ' Cangrejos, langostas, gambas, langostinos, carabineros, cigalas, etc');
  const alergeno3 = Manager.getInstance().createAllergen('pescado', ' ademas del pescado la Gelatina de pescado utilizada como soporte de vitaminas o preparados de carotenoides.');
  const alergeno4 = Manager.getInstance().createAllergen('cacahuete', ' se encuentra además en semillas, pasta y aceites, se puede encontrar en galletas, chocolates, postres, salsas, etc. ');
  const alergeno5 = Manager.getInstance().createAllergen('soja', ' aceite y grasa de semilla de soja totalmente refinados. ');
  const alergenoDeassign = Manager.getInstance().createAllergen('apio', ' se encuentra en este vegetal, sopas etc. ');


  //Excepciones
  //alergeno no puede ser null
  try {
    manager.addAllerge();
  } catch (error) {
    console.log(error.toString());
  }

  //no es un objeto alergeno
  try {
    manager.addAllerge(categoria1);
  } catch (error) {
    console.log(error.toString());
  }

  //funcionamiento correcto
  try {
    manager.addAllerge(alergeno1);

  } catch (error) {
    console.log(error.toString());
  }


  //alergeno ya existe
  try {
    manager.addAllerge(alergeno1);
  } catch (error) {
    console.log(error.toString());
  }

  //multiargumentos
  manager.addAllerge(alergeno2, alergeno3);

  //encadenacion
  manager.addAllerge(alergeno4).addAllerge(alergeno5);

  //mustro coleccion
  console.log('muestro coleccion alergenos');

  try {

    for (const allerge of manager.getterAllergen()) {
      console.log(allerge.toString());
    }

  } catch (error) {
    console.log(error.toString());
  }


  console.log("");
  console.log('##########--------~~~~~~~~~~~~~~~~~~ TEST MÉTODOS GETTER ~~~~~~~~~~~~~~~~~~-------- ##########');


  //--------------------------------------------------
  console.log('########## Getter categorias ##########');

  try {
    p1 = Manager.getInstance();
    for (const category of p1.getterCategories()) {
      console.log(category.toString());
    }

  } catch (error) {
    console.log(error.toString());
  }

  //--------------------------------------------------
  console.log('########## Getter menu ##########');

  try {
    for (const menu of p1.getterMenus()) {
      console.log(menu.toString());
    }

  } catch (error) {
    console.log(error.toString());
  }

  //--------------------------------------------------
  console.log('########## Getter Alergenos ##########');

  try {
    for (const allerge of p1.getterAllergen()) {
      console.log(allerge.toString());
    }

  } catch (error) {
    console.log(error.toString());
  }

  //--------------------------------------------------
  console.log('########## Getter Restaurante ##########');

  try {
    for (const restaurante of p1.getterRestaurant()) {
      console.log(restaurante.toString());
    }

  } catch (error) {
    console.log(error.toString());
  }




  console.log("");
  console.log('##########--------~~~~~~~~~~~~~~~~~~ TEST MÉTODOS ELIMINAR COLECCIONES DEL MANAGER ~~~~~~~~~~~~~~~~~~-------- ##########');


  //--------------------------------------------------
  console.log('########## removeCategoria ##########');

  //creo nueva categoria que no estara en el array #categories
  const categoriaRemove = Manager.getInstance().createCategory('tapas', 'variadas en poca cantidad');

  //Excepciones

  //categoria no existe
  try {
    manager.removeCategory(categoriaRemove);

  } catch (error) {
    console.log(error.toString());
  }


  //funcionamiento correcto
  try {
    manager.removeCategory(categoria1);
  } catch (error) {
    console.log(error.toString());
  }

  //multiargumentos
  manager.removeCategory(categoria2, categoria3);

  //encadenacion
  manager.removeCategory(categoria4).removeCategory(categoria5);

  //mustro coleccion sera vacia
  console.log('muestro coleccion categories');

  try {

    for (const category of manager.getterCategories()) {
      console.log(category.toString());
    }

  } catch (error) {
    console.log(error.toString());
  }


  //--------------------------------------------------
  console.log('########## removeMenu ##########');

  //creo nueva menu que no estara en el array #menus
  const menuRemove = Manager.getInstance().createMenu('Carnaval', ' constara de 8 platos degustacion, postre, pan y una bebida, precio 25 euros');

  //Excepciones


  //menu no existe
  try {
    manager.removeMenu(menuRemove);

  } catch (error) {
    console.log(error.toString());
  }


  //funcionamiento correcto
  try {
    manager.removeMenu(menu1);
  } catch (error) {
    console.log(error.toString());
  }

  //multiargumentos
  manager.removeMenu(menu2, menu3);

  //encadenacion
  manager.removeMenu(menu4).removeMenu(menu5);

  //mustro coleccion sera vacia
  console.log('muestro coleccion menus');

  try {

    for (const menu of manager.getterMenus()) {
      console.log(menu.toString());
    }

  } catch (error) {
    console.log(error.toString());
  }


  //--------------------------------------------------
  console.log('########## removeAllergen ##########');

  //creo nuevo alergeno que no estara en el array #alergenos
  const removeAllergen = Manager.getInstance().createAllergen('mostaza', ' Además de en semillas, en polvo o en forma líquida, se puede encontrar en algunos panes, currys, marinados, productos cárnicos, aliños, salsas, sopas, etc. ');

  //Excepciones

  //allegen no existe
  try {
    manager.removeAllergen(removeAllergen);

  } catch (error) {
    console.log(error.toString());
  }


  //funcionamiento correcto
  try {
    manager.removeAllergen(alergeno1);
  } catch (error) {
    console.log(error.toString());
  }

  //multiargumentos
  manager.removeAllergen(alergeno2, alergeno3);

  //encadenacion
  manager.removeAllergen(alergeno4).removeAllergen(alergeno5);

  //mustro coleccion sera vacia
  console.log('muestro coleccion alergénos');

  try {

    for (const allerge of manager.getterAllergen()) {
      console.log(allerge.toString());
    }

  } catch (error) {
    console.log(error.toString());
  }


  //--------------------------------------------------
  console.log('########## removeRestaurant ##########');

  //creo nuevo alergeno que no estara en el array de los restaurantes
  const removeRestaurant = Manager.getInstance().createRestaurant('Tapas Marta', ' con capacidad para 20 comensales', objetoCoordinate);

  //Excepciones

  //restaurante no existe
  try {
    manager.removeRestaurant(removeRestaurant);

  } catch (error) {
    console.log(error.toString());
  }


  //funcionamiento correcto
  try {
    manager.removeRestaurant(restaurante1);
  } catch (error) {
    console.log(error.toString());
  }

  //multiargumentos
  manager.removeRestaurant(restaurante2, restaurante3);

  //encadenacion
  manager.removeRestaurant(restaurante4).removeRestaurant(restaurante5);

  //mustro coleccion sera vacia
  console.log('muestro coleccion restaurantes');

  try {

    for (const restaurante of manager.getterRestaurant()) {
      console.log(restaurante.toString());
    }

  } catch (error) {
    console.log(error.toString());
  }

  //--------------------------------------------------
  console.log('########## removeDish ##########');

  //creo nuevo plato
  const removeDish = Manager.getInstance().createDish('codillo', 'codillo en horno', ['codillo', 'patatas', 'sal', 'pimienta'], 'https://via.placeholder.com/258x172.jpg?text=Codillo');

  //Excepciones

  //codillo no existe
  try {
    manager.removeDish(removeDish);

  } catch (error) {
    console.log(error.toString());
  }


  //funcionamiento correcto
  try {
    manager.removeDish(plato1);
  } catch (error) {
    console.log(error.toString());
  }

  //multiargumentos
  manager.removeDish(plato2, plato3);

  //encadenacion
  manager.removeDish(plato4).removeDish(plato5);

  //mustro coleccion sera vacia
  console.log('muestro coleccion platos');

  try {

    for (const restaurante of manager.getterRestaurant()) {
      console.log(restaurante.toString());
    }

  } catch (error) {
    console.log(error.toString());
  }



  console.log("");
  console.log('##########--------~~~~~~~~~~~~~~~~~~ TEST MÉTODOS ASIGNAR / DESASIGNAR PLATOS  ~~~~~~~~~~~~~~~~~~-------- ##########');


  //--------------------------------------------------
  console.log('########## assignCategoryToDish ##########');


  // Categoria y plato no existen. Los añade
  manager.assignCategoryToDish(categoria1, plato1);

  // categoria existe y plato no
  manager.assignCategoryToDish(categoria1, plato2);

  // encadenacion
  manager.assignCategoryToDish(categoria2, plato3).assignCategoryToDish(categoria3, plato4);

  // multiargumento
  manager.assignCategoryToDish(categoria3, plato4, plato5);

  // no hay argumentos
  try {
    manager.assignCategoryToDish();

  } catch (error) {
    console.log(error.toString());
  }

  // plato es null
  try {
    manager.assignCategoryToDish(categoria3, plato1, null);
  } catch (error) {
    console.log(error.toString());
  }

  // categoria es null
  try {
    manager.assignCategoryToDish(null, plato1);
  } catch (error) {
    console.log(error.toString());
  }



  //--------------------------------------------------
  console.log('########## deaassignCategoryToDish ##########');

  // funcionamiento correcto. categoria no esta registrado
  try {
    manager.deassignCategoryToDish(categoriaDeassign, plato1);
  } catch (error) {
    console.log(error.toString());
  }

  // funcionamiento correcto. categoria existe y plato no
  try {
    manager.deassignCategoryToDish(categoria1, platoDesassign);
  } catch (error) {
    console.log(error.toString());
  }

  // encadenacion
  manager.deassignCategoryToDish(categoria2, plato3).deassignCategoryToDish(categoria3, plato4);

  // multiargumento
  manager.deassignCategoryToDish(categoria3, plato5);

  // no hay argumentos
  try {
    manager.deassignCategoryToDish();

  } catch (error) {
    console.log(error.toString());
  }

  // plato es null
  try {
    manager.deassignCategoryToDish(categoria3, plato1, null);
  } catch (error) {
    console.log(error.toString());
  }

  // menu es null
  try {
    manager.deassignCategoryToDish(null, plato1);
  } catch (error) {
    console.log(error.toString());
  }




  //--------------------------------------------------
  console.log('########## assignAllergenToDish ##########');


  // funcionamiento correcto. alergeno y plato no existen. Los añade
  manager.assignAllergenToDish(alergeno1, plato1);

  // funcionamiento correcto. alérgeno existe y plato no
  manager.assignAllergenToDish(alergeno1, plato2);

  // encadenacion
  manager.assignAllergenToDish(alergeno2, plato3).assignAllergenToDish(alergeno3, plato4);

  // multiargumento
  manager.assignAllergenToDish(alergeno3, plato4, plato5);

  // no hay argumentos
  try {
    manager.assignAllergenToDish();

  } catch (error) {
    console.log(error.toString());
  }

  // plato es null
  try {
    manager.assignAllergenToDish(alergeno3, plato1, null);
  } catch (error) {
    console.log(error.toString());
  }

  // categoria es null
  try {
    manager.assignAllergenToDish(null, plato1);
  } catch (error) {
    console.log(error.toString());
  }


  //--------------------------------------------------
  console.log('########## deassignAllergenToDish ##########');

  // funcionamiento correcto. alergeno no esta registrado
  try {
    manager.deassignAllergenToDish(alergenoDeassign, plato1);
  } catch (error) {
    console.log(error.toString());
  }

  // funcionamiento correcto. alérgeno existe y plato no
  try {
    manager.deassignAllergenToDish(alergeno1, platoDesassign);
  } catch (error) {
    console.log(error.toString());
  }

  // encadenacion
  manager.deassignAllergenToDish(alergeno2, plato3).deassignAllergenToDish(alergeno3, plato4);

  // multiargumento
  manager.deassignAllergenToDish(alergeno3, plato5);

  // no hay argumentos
  try {
    manager.deassignAllergenToDish();

  } catch (error) {
    console.log(error.toString());
  }

  // plato es null
  try {
    manager.deassignAllergenToDish(alergeno3, plato1, null);
  } catch (error) {
    console.log(error.toString());
  }

  // categoria es null
  try {
    manager.deassignAllergenToDish(null, plato1);
  } catch (error) {
    console.log(error.toString());
  }


  //--------------------------------------------------
  console.log('########## assignDishToMenu ##########');

  // funcionamiento correcto. menu y plato no existen. Los añade
  manager.assignDishToMenu(menu1, plato1);

  // funcionamiento correcto. menu existe y plato no
  manager.assignDishToMenu(menu1, plato2);

  // encadenacion
  manager.assignDishToMenu(menu2, plato3).assignDishToMenu(menu3, plato4);

  // multiargumento
  manager.assignDishToMenu(menu3, plato4, plato5);

  // no hay argumentos
  try {
    manager.assignDishToMenu();

  } catch (error) {
    console.log(error.toString());
  }

  // plato es null
  try {
    manager.assignDishToMenu(menu3, plato1, null);
  } catch (error) {
    console.log(error.toString());
  }

  // categoria es null
  try {
    manager.assignDishToMenu(null, plato1);
  } catch (error) {
    console.log(error.toString());
  }





  console.log('########## deassignDishToMenu ##########');

  // funcionamiento correcto. menu no esta registrado
  try {
    manager.deassignDishToMenu(menuDeassign, plato1);
  } catch (error) {
    console.log(error.toString());
  }

  // funcionamiento correcto. menu existe y plato no
  try {
    manager.deassignDishToMenu(menu1, platoDesassign);
  } catch (error) {
    console.log(error.toString());
  }

  // encadenacion
  manager.deassignDishToMenu(menu2, plato3).deassignDishToMenu(menu3, plato4);

  // multiargumento
  manager.deassignDishToMenu(menu3, plato5);

  // no hay argumentos
  try {
    manager.deassignDishToMenu();

  } catch (error) {
    console.log(error.toString());
  }

  // plato es null
  try {
    manager.deassignDishToMenu(menu3, plato1, null);
  } catch (error) {
    console.log(error.toString());
  }

  // menu es null
  try {
    manager.deassignDishToMenu(null, plato1);
  } catch (error) {
    console.log(error.toString());
  }

  console.log("");
  console.log('##########--------~~~~~~~~~~~~~~~~~~ MÉTODOS ITERADORES ~~~~~~~~~~~~~~~~~~-------- ##########');
  console.log("");
  console.log('########## getDishesInCategory ##########');

  // no hay argumentos
  try {
    for (const plato of manager.getDishesInCategory()) {
    }
  } catch (error) {
    console.log(error.toString());
  }

  // categoria no esta registrado
  try {
    for (const plato of manager.getDishesInCategory(categoriaDeassign)) {
    }
  } catch (error) {
    console.log(error.toString());
  }

  // categoria es null
  try {
    for (const plato of manager.getDishesInCategory(null)) {
    }
  } catch (error) {
    console.log(error.toString());
  }

  // sin funcion de ordenacion
  console.log('Listado platos correspondiente a la categoria ' + categoria1.name);
  for (const plato of manager.getDishesInCategory(categoria1)) {
    console.log(plato.toString('<br>'));
  }

  //con funcion de ordenacion

  //defino funcion ordeno por numero de ingredientes
  const ordenarPorNombre = (a, b) => (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) ? -1 : 1;

  console.log('Listado platos ordenados por nombre ');
  for (const plato of manager.getDishesInCategory(categoria1, ordenarPorNombre)) {
    console.log(plato.toString('<br>'));
  }




  console.log('########## getDishesWithAllergen ##########');

  // no hay argumentos
  try {
    for (const plato of manager.getDishesWithAllergen()) {
    }
  } catch (error) {
    console.log(error.toString());
  }

  // alergeno no esta registrado
  try {
    for (const plato of manager.getDishesWithAllergen(alergenoDeassign)) {
    }
  } catch (error) {
    console.log(error.toString());
  }

  // alergeno es null
  try {
    for (const plato of manager.getDishesWithAllergen(null)) {
    }
  } catch (error) {
    console.log(error.toString());
  }


  // sin funcion de ordenacion
  console.log('Listado platos correspondiente aL alergeno ' + alergeno1.name);
  for (const plato of manager.getDishesWithAllergen(alergeno1)) {
    console.log(plato.toString('<br>'));
  }

  //con funcion de ordenacion
  console.log('Listado platos ordenados por nombre ');
  for (const plato of manager.getDishesWithAllergen(alergeno1, ordenarPorNombre)) {
    console.log(plato.toString('<br>'));
  }



  console.log("");
  console.log('##########--------~~~~~~~~~~~~~~~~~~ MÉTODOS INTERCAMBIO ~~~~~~~~~~~~~~~~~~-------- ##########');
  console.log("");
  console.log('########## changeDishesPositionsInMenu ##########');

  
  // no hay argumentos
  try {
    manager.changeDishesPositionInMenu();

  } catch (error) {
    console.log(error.toString());
  }

  // menu no esta registrado
  try {
    manager.changeDishesPositionInMenu(menuDeassign, plato1, plato2);
  } catch (error) {
    console.log(error.toString());
  }

  // menu es null
  try {
    manager.changeDishesPositionInMenu(null, plato1, plato2);
  } catch (error) {
    console.log(error.toString());
  }

  // encadenacion
  manager.changeDishesPositionInMenu(menu1, plato1, plato2).changeDishesPositionInMenu(menu1, plato1, plato2);
}


window.onload = creacionEntidadesTest;
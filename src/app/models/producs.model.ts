export class producs {
    id!:                  number;
    name!:                string;
    id_categoty!:         number;
    id_subcategory!:      number;
    sku!:                 string;
    serial_number!:       string;
    id_brand!:            number;
    model!:               string;
    description!:         string;
    inventory!:           number;
    photo!:               string;
    id_status!:           number;
    id_unitmeasure!:      number;
    created_at!:          null;
    updated_at!:          null;
    categories!:          Categories;
    subcategories!:       Subcategories;
    marca!:               Marca;
    estatus!:             Estatus;

   
  }

   export class Categories {
    id!:                number;
    name!:              string;
    id_status!:         number;
    sku_indispensable!: number;


}

  export class Subcategories {
    id!:                number;
    name!:              string;
    id_category!:       number;
    id_status!:         number;
    sku_indispensable!: number;

}


export class Marca {
  id!:                number;
  name!:              string;
  id_status!:         number;

}

export class Estatus {
  id!:                number;
  nombre!:            string;
  estatus!:           string;

}


  
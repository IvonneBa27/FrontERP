

export class  cat_categories {
    id!:            number;
    name!:          string;
    id_status!:     number;
    created_at!:    Date;
    subcategories!: Subcategory[];
}

export interface Subcategory {
    id:                number;
    name:              string;
    id_category:       number;
    id_status:         number;
    sku_indispensable: number;
    created_at:        Date;
}

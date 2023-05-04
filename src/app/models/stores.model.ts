export class Stores{
    id!:                            number;
    name!:                          string;
    url_maps!:                      string;
    description!:                   string;
    id_status!:                     number;
    id_user!:                       number;
    essential_section!:             number;
    secction!:                      Secction[];
}


export interface Secction{
    id:                            number;
    name:                          string;
    id_status:                     number;
    id_store:                      number;
    nomenclature:                  string;

}
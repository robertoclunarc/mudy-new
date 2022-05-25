import { Location } from "./location.model";

interface Item {
    place_id: number;
    article_id: number;
}

export interface Moving {
    first_name: string;
    last_name: string;
    rut: string;
    email: string;
    phone: string;
    whatsapp: string;
    referral_code: string;
    date: string;
    hour: string;
    origin: Location;
    destination: Location;
    items: Item[];
}    

import { Location } from "./location.model";

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
    inventory: {
        place_id: number;
        items: any
    }

}    

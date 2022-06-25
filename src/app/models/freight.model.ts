import { Location } from "./location.model";

export interface Freight{
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
    vehicle_type_id: number;
    round_trip: boolean;
    need_helper: boolean;
    whatsApp_communication: boolean;
    cargo_description: string;
    file_path: string;
}
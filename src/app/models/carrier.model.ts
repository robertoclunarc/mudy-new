import { Vehicle } from "./vehicle.model";

export interface Carrier {
    company_name: string;
    company_rut: number;
    company_phone: string;
    company_email: string;
    company_address: string;
    legal_first_name: string;
    legal_last_name: string;
    legal_rut: number;
    legal_phone: string;
    legal_email: string;
    account_holder: string;
    account_rut: number;
    bank_id: number;
    account_type: string;
    account_number: number;
    vehicles: Vehicle[]
}
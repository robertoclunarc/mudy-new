export interface Vehicle {
    vehicle_type_id: number;
    vehicle_brand_id: number;
    model: string;
    patente: string;
    hidraulic_elevator: boolean;
    long: number;
    width: number;
    high: number;
    technical_review: string;
    date_technical_review: any; //JPG, PNG, PDF
    gas_review: any; //JPG, PNG, PDF
    date_gas_review: string;
    circulation_permit: any; //JPG, PNG, PDF
    date_circulation_permit: string;
    padron: any; //JPG, PNG, PDF 
}


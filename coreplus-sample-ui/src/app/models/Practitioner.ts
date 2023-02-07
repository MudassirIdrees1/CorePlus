export enum PractitionerLevel {
    OWNER,
    ADMIN,
    CASE_MANAGER,
    PRACTITIONER
}


export interface Practitioner {
    id: number;
    name: string;
    
    level: PractitionerLevel 
}
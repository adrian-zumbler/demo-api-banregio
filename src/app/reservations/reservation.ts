import { Service } from '../_wrappers/service'
import { Salon } from '../salons/salon'


export class Reservation {
    id: string
    appointment_date: Date
    appointment_time: string
    payment_method: string
    created_at: Date 
    service: string
    salon: string
    service_price: number
    phone: string
    email: string
    status: string
    action_date: Date
    // Relationships
    service_object: Service
    salon_object: Salon
    

}
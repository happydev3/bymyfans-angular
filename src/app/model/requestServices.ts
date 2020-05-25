import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';

export class RequestService {
    id: number;
    user_id: string;
    title: string;
    category_id: number;
    expiry_date: string;
    location: string;
    budget: string;
    description: string;
    media_file: File;
    status: string;
    created_at: string;
    updated_at: string;
}
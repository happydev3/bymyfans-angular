import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class Category {
    id: number;
    name: string;
    status: number;
    created_at: Timestamp<Date>;
    updated_at: Timestamp<Date>;
}
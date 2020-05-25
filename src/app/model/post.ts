import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class Post {
    id: number;
    user_id: number;
    content: string;
    status: number;
    created_at: string;
    updated_at: string;
    get_user: {
        id: number,
        name: string,
        email: string,
        email_verified_at: string,
        location: string,
        mobile: number,
        about: string,
        profile_pic: string,
        wall_pic: string,
    }
    get_post_media:Array<{
        id: Number,
        post_id: Number,
        user_id: Number,
        file_name: String,
        mime_type: String,
        created_at: String,
        updated_at: String,
    }>
}
import { Time } from '@angular/common';

export class User  {
    id: Number;
    name: String;
    email: String;
    location: String;
    mobile: Number;
    about: String;
    profile_pic: String;
    wall_pic: String;
    email_verified_at: Time;
    created_at: Time;
    updated_at: Time;
}
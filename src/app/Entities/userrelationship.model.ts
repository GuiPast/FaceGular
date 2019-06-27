import { User } from './user.model';

export class Relationship {
    id: number;
    usersent: User;
    userreceive: User;
    state: number;
}

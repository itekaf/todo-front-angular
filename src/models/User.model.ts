class Provider {
  name: string;
}
export class UserModel {
  id: string;
  username: string;

  name?: string;
  email?: string;
  providers: Provider[];
}

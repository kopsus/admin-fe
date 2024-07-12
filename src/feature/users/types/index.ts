export type IRoleUsers = 'Masyarakat' | 'Agen' | 'Pengepul' | 'Admin' | '';

export type IDataUser = {
  id: string;
  Name: string;
  RT: number | string;
  NoHp: string;
  role: IRoleUsers;
};

export type IDataAdmin = {
  id: string;
  name: string;
  email: string;
  role: IRoleUsers;
};

export type IActiveTab = {
  name: IRoleUsers;
};

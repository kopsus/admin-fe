export type IRoleUsers = 'Masyarakat' | 'Agen' | 'Pengepul' | 'Admin' | '';

export type IDataUser = {
  id: string;
  Name: string;
  RT: number | string;
  NoHp: number | string;
  role: IRoleUsers;
};

export type IDataAdmin = {
  id: string;
  name: string;
  email: string;
  role: IRoleUsers;
};

export type IRT = {
  id: string;
  name: string;
};

export type IActiveTab = {
  name: IRoleUsers;
};

import { IJenisSampah } from '../../_global/types';
import { IRoleUsers } from '../../users/types';

export type IDataTransactionUsers = {
  id: string;
  Name: string;
  RT: number | string;
  JenisSampah: IJenisSampah[];
  Berat: string;
  Total: number | string;
  Status: boolean;
  role: IRoleUsers;
};

export type IDataTransactionPengepul = {
  id: string;
  name: string;
  email: string;
  JenisSampah: IJenisSampah[];
  Berat: string;
  Total: number | string;
  Status: boolean;
  role: IRoleUsers;
};

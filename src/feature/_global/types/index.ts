export type IDrawerCreate<T> = {
  show: boolean;
  type: 'CREATE' | 'UPDATE';
  data: T | null;
};

export type IDialogDelete = {
  show: boolean;
  id: string;
};

export type IJenisSampah = {
  id: string;
  name: string;
};

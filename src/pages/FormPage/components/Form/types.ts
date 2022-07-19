export enum Name {
  name = 'name',
  phone = 'phone',
  email = 'email',
}

export interface Field {
  id: string,
  label: string,
  name: Name,
}

export type Values = Record<keyof typeof Name, string>

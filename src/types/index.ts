export interface MenuItemType {
  icon: React.ReactNode;
  label: string;
  link: string;
  subItems?: {label: string, link: string}[];
}
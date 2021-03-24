import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
   {
    name: 'Cadastros',
    url: '/cadastro',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Usuário',
        url: '/cadastro/usuario',
        icon: 'icon-user',
      },
    ]
  }
];

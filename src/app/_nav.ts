import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
   {
    name: 'Cadastros',
    url: '/cadastro',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Pacientes',
        url: '/cadastro/paciente',
        icon: 'icon-user'
      },
    ]
  }
];

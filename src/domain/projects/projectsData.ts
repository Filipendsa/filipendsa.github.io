import type { TranslationKey } from '../../shared/i18n/locales';

export interface ProjectItem {
  id: string;
  mockupSrc: string;
  mockupAlt: string;
  tags: string[];
  titleKey: TranslationKey;
  roleKey: TranslationKey;
  descKey: TranslationKey;
  actionType: 'link' | 'badge';
  actionHref?: string;
  actionTextKey?: TranslationKey;
}

export const projectsData: ProjectItem[] = [
  {
    id: '7you-iatec',
    mockupSrc: 'assets/img/project-iatec.svg',
    mockupAlt: '7you App Enterprise Core Platform Mockup',
    tags: ['C#', '.NET 8', 'Angular', 'Clean Architecture', 'PostgreSQL', 'Docker'],
    titleKey: 'proj_iatec_title',
    roleKey: 'proj_iatec_role',
    descKey: 'proj_iatec_desc',
    actionType: 'badge'
  },
  {
    id: 'yesode-platform',
    mockupSrc: 'assets/img/project-yesode.svg',
    mockupAlt: 'Yesode Digital Solutions Mockup',
    tags: ['TypeScript', 'Go', 'Rust', 'Kubernetes', 'PostgreSQL', 'AWS', 'React'],
    titleKey: 'proj_yesode_title',
    roleKey: 'proj_yesode_role',
    descKey: 'proj_yesode_desc',
    actionType: 'link',
    actionHref: 'https://yesode.com',
    actionTextKey: 'btn_view_live'
  },
  {
    id: 'clean-architecture-boilerplate',
    mockupSrc: 'assets/img/project-boilerplate.svg',
    mockupAlt: 'Clean Architecture .NET 8 Boilerplate Terminal Mockup',
    tags: ['ASP.NET Core', 'DDD', 'CQRS (MediatR)', 'xUnit', 'FluentAssertions', 'Docker'],
    titleKey: 'proj_boiler_title',
    roleKey: 'proj_boiler_role',
    descKey: 'proj_boiler_desc',
    actionType: 'link',
    actionHref: 'https://github.com/Filipendsa',
    actionTextKey: 'btn_view_repo'
  },
  {
    id: 'autonomous-robotics-rover',
    mockupSrc: 'assets/img/project-robotics.svg',
    mockupAlt: 'Autonomous Robotics Radar Mockup',
    tags: ['C++', 'Embedded Systems', 'Sensor Fusion', 'Ultrasonic & IR', '3D Modeling'],
    titleKey: 'proj_robotics_title',
    roleKey: 'proj_robotics_role',
    descKey: 'proj_robotics_desc',
    actionType: 'link',
    actionHref: '#research',
    actionTextKey: 'btn_read_paper'
  }
];

interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Team Member'],
  customerRoles: ['Player'],
  tenantRoles: ['Team Member'],
  tenantName: 'Desenvolvedora',
  applicationName: 'Simulador De Fusca',
  addOns: ['chat', 'notifications', 'file'],
};

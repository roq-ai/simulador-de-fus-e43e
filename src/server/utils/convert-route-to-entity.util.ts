const mapping: Record<string, string> = {
  cars: 'car',
  desenvolvedoras: 'desenvolvedora',
  games: 'game',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

import { DesenvolvedoraInterface } from 'interfaces/desenvolvedora';
import { GetQueryInterface } from 'interfaces';

export interface GameInterface {
  id?: string;
  name: string;
  difficulty_level: number;
  obstacles: number;
  desenvolvedora_id?: string;
  created_at?: any;
  updated_at?: any;

  desenvolvedora?: DesenvolvedoraInterface;
  _count?: {};
}

export interface GameGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  desenvolvedora_id?: string;
}

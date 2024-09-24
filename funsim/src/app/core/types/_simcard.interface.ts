import { IAgent } from "src/app/core/types";
import { ITariff } from "src/app/core/types";

export interface ISimcard {
  id: number;
  number?: string;
  simcard_id?: number | null;
  region_id?: number | null;
  region_group_id?: number | null;
  plan_id?: number | null;
  additional_plan_id?: number | null;
  agent_id?: number;
  date_start?: string | null;
  date_finish?: string | null;
  customer_id?: number;
  user_id?: number;
  payment_type?: string;
  status?: "new";
  created_at?: string;
  updated_at?: string;
  application_id?: number;
  plan?: ITariff;
  agent?: IAgent;
}

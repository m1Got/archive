export interface IOrder {
  id?: number;
  tour_agent_id: number;
  tariff_id?: number;
  tariff?: number;
  name?: string;
  full_name?: string;
  status?: number;
  price?: number;
  phone: string;
  payment_type: number;
  delevery_type: number;
  payment_method: number;
  passport_image?: File | null;
  esim?: number;
  physical_sim?: number;
  region_group_id?: string[];
  user_id: number;
}

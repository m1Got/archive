import { ICountry } from "src/app/core/types";

export interface ITariff {
  id: number;
  name: string;
  quantity_sms: number | null;
  status: string;
  expiry_day: number;
  region_id: number | null;
  quantity_minut: number | null;
  quantity_internet: string | null;
  traffic_type: string | null;
  price_arrival: number | null;
  price_sell: number | null;
  type: string;
  provider_id: number;
  region_group_id: number;
  esim: number | null;
  hide_site: number;
  physical_sim: number | null;
  tariff_4g: number | null;
  tariff_5g: number | null;
  tariff_128: number | null;
  tariff_256: number | null;
  tariff_384: number | null;
  description: string | null;
  regions: ICountry[];
  region_group: {
    id: number;
    name: string;
  };
}

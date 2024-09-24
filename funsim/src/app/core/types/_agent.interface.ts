export interface IAgent {
  id: number;
  title: string;
  address: string;
  phone: string;
  user_id: number;
  status: string;
  balance: number | null;
  longtitude: string | null;
  latitude: string | null;
  city: string | null;
}

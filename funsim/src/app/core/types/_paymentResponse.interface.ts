export interface IPaymentResponse {
  success: boolean;
  data: {
    redirect_url: string;
    transaction_id: number;
    referenceId: string;
  };
  message: string;
  error_code: number;
}

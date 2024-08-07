interface ApiResponse<T> {
    data: T;
  }
interface Client {};
interface Product {};

  class ApiService {
    private readonly baseUrl: string;
    constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
    }
    public async get<T>(url: string): Promise<ApiResponse<T>> {
      const response = await fetch(`${this.baseUrl}${url}`);
      const data = await response.json() as T;
      return { data };
    }
  }
  
  const apiClient = new ApiService('abc');
 
  async function getClientData(): Promise<Client> {
   const clients = await apiClient.get<Client>(`/clients`);
   return clients;
  }

  async function getProductData(): Promise<Product> {
    const products = await apiClient.get<Product>(`/products`);
    return products;
}
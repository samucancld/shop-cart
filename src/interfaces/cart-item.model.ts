import { Product } from "./product.model";

export interface CartItem_ extends Product {
  quantity: number;
}
type Engine = {
  type: string;
  displacement: string;
  fuelType: string;
}

type Maintenance = {
  type: string;
  date: string;
  mileage: number;
  mechanic: string;
  cost: number;
  notes: string;
}

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  engine: Engine;
  transmission: string;
  vin: string;
  maintenance: Maintenance[];
}

export interface CarResponse {
  cars: Car[];
  total: number;
}

export interface CarPayload {
  car: Car;
}



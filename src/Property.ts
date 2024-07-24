import { Entity } from "./Entity";

// PropertyExpensesEntity
export interface PropertyExpensesEntity extends Entity {
  units: number;
  costPerUnit: number;
}

// Derived Interfaces

// RehabProject
export interface RehabProject extends Entity {
  property: Property[];
}

// Property
export interface Property extends Entity {
  address: string;
  propertySpaces: PropertySpaces[];
}

// PropertySpaces
export interface PropertySpaces extends Entity {
  type: string;
  photos: string[];
  floorArea: number;
  wallArea: number;
  services: Services[];
  propertyComponents: PropertyComponents[];
}

// Services
export interface Services extends PropertyExpensesEntity {}

// PropertyComponents
export interface PropertyComponents extends PropertyExpensesEntity {}

// HoldingCosts
export interface HoldingCosts extends PropertyExpensesEntity {}

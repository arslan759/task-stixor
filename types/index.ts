import { MouseEventHandler } from "react";

export interface PrimaryBtnProps {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface InputFieldProps {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  options: string[];
}

export interface PaginatorProps {
  count: number;
  boundaryCount: number;
  siblingCount: number;
  page: number;
  onChange: (value: number) => void;
}

export interface Event {
  relevance: number;
  id: string;
  title: string;
  alternate_titles: string[];
  description: string;
  category: string;
  labels: string[];
  rank: number;
  local_rank: number;
  phq_attendance: number;
  entities: Entity[];
  duration: number;
  start: Date;
  end: Date;
  predicted_end: Date;
  updated: Date;
  first_seen: Date;
  timezone: string;
  location: number[];
  geo: Geo;
  scope: string;
  country: string;
  place_hierarchies: Array<string[]>;
  state: string;
  brand_safe: boolean;
  private: boolean;
  predicted_event_spend: number;
  predicted_event_spend_industries: PredictedEventSpendIndustries;
}

export interface Entity {
  entity_id: string;
  name: string;
  type: string;
  formatted_address: string;
}

export interface Geo {
  geometry: Geometry;
  placekey: string;
}

export interface Geometry {
  coordinates: number[];
  type: string;
}

export interface PredictedEventSpendIndustries {
  accommodation: number;
  hospitality: number;
  transportation: number;
}

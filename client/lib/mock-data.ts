export interface NerState {
  id: string;
  name: string;
  capital: string;
  shipments: number;
  vehicles: number;
  riskScore: number;
  riskLabel: RiskLevel;
  accessibility: number;
  delayed: number;
  weather: string;
  hubs: number;
}

export type RiskLevel = "Low" | "Moderate" | "High" | "Very High" | "Critical";

export function riskLevelFromScore(score: number): RiskLevel {
  if (score <= 20) return "Low";
  if (score <= 40) return "Moderate";
  if (score <= 60) return "High";
  if (score <= 80) return "Very High";
  return "Critical";
}

export const NER_STATES: NerState[] = [
  {
    id: "assam",
    name: "Assam",
    capital: "Guwahati",
    shipments: 124,
    vehicles: 32,
    riskScore: 38,
    riskLabel: "Moderate",
    accessibility: 81,
    delayed: 8,
    weather: "Partly Cloudy",
    hubs: 4,
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    capital: "Itanagar",
    shipments: 46,
    vehicles: 11,
    riskScore: 64,
    riskLabel: "High",
    accessibility: 58,
    delayed: 6,
    weather: "Overcast",
    hubs: 2,
  },
  {
    id: "manipur",
    name: "Manipur",
    capital: "Imphal",
    shipments: 58,
    vehicles: 14,
    riskScore: 52,
    riskLabel: "High",
    accessibility: 66,
    delayed: 5,
    weather: "Clear",
    hubs: 2,
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    capital: "Shillong",
    shipments: 71,
    vehicles: 18,
    riskScore: 72,
    riskLabel: "Very High",
    accessibility: 62,
    delayed: 9,
    weather: "Heavy Rain",
    hubs: 3,
  },
  {
    id: "mizoram",
    name: "Mizoram",
    capital: "Aizawl",
    shipments: 39,
    vehicles: 9,
    riskScore: 45,
    riskLabel: "High",
    accessibility: 64,
    delayed: 3,
    weather: "Light Rain",
    hubs: 1,
  },
  {
    id: "nagaland",
    name: "Nagaland",
    capital: "Kohima",
    shipments: 43,
    vehicles: 10,
    riskScore: 34,
    riskLabel: "Moderate",
    accessibility: 70,
    delayed: 2,
    weather: "Clear",
    hubs: 2,
  },
  {
    id: "tripura",
    name: "Tripura",
    capital: "Agartala",
    shipments: 52,
    vehicles: 12,
    riskScore: 22,
    riskLabel: "Moderate",
    accessibility: 79,
    delayed: 2,
    weather: "Sunny",
    hubs: 2,
  },
  {
    id: "sikkim",
    name: "Sikkim",
    capital: "Gangtok",
    shipments: 28,
    vehicles: 7,
    riskScore: 58,
    riskLabel: "High",
    accessibility: 60,
    delayed: 1,
    weather: "Foggy",
    hubs: 1,
  },
];

export const NER_CITIES = [
  { name: "Guwahati", state: "Assam", x: 30, y: 58 },
  { name: "Shillong", state: "Meghalaya", x: 34, y: 66 },
  { name: "Imphal", state: "Manipur", x: 66, y: 70 },
  { name: "Aizawl", state: "Mizoram", x: 54, y: 82 },
  { name: "Kohima", state: "Nagaland", x: 62, y: 60 },
  { name: "Agartala", state: "Tripura", x: 40, y: 80 },
  { name: "Gangtok", state: "Sikkim", x: 6, y: 22 },
  { name: "Itanagar", state: "Arunachal Pradesh", x: 58, y: 24 },
  { name: "Silchar", state: "Assam", x: 44, y: 72 },
  { name: "Dimapur", state: "Nagaland", x: 56, y: 54 },
  { name: "Tinsukia", state: "Assam", x: 62, y: 30 },
  { name: "Dibrugarh", state: "Assam", x: 58, y: 34 },
];

export interface DemoVehicle {
  id: string;
  driver: string;
  route: string;
  from: string;
  to: string;
  x: number;
  y: number;
  speed: number;
  eta: string;
  risk: RiskLevel;
  status: "In Transit" | "Available" | "Maintenance" | "Offline";
  shipment: string;
  fuel: number;
  type: string;
  capacity: string;
  registration: string;
}

export const DEMO_VEHICLES: DemoVehicle[] = [
  {
    id: "V001",
    driver: "Rohit Bora",
    route: "Guwahati → Shillong",
    from: "Guwahati",
    to: "Shillong",
    x: 32,
    y: 62,
    speed: 48,
    eta: "2h 15m",
    risk: "Moderate",
    status: "In Transit",
    shipment: "SHP-1042",
    fuel: 64,
    type: "Heavy Truck",
    capacity: "12T",
    registration: "AS-01-CT-4471",
  },
  {
    id: "V002",
    driver: "Lianzuala Colney",
    route: "Shillong → Imphal",
    from: "Shillong",
    to: "Imphal",
    x: 48,
    y: 68,
    speed: 39,
    eta: "5h 40m",
    risk: "High",
    status: "In Transit",
    shipment: "SHP-1043",
    fuel: 51,
    type: "Medium Truck",
    capacity: "7T",
    registration: "ML-05-AB-2210",
  },
  {
    id: "V003",
    driver: "Anup Deka",
    route: "Guwahati → Silchar",
    from: "Guwahati",
    to: "Silchar",
    x: 38,
    y: 66,
    speed: 52,
    eta: "3h 05m",
    risk: "Low",
    status: "In Transit",
    shipment: "SHP-1044",
    fuel: 78,
    type: "Heavy Truck",
    capacity: "14T",
    registration: "AS-25-DT-1187",
  },
  {
    id: "V004",
    driver: "Kevi Sema",
    route: "Kohima → Dimapur",
    from: "Kohima",
    to: "Dimapur",
    x: 59,
    y: 57,
    speed: 44,
    eta: "1h 20m",
    risk: "Low",
    status: "In Transit",
    shipment: "SHP-1045",
    fuel: 82,
    type: "Mini Truck",
    capacity: "3T",
    registration: "NL-01-GT-0932",
  },
  {
    id: "V005",
    driver: "Sanjib Nath",
    route: "Agartala → Silchar",
    from: "Agartala",
    to: "Silchar",
    x: 42,
    y: 76,
    speed: 0,
    eta: "—",
    risk: "Low",
    status: "Available",
    shipment: "—",
    fuel: 95,
    type: "Heavy Truck",
    capacity: "12T",
    registration: "TR-02-BN-5541",
  },
  {
    id: "V006",
    driver: "Tenzin Bhutia",
    route: "Gangtok → Guwahati",
    from: "Gangtok",
    to: "Guwahati",
    x: 15,
    y: 34,
    speed: 0,
    eta: "—",
    risk: "Moderate",
    status: "Maintenance",
    shipment: "—",
    fuel: 40,
    type: "Medium Truck",
    capacity: "7T",
    registration: "SK-01-CA-1120",
  },
];

export interface DemoShipment {
  id: string;
  source: string;
  destination: string;
  vehicle: string;
  driver: string;
  priority: "Low" | "Standard" | "High" | "Urgent";
  status:
    | "Pending"
    | "Assigned"
    | "In Transit"
    | "Delayed"
    | "Delivered"
    | "Cancelled";
  eta: string;
  risk: RiskLevel;
  accessibility: number;
}

export const DEMO_SHIPMENTS: DemoShipment[] = [
  {
    id: "SHP-1042",
    source: "Guwahati",
    destination: "Shillong",
    vehicle: "V001",
    driver: "Rohit Bora",
    priority: "High",
    status: "In Transit",
    eta: "2h 15m",
    risk: "Moderate",
    accessibility: 72,
  },
  {
    id: "SHP-1043",
    source: "Shillong",
    destination: "Imphal",
    vehicle: "V002",
    driver: "Lianzuala Colney",
    priority: "Urgent",
    status: "Delayed",
    eta: "5h 40m",
    risk: "High",
    accessibility: 61,
  },
  {
    id: "SHP-1044",
    source: "Guwahati",
    destination: "Silchar",
    vehicle: "V003",
    driver: "Anup Deka",
    priority: "Standard",
    status: "In Transit",
    eta: "3h 05m",
    risk: "Low",
    accessibility: 84,
  },
  {
    id: "SHP-1045",
    source: "Kohima",
    destination: "Dimapur",
    vehicle: "V004",
    driver: "Kevi Sema",
    priority: "Standard",
    status: "In Transit",
    eta: "1h 20m",
    risk: "Low",
    accessibility: 88,
  },
  {
    id: "SHP-1046",
    source: "Agartala",
    destination: "Silchar",
    vehicle: "—",
    driver: "—",
    priority: "Low",
    status: "Pending",
    eta: "—",
    risk: "Low",
    accessibility: 79,
  },
  {
    id: "SHP-1047",
    source: "Itanagar",
    destination: "Tinsukia",
    vehicle: "—",
    driver: "—",
    priority: "High",
    status: "Assigned",
    eta: "6h 50m",
    risk: "Very High",
    accessibility: 47,
  },
  {
    id: "SHP-1038",
    source: "Guwahati",
    destination: "Dibrugarh",
    vehicle: "V007",
    driver: "Pranjal Saikia",
    priority: "Standard",
    status: "Delivered",
    eta: "Delivered",
    risk: "Low",
    accessibility: 90,
  },
];

export interface DemoAlert {
  id: string;
  category:
    | "Weather"
    | "Road Closure"
    | "High Risk"
    | "Delay"
    | "Vehicle"
    | "Delivery"
    | "System";
  message: string;
  severity: "info" | "warning" | "critical" | "success";
  time: string;
  read: boolean;
}

export const DEMO_ALERTS: DemoAlert[] = [
  {
    id: "AL-01",
    category: "Weather",
    message: "Heavy rainfall detected near Shillong.",
    severity: "warning",
    time: "10:12 AM",
    read: false,
  },
  {
    id: "AL-02",
    category: "Delay",
    message: "Shipment SHP-1043 has a 78% predicted delay probability.",
    severity: "critical",
    time: "10:20 AM",
    read: false,
  },
  {
    id: "AL-03",
    category: "Road Closure",
    message: "Road blockage detected on NH-6 near Shillong.",
    severity: "critical",
    time: "10:41 AM",
    read: false,
  },
  {
    id: "AL-04",
    category: "System",
    message: "Alternative route calculated successfully for SHP-1043.",
    severity: "success",
    time: "10:44 AM",
    read: true,
  },
  {
    id: "AL-05",
    category: "Vehicle",
    message: "Vehicle V006 flagged for scheduled maintenance.",
    severity: "info",
    time: "9:02 AM",
    read: true,
  },
];

export const AUTOMATION_TIMELINE = [
  { time: "10:42 AM", text: "Road blockage detected on current route." },
  { time: "10:43 AM", text: "Alternative route calculated." },
  { time: "10:44 AM", text: "Logistics manager notified." },
  { time: "10:45 AM", text: "Vehicle V002 route updated." },
];

export const KPI_DATA = [
  { label: "Active Shipments", value: "32", trend: "+4 vs yesterday", up: true },
  { label: "Vehicles in Transit", value: "14", trend: "+2 vs yesterday", up: true },
  { label: "Deliveries Today", value: "28", trend: "+6 vs yesterday", up: true },
  { label: "Delayed Shipments", value: "5", trend: "-2 vs yesterday", up: false },
  { label: "High-Risk Routes", value: "7", trend: "+1 vs yesterday", up: false },
  { label: "ETA Accuracy", value: "87%", trend: "+3% vs last week", up: true },
  { label: "Avg. Accessibility", value: "78/100", trend: "+1 vs last week", up: true },
  { label: "Regional Risk", value: "Moderate", trend: "Stable", up: null },
];

export const SHIPMENT_VOLUME_TREND = [
  { day: "Mon", shipments: 38, delivered: 34 },
  { day: "Tue", shipments: 42, delivered: 37 },
  { day: "Wed", shipments: 45, delivered: 40 },
  { day: "Thu", shipments: 40, delivered: 33 },
  { day: "Fri", shipments: 51, delivered: 44 },
  { day: "Sat", shipments: 33, delivered: 30 },
  { day: "Sun", shipments: 28, delivered: 26 },
];

export const REGIONAL_VOLUME = NER_STATES.map((s) => ({
  state: s.name,
  shipments: s.shipments,
}));

export const RISK_TREND = [
  { day: "Mon", risk: 48 },
  { day: "Tue", risk: 52 },
  { day: "Wed", risk: 61 },
  { day: "Thu", risk: 57 },
  { day: "Fri", risk: 65 },
  { day: "Sat", risk: 59 },
  { day: "Sun", risk: 54 },
];

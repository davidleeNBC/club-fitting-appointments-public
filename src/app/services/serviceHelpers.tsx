import { Provider, Service } from '../../types';

// Mock golf club fitting services data
export const MOCK_SERVICES: Service[] = [
  { id: '1', name: 'Driver Fitting', duration: 60 },
  { id: '2', name: 'Iron Set Fitting', duration: 90 },
  { id: '3', name: 'Putter Fitting', duration: 45 },
  { id: '4', name: 'Wedge Fitting', duration: 60 },
  { id: '5', name: 'Full Bag Fitting', duration: 120 },
  { id: '6', name: 'Launch Monitor Session', duration: 30 },
  { id: '7', name: 'Club Regripping', duration: 15 },
  { id: '8', name: 'Swing Analysis', duration: 45 },
  { id: '9', name: 'Golf Ball Fitting', duration: 30 },
  { id: '10', name: 'Junior Club Fitting', duration: 60 },
  { id: '11', name: 'Fairway Wood Fitting', duration: 45 },
  { id: '12', name: 'Hybrid Fitting', duration: 45 },
  { id: '13', name: 'Loft and Lie Adjustment', duration: 30 },
  { id: '14', name: 'Club Repair', duration: 30 },
  { id: '15', name: 'Custom Club Building', duration: 120 },
];

// Mock golf fitting specialists data
export const mockProviders: Provider[] = [
    {
      id: '1',
      name: 'John Smith',
      locationId: '1',
      specialties: ['1', '2', '5'], // Driver Fitting, Iron Set Fitting, Full Bag Fitting
    },
    {
      id: '2',
      name: 'Emily Johnson',
      locationId: '1',
      specialties: ['3', '4', '9'], // Putter Fitting, Wedge Fitting, Golf Ball Fitting
    },
    {
      id: '3',
      name: 'Michael Chang',
      locationId: '2',
      specialties: ['6', '8', '15'], // Launch Monitor Session, Swing Analysis, Custom Club Building
    },
    {
      id: '4',
      name: 'Sarah Davis',
      locationId: '2',
      specialties: ['10', '11', '12'], // Junior Club Fitting, Fairway Wood Fitting, Hybrid Fitting
    },
    {
      id: '5',
      name: 'Robert Wilson',
      locationId: '3',
      specialties: ['5', '7', '13'], // Full Bag Fitting, Club Regripping, Loft and Lie Adjustment
    },
    {
      id: '6',
      name: 'Jessica Brown',
      locationId: '3',
      specialties: ['1', '2', '3'], // Driver Fitting, Iron Set Fitting, Putter Fitting
    },
    {
      id: '7',
      name: 'David Lee',
      locationId: '4',
      specialties: ['8', '6', '9'], // Swing Analysis, Launch Monitor Session, Golf Ball Fitting
    },
    {
      id: '8',
      name: 'Amanda Taylor',
      locationId: '4',
      specialties: ['4', '14', '15'], // Wedge Fitting, Club Repair, Custom Club Building
    },
    {
      id: '9',
      name: 'Thomas Garcia',
      locationId: '5',
      specialties: ['5', '1', '2'], // Full Bag Fitting, Driver Fitting, Iron Set Fitting
    },
    {
      id: '10',
      name: 'Laura Martinez',
      locationId: '5',
      specialties: ['10', '3', '9'], // Junior Club Fitting, Putter Fitting, Golf Ball Fitting
    },
  ]

// Helper function to get a subset of services (for use in other parts of the application)
export function getRandomServices(count: number): Service[] {
  const shuffled = [...MOCK_SERVICES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Helper function to get services by IDs (for use in other parts of the application)
export function getServicesByIds(ids: string[]): Service[] {
  return MOCK_SERVICES.filter((service) => ids.includes(service.id));
}

export function getProvidersByLocation(locationId: string): Provider[] {
  return mockProviders.filter((provider) => provider.locationId === locationId)
}
  
export function getProviderById(id: string): Provider | undefined {
  return mockProviders.find((provider) => provider.id === id)
}
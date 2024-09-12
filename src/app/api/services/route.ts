import { NextResponse } from 'next/server'
import { MOCK_SERVICES } from '../../../app/services/serviceHelpers';

export async function GET() {
  return NextResponse.json(MOCK_SERVICES)
}
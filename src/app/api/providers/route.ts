import { NextResponse } from 'next/server'
import { mockProviders } from '../../services/serviceHelpers'

export async function GET() {
  return NextResponse.json(mockProviders)
}

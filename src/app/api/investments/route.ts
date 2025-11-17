import { NextResponse } from 'next/server';
import investmentsData from '@/entities/investments/investments.data.json';

export async function GET() {
  return NextResponse.json(investmentsData);
}

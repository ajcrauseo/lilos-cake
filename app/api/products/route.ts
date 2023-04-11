import { NextResponse } from 'next/server';
import commerce from '../../lib/commerce';

export async function GET(req: Request) {
  const { data } = await commerce.products.list();

  return NextResponse.json({ data });
}

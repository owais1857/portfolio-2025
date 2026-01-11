import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // In a real scenario, you'd send this to an email service
    return NextResponse.json({ 
      status: "success", 
      message: `Message received from ${body.email}. This endpoint is live!` 
    });
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 400 });
  }
}
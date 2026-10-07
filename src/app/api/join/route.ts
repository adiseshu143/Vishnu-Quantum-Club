import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const recipientEmail = '24pa1a5762@vishnu.edu.in';

    console.log(`[Vishnu Quantum Club] New Membership Application received for ${recipientEmail}:`, data);

    return NextResponse.json({
      success: true,
      message: 'Application received and routed to ' + recipientEmail,
      recipient: recipientEmail,
      data,
    });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process application' },
      { status: 500 }
    );
  }
}

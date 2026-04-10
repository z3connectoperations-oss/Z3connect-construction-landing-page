import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { fullName, phone, email, company, address, message } = data;

    // Basic Validation
    if (!fullName || !phone || !email) {
      return NextResponse.json(
        { error: 'Required fields are missing.' },
        { status: 400 }
      );
    }

    // Write to Firestore Collection "contacts"
    const docRef = await addDoc(collection(db, 'contacts'), {
      fullName,
      phone,
      email,
      company: company || '',
      address: address || '',
      message: message || '',
      createdAt: new Date().toISOString(),
      status: 'new',
    });

    return NextResponse.json({ success: true, id: docRef.id }, { status: 201 });

  } catch (error: unknown) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error processing the form.' },
      { status: 500 }
    );
  }
}

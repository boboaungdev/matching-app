import React, { Suspense } from 'react';
import { AuthForm } from '@/components/auth-form';

export default function AuthenticationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthForm />
    </Suspense>
  );
}

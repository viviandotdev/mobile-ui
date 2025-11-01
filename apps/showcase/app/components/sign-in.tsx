import * as React from 'react';
import { SignIn } from '@/example-library/screens/sign-in';
import { PreviewScreen } from '@showcase/components/preview-screen';

const signInPreview = { name: 'Sign In', component: SignIn }

export default function SignInScreen() {
    return <PreviewScreen preview={signInPreview} />;
}

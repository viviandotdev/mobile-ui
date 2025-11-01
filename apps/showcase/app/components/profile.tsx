import * as React from 'react';
import { PreviewScreen } from '@showcase/components/preview-screen';
import { Profile } from '@/example-library/screens/profile';

const profilePreview = { name: 'Profile', component: Profile }

export default function ProfileScreen() {
    return <PreviewScreen preview={profilePreview} />;
}

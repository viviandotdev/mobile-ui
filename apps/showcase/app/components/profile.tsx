import * as React from 'react';
import { PreviewBlock } from '@showcase/components/preview-block';
import { Profile } from '@/example-library/blocks/profile';

const profilePreview = { name: 'Profile', component: Profile }

export default function ProfileScreen() {
    return <PreviewBlock preview={profilePreview} />;
}

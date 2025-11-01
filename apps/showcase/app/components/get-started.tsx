import * as React from 'react';
import { GetStarted } from '@/example-library/screens/get-started';
import { PreviewScreen } from '@showcase/components/preview-screen';

const getStartedPreview = { name: 'Get Started', component: GetStarted }

export default function GetStartedScreen() {
    return <PreviewScreen preview={getStartedPreview} />;
}

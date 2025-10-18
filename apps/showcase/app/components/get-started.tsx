import * as React from 'react';
import { GetStarted } from '@/example-library/blocks/get-started';
import { PreviewBlock } from '@showcase/components/preview-block';

const getStartedPreview = { name: 'Get Started', component: GetStarted }

export default function GetStartedScreen() {
    return <PreviewBlock preview={getStartedPreview} />;
}

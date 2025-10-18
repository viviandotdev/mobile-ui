import * as React from 'react';
import { Settings } from '@/example-library/blocks/settings';
import { PreviewBlock } from '@showcase/components/preview-block';

const settingsPreview = { name: 'Settings', component: Settings }

export default function SettingsScreen() {
    return <PreviewBlock preview={settingsPreview} />;
}

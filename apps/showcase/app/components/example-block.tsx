import * as React from 'react';
import { MultipleButtons } from '@/example-library/blocks/multiple-buttons';
import { PreviewBlock } from '@showcase/components/preview-block';

const exampleBlockPreviews = { name: 'Multiple Buttons', component: MultipleButtons }

export default function ExampleBlockScreen() {
    return <PreviewBlock preview={exampleBlockPreviews} />;
}

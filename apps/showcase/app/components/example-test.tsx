import { PreviewCarousel } from '@showcase/components/preview-carousel';
import * as React from 'react';
import { TestButtonPreview } from '@/example-library/examples/test-button';

const exampleBlockPreviews = [{ name: 'Test Buttons Buttons', component: TestButtonPreview }];

export default function ExampleTextButtonScreen() {
    return <PreviewCarousel previews={exampleBlockPreviews} />;
}

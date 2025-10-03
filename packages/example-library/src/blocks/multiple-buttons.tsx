import { View } from 'react-native';

import { Button } from '@/example-library/components/ui/button';
import { Text } from '@/example-library/components/ui/text';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/example-library/components/ui/card';

export function MultipleButtons() {
    return (
        <View className="gap-6">
            <Card className="border-border/0 sm:border-border shadow-none sm:shadow-sm sm:shadow-black/5">
                <CardHeader>
                    <CardTitle className="text-center text-xl sm:text-left">Multiple Buttons</CardTitle>
                    <CardDescription className="text-center sm:text-left">
                        Multiple buttons with different variants
                    </CardDescription>
                </CardHeader>
                <CardContent className="gap-6">
                    <View className="gap-6">
                        <Button onPress={() => { }}>
                            <Text>Primary Button</Text>
                        </Button>
                        <Button variant="secondary" onPress={() => { }}>
                            <Text>Secondary Button</Text>
                        </Button>
                        <Button variant="outline" onPress={() => { }}>
                            <Text>Outline Button</Text>
                        </Button>
                    </View>
                </CardContent>
            </Card>
        </View>
    );
}

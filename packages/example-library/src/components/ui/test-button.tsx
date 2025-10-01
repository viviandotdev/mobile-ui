import { Button, type ButtonProps } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { cn } from '~/lib/utils';

type TestButtonProps = ButtonProps & {
    label: string;
};

function TestButton({ label, className, ...props }: TestButtonProps) {
    return (
        <Button className={cn(className)} {...props}>

            <Text >{label}</Text>
        </Button>
    );
}

export { TestButton };
export type { TestButtonProps };

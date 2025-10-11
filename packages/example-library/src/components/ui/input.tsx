import { cn } from '@/example-library/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { TextInput, type TextInputProps } from 'react-native';


const inputVariants = cva(
    cn(
        'flex w-full min-w-0 flex-row items-center',
        'dark:bg-input/30 bg-bg-white-0 border border-input shadow-regular-xs',
        'text-base leading-5 text-text-strong-950',
        'placeholder:text-text-soft-400',
    ),
    {
        variants: {
            size: {
                medium: cn('rounded-lg h-12 px-4 py-3'),
                small: cn('rounded-md h-10 px-3 py-2'),
                xsmall: cn('rounded-md h-8 px-2 py-1'),
            }
        },
        defaultVariants: {
            size: 'medium',
        },
    }
);


function Input({
    className,
    size = 'medium',
    placeholderClassName,
    ...props
}: TextInputProps & VariantProps<typeof inputVariants> & React.RefAttributes<TextInput>) {
    return (
        <TextInput
            className={cn(
                inputVariants({ size }),
                props.editable === false && 'opacity-50',
                className
            )}
            {...props}
        />
    );
}

export { Input };

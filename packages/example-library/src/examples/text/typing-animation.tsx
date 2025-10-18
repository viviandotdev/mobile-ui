import { useEffect, useState, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { cn } from '~/lib/utils';

interface TypingAnimationProps {
    text?: string;
    words?: string[];
    className?: string;
    duration?: number;
    typeSpeed?: number;
    deleteSpeed?: number;
    delay?: number;
    pauseDelay?: number;
    loop?: boolean;
    showCursor?: boolean;
    blinkCursor?: boolean;
    cursorStyle?: "line" | "block" | "underscore" | "circle";
    onComplete?: () => void;
}

export function TypingAnimation({
    text,
    words,
    className,
    duration = 100,
    typeSpeed,
    deleteSpeed,
    delay = 0,
    pauseDelay = 1000,
    loop = true,
    showCursor = true,
    blinkCursor = true,
    cursorStyle = "line",
    onComplete,
}: TypingAnimationProps) {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");
    const [isComplete, setIsComplete] = useState(false);

    const cursorOpacity = useRef(new Animated.Value(1)).current;
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Determine which words to animate
    const wordsToAnimate = words || (text ? [text] : []);
    const hasMultipleWords = wordsToAnimate.length > 1;

    const typingSpeed = typeSpeed || duration;
    const deletingSpeed = deleteSpeed || typingSpeed / 2;

    // Cursor blinking animation
    useEffect(() => {
        if (!showCursor || !blinkCursor) return;

        const blinkAnimation = Animated.loop(
            Animated.sequence([
                Animated.timing(cursorOpacity, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(cursorOpacity, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        );

        blinkAnimation.start();

        return () => {
            blinkAnimation.stop();
        };
    }, [showCursor, blinkCursor, cursorOpacity]);

    // Typing animation logic
    useEffect(() => {
        if (wordsToAnimate.length === 0) return;

        if (isComplete && !loop) {
            onComplete?.();
            return;
        }

        const timeoutDelay =
            delay > 0 && displayedText === ""
                ? delay
                : phase === "typing"
                    ? typingSpeed
                    : phase === "deleting"
                        ? deletingSpeed
                        : pauseDelay;

        timeoutRef.current = setTimeout(() => {
            const currentWord = wordsToAnimate[currentWordIndex] || "";
            const graphemes = Array.from(currentWord);

            switch (phase) {
                case "typing":
                    if (currentCharIndex < graphemes.length) {
                        setDisplayedText(graphemes.slice(0, currentCharIndex + 1).join(""));
                        setCurrentCharIndex(currentCharIndex + 1);
                    } else {
                        if (hasMultipleWords || loop) {
                            const isLastWord = currentWordIndex === wordsToAnimate.length - 1;
                            if (!isLastWord || loop) {
                                setPhase("pause");
                            } else {
                                setIsComplete(true);
                            }
                        } else {
                            setPhase("pause");
                        }
                    }
                    break;

                case "pause":
                    setPhase("deleting");
                    break;

                case "deleting":
                    if (currentCharIndex > 0) {
                        setDisplayedText(graphemes.slice(0, currentCharIndex - 1).join(""));
                        setCurrentCharIndex(currentCharIndex - 1);
                    } else {
                        const nextIndex = (currentWordIndex + 1) % wordsToAnimate.length;
                        setCurrentWordIndex(nextIndex);
                        setPhase("typing");
                    }
                    break;
            }
        }, timeoutDelay);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [
        phase,
        currentCharIndex,
        currentWordIndex,
        displayedText,
        wordsToAnimate,
        hasMultipleWords,
        loop,
        typingSpeed,
        deletingSpeed,
        pauseDelay,
        delay,
        isComplete,
        onComplete,
    ]);

    const getCursorChar = () => {
        switch (cursorStyle) {
            case "block":
                return "▌";
            case "circle":
                return "●";
            case "underscore":
                return "_";
            case "line":
            default:
                return "|";
        }
    };

    const currentWordGraphemes = Array.from(wordsToAnimate[currentWordIndex] || "");
    const isAnimationComplete =
        !loop &&
        currentWordIndex === wordsToAnimate.length - 1 &&
        currentCharIndex >= currentWordGraphemes.length &&
        phase !== "deleting";

    const shouldShowCursor = showCursor && !isAnimationComplete;

    return (
        <View className={cn("flex-row items-center")}>
            <Text className={cn("text-foreground", className)}>
                {displayedText}
                {(blinkCursor ? shouldShowCursor : true) && (
                    <Animated.Text
                        style={{
                            opacity: blinkCursor ? cursorOpacity : 1,
                        }}
                        className="text-foreground"
                    >
                        {getCursorChar()}
                    </Animated.Text>
                )}
            </Text>
        </View>
    );
}

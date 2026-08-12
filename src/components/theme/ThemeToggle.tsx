'use client'

import { useIsMobile } from "../../hooks/isMobile";
import { Button } from "../ui/Button/Button";
import { useTheme } from "./ThemeProvider"


interface ThemeToggleProps {
    className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {

    const isMobile = useIsMobile()

    const { theme, toggleTheme } = useTheme();

    return (
        isMobile ?
            <Button
                variant="secondary"
                size="sm"
                onClick={toggleTheme}
                className={className}
            >{theme === 'light' ? '🌙' : '☀️'}
            </Button> :
            <Button
                variant="secondary"
                size="md"
                onClick={toggleTheme}
                className={className}
            > {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </Button>
    )
}
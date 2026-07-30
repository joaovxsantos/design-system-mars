'use client'

import { useIsMobile } from "@/src/hooks/isMobile";
import { Button } from "../ui/Button/Button";
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {

    const isMobile = useIsMobile()

    const { theme, toggleTheme } = useTheme();

    return (
        isMobile ?
            <Button
                variant="secondary"
                size="sm"
                onClick={toggleTheme}
            >{theme === 'light' ? '🌙' : '☀️'}
            </Button> :
            <Button
                variant="secondary"
                size="md"
                onClick={toggleTheme}
            > {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </Button>
    )
}
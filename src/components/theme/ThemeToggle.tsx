'use client'

import { useIsMobile } from "@/src/hooks/isMobile";
import { Button } from "../ui/Button/Button";
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {

    const isMobile = useIsMobile()

    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant="secondary"
            size={isMobile ? "sm" : "md"}
            onClick={toggleTheme}
        >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </Button>
    )
}
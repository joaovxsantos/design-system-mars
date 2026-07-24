'use client'

import { Button } from "../ui/Button/Button";
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {

    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant="secondary"
            size="lg"
            onClick={toggleTheme}
            style={{ position: "absolute", right: "100px", top: "20px" }}
        >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </Button>
    )
}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { theme } from './theme.ts'

const root = document.documentElement

root.style.setProperty('--color-background', theme.colors.background)
root.style.setProperty('--color-surface', theme.colors.surface)

root.style.setProperty('--color-text-primary', theme.colors.textPrimary)
root.style.setProperty('--color-text-secondary', theme.colors.textSecondary)

root.style.setProperty('--color-border', theme.colors.border)

root.style.setProperty(
  '--color-status-todo-background',
  theme.colors.statusTodoBackground,
)

root.style.setProperty(
  '--color-status-todo-text',
  theme.colors.statusTodoText,
)

root.style.setProperty(
  '--color-status-in-progress-background',
  theme.colors.statusInProgressBackground,
)

root.style.setProperty(
  '--color-status-in-progress-text',
  theme.colors.statusInProgressText,
)

root.style.setProperty(
  '--color-status-done-background',
  theme.colors.statusDoneBackground,
)

root.style.setProperty(
  '--color-status-done-text',
  theme.colors.statusDoneText,
)

root.style.setProperty(
  '--color-priority-low-background',
  theme.colors.priorityLowBackground,
)

root.style.setProperty(
  '--color-priority-low-text',
  theme.colors.priorityLowText,
)

root.style.setProperty(
  '--color-priority-medium-background',
  theme.colors.priorityMediumBackground,
)

root.style.setProperty(
  '--color-priority-medium-text',
  theme.colors.priorityMediumText,
)

root.style.setProperty(
  '--color-priority-high-background',
  theme.colors.priorityHighBackground,
)

root.style.setProperty(
  '--color-priority-high-text',
  theme.colors.priorityHighText,
)

root.style.setProperty('--font-size-small', theme.fontSizes.small)
root.style.setProperty('--font-size-medium', theme.fontSizes.medium)
root.style.setProperty('--font-size-large', theme.fontSizes.large)
root.style.setProperty('--font-size-title', theme.fontSizes.title)

root.style.setProperty('--font-family-primary', theme.fontFamily.primary)

root.style.setProperty('--border-radius-card', theme.borderRadius.card)
root.style.setProperty('--border-radius-badge', theme.borderRadius.badge)
root.style.setProperty('--border-radius-priority', theme.borderRadius.priority)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

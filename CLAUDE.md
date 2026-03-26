# CLAUDE.md — vitory-altair

Portal web de VITORY (GestDeport). Dashboard para organizadores de torneos.

## Stack
- Next.js 16 (App Router) + TypeScript strict
- Tailwind CSS 4 + shadcn/ui (Radix)
- TanStack Query v5 (data fetching + cache)
- React Hook Form + Zod (formularios)
- React Compiler (automatic memoization)
- Lucide React (iconos)

## Comandos
- `npm run dev` — desarrollo (Turbopack)
- `npm run build` — build produccion
- `npm run lint` — ESLint
- `npm run test` — tests (vitest)

## Arquitectura
- src/app/(auth)/ — login, register (rutas publicas)
- src/app/(operation)/ — dashboard organizador (requiere auth)
- src/app/(public)/ — paginas publicas con SEO
- src/components/ui/ — shadcn (no modificar)
- src/components/shared/ — componentes propios
- src/lib/api/ — API client functions
- src/hooks/ — custom hooks

## Reglas
- TypeScript strict — no any, no @ts-ignore
- Server Components por default, "use client" solo cuando hay interactividad
- TanStack Query para data fetching, nunca useEffect + fetch
- shadcn/ui primero — buscar componente shadcn antes de crear uno nuevo
- No useMemo/useCallback manual — React Compiler se encarga

## Estandares
- Ver ET-009 y ET-012 en el repo VITORY (docs/)

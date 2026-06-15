# Implementation Plan - Crypto Mining Rental Interface

This plan outlines the creation of a cryptocurrency mining machine rental interface, specifically focusing on differentiating machine tiers (by price/structure) and using appropriate iconography as requested.

## Scope & Non-Goals
- **Scope**: Create a responsive mobile-first UI for renting mining machines.
- **Scope**: Implement "Machine" cards with distinct visual structures based on price tiers.
- **Scope**: Integrate icons for different machine types.
- **Non-Goals**: No real backend/database (Supabase is not connected). All data will be mock. No real crypto transactions.

## Assumptions
- The user wants a layout similar to the provided screenshot (mobile-first, card-based).
- "Differentiation by structure" means higher-priced machines should look more robust or premium (e.g., larger cards, more details, special badges).
- Local storage or simple state will handle any "rented" status for this session.

## Affected Areas
- `src/App.tsx`: Main entry point and layout.
- `src/components/MachineCard.tsx`: New component for the rental items.
- `src/components/MachineList.tsx`: Container for the grid/list of machines.

## Phases

### Phase 1: Foundation & Components
- Define the `Machine` type and mock data with tiers (Basic, Pro, Enterprise).
- Create a reusable `MachineCard` component.
- Deliverables: Mock data array, `MachineCard.tsx` component.
- **Owner**: `frontend_engineer`

### Phase 2: Structural Differentiation
- Apply different styles/layouts to `MachineCard` based on the tier.
- Low tier: Simple card, basic icons.
- Mid tier: Highlighted border, more stats (hashrate, power).
- High tier: Premium styling (gold/gradient accents), prominent "Rent Now" button, advanced icons.
- **Owner**: `frontend_engineer`

### Phase 3: Final Polish & Assembly
- Assemble `MachineList` into `App.tsx`.
- Add header and navigation elements matching the screenshot's vibe.
- Final CSS adjustments for mobile responsiveness.
- **Owner**: `frontend_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the entire UI and machine tier logic.

**Per-agent instructions:**
### 1. frontend_engineer
- **Phases:** 1, 2, 3
- **Scope:** 
    - Create a mock data set of at least 4-6 mining machines with varying prices and "tiers".
    - Use `lucide-react` or similar (already in standard environment) for machine icons (e.g., `Cpu`, `Server`, `HardDrive`, `Zap`).
    - Implement a `MachineCard` that changes its "structure" (visual weight, layout, or decorative elements) based on price.
    - Higher price = more "complex/robust" structure (e.g., extra status bars, premium badges).
    - Ensure the layout is mobile-friendly as per the screenshot reference.
- **Files:** `src/App.tsx`, `src/components/MachineCard.tsx`, `src/components/MachineList.tsx`
- **Depends on:** none
- **Acceptance criteria:**
    - UI shows a list of machines.
    - Machines are visually distinct based on price/tier.
    - Icons are relevant to hardware/mining.
    - The design feels like a mobile investment app.

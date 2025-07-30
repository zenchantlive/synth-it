# CLAUDE.md

## Project Overview
**Synth-It** - Transform Lovable clone from general web app generation to specialized **web synthesizer creation**. Minimal code changes, maximum impact.

**Core Strategy:** Use prompt engineering to guide Claude Code in generating playable web synthesizers from vague user requests like "wobble bass synth."

## Current Status (2025-07-30)

### ✅ COMPLETED: Phase 1 - UI Transformation
**Files Modified & Committed:**
- `lovable-ui/app/page.tsx` - Hero text, examples, placeholder → "Synth-It" branding
- `lovable-ui/components/Navbar.tsx` - Logo and navigation → audio-focused items
- **Result:** localhost:3000 shows full synthesizer branding ✅

### 🔄 NEXT CRITICAL STEP: Phase 2 - Prompt Engineering  
**File to Modify:** `lovable-ui/scripts/generate-in-daytona.ts` (lines 92-105)
**Goal:** Replace default prompt with comprehensive synthesizer template

### 📋 PENDING: Phase 3 - End-to-End Testing
Generate actual synthesizers and validate functionality.

## Implementation Plan

### Core Architecture Strategy
**Modular Component System:** Embed standardized Tone.js building blocks in prompt template so Claude Code can mix-match components.

**Vague Prompt Translation:** Include dictionary in template:
- "wobble bass" → Sawtooth Oscillator + LFO-modulated Lowpass Filter  
- "pad synth" → Multiple detuned Oscillators + Reverb + Slow ADSR
- "drum machine" → 8 Sample Triggers + Grid Interface + Volume Controls

**Standard Components:**
- Oscillators (basic, FM, pulse)
- Filters (lowpass, highpass, bandpass) 
- Envelopes (ADSR patterns)
- Effects (LFO, reverb, delay)
- UI (Qwerty Hancock keyboard, webaudio-controls knobs)

## Key Files

### Critical (Modify These)
1. `lovable-ui/scripts/generate-in-daytona.ts` - **NEXT STEP - Prompt template**
2. `lovable-ui/app/page.tsx` - ✅ Completed
3. `lovable-ui/components/Navbar.tsx` - ✅ Completed

### Avoid Changing (High Risk)
- `lovable-ui/app/api/generate-daytona/route.ts` - Core streaming logic
- `lovable-ui/lib/claude-code.ts` - SDK wrapper
- Daytona sandbox management scripts

## Success Criteria

### MVP Requirements
- ✅ Landing page shows synthesizer branding  
- ✅ Example prompts are synthesizer-focused
- ⏳ Default generation creates basic synthesizer
- ⏳ Generated apps use Tone.js + computer keyboard control
- ⏳ Audio functionality works in generated previews

## Development Environment

**Current Setup:**
- ✅ NextJS dev server: localhost:3000
- ✅ Dependencies installed
- ✅ Git configured (jordanlive121@gmail.com / zenchantlive)

**Testing Commands:**
```bash
# UI changes (immediate feedback)
cd lovable-ui && npm run dev

# Prompt testing (use existing sandbox)  
npx tsx scripts/generate-in-daytona.ts <sandbox-id> "Create a basic synthesizer"

# Full generation test
npx tsx scripts/generate-in-daytona.ts "wobble bass synthesizer"
```

## Complete Technical Reference
**Full implementation details:** `/docs/synth-it-implementation-plan.md`
- 200+ line comprehensive specification
- Component library templates  
- Computer keyboard mapping (Ableton-style)
- Testing procedures and success criteria

## immediate-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
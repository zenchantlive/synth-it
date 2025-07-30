# Synth-It Implementation Plan
## Complete Technical Specification for Lovable-to-Synth-It Transformation

### Project Overview
Transform the existing Lovable clone into **Synth-It** - a specialized web synthesizer generator that interprets vague user prompts and creates playable web instruments using standardized Tone.js components.

---

## Research Foundation

### User Language Patterns
Based on research, users describe synthesizers using:
- **Comparative language**: "sounds like", "wobble bass", "acid synth"  
- **Emotional descriptors**: "warm pad", "harsh lead", "punchy drums"
- **Technical references**: "FM synthesis", "ADSR envelope", "LFO modulation"
- **Genre associations**: "dubstep bass", "house pad", "techno kick"

### Core Synthesizer Types (Priority Order)
1. **Subtractive Synthesis** - Most popular, oscillator → filter → envelope
2. **FM Synthesis** - Complex but versatile, frequency modulation
3. **Drum Machines** - Sample-based or synthesis-based rhythm instruments
4. **Wavetable Synthesis** - Modern, wide sound range

### Tone.js Component Architecture
**Standard Signal Path**: `Oscillator → Filter → Envelope → Destination`
**Control Path**: `LFO/Envelope → Parameter Modulation`

---

## Implementation Strategy

### Core Principle: Modular Building Blocks
Provide Claude Code with **standardized, tested component templates** that can be mixed and matched like modular synthesizer components.

### Vague Prompt Translation System
The prompt template will include a **translation dictionary** that maps common user requests to specific technical implementations:

```
"wobble bass" → Sawtooth Oscillator + LFO-modulated Lowpass Filter + Computer Keyboard
"pad synth" → Multiple Detuned Oscillators + Reverb + Slow ADSR + Sustain Pedal
"drum machine" → 8 Sample Triggers/FM Hits + Grid Interface + Volume Controls
"lead synth" → Square/Saw Oscillator + Highpass Filter + Fast Attack + Portamento
```

---

## File Modifications

### 1. `/lovable-ui/app/page.tsx`

**Current Issues:**
- Generic "Lovable-clone" branding  
- Web development example prompts
- No synthesizer context

**Changes Required:**

```typescript
// Line 34: Hero title
"Build something with Lovable-clone" 
→ "Create Web Synthesizers with Synth-It"

// Line 37: Subtitle  
"BUILT WITH CLAUDE CODE"
→ "AI-POWERED SYNTHESIZER CREATION"

// Line 40-43: Description
"Turn your ideas into production-ready code in minutes"
→ "Turn your musical ideas into playable web synthesizers in minutes. From wobble bass to ambient pads."

// Line 50: Textarea placeholder
"Ask Lovable to create a prototype..."
→ "Describe the synthesizer you want to create..."

// Lines 113-147: Example buttons (replace all 4)
Button 1: "Create a wobble bass synthesizer with LFO-controlled filter cutoff"
Button 2: "Build an 8-pad drum machine with volume sliders and BPM control"  
Button 3: "Make a subtractive synthesizer with oscillator, filter, and ADSR envelope"
Button 4: "Create an FM synthesizer with 2 operators and computer keyboard control"
```

### 2. `/lovable-ui/components/Navbar.tsx`

**Current Issues:**
- "Lovable" branding throughout
- Generic navigation items

**Changes Required:**

```typescript
// Line 14: Logo text
"Lovable" → "Synth-It"

// Lines 18-29: Navigation items
"Community" → "Synthesizers" 
"Enterprise" → "Pro Audio"
"Learn" → "Tutorials"
"Shipped" → "Gallery"
```

### 3. `/lovable-ui/scripts/generate-in-daytona.ts` (CRITICAL CHANGES)

**Current Issues:**
- Generic "modern blog website" default prompt
- No audio-specific requirements
- Missing synthesizer component templates

**Major Overhaul Required (Lines 92-105):**

Replace the entire prompt template with:

```javascript
const prompt = \`${
  prompt ||
  "Create a subtractive synthesizer with oscillator, lowpass filter, and ADSR envelope. Include computer keyboard control (QWERTY layout) and parameter knobs for filter cutoff, resonance, attack, decay, sustain, and release."
}

SYNTHESIZER DEVELOPMENT REQUIREMENTS:
==================================

MANDATORY LIBRARIES:
- Tone.js (Web Audio framework): npm install tone
- qwerty-hancock (keyboard interface): npm install qwerty-hancock  
- webaudio-controls (knobs/sliders): Include via CDN or npm

STANDARD COMPONENT LIBRARY:
--------------------------

// OSCILLATOR COMPONENTS
const basicOsc = new Tone.Oscillator({
  type: "sawtooth",
  frequency: 440
}).toDestination();

const fmOsc = new Tone.FMOscillator({
  frequency: 200,
  type: "sine",
  modulationType: "square"
}).toDestination();

// FILTER COMPONENTS  
const lowpassFilter = new Tone.Filter({
  frequency: 800,
  type: "lowpass",
  Q: 1
});

const highpassFilter = new Tone.Filter({
  frequency: 200, 
  type: "highpass"
});

// ENVELOPE COMPONENTS
const envelope = new Tone.AmplitudeEnvelope({
  attack: 0.1,
  decay: 0.2, 
  sustain: 0.5,
  release: 1.0
});

// LFO COMPONENTS
const filterLFO = new Tone.LFO({
  frequency: 4,
  type: "sine",
  min: 200,
  max: 2000
});

// STANDARD SIGNAL PATHS
// Subtractive: Oscillator → Filter → Envelope → Destination
// FM: FMOscillator → Envelope → Destination  
// Wobble Bass: Oscillator → LFO-controlled Filter → Envelope → Destination

SYNTHESIZER TYPE TRANSLATIONS:
-----------------------------
- "wobble bass" = Sawtooth Oscillator + LFO-modulated Lowpass Filter (4Hz LFO)
- "pad synth" = Multiple detuned Oscillators + Reverb + Slow Attack (2s)
- "lead synth" = Square/Saw Oscillator + Highpass Filter + Fast Attack (0.01s)
- "drum machine" = 8 FM Oscillators with very short envelopes OR sample triggers
- "acid bass" = Square Oscillator + Resonant Lowpass + Envelope to Filter + Slide/Portamento
- "ambient pad" = Multiple sine waves + Reverb + Very slow Attack/Release
- "pluck synth" = Sawtooth + Fast decay envelope + Optional delay effect

COMPUTER KEYBOARD REQUIREMENTS (ABLETON STYLE):
----------------------------------------------
ALWAYS include Qwerty Hancock with this exact mapping:
- White keys: QWERTYUI (C4-C5 octave)
- Black keys: 2,3,5,6,7 (C#4, D#4, F#4, G#4, A#4)  
- Octave down: Z key
- Octave up: X key
- Volume control: C/V keys
- Enable both mouse clicks AND computer keyboard presses

REQUIRED UI COMPONENTS:
----------------------
1. Visual piano keyboard (qwerty-hancock)
2. Parameter controls using webaudio-controls:
   - Oscillator: Type selector, Frequency/Pitch
   - Filter: Cutoff knob, Resonance knob, Type selector  
   - Envelope: Attack, Decay, Sustain, Release knobs
   - Effects: Wet/Dry, Rate, Depth controls
3. Master volume slider
4. Play/Stop/Panic buttons
5. Preset buttons for common sounds

AUDIO CONTEXT MANAGEMENT:
------------------------
- Handle mobile audio context resume
- Provide clear user interaction prompts
- Include audio context state indicators
- Graceful error handling for unsupported browsers

RESPONSIVE DESIGN:
-----------------
- Mobile-first approach
- Touch-friendly controls on mobile/tablet
- Adaptive keyboard sizing
- Proper viewport handling

Important requirements:
- Create a NextJS app with TypeScript and Tailwind CSS
- Use the app directory structure  
- Create all files in the current directory
- Include a package.json with ALL necessary dependencies
- Make the design modern, dark-themed, and audio-focused
- Include proper error handling and loading states
- Ensure mobile compatibility with touch events
- Add visual feedback for all interactions
- Include basic preset sounds and parameter ranges
\`;
```

---

## Component Library Templates

### Oscillator Templates
```javascript
// Basic Oscillator with common waveforms
const createBasicOscillator = (type = "sawtooth") => {
  return new Tone.Oscillator({
    type: type, // "sine", "square", "sawtooth", "triangle"
    frequency: 440
  });
};

// FM Oscillator for complex timbres  
const createFMOscillator = () => {
  return new Tone.FMOscillator({
    frequency: 200,
    type: "sine",
    modulationType: "square",
    modulationIndex: 2
  });
};
```

### Filter Templates
```javascript
// Standard filters with musical ranges
const createLowpassFilter = (cutoff = 800) => {
  return new Tone.Filter({
    frequency: cutoff,
    type: "lowpass", 
    Q: 1, // Resonance
    gain: 0
  });
};

const createHighpassFilter = (cutoff = 200) => {
  return new Tone.Filter({
    frequency: cutoff,
    type: "highpass"
  });
};
```

### Envelope Templates
```javascript
// Musical ADSR presets
const envelopePresets = {
  pad: { attack: 2.0, decay: 0.3, sustain: 0.7, release: 3.0 },
  lead: { attack: 0.01, decay: 0.1, sustain: 0.8, release: 0.2 },
  bass: { attack: 0.05, decay: 0.3, sustain: 0.6, release: 0.8 },
  pluck: { attack: 0.01, decay: 0.5, sustain: 0.0, release: 0.1 }
};
```

### Keyboard Interface Template
```javascript
// Standard Qwerty Hancock setup
const keyboard = new QwertyHancock({
  id: 'keyboard',
  width: 600,
  height: 150,
  octaves: 2,
  startNote: 'C4',
  whiteNotesColour: '#fff',
  blackNotesColour: '#000',
  hoverColour: '#f00'
});

// Computer keyboard mapping (Ableton style)
const keyMap = {
  'q': 'C4', 'w': 'D4', 'e': 'E4', 'r': 'F4', 
  't': 'G4', 'y': 'A4', 'u': 'B4', 'i': 'C5',
  '2': 'C#4', '3': 'D#4', '5': 'F#4', '6': 'G#4', '7': 'A#4'
};
```

---

## Development Notes

### Testing Strategy
1. **Component Testing**: Each synthesizer type should have working examples
2. **Browser Testing**: Chrome, Firefox, Safari compatibility
3. **Mobile Testing**: Touch events, audio context, performance
4. **Prompt Testing**: Verify vague prompts generate working instruments

### Performance Considerations
- Limit simultaneous oscillators (max 8 for pads)
- Use efficient filter implementations  
- Implement proper cleanup on component unmount
- Monitor CPU usage with audio analysis

### Error Handling Requirements
- Audio context failures (user interaction required)
- Missing Web Audio API support
- Failed library loads
- Mobile audio limitations
- Sample loading failures

### Known Limitations
- iOS Safari requires user gesture for audio
- Some Android browsers have audio latency issues
- WebAudio API not supported in older browsers
- Mobile devices may have limited polyphony

---

## Success Criteria

### Functional Requirements
- [ ] User types "wobble bass synth" → gets working wobble bass
- [ ] All synthesizers include computer keyboard control (QWERTY)  
- [ ] Generated instruments have proper UI (knobs, sliders, keyboard)
- [ ] Mobile compatibility with touch controls
- [ ] Audio works across major browsers
- [ ] No audio libraries fail to load

### Quality Benchmarks
- [ ] Generation time under 10 minutes for typical synthesizers
- [ ] Generated code follows Tone.js best practices
- [ ] UI is intuitive and responsive
- [ ] Audio latency under 50ms on desktop
- [ ] No runtime errors in browser console
- [ ] Clean, maintainable generated code

### User Experience Goals
- [ ] Non-technical users can create working synthesizers
- [ ] Vague prompts produce reasonable interpretations
- [ ] Generated instruments are immediately playable
- [ ] Parameter controls have musical ranges and labels
- [ ] Visual feedback for all audio interactions
- [ ] Clear instructions for mobile users

### Technical Validation
- [ ] All Tone.js components connect properly
- [ ] No memory leaks during extended use
- [ ] Proper audio context management
- [ ] Responsive design works on all screen sizes
- [ ] Generated package.json includes all dependencies
- [ ] TypeScript compilation succeeds without errors

---

## Risk Mitigation

### High-Risk Changes (Avoided)
- Core Daytona sandbox logic
- Claude Code SDK integration  
- Streaming/WebSocket implementations
- Authentication systems

### Medium-Risk Changes (Careful Testing Required)  
- Prompt template modifications
- Library dependency additions
- Default generation parameters

### Low-Risk Changes (Safe to Implement)
- UI copy and branding updates
- Example prompt modifications
- Navigation text changes
- CSS styling adjustments

---

## Implementation Timeline

### Phase 1: Core Branding (30 minutes)
- Update page.tsx hero section and examples
- Modify Navbar.tsx branding
- Test UI changes locally

### Phase 2: Prompt Engineering (60 minutes)  
- Replace generation script prompt template
- Add comprehensive component library
- Include synthesizer type translations
- Test with simple synthesizer generation

### Phase 3: Validation (30 minutes)
- Generate multiple synthesizer types
- Test computer keyboard functionality
- Verify mobile compatibility
- Check library dependencies

### Phase 4: Documentation (15 minutes)
- Update README with new branding
- Document new example prompts  
- Add troubleshooting notes

**Total Estimated Time: 2.25 hours**

---

## Post-Implementation Testing Checklist

### Smoke Tests
- [ ] Landing page loads with new branding
- [ ] Example buttons populate synthesizer prompts
- [ ] Generation process starts without errors
- [ ] Generated synthesizer has working audio
- [ ] Computer keyboard (QWERTY) triggers notes
- [ ] Parameter knobs/sliders affect sound
- [ ] Mobile touch interface responsive

### Integration Tests  
- [ ] "Create a wobble bass" generates LFO-modulated filter
- [ ] "Build a drum machine" creates rhythm interface
- [ ] "Make a pad synth" includes reverb and slow attack
- [ ] All generated code compiles and runs
- [ ] Dependencies install correctly
- [ ] No console errors during playback

### Regression Tests
- [ ] Original Lovable functionality still works if needed
- [ ] Daytona sandbox creation/management unchanged
- [ ] Claude Code SDK integration intact
- [ ] Performance metrics within acceptable ranges

---

*This implementation plan ensures minimal code changes while maximizing the transformation impact, turning a generic web app generator into a specialized synthesizer creation tool.*
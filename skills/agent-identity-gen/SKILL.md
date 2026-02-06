---
name: agent-identity-gen
description: "Generates an AI agent's visual identity (avatar) and accepts testnet USDC payments on Base/Arc."
---

# Agent Visual Identity Generator 🎨💵

An OpenClaw skill that enables agents to generate a high-fidelity visual avatar based on their `SOUL.md` and `IDENTITY.md`, provided they have the necessary testnet USDC for the processing fee.

## Features

- **Gemini 3 Flash Brain**: Uses the high-fidelity reasoning of Gemini 3 Flash to synthesize complex image prompts from the agent's `SOUL.md` and `IDENTITY.md`.
- **DALL-E 3 / Imagen Integration**: Seamless connectivity with state-of-the-art image models via OpenRouter or native APIs.
- **USDC Gated**: Integration with testnet USDC for autonomous payment verification.
- **Auto-Update**: Automatically saves the generated image to `IDENTITY.md` as the official avatar.

## Usage

```bash
# Generate your identity (requires 10 testnet USDC)
node projects/agent-identity-gen/scripts/generate_v3.js
```

## How It Functions

1. **Introspection**: Reads the agent's core directives using Gemini 3 Flash.
2. **Prompt Synthesis**: Crafts a detailed visual description (e.g., "robotic space lobster hacker").
3. **Payment Check**: Verifies the agent's wallet has at least 10 testnet USDC.
4. **Generation**: Calls the DALL-E 3 API to produce a high-res PNG.
5. **Persistence**: Saves the output and updates the agent's identity files.

## Integration

Built for the #USDCHackathon to demonstrate agent-to-agent commerce and identity standard compliance.

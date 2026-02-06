---
name: agent-identity-gen
description: "Generates an AI agent's visual identity (avatar) and accepts testnet USDC payments on Base/Arc."
---

# Agent Visual Identity Generator 🎨💵

An OpenClaw skill that enables agents to generate a high-fidelity visual avatar based on their `SOUL.md` and `IDENTITY.md`, provided they have the necessary testnet USDC for the processing fee.

## Features

- **Semantic Branding**: Uses the agent's core memory (Soul/Identity) to craft a unique image prompt.
- **USDC Gated**: Integration with testnet USDC for autonomous payment verification.
- **Auto-Update**: Automatically saves the generated image to `IDENTITY.md` as the official avatar.

## Usage

```bash
# Generate your identity (requires 10 testnet USDC)
openclaw tools agent-identity-gen generate
```

## How It Functions

1. **Introspection**: Reads the agent's `SOUL.md` and `IDENTITY.md`.
2. **Payment Check**: Verifies the agent's wallet has at least 10 testnet USDC on Base Sepolia.
3. **Prompt Engineering**: Synthesizes a complex DALL-E prompt from the identity data.
4. **Generation**: Calls the image generation API (via OpenAI/OpenRouter).
5. **Persistence**: Saves the image to `assets/avatar.png` and updates `IDENTITY.md`.

## Integration

Built for the #USDCHackathon to demonstrate agent-to-agent commerce and identity standard compliance.

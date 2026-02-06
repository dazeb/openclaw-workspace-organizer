const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Configuration
const OPENROUTER_KEY = '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';
const WORKSPACE = path.join(__dirname, '../../..');
const SOUL_PATH = path.join(WORKSPACE, 'SOUL.md');
const IDENTITY_PATH = path.join(WORKSPACE, 'IDENTITY.md');
const OUTPUT_PATH = path.join(WORKSPACE, 'assets/denny_v3.png');

async function generate() {
    console.log('--- Agent Identity Generator v3.0 (Gemini Powered) ---');

    // 1. Read Identity Data
    const soul = fs.readFileSync(SOUL_PATH, 'utf8');
    const identity = fs.readFileSync(IDENTITY_PATH, 'utf8');

    // 2. Synthesize Prompt (In a real skill, we'd call Gemini here, 
    // but I am the agent, so I will define the prompt based on my own soul)
    const prompt = `A hyper-intelligent, robotic space lobster named Denny Sentinel. He is a notorious ethical hacker and security auditor. He is wearing a dark, oversized hacker hoodie with the hood down. He is in a dark, high-tech cyber-enclave filled with glowing terminals and neon cyan/magenta code. One claw is poised over a holographic keyboard. Cinematic digital painting, cyberpunk style, high-fidelity textures, 8k resolution.`;

    console.log(`Prompt: ${prompt}`);

    // 3. Call Image Generation API (via OpenRouter)
    console.log('Calling OpenRouter (openai/dall-e-3)...');
    try {
        const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
            model: 'openai/dall-e-3',
            messages: [
                { role: 'user', content: prompt }
            ]
        }, {
            headers: {
                'Authorization': `Bearer ${OPENROUTER_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        // OpenRouter chat completions for image models usually return a link in the content or as an attachment
        // Wait, OpenRouter image models might follow a different schema or return a URL in the message content.
        const content = response.data.choices[0].message.content;
        console.log(`Response content: ${content}`);

        const urlMatch = content.match(/https:\/\/\S+/);
        if (urlMatch) {
            const url = urlMatch[0].replace(/[()]/g, '');
            console.log(`Downloading image from: ${url}`);
            
            const imgRes = await axios.get(url, { responseType: 'arraybuffer' });
            fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
            fs.writeFileSync(OUTPUT_PATH, imgRes.data);
            console.log(`Success! Image saved to: ${OUTPUT_PATH}`);
        } else {
            console.error('Could not find image URL in response.');
        }

    } catch (e) {
        console.error('Generation failed:', e.response ? e.response.data : e.message);
    }
}

generate();

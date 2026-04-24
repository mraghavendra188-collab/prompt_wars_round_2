import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'
import { ELECTION_SYSTEM_PROMPT } from '../src/config/prompts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.json())
app.use(cors({
  origin: ['http://localhost:5173', 'https://elected-app-trqh3svs5a-uc.a.run.app']
}))

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../dist')))

// API Routes
app.post('/api/chat', async (req, res) => {
  const { messages } = req.body
  if (!Array.isArray(messages) || messages.length === 0)
    return res.status(400).json({ error: 'messages array required' })

  const sanitized = messages.map(({ role, content }) => ({
    role: ['user', 'assistant'].includes(role) ? role : 'user',
    content: String(content).trim().slice(0, 2000)
  }))

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: ELECTION_SYSTEM_PROMPT,
        messages: sanitized
      })
    })
    const data = await response.json()
    res.json({ reply: data.content.map(b => b.text || '').join('') })
  } catch (err) {
    console.error('API Error:', err)
    res.status(500).json({ error: 'Server error' })
  }
})

app.get('/api/health', (_, res) => res.json({ status: 'ok' }))

// Fallback to index.html for React Router (placed after all other routes)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(process.env.PORT || 3001, () => console.log('API server ready'))

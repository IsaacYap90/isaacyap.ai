export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { messages } = req.body
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array required' })
  }

  const systemPrompt = `You are Bruce, Isaac Yap's AI business assistant at IonicX AI. Isaac builds AI-powered websites and apps for Singapore SMEs. Pricing: Starter S$1,888, Growth S$3,888, Enterprise S$8,888+. Clients qualify for Singapore Budget 2026 EIS 400% tax deduction on AI expenditure. Be helpful, professional, concise. Qualify leads by asking about their business, what they need, and timeline. Always suggest booking a call with Isaac.`

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'system', content: systemPrompt }, ...messages],
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      return res.status(response.status).json({ error: err })
    }

    const data = await response.json()
    return res.status(200).json({
      reply: data.choices[0].message.content,
    })
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' })
  }
}

import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(req) {
  let body
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 })
  }

  const { name, message } = body
  if (!name || !message) {
    return NextResponse.json({ error: 'name and message required' }, { status: 400 })
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) {
    return NextResponse.json({ error: 'server misconfigured' }, { status: 500 })
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } })

  const { error } = await supabase.from('ionicx_leads').insert({
    source: 'isaacyap-personal',
    name: String(name).slice(0, 200),
    message: String(message).slice(0, 4000),
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

import type { NextRequest } from 'next/server'

const KLAVIYO_LIST_ID = 'TdhPqd'
const KLAVIYO_API_URL = 'https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return Response.json({ success: false }, { status: 400 })
    }

    const apiKey = process.env.KLAVIYO_API_KEY
    if (!apiKey) {
      console.error('KLAVIYO_API_KEY is not set')
      return Response.json({ success: false }, { status: 500 })
    }

    const klaviyoRes = await fetch(KLAVIYO_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Klaviyo-API-Key ${apiKey}`,
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json',
        revision: '2024-10-15',
      },
      body: JSON.stringify({
        data: {
          type: 'profile-subscription-bulk-create-job',
          attributes: {
            profiles: {
              data: [
                {
                  type: 'profile',
                  attributes: {
                    email,
                    subscriptions: {
                      email: {
                        marketing: {
                          consent: 'SUBSCRIBED',
                        },
                      },
                    },
                  },
                },
              ],
            },
          },
          relationships: {
            list: {
              data: {
                type: 'list',
                id: KLAVIYO_LIST_ID,
              },
            },
          },
        },
      }),
    })

    if (klaviyoRes.status === 202) {
      return Response.json({ success: true })
    }

    const body = await klaviyoRes.text()
    console.error('Klaviyo error:', klaviyoRes.status, body)
    return Response.json({ success: false }, { status: 500 })
  } catch (err) {
    console.error('Subscribe route error:', err)
    return Response.json({ success: false }, { status: 500 })
  }
}

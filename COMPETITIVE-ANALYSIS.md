# Competitive Analysis — cnxt to links

## The Market

The "link-in-bio" space has exploded into a multi-hundred-million dollar market. What started as simple link aggregators have evolved into full creator platforms with monetization, email capture, analytics, scheduling, and eCommerce. Most charge $6–$30+/month for features that should be table stakes.

**cnxt to links** is positioned as the **open-source, self-hostable, free-for-most-users** alternative. We don't need to beat every feature — we need to nail the core use case and offer something none of them do: **full data ownership**.

---

## Competitor Breakdown

### 1. Linktree

**The incumbent.** 70M+ users. The name people know.

| Plan | Price | Key Differentiators |
|------|-------|---------------------|
| Free | $0 | Unlimited links, social icons, basic analytics, QR code, digital product sales (12% fee) |
| Starter | $6/mo | Custom themes, email/phone collection, redirect links, social scheduling (10 posts/mo) |
| Pro | $12/mo | Custom logo, animated links, comprehensive analytics, email integrations (Mailchimp, Kit, Klaviyo), link shortener, Instagram auto-reply (1.5k/mo), 50 social posts/mo |
| Premium | $30/mo | 0% seller fees, unlimited IG auto-replies, unlimited social posts, concierge onboarding, 4hr support, admin/team tools |

**Feature inventory:**
- Link types: standard, header, spotlight/featured, scheduled, locked (age/code/NFT), redirect
- Embeds: YouTube, TikTok, Instagram, Twitch, Vimeo, Spotify, Apple Music, SoundCloud
- Monetization: digital products, courses (Kajabi-powered), Linktree Shops, sponsored links, affiliate commissions, Shopify/Spring/Bonfire integrations
- Email/SMS collection with integrations (Mailchimp, Google Sheets, Kit, Klaviyo, Zapier)
- Analytics: clicks, CTR, referrer, location, device, social icons, conversion tracking, data export, custom date ranges
- SEO settings, UTM parameters, Facebook Conversion API, Google Analytics
- Social media scheduling + AI content tools
- Instagram auto-reply (DM automation)
- Custom domains (Premium only)
- Team management: admins, custom T&Cs, MFA

**What they paywall:**
- Custom themes/colors → Starter ($6)
- Email collection → Starter ($6)
- Detailed analytics (location, device, referrer) → Pro ($12)
- Hide Linktree footer → Pro ($12)
- Email integrations → Pro ($12)
- Custom domain → Premium ($30)
- 0% seller fees → Premium ($30)

**Weaknesses:**
- Heavy branding on free tier (Linktree footer, no custom themes)
- 12% fee on digital product sales on free tier
- No self-hosting option — you're locked into their platform
- Analytics locked behind expensive tiers
- Increasingly bloated — social scheduling, AI credits, IG auto-reply feel bolted on

---

### 2. Stan Store

**The creator-commerce play.** Focused on selling, not just linking.

| Plan | Price | Key Differentiators |
|------|-------|---------------------|
| Creator | $29/mo | Link-in-bio page, digital products, courses, 1-on-1 bookings/calendar, email funnels, payment processing |
| Creator Pro | $99/mo | Upsells, order bumps, affiliate program, email sequences, advanced analytics, priority support |

**Feature inventory:**
- Link-in-bio landing page with embedded store
- Digital product sales (eBooks, templates, downloads)
- Course builder (modules, drip content)
- Calendar/booking integration (1-on-1 calls, coaching)
- Email list building with opt-in forms
- Sales funnels with upsells and order bumps (Pro)
- Affiliate program management (Pro)
- Payment processing (Stripe integration)
- Email broadcast sequences (Pro)
- Mobile-optimized checkout
- Custom domains
- Analytics dashboard

**What makes Stan different:**
- It's less "link-in-bio" and more "Shopify for creators"
- All-in-one: replaces Gumroad + Calendly + ConvertKit for small creators
- Direct checkout — followers buy without leaving the page

**Weaknesses:**
- Expensive ($29/mo minimum, $99/mo for real features)
- Not open source, no self-hosting
- Locked ecosystem — migrating away is painful
- No free tier at all
- Transaction fees on top of subscription

---

### 3. Beacons.ai

**The free-tier king.** Generous free plan, aimed at creators.

| Plan | Price | Key Differentiators |
|------|-------|---------------------|
| Free | $0 | Link-in-bio, digital storefront, media kit builder, invoicing, email collection, donations, TikTok product feeds |
| Entrepreneur | $10/mo | Custom domain, priority support, advanced analytics, marketing integrations, email/SMS via Zapier |

**Feature inventory:**
- Link-in-bio with rich customization
- Digital storefront (sell products directly)
- Media kit builder (for brand deals)
- Invoicing tool (for freelancers)
- Email/phone number collection
- Donation/tip jar
- TikTok product feed integration
- Referral program
- Custom domains (paid)
- Analytics and tracking

**Strengths:**
- Very generous free tier — more features free than Linktree Pro
- Media kit builder is unique and useful for influencers
- Invoicing built in (replaces a separate tool)

**Weaknesses:**
- Not open source
- Can feel cluttered — tries to do too much
- Smaller brand recognition vs Linktree

---

### 4. Carrd

**The minimalist.** One-page sites, not specifically link-in-bio.

| Plan | Price | Key Differentiators |
|------|-------|---------------------|
| Free | $0 | 3 sites, core features, responsive templates |
| Pro Lite | $9/yr | Custom domains, more sites, no branding |
| Pro Standard | $19/yr | Forms (Mailchimp, Kit, etc.), widgets & embeds (Stripe, PayPal, Gumroad) |
| Pro Plus | $49/yr | Google Analytics, more sites |

**Strengths:**
- Incredibly cheap ($19/year beats everyone)
- Beautiful, simple, fast one-page sites
- Great for personal landing pages, not just links
- Large template library

**Weaknesses:**
- Not purpose-built for link-in-bio (no native analytics, no link click tracking)
- No digital product sales
- No email collection on free tier
- Manual setup — no social icon auto-detection
- Not open source

---

### 5. Later (Linkin.bio)

**Social media management platform** with link-in-bio as a feature.

| Plan | Price | Key Differentiators |
|------|-------|---------------------|
| Starter | $18.75/mo | 30 posts/profile, basic analytics (3 months), link-in-bio, 1 social set |
| Growth | $37.50/mo | 180 posts, 1yr analytics, social inbox, collab tools, UGC collection |
| Scale | $82.50/mo | Unlimited posts, 2yr analytics, competitive benchmarking, brand monitoring |

**Strengths:**
- Deeply integrated with social scheduling
- Up to 5 links per IG post
- Shopify integration for eCommerce
- Strong analytics tied to social performance

**Weaknesses:**
- Very expensive for just link-in-bio
- Really a social media management tool that includes link-in-bio
- No free tier
- Overkill for someone who just wants a link page

---

### 6. Other Notable Competitors

| Tool | Price | Niche |
|------|-------|-------|
| **Lnk.Bio** | Free / $0.99/mo / $24.99 one-time | Budget-friendly, one-time pricing option |
| **Bio.fm** | Free | Auto-embeds latest posts, email collection, polls, video embeds |
| **Campsite.bio** | Free / $7/mo / $24/mo | Clean UI, good analytics on Pro+, drag-and-drop |
| **ContactInBio** | Free / $4.55/mo / $18.20/mo | Video, image carousels, payment links, Google Analytics |
| **Milkshake** | Free | Mobile-first app (iPhone/Android), swipeable "card" pages |
| **Tap Bio** | Free / $5/mo / $12/mo | Card-based layout, Instagram-focused |
| **Koji** | Free | App-powered link-in-bio, mini-apps, tipping, games |
| **Shorby** | $12/mo+ | Smart pages, messenger links, retargeting pixels |

---

## Feature Gap Analysis — cnxt to links

### What We Already Have (v1)
- [x] Unlimited links
- [x] Social icons
- [x] 3 themes (light, dark, bold)
- [x] Photo upload (avatar)
- [x] Bio / display name
- [x] Basic click + view analytics
- [x] SEO meta tags (og:title, og:description, og:image)
- [x] QR code (easy to add)
- [x] Magic link auth (no passwords)
- [x] Edge-deployed (Cloudflare Workers — fast globally)
- [x] Open source (GNU licensed)
- [x] Self-hostable
- [x] No branding forced on users
- [x] Free

### High-Priority Features to Add (Free Tier)

These are features that competitors paywall but we can offer free:

| Feature | Competitors Charge | Effort | Impact |
|---------|-------------------|--------|--------|
| **Custom themes / colors** | Linktree $6/mo | Medium | High — instant differentiation |
| **Email collection** (simple list) | Linktree $6/mo, Beacons free | Medium | High — creators need this |
| **Link scheduling** (show/hide by date) | Linktree $6/mo | Low | Medium |
| **Link thumbnails / icons** | Linktree $12/mo | Low | Medium |
| **Detailed analytics** (referrer, device, location) | Linktree $12/mo | Medium | High |
| **Analytics data export** (CSV) | Linktree $30/mo | Low | Medium |
| **Custom domains** | Linktree $30/mo, Beacons $10/mo | Medium | Very High — huge differentiator if free |
| **Video / music embeds** | Linktree free (limited) | Medium | Medium |
| **Hide platform branding** | Linktree $12/mo, Carrd $9/yr | Already done | High (we already don't force it) |
| **Contact form** | Carrd $19/yr | Low | Medium |

### Medium-Priority Features (Differentiation)

| Feature | Why | Effort |
|---------|-----|--------|
| **Digital product sales** (simple file downloads) | Stan charges $29/mo for this. Even a basic version is powerful. | High |
| **Tip jar / donations** | Beacons has this free. Stripe integration. | Medium |
| **Newsletter integration** (Mailchimp, Kit, Buttondown) | Linktree $12/mo. Webhook-based could be simpler. | Medium |
| **Multi-page support** (links / about / portfolio tabs) | Schema already supports defaultView. Expand it. | Medium |
| **Custom CSS / advanced theming** | For power users. No competitor offers this at all. | Low |
| **Drag-and-drop link reordering** | UX improvement. Everyone has this. | Medium |
| **Link groups / sections** | Organize links by category | Low |
| **QR code generator** (built into dashboard) | Linktree free tier has this | Low |

### Future / Ambitious Features

| Feature | Why | Effort |
|---------|-----|--------|
| **Course builder** | Stan charges $29–99/mo. Even a basic markdown-based course would be killer. | Very High |
| **Calendar / booking** | Stan's $29/mo feature. Integrate with Cal.com (open source). | High |
| **API / webhooks** | Let developers build on top. No competitor does this well. | Medium |
| **Import from Linktree** | Migration tool. JSON import of existing link pages. | Medium |
| **White-label / agency mode** | Let agencies manage multiple creators | High |
| **A/B testing links** | Show different link titles/order to different visitors | High |
| **Geolocation routing** | Show different links based on visitor location (e.g., regional store links) | Medium |
| **Self-host one-click deploy** | Cloudflare Workers deploy button, Docker image, Vercel template | Medium |

---

## Our Competitive Positioning

### Why cnxt to links wins

| Advantage | Details |
|-----------|---------|
| **Truly free** | No "free tier with catch." Features others charge $12–30/mo for. |
| **Open source** | GNU licensed. Fork it, modify it, self-host it. No lock-in ever. |
| **Own your data** | R2 storage you control. Export anytime. No platform risk. |
| **Fast** | Cloudflare edge network. Sub-50ms globally. Competitors are 200ms+. |
| **No branding** | No "Made with cnxt to" forced on anyone. |
| **Privacy-first** | No cookies, no third-party tracking, no selling user data. |
| **Simple** | Not trying to be a social media scheduler or IG auto-reply bot. |

### Where we're NOT competing (intentionally)

- Social media scheduling → Not our lane. Use Buffer/Later.
- Instagram auto-replies → Platform-specific gimmick.
- AI content generation → Commodity feature, not a differentiator.
- Full eCommerce store → Use Shopify. We do simple digital downloads.

### Target users

1. **Privacy-conscious creators** who don't trust centralised platforms
2. **Developers / technical creators** who want self-hosting and customization
3. **Budget-conscious creators** who can't afford $12-30/mo for basic features
4. **Open source advocates** who prefer transparent, community-driven tools
5. **International creators** where $12/mo USD is a significant amount

---

## Implementation Roadmap (Priority Order)

### Phase 1 — Catch Up (make free what others charge for)
1. Custom theme colors (user picks accent, bg, text colors)
2. Link thumbnails/icons (upload or emoji)
3. Link scheduling (start/end dates)
4. Detailed analytics (referrer, device, country via CF headers)
5. Analytics CSV export
6. QR code in dashboard
7. Drag-and-drop link reordering

### Phase 2 — Differentiate
8. Email collection (simple subscriber list with CSV export)
9. Custom domains (CNAME setup guide + Worker routing)
10. Contact form
11. Link groups / section headers
12. Custom CSS injection (for power users)
13. Import from Linktree (JSON parser)

### Phase 3 — Monetization Features
14. Tip jar (Stripe Connect)
15. Simple digital product sales (file upload + Stripe checkout)
16. Newsletter integrations (webhook to Mailchimp/Kit/Buttondown)

### Phase 4 — Platform
17. Public API + webhooks
18. Self-host deploy templates (CF Workers, Docker, Vercel)
19. Multi-page (portfolio/about tabs)
20. A/B testing
21. Calendar integration (Cal.com embed)

---

## Revenue Model (how we sustain "free for most users")

Since we're GNU licensed and free for most users, potential revenue:

| Tier | Price | What's Included |
|------|-------|-----------------|
| **Free** | $0 | Everything above through Phase 2. Unlimited links, full analytics, custom themes, email collection. |
| **Pro** | ~$5/mo | Custom domains, digital product sales (0% fee), priority support, early access to new features |
| **Self-Host** | $0 | Deploy your own. Full control. Community support only. |

The key: **never paywall features that are free elsewhere.** Only charge for genuinely premium infrastructure (custom domains cost us money) and commerce features (payment processing has real costs).

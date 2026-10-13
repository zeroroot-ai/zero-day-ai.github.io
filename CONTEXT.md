# zero-day.ai — the training and research brand

The language this site is allowed to use. Copy on this site must use these
words and no others for these things. Where this file and
`enterprise/platform/www/CONTEXT.md` disagree, the conflict is recorded under
Flagged ambiguities.

## Language

**Zero Day AI Labs**:
The public training and research brand, served at `zero-day.ai`. It is a
sibling of zeroroot.ai, not a product of it, and not a parent of it.
Settled 2026-09-14.
_Avoid_: Zero Day AI as a company name on its own, ZeroRoot Labs, ZeroRoot
Training.

**zeroroot.ai**:
The product company, served at `www.zeroroot.ai`. It sells the Gibson Runtime.
Labs copy names it as a sibling, never as the seller of the training.
_Avoid_: parent, umbrella, house brand.

## Flagged ambiguities

**"Labs"** carries two meanings in this market. It means a research group, and
it means the hands-on environment a student works in. Copy must not use the
bare word for the environment. See the term that resolves this.

**Track** (retired 2026-09-29):
Was one rung of the stack that Labs attacks, five in a ladder on the home page.
The ladder was a taxonomy, not an argument, and the owner cut it. The word
stays out of copy. What Labs teaches is stated in prose on the home page under
"Everyone will teach you to break the chatbot."
_Avoid_: track, depth ladder, "prompt to silicon".

**Course**:
One curriculum with a price, thirty seats per cohort, and a ten-week
outline. It lives at `/training/<slug>/` and its facts live in
`data/courses.yaml`, never in prose. Three exist, and all three run in every
cohort.
_Avoid_: track (retired), class, bootcamp, program.

**Cohort**:
One ten-week window in which every course runs at once, live. Four run in
2027: winter, spring, summer, autumn. The cohort owns the start date. A
course owns the price and the seats. (Owner, 2026-10-13. Before this, cohort
was reserved for a twelve-week flagship, and a course was one run.)
_Avoid_: run, session (that is one live hour), term, semester, intake.

**Offer**:
One fixed-price consulting product with a length and a deliverable list. Two
exist, in `data/services.yaml`. Labs does not sell hours.
_Avoid_: engagement (the instance of an offer, not the offer), retainer,
package, hours.

**The list**:
The one mailing list, on beehiiv, that every form on the site feeds. The
form's `utm_source` of `training` or `consulting` records which form the
address came from. The list is the lead path for training until checkout
exists, and the lead path for consulting beside the mailbox.
_Avoid_: newsletter (the newsletter is a mail sent to the list), subscribers
list, audience, community.

**The mailbox**:
One shared email address, `info@zero-day.ai`, on Google Workspace. It is the
one contact detail the site shows, on the Services page and in the footer. A
person reads it and replies within two working days. A `consulting` signup on
the list also lands here through the beehiiv new-subscriber notification.
_Avoid_: a personal address, a phone number, a street address, a booking link.

**The entity**:
Hack The Planet LLC. It is the one legal name on the terms page, and it
signs every seat sale and every assessment contract. The terms page shows
no DBA. The site title above it carries the brand.
_Avoid_: Zero Day AI Labs as a legal party, zeroroot.ai as a company name on
a contract.

**The refund rule**:
A seat is refunded in full for any reason until the first live session
starts. After that session, no refund. The terms page states it and the
course page repeats it in one line.
_Avoid_: prorated, transfer, credit.

**Research**:
The public archive of every technical piece Labs publishes, at `/research/`.
It is the front door and the marketing arm. A piece is about an attack Labs
ran, a thing Labs broke, or what Gibson does and why. A piece about an attack
with no Gibson in it belongs here (owner, 2026-10-13, reversing 2026-09-29).
**The owner writes every piece. Research is never AI-driven** (owner,
2026-10-13). An agent may fix spelling in a piece and nothing else. Every
piece ends with the offer line: the next cohort and the assessment price.
`/blog/` redirects here. Until the first piece is published, the archive and
the home page say "Coming soon".
_Avoid_: blog, writing, posts, newsletter (the newsletter is the mail that
points at a piece, never the piece itself).

| # | Track | Covers |
|---|---|---|
| 01 | Prompt | injection, context, tool calls |
| 02 | Agent | agents that hack, agents that break |
| 03 | Weights | abliteration, poisoning, extraction |
| 04 | Metal | OT, IoT, firmware, fault injection |
| 05 | Watch | red and blue, detect, contain, replay |

**Emage**:
The partner, at `emagetech.io`, that does the housekeeping of the courses and
sells seats beside this site at the same price. Labs ran one pilot with Emage
on GPUs, how LLMs work, and deployment on Kubernetes. That pilot is the only
proof behind "We taught this course before."
_Avoid_: reseller, vendor, platform.

**The lineage**:
The company names come from Hackers (1995) and Sneakers (1992). `zerocool` is
Dade Murphy's first handle. `gibson` is the Ellingson supercomputer. `setec` is
Setec Astronomy. `zero-day` is what Zero Cool went to court for. The Labs look
may use that film openly, because the names already do.
_Avoid_: calling it a theme, a skin, or a retro homage. It is the lineage.

**The Hackers palette** (if the look is adopted):
Black ground, electric cyan, hot magenta, acid lime, deep violet, orange-red
for alarms only. High saturation. This is rave-era color.
_Avoid_: Matrix green. That film is 1999 and a different visual world.

## Open, not settled

**The theme** (owner, 2026-09-29): AI lets one person do the work of a whole
row of specialties, so a career in one silo is over. The engineer we teach
has to see the whole picture: break the thing, know why it broke, secure it,
ship it. Every page and every research piece serves that theme.

**Exact dates for the winter cohort**: the month is January 2027, the days
are not set. Copy says "January 2027" and "the list hears the start date
first" until the owner sets the days in the data.

**The GPU lab**: a cloud account, nodes up only during sessions, scaled to
zero between them. The cloud is not named and the cost per session is not
estimated. No seat goes on sale before both exist.

**Founder bio**: written 2026-09-29 from the owner's resume, kept general on
purpose (DoD, HFT, AI C2 prototyping). **No name anywhere on the site**
(owner, 2026-09-29). No clearance, no employer names, no contact details.
Nothing on the site may invent a credential.

**The list offer**: a signup hears the dates first and gets the payment
link a week before anyone else. There is no lead magnet. The owner reaches
out to each signup in person. That outreach is a separate funnel, out of
scope for the site.

**The ten-week cut**: each outline still shows twelve weeks. The owner cuts
two weeks per course later. Course content is parked (owner, 2026-10-13).

**Checkout**: a Stripe Payment Link per course, on the Hack the Planet LLC
Stripe account, with the seat as a one-time price. The three links exist. No
course has an `enroll_url` until the cohort start day and the GPU lab exist.
Until then the course page renders the training list form in place of a buy
button.

**The community and the sessions**: open. Discord for the community and
Google Meet for the sessions are proposed, not decided.

**The welcome mail**: one short mail from `info@zero-day.ai`, set once in
beehiiv. Drafted for the owner, who edits and approves it before it is on.

## Decisions

| Date | Decision |
|---|---|
| 2026-09-05 | zero-day.ai retired, every visitor redirected to zeroroot.ai |
| 2026-09-14 | Reversed. zero-day.ai returns as Zero Day AI Labs, a sibling brand. |
| 2026-09-14 | Labs sells both arms. Training and consulting live on one site. |
| 2026-09-14 | The offer is a live cohort. No range, no challenge, no free tier. |
| 2026-09-14 | Full site shape at launch. Five track cards stand in for a catalog. |
| 2026-09-14 | A card names a track, never a course. A track never goes stale. |
| 2026-09-14 | Copy talks to a practitioner. One page carries the letter and invoice. |
| 2026-09-14 | ~~First proof block is the public code, not a logo wall.~~ **Reversed 2026-09-29.** The "No logo wall" block is cut. Proof is the research and the product page. |
| 2026-09-14 | ~~Astro, matching www.~~ **Reversed.** Hugo, self-contained in this repo. |
| 2026-09-14 | Labs gets its own visual language. It does not consume @zeroroot/brand. |
| 2026-09-14 | ~~The site is static. Two email forms are the only dynamic parts.~~ **Amended 2026-10-13.** The site is static. The two email forms and Google Analytics are the only dynamic parts. |
| 2026-09-14 | No payment, no booking, no challenge on the site. The hook is the code. |
| 2026-09-14 | Both forms post to Buttondown. Tags split training from consulting. |
| 2026-09-14 | This repo stands alone. No org guards, no brand-guard, no link-check. |
| 2026-09-14 | Hugo builds it, a Pages workflow deploys it. Pages build_type moves legacy to workflow. |
| 2026-09-14 | The look is settled. Black ground, neon green, the Hack the Planet smiley. |
| 2026-09-14 | ~~Hero: "Break it. Ship it."~~ **Amended 2026-09-29.** Hero is "Break it. Secure it. Ship it." Three lines, the last one highlighted. |
| 2026-09-14 | Five tracks, ordered as a ladder down the stack. The order is the claim. |
| 2026-09-29 | Reversed "copy must not name a course or a date". The site now sells three named courses with a price and a month. The December run is LLM Infrastructure on Kubernetes at 3,000 USD, 30 seats. |
| 2026-09-29 | A course is twelve weeks, two one-hour live sessions a week, one lab a week, recorded. Not two days. Each course page carries a week-by-week outline that is a template the owner revises per cohort. |
| 2026-09-29 | The first research piece (the wiki-page injection, 2026-09-14) is deleted. The home page demo still shows the same transcript. |
| 2026-09-29 | The Kubernetes course is 3,000 USD on this site and through Emage alike. The two agent courses are 2,500 USD until the owner says otherwise. Price lives in `data/courses.yaml` only. |
| 2026-09-29 | Two fixed consulting offers with public price ranges. No hourly rate anywhere on the site. |
| 2026-09-29 | `/blog/` becomes `/research/`. Research is the home page's front door and the archive stays public forever. |
| 2026-09-29 | Every research piece ends with the offer line: next course date and assessment price. Rendered from data, never typed. |
| 2026-09-29 | Nav is Research, Training, Services, Products, About. |
| 2026-09-29 | `/products/` is a landing for Gibson on this site. It names zeroroot.ai as the company that builds and sells it, and links out. Labs never sells the product. |
| 2026-09-29 | The five-track ladder, the hex dump band, the course strip under the hero, and the typed injection demo are gone. One prose argument replaces the ladder. |
| 2026-09-29 | The scrolling band on every page carries the next live course, not a film quote. It renders from `data/courses.yaml` and links to the course. |
| 2026-09-29 | Copy is written to a person, the way Seth Godin writes. Short lines, one idea, the reader's situation first, no feature grids where a paragraph will do. |
| 2026-09-29 | ~~Circle replaces Buttondown for the list, the courses, and the community.~~ **Amended 2026-10-13.** Buttondown owns the list. The owner recreates the `zerodaylabs` newsletter so every form on the live site works with no code change. Circle comes in only for the paid course and the community, once a seat is on sale. One list tool at a time. No form action may point at a tool that is not live. |
| 2026-09-29 | Labs run home-grown at `labs.zero-day.ai`, not on a lab vendor and not under zeroroot.ai. Out of scope for the site. |
| 2026-10-13 | The site shows one contact detail: the shared mailbox `info@zero-day.ai`. No booking link, no phone. The consulting form stays, and the owner replies by hand. |
| 2026-10-13 | Google Analytics is added to every page. Interest is measured as page views per course page, list signups by tag, and mail to the mailbox. |
| 2026-10-13 | Google Analytics loads in consent mode behind a banner. The banner asks before any cookie is set. |
| 2026-10-13 | Two legal pages, linked from the footer: a privacy page and a terms page. The privacy page names the list tool, Google Analytics, and the mailbox. The terms page carries the course refund rule and the legal entity name. Both come from the owner, never invented. |
| 2026-10-13 | The legal entity is Hack The Planet LLC, DBA zeroroot.ai and zero-day.ai. The refund rule is a full refund until the first live session starts, none after. |
| 2026-10-13 | The terms page names Hack The Planet LLC only, with no DBA. |
| 2026-10-13 | The first cohort moves from December 2026 to January 2027. Price lives in `data/courses.yaml` only. |
| 2026-10-13 | The GPU lab runs on a cloud account, nodes up only during sessions. The cloud and the cost per session are open. |
| 2026-10-13 | The newsletter sends from `info@zero-day.ai` through a Buttondown custom domain. DKIM and the return-path CNAME go on zero-day.ai. |
| 2026-10-13 | Reversed: a research piece about an attack with no Gibson in it belongs at `/research/`. The Research page promise stands as written. |
| 2026-10-13 | The list offer stays "dates first". No lead magnet. Personal outreach to each signup is a separate funnel, out of scope for the site. |
| 2026-10-13 | A course is ten weeks, not twelve. Each outline loses two weeks. The 2026-09-29 twelve-week decision is reversed. |
| 2026-10-13 | All three courses run in parallel in every cohort. Four cohorts in 2027: winter, spring, summer, autumn. |
| 2026-10-13 | Emage is named twice: one sentence on the Kubernetes course page that backs the pilot claim, and one line on the training page that a seat is also for sale through Emage, with the link. |
| 2026-10-13 | The band on every page and the offer line under every piece show the cohort line, not one course: the next cohort, three courses, the month, ten weeks, thirty seats each. Both link to `/training/`. |
| 2026-10-13 | One start day per cohort. All three courses start that week. The data holds one row per cohort with the date, and a course carries no date. |
| 2026-10-13 | Thirty seats per course per cohort, ninety a cohort. |
| 2026-10-13 | The one research piece, "Stop asking the model how sure it is", is deleted. `/research/` and the home page say "Coming soon" until the owner publishes. The owner writes every piece. Research is never AI-driven. |
| 2026-10-13 | Checkout is a Circle Paywall per course. `enroll_url` stays empty until the Circle community is live. The list stays on Buttondown. |
| 2026-10-13 | Three cross-repo fixes are in scope, each in its own lane: a link from zeroroot.ai to zero-day.ai in the www repo, the GitHub org website field set to www.zeroroot.ai, and the Setec and Zerocool repo descriptions matched to the site. |
| 2026-10-13 | One welcome mail in Buttondown. Drafted for the owner, approved by the owner before it is on. |
| 2026-10-13 | Reversed the same day: beehiiv owns the list, not Buttondown. The forms swap to the beehiiv subscribe form. Buttondown is not recreated. |
| 2026-10-13 | Reversed the same day: no Circle. Checkout is a Stripe Payment Link per course on the Hack the Planet LLC account. The seat is a one-time price. Circle is too expensive. |
| 2026-10-13 | The newsletter sends from `info@zero-day.ai` through beehiiv's custom sending domain, not Buttondown's. |

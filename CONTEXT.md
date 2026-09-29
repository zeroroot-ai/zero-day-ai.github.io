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
One live run with a date, a price, a seat count, and a syllabus. It lives at
`/training/<slug>/`. Its facts live in
`data/courses.yaml`, never in prose, so a new run is one edit. Three exist.
_Avoid_: track (retired), cohort (reserved for the 12-week flagship), class,
bootcamp.

**Offer**:
One fixed-price consulting product with a length and a deliverable list. Two
exist, in `data/services.yaml`. Labs does not sell hours.
_Avoid_: engagement (the instance of an offer, not the offer), retainer,
package, hours.

**Research**:
The public archive of every technical piece Labs publishes, at `/research/`.
It is the front door and the marketing arm. Every piece is about zeroroot:
what Gibson does, why it is built that way, grounded in the ADRs and the code.
A piece about an attack with no Gibson in it does not belong here (owner,
2026-09-29). Every piece ends with the offer line: the next course date and
the assessment price. `/blog/` redirects here.
_Avoid_: blog, writing, posts, newsletter (the newsletter is the mail that
points at a piece, never the piece itself).

| # | Track | Covers |
|---|---|---|
| 01 | Prompt | injection, context, tool calls |
| 02 | Agent | agents that hack, agents that break |
| 03 | Weights | abliteration, poisoning, extraction |
| 04 | Metal | OT, IoT, firmware, fault injection |
| 05 | Watch | red and blue, detect, contain, replay |

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

**Exact dates for the December run**: the month is set, the days are not.
Copy says "December 2026" and "announced to the list first" until the owner
sets them in `data/courses.yaml`.

**Founder bio**: written 2026-09-29 from the owner's resume, kept general on
purpose (DoD, HFT, AI C2 prototyping). **No name anywhere on the site**
(owner, 2026-09-29). No clearance, no employer names, no contact details.
Nothing on the site may invent a credential.

**Checkout**: no course has an `enroll_url` yet. Until Circle checkout exists
the course page renders the training list form in place of a buy button.

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
| 2026-09-14 | The site is static. Two email forms are the only dynamic parts. |
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
| 2026-09-29 | Circle replaces Buttondown for the list, the courses, and the community. Forms swap to Circle embeds when the owner turns on its Marketing Hub. Until then the Buttondown action is dead and known to be dead. |
| 2026-09-29 | Labs run home-grown at `labs.zero-day.ai`, not on a lab vendor and not under zeroroot.ai. Out of scope for the site. |

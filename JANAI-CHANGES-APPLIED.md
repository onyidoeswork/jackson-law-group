# Content Revisions Applied — Practice Area Pages

**Approved by:** Janai Jackson
**Applied:** 28 September 2026
**Branch:** `claude/phase-1-practice-pages` (PR #3) — **not merged**
**Preview:** https://deploy-preview-3--tubular-biscuit-02d7c7.netlify.app

All wording below is Ms. Jackson's, used verbatim. Where a statement appeared in more than
one place it was changed everywhere, including inside the FAQ JSON-LD and meta descriptions,
so the structured data never says something the visible page does not.

---

## 1. Sitewide disclaimer — all 39 pages

Added at the end of the legal information, directly above the intake form. `(212) JACKSON`
is a tap-to-call link to the site's existing number.

> Every case is different and must be fully evaluated by an attorney. The information on this
> page is general and is not legal advice, and reading it does not create an attorney-client
> relationship. Call (212) JACKSON for a full evaluation of your case.
>
> **Attorney Advertising.**

The previous shorter disclaimer was removed from every page, so each page now carries exactly
one. Verified: 39 pages, one each. The separate form disclaimer above the submit button is
unchanged.

**One judgment call for your review.** The site footer still carries its own short line
("Attorney Advertising. Prior results do not guarantee a similar outcome…"). That footer is
shared with the rest of the site and appears on every page including the home page, so it was
kept rather than removed. If you want it gone from the practice pages, it is a one-line change.

---

## 2. Removed

| | Statement | Pages |
|---|---|---|
| 2a | Labor Law 240(1) comparative fault / "sole proximate cause", and the *Delcid-Funez* reference | Construction Injury, Scaffold and Ladder Falls, Falling Objects — replaced with 3a |
| 2b | VTL 1103(b), City vehicles engaged in road work | **Not found — was never published.** See "Not found" below. |
| 2c | A child's time to sue is extended but the 90-day notice is not automatically excused | Claims Against the City, Ceiling Collapse |

---

## 3. Replaced with your text

| | Section | Pages |
|---|---|---|
| 3a | Scaffold Law | Construction Injury, Scaffold and Ladder Falls, Falling Objects |
| 3b | The three Labor Law protections | Construction Injury, Falling Objects |
| 3c | Third-party claims and the comp lien | Construction Injury |
| 3d | "Your employer cannot punish you for filing a workers' comp claim." | Construction Injury |
| 3e | "Hit by an Uber or Lyft?" | Uber and Lyft Accidents |
| 3f | "Hit by a driver with no insurance?" | Hit and Run and Uninsured Drivers |
| 3g | "The driver didn't own the car?" | Delivery Vehicle Accidents |
| 3h | "Hit by a mail truck or other federal vehicle?" | Delivery Vehicle Accidents |
| 3i | **"Hit by a City vehicle?" — new section** | **9 pages:** Claims Against the City, Car Accidents, Truck Accidents, MTA Bus and Subway, Delivery Vehicle, Pedestrian Injury, Bicycle/E-Bike/Scooter, Motor Vehicle, Hit and Run |
| 3j | "Bitten by a tenant's dog?" | Dog Bites |
| 3k | "Hurt in an elevator or escalator accident?" | Elevator and Escalator Accidents |
| 3l | "Injured by a defective product?" | Product Liability |
| 3m | "Tripped on a broken sidewalk in NYC?" | Sidewalk Trip and Fall |
| 3n | "Mistreated by the police?" | Police Misconduct and False Arrest |
| 3o | "Charged with a crime you didn't commit?" | Police Misconduct and False Arrest |
| 3p | "Lost a loved one?" | Wrongful Death |
| 3q | "Weren't told the risks of a medical procedure?" | Surgical Errors |
| 3r | "Neglected or mistreated in a nursing home?" | Nursing Home Neglect |

---

## 4. Small edits

| | Change | Pages |
|---|---|---|
| 4a | Now reads "a cyclist hit by a car is often treated like a pedestrian" | Bicycle, E-Bike and Scooter Accidents |
| 4b | Added after the 30-day no-fault notice: "There are some circumstances where the insurance company will make exceptions." | **7 pages:** Bicycle/E-Bike/Scooter, Car Accidents, Delivery Vehicle, Hit and Run, Motor Vehicle, Pedestrian Injury, Uber and Lyft |
| 4c | Now reads "is most often covered under that vehicle's no-fault insurance" | Pedestrian Injury |

---

## 5. Kept as approved

No change made to: the 90-day notice of claim, the one year and 90 days deadline, the public
hospital notice, the fee and consultation promise, "Se Habla Español," the home page wording
changes, or the form disclaimer. "Top Rated Injury Firm" remains removed.

---

## 6. New Jersey page held back

`/practice/new-jersey-personal-injury/` is **not part of this launch**, pending review against
New Jersey's attorney advertising rules.

- Page moved out of the published folder to `drafts/practice/new-jersey-personal-injury/`. It is
  excluded from the build — confirmed absent from the production output.
- Removed from the sitemap, the Practice Areas mega menu (desktop and mobile), the footer, the
  React menu data, and every internal link. **82 links removed across 40 files; zero references
  remain.**
- Your approved wording is already in the drafted file, ready for whenever it is published:

  > **Injured in a New Jersey car accident?** If your New Jersey auto policy has the "limitation
  > on lawsuit" option, you can sue for pain and suffering only if your injury falls into certain
  > serious injury categories.

- A comment at the top of the file explains how to bring it back.

**The site now has 39 practice pages, not 40.** The menu still reads "View all 40 practice area
pages" in some places — flagged below.

---

## 7. Not found

Two items from your list could not be located, because the statements were never published:

**2b — VTL 1103(b), City vehicles engaged in road work.** No page contained any statement about
a different standard for City vehicles actively performing road work. The phrases "road work",
"1103" and "other government vehicle" return zero matches across all pages. Nothing to remove.

**2a — the exact "sole proximate cause" phrasing.** The underlying statement *was* present but
worded differently: *"the worker's own carelessness is generally not a defense."* That is what
was removed and replaced with your 3a text. The words "sole proximate cause", "comparative
fault" and "Delcid" never appeared on any page.

Both are consistent with how the pages were drafted: where an authority could not be confirmed,
the specific rule was left out rather than stated.

---

## 8. Verification

Run against the production build after all changes:

| Check | Result |
|---|---|
| Practice pages | 39 |
| Broken internal links | none |
| Sitemap practice pages | 39, exactly matching the published folders |
| Sitemap total entries | 43 (39 practice + index + home + about + privacy policy) |
| JSON-LD schema | valid on every page |
| Disclaimers per page | exactly 1 on all 39 |
| "Delcid", "comparative fault", "sole proximate", "1103", "other government vehicle" | zero occurrences anywhere in the published output |
| Your approved text | all 21 passages confirmed present on the expected pages |
| Build and lint | pass |

---

## 9. Follow-up decisions, now applied

| | Item | Outcome |
|---|---|---|
| a | "View all 40 practice area pages" | Changed to **"View all practice areas"** everywhere, 84 places in total. It no longer carries a number, so it will not need editing when New Jersey goes live. |
| b | WhatsApp link | Swapped to **https://wa.me/12125225766** on all 43 buttons, after the number-based link was tested and confirmed to open a chat with Jackson Legal Group. |
| c | Footer disclaimer | Kept as it is, as instructed. |
| d | Disclaimer placement | Confirmed **above the intake form**, as instructed. On every page the disclaimer appears in the page before the form in document order, and roughly 360 pixels above it on screen. The previous short disclaimer that sat below the form was removed. |

---

## 10. New York and New Jersey positioning

Applied after the pages went live, to present the firm across both states.

| | Change |
|---|---|
| Home page badge | "Brooklyn & NYC Injury Attorneys" → **"NYC & NJ Injury Attorneys"** |
| Home page practice areas intro | "…across New York City." → **"…across New York and New Jersey."** |
| Page headlines | 37 H1s now end **"in New York and New Jersey"** |
| Title tags and og:title | 37 updated to **"in NY & NJ"**, kept short so the firm name is not cut off in search results |
| Structured data | `areaServed` on all 39 pages is now **New York City, New York, New Jersey** |
| About page, Bar Admissions | now reads **New York / New Jersey / U.S. District Court, Eastern District of New York**. "State" dropped. |

Body copy and meta descriptions were not touched, so Brooklyn remains throughout the text of
all 39 pages and the local search signal is kept.

**Two pages were deliberately left alone:** Claims Against the City of New York, and NYCHA
Accidents. Both are about New York City bodies specifically — a headline reading "Claims
Against the City of New York in New York and New Jersey" would not make sense. Their
`areaServed` was still updated.

### Needs your decision

- **The About page biography** still reads "Ms. Jackson is admitted to practice law in the
  State of New York." That now contradicts the Bar Admissions list directly above it. It was
  left unchanged because it is a statement about admission and should be your wording. The
  obvious fix is "admitted to practice law in New York and New Jersey."
- **Only one of the 39 meta descriptions mentions Brooklyn.** The instruction was to keep
  Brooklyn in the meta descriptions, but it was only ever in one of them; none were removed.
  If Brooklyn should appear in all of them, that is a separate pass.
- **New Jersey advertising rules.** Every page now advertises to New Jersey readers, not only
  the held-back New Jersey page. The review that page is waiting on arguably now applies
  site-wide.

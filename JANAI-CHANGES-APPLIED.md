# Content Revisions Applied — Practice Area Pages

**Approved by:** Janai Jackson
**Applied:** 28 September 2026
**Branch:** `claude/phase-1-practice-pages` (PR #3) — **not merged**
**Preview:** https://deploy-preview-3--tubular-biscuit-02d7c7.netlify.app

All wording below is Ms. Jackson's, used verbatim. Where a statement appeared in more than
one place it was changed everywhere, including inside the FAQ JSON-LD and meta descriptions,
so the structured data never says something the visible page does not.

---

## 1. Sitewide disclaimer — all 40 pages

Added at the end of the legal information, directly above the intake form. `(212) JACKSON`
is a tap-to-call link to the site's existing number.

> Every case is different and must be fully evaluated by an attorney. The information on this
> page is general and is not legal advice, and reading it does not create an attorney-client
> relationship. Call (212) JACKSON for a full evaluation of your case.
>
> **Attorney Advertising.**

The previous shorter disclaimer was removed from every page, so each page now carries exactly
one. Verified: 40 pages, one each. The separate form disclaimer above the submit button is
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

> **Superseded by Section 12.** The page was held back at the time this section was written.
> Ms. Jackson has since approved it and it is now published. This section is kept as a record
> of what was done while it was on hold.

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
| Practice pages | 40 |
| Broken internal links | none |
| Sitemap practice pages | 40, exactly matching the published folders |
| Sitemap total entries | 44 (40 practice + index + home + about + privacy policy) |
| JSON-LD schema | valid on every page |
| Disclaimers per page | exactly 1 on all 40 |
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
| Structured data | `areaServed` on all 40 pages is now **New York City, New York, New Jersey** |
| About page, Bar Admissions | now reads **New York / New Jersey / U.S. District Court, Eastern District of New York**. "State" dropped. |

Body copy and meta descriptions were not touched, so no Brooklyn reference was removed.

**Correction.** An earlier draft of this document said Brooklyn remained "throughout the text
of all 39 pages". That count included the footer, which carries both Brooklyn office
addresses on every page. Counting the page copy itself, Brooklyn appears on **6 of the 40
pages**, and in **1 of the 40** meta descriptions. The office addresses in the footer remain
the strongest consistent local signal. If Brooklyn should appear more widely in the copy,
that is a separate pass.

**Two pages were deliberately left alone:** Claims Against the City of New York, and NYCHA
Accidents. Both are about New York City bodies specifically — a headline reading "Claims
Against the City of New York in New York and New Jersey" would not make sense. Their
`areaServed` was still updated.

### Decisions taken

- **About page biography — updated.** It read "Ms. Jackson is admitted to practice law in the
  State of New York," which contradicted the Bar Admissions list above it. On Ms. Jackson's
  confirmation of both admissions it now reads: *"Ms. Jackson is admitted to practice law in
  New York and New Jersey, and focuses her practice on advocating for individuals who have
  been injured due to the negligence of others."*
- **Title tags — keeping the short "NY & NJ" form**, so the firm name is not cut off in search
  results.
- **Claims Against the City of New York and NYCHA Accidents — headlines left as they are**, as
  both concern New York City bodies specifically.
- **Brooklyn in meta descriptions — deferred.** Only one of the 40 mentions Brooklyn. None were
  removed; adding it to the rest remains available as a separate pass.

### Still open

- **New Jersey advertising rules.** Every page now advertises to New Jersey readers, not only
  the held-back New Jersey page. The review that page is waiting on arguably now applies
  site-wide.
- **Google Search Console.** The sitemap has not yet been submitted. It is live and reachable
  at `/sitemap.xml`, and `robots.txt` points at it, so Google will find the pages in time
  regardless; submitting only speeds up discovery. The property should be created and verified
  in the firm's own Google account so that ownership sits with the firm.

---

## 11. New Jersey advertising notice

Ms. Jackson reviewed the site against New Jersey's attorney advertising rules and approved it.
Her required notice was added to the footer, immediately after the existing Attorney
Advertising line:

> No aspect of this advertisement has been approved by the Supreme Court of New Jersey.

The footer now reads:

> Attorney Advertising. Prior results do not guarantee a similar outcome. This website is for
> informational purposes only and does not constitute legal advice. **No aspect of this
> advertisement has been approved by the Supreme Court of New Jersey.**

It appears **once on every page of the site** — the 40 practice pages, the practice areas index,
and, through the shared footer component, the home page, About and Privacy Policy. It was also
added to the held-back New Jersey draft so that page is ready when it publishes.

Nothing else was changed. The disclaimer above each intake form is untouched, and every page
still carries exactly one of those.

**Note on "Prior results do not guarantee a similar outcome."** That sentence was already on
every page — in the footer on all 40, and again under the Results section on the 9 pages that
show settlements. It was not added again, to avoid a third copy.

---

## 12. New Jersey page published

Ms. Jackson approved the New Jersey page, so it has been restored to the live site. **The site
now has 40 practice pages.**

| | |
|---|---|
| Page | moved from `drafts/` back to `public/practice/new-jersey-personal-injury/`; the `drafts/` folder is gone |
| Sitemap | restored, now 40 practice pages and 44 entries in total |
| Practice Areas menu | restored under Personal Injury, desktop and mobile, on all 41 pages |
| Personal Injury page | restored in its "Types of cases" list |
| Practice areas index | restored |
| React menu data | restored in `practice-menu.json`, so the home page and About menus match |

**82 links restored across 40 files**, exactly matching the number removed when the page was
held back.

### The page itself

Her approved wording is unchanged:

> **Injured in a New Jersey car accident?** If your New Jersey auto policy has the "limitation
> on lawsuit" option, you can sue for pain and suffering only if your injury falls into certain
> serious injury categories.

- **Headline kept New Jersey focused** — "New Jersey Personal Injury Lawyers" rather than
  "in NY & NJ", since the page is already about New Jersey. It was pluralised from "Lawyer" to
  "Lawyers" to match every other page on the site.
- Carries the same sitewide disclaimer, intake form and WhatsApp link as the other pages, and
  the New Jersey advertising notice in its footer.
- `areaServed` updated to New York City, New York and New Jersey, matching the rest.
- The "held back from launch" comment has been removed.

### Verification

| Check | Result |
|---|---|
| Practice pages | 40 |
| Sitemap | 40/40, matching the published folders |
| Broken internal links | none |
| Pages not linked from anywhere | none |
| JSON-LD | valid on every page |
| Disclaimers per page | exactly 1 |
| New Jersey footer notice | on all 41 pages |
| Build and lint | pass |

Fetched as a search engine sees it, the new page returns 25.6 KB of real HTML with its own
headline, three schema blocks and 1,417 words.

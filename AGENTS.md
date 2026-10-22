# Repository guidance

## Project overview

This repository contains Oluwadunsin Olatunji's personal GitHub Pages website.
The site presents the owner's background as an electrical and computer
engineering student, skills, projects, and ways to get in touch.
It is a static site with no build process or automated test suite currently
configured.

## Planned pages

- `index.html`: Home page with an introduction and links to the main pages.
- `about.html`: Background, education, interests, and skills.
- `projects.html`: Project descriptions, technologies used, and relevant links.
- `contact.html`: Contact information and professional profile links supplied
  by the owner.

Only `index.html` currently exists. Create the other pages when requested,
and keep navigation consistent across pages.

## Design

- Use a professional, clean, modern style with generous spacing, clear headings,
  and restrained visual effects.
- Use blue for primary actions and accents, with grey for text, borders, and
  supporting surfaces. Suggested palette: blue `#2563EB`, dark blue `#1E3A8A`,
  dark grey `#1F2937`, medium grey `#4B5563`, and light grey `#F3F4F6`.
- Use white for cards or page surfaces where it improves readability.
- Use the professional system font stack `"Segoe UI", Roboto, "Helvetica Neue",
  Arial, sans-serif` with consistent heading sizes and comfortable line spacing.
- Use responsive layouts, accessible color contrast, visible keyboard focus,
  and clear navigation on mobile and desktop.

## Key files

- `index.html`: Homepage content and inline styles.
- `README.md`: Repository introduction.
- `AGENTS.md`: Instructions for coding agents working in this repository.

## Working conventions

- Keep changes focused on the user's request and preserve unrelated work.
- Use plain HTML, CSS, and JavaScript only. Do not use frameworks or introduce
  a package manager or build system.
- Use semantic HTML, descriptive link text, and alt text for meaningful images.
- Keep the site usable on mobile and desktop, with readable text and adequate
  color contrast.
- Preserve the owner's personal details unless asked to change them; do not
  invent experience, credentials, projects, or contact information.
- Use relative file paths for all local assets, scripts, stylesheets, and page
  links so the site works on GitHub Pages. External links may use full URLs.
- Never commit credentials, tokens, or other sensitive information.

## Validation

- Review the diff for unintended changes and check `git diff --check`.
- For website changes, preview `index.html` in a browser and check narrow and
  wide viewport sizes when a browser is available.
- Check any changed links and asset paths, and verify that the HTML remains
  well structured.
- Do not claim tests or visual checks were completed unless they were run.

## Handoff

Summarize what changed, what was verified, and any remaining limitations.

## Git workflow

- After each completed task, run the relevant checks and review the diff.
- Stage only files belonging to that task, preserving unrelated user changes.
- Commit with a clear, descriptive message explaining the completed change.
- Push the commit to GitHub on the current branch after each task.
- Never force-push or rewrite shared history unless explicitly requested.
- If a commit or push fails, report the reason and what remains to be done.

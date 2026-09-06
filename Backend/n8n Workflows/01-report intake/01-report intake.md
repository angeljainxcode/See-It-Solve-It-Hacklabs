# Report Intake Workflow

## Purpose

The Report Intake workflow is the entry point of the See It. Solve It. civic grievance platform. It receives a citizen complaint, prepares the submitted data, uses AI to analyze the complaint, and produces a combined result for further processing.

## Workflow

Webhook → Edit Fields → ChatGPT + Gemini → Merge → Routing Logic

## Input

The webhook receives:

- `description` — Citizen's complaint description
- `latitude` — Latitude of the complaint location
- `longitude` — Longitude of the complaint location
- `image_url` — URL of the supporting complaint image

## Edit Fields

The Edit Fields node extracts and organizes the required complaint data before sending it to the AI analysis branches.

## ChatGPT — Text Analysis

ChatGPT analyzes the complaint description and identifies:

- Complaint category
- Severity
- Short summary
- Suggested department

## Gemini — Image Analysis

Gemini analyzes the supporting complaint image and identifies:

- Visible issue
- Image description
- Severity based on visual evidence
- Evidence confidence

## Merge

The ChatGPT and Gemini results are combined into one output containing both text-based and image-based analysis.

The combined result is then passed to the Routing Logic workflow.

## Expected Output

The final output will contain the original complaint information along with the AI-generated analysis, including category, severity, summary, suggested department, image analysis, and evidence confidence.

## Security

API credentials must never be committed to GitHub. OpenAI and Gemini credentials will be stored securely inside n8n.

## Status

- [x] Webhook configured
- [x] Edit Fields configured
- [ ] ChatGPT configured
- [ ] Gemini configured
- [ ] Merge configured
- [ ] End-to-end testing
- [ ] Export workflow to `backend/n8n-workflows/01-report-intake.json`


# Copilot Context — See It. Solve It.

## Project

See It. Solve It. is an AI-powered civic grievance reporting platform.

Citizens can:
1. Capture a civic issue using their camera.
2. Share their current GPS location.
3. Submit a description and image.
4. Get the issue analyzed by AI.
5. Store the complaint in Supabase.
6. Detect duplicate complaints.
7. Track complaint status.
8. Allow authorities to upload a resolution image.
9. Verify resolution using AI image comparison.

---

## Tech Stack

- Frontend: React
- Database: Supabase PostgreSQL
- Storage: Supabase Storage
- Automation/Backend: n8n
- AI: Gemini
- Version Control: GitHub

---

## Database

Table: `complaints`

Important fields:

- `id` — UUID primary key
- `description`
- `issue_type`
- `severity`
- `department`
- `latitude`
- `longitude`
- `image_url`
- `status`
- `resolution_image_url`
- `verified`
- `created_at`

Status flow:

`new → in_progress → resolved`

Storage bucket:

`grievance-images`

---

## Issue Categories

AI MUST classify every complaint into exactly ONE of:

1. Potholes & Damaged Roads
2. Overflowing Garbage Bins
3. Broken Streetlights
4. Water Leakage
5. Damaged Public Infrastructure

Severity:

- Low
- Medium
- High

Do not create additional categories.

---

## Frontend → n8n

Report Intake endpoint:

`POST /webhook/report-intake`

Request:

~~~json
{
  "description": "There are large potholes on the main road.",
  "latitude": 26.2183,
  "longitude": 78.1828,
  "image_url": "https://example.com/pothole.jpg",
  "timestamp": "2026-09-06T10:30:00.000Z"
}
~~~

The frontend should NOT decide the final category, severity, or department.

AI is responsible for classification.

---

## Report Intake Workflow

Current n8n flow:

Webhook
→ Edit Fields
→ Gemini Image Analysis
→ AI Text Analysis
→ Routing Logic
→ Prepare Complaint
→ Supabase Get Many
→ Duplicate Check
→ Create Row / Duplicate Response

---

## AI Classification

Use the complaint description and image to determine:

- Issue category
- Severity
- Short summary
- Suggested department

AI output should follow:

`Category: [exact category]`

`Severity: [Low/Medium/High]`

`Short Summary: [one sentence]`

`Suggested Department: [department]`

---

## Duplicate Detection

Duplicate detection checks existing complaints using the issue type.

If duplicate:

~~~json
{
  "complaint_id": "existing-uuid",
  "duplicate": true,
  "message": "Duplicate complaint detected"
}
~~~

If new:

~~~json
{
  "complaint_id": "uuid",
  "status": "new",
  "message": "Complaint created successfully"
}
~~~

---

## Status Update

Status update receives:

~~~json
{
  "complaint_id": "uuid",
  "new_status": "in_progress",
  "resolution_image_url": "https://example.com/resolution.jpg"
}
~~~

Only update the existing complaint.

Do NOT replace the original citizen `image_url`.

---

## Resolution Verification

The original complaint image and authority resolution image are compared using AI.

Output:

~~~json
{
  "complaint_id": "uuid",
  "verified": true
}
~~~

`verified = true` only when the reported issue appears resolved.

---

## Security Rules

- Never expose Supabase service-role keys in frontend code.
- Frontend may use the Supabase Publishable/Anon key.
- Never expose AI API keys in frontend code.
- Store AI credentials inside n8n credentials.
- Never commit `.env` or secrets to GitHub.
- Do not change the database schema unnecessarily.

---

## Development Rules

When modifying the project:

1. Preserve the existing architecture.
2. Do not replace working n8n workflows unnecessarily.
3. Do not introduce unnecessary dependencies.
4. Use the existing Supabase `complaints` table.
5. Keep the five issue categories exactly as defined above.
6. Keep AI classification authoritative.
7. Keep citizen and authority images separate.
8. Prefer simple MVP implementations over unnecessary features.
9. Do not hardcode API keys or credentials.
10. If a feature is not required for the MVP, do not add it.

---

## Current MVP Flow

Citizen
→ React Dashboard
→ Camera + GPS
→ Supabase Storage
→ n8n Report Intake
→ Gemini AI Analysis
→ Classification + Routing
→ Duplicate Detection
→ Supabase Complaint
→ Authority Status Update
→ Resolution Image
→ AI Resolution Verification
→ Citizen sees updated status

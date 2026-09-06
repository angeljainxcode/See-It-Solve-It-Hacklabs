# Workflow — See It. Solve It.

## 1. Citizen Reports an Issue

Citizen opens the React dashboard and:

- Captures/uploads an image
- Allows GPS location
- Enters a short description
- Submits the complaint

---

## 2. Image Storage

The complaint image is uploaded to Supabase Storage.

**Bucket:** `grievance-images`

The frontend receives the image URL.

---

## 3. Report Intake

The frontend sends the complaint to the n8n webhook.

**Endpoint:**

`POST /webhook/report-intake`

Data sent:

- description
- latitude
- longitude
- image_url
- timestamp

---

## 4. AI Analysis

n8n sends the complaint to Gemini.

AI analyzes:

- Citizen description
- Complaint image
- Issue category
- Severity
- Short summary
- Suggested department

### Allowed Categories

1. Potholes & Damaged Roads
2. Overflowing Garbage Bins
3. Broken Streetlights
4. Water Leakage
5. Damaged Public Infrastructure

Severity:

`Low | Medium | High`

---

## 5. Routing

The AI-generated department is used to route the complaint to the appropriate authority/department.

---

## 6. Duplicate Detection

Before creating a new complaint, n8n checks existing complaints.

### If Duplicate

Return:

`Duplicate complaint detected`

### If New

Continue to complaint creation.

---

## 7. Store Complaint

The new complaint is stored in the Supabase `complaints` table.

The complaint receives:

- Unique complaint ID
- Issue type
- Severity
- Department
- Location
- Citizen image
- Status

Initial status:

`new`

---

## 8. Status Tracking

Complaint lifecycle:

`NEW → IN_PROGRESS → RESOLVED`

Authorities can update the complaint status.

---

## 9. Resolution Evidence

When the issue is resolved, the authority uploads a resolution image.

The resolution image is stored separately from the original citizen image.

---

## 10. AI Resolution Verification

Gemini compares:

**Original Citizen Image**
vs.
**Authority Resolution Image**

Result:

`VERIFIED`

or

`NOT VERIFIED`

The result is stored in:

`complaints.verified`

---

## 11. Final User Flow

Citizen
↓
React Dashboard
↓
Camera + GPS
↓
Supabase Storage
↓
n8n Webhook
↓
Gemini AI Analysis
↓
Classification + Routing
↓
Duplicate Detection
↓
Supabase Database
↓
Authority Status Update
↓
Resolution Image
↓
AI Verification
↓
Citizen sees final status

---

## 12. Complete System Flow

**SEE IT**
→ Citizen captures the issue

**ANALYZE IT**
→ AI understands the image and description

**ROUTE IT**
→ Complaint is assigned to the relevant department

**DETECT IT**
→ Duplicate complaints are identified

**SOLVE IT**
→ Authority updates and resolves the complaint

**VERIFY IT**
→ AI checks whether the issue was actually resolved

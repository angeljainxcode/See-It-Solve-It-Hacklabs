
````markdown
# API Reference — See It. Solve It.

## 1. Report Intake API

**Endpoint:** `POST /webhook/report-intake`

Receives a new civic complaint from the frontend.

### Request

```json
{
  "description": "There are large potholes on the main road.",
  "latitude": 26.2183,
  "longitude": 78.1828,
  "image_url": "https://example.com/pothole.jpg",
  "timestamp": "2026-09-06T10:30:00.000Z"
}
````

### Parameters

| Field       | Type   | Required |
| ----------- | ------ | -------- |
| description | string | Yes      |
| latitude    | number | Yes      |
| longitude   | number | Yes      |
| image_url   | string | Yes      |
| timestamp   | string | Yes      |

### Response

```json
{
  "complaint_id": "uuid",
  "status": "new",
  "message": "Complaint created successfully"
}
```

If the complaint is detected as a duplicate:

```json
{
  "complaint_id": "existing-uuid",
  "duplicate": true,
  "message": "Duplicate complaint detected"
}
```

---

## 2. Status Update API

**Endpoint:** `POST /webhook/status-update`

Updates the status of an existing complaint.

### Request

```json
{
  "complaint_id": "uuid",
  "new_status": "in_progress",
  "resolution_image_url": "https://example.com/resolution.jpg"
}
```

### Status Flow

```text
new → in_progress → resolved
```

### Response

```json
{
  "complaint_id": "uuid",
  "status": "in_progress",
  "message": "Complaint status updated successfully"
}
```

---

## 3. Resolution Verification API

**Endpoint:** `POST /webhook/resolution-verification`

Compares the original complaint image with the resolution image using AI.

### Request

```json
{
  "complaint_id": "uuid"
}
```

### Response

```json
{
  "complaint_id": "uuid",
  "verified": true
}
```

`verified` is `true` when the issue is visually resolved and `false` otherwise.

---

## 4. Supabase Database

**Table:** `complaints`

Main fields:

```text
id
description
issue_type
severity
department
latitude
longitude
image_url
status
resolution_image_url
verified
created_at
resolved_at
```

---

## 5. Supabase Storage

**Bucket:** `grievance-images`

Used to store:

* Citizen complaint images
* Authority resolution images

---

## 6. AI Classification

Complaints are classified into exactly one of:

```text
Potholes & Damaged Roads
Overflowing Garbage Bins
Broken Streetlights
Water Leakage
Damaged Public Infrastructure
```

Severity levels:

```text
Low
Medium
High
```

---

## 7. Authentication & Security

* Supabase Publishable/Anon Key may be used in the frontend.
* Service-role keys and API keys must never be exposed in frontend code.
* AI credentials are stored securely in n8n.
* Secrets and `.env` files must not be committed to GitHub.

```
```


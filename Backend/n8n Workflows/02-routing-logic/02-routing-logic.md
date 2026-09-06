# Duplicate Detection Workflow

## Purpose

The Duplicate Detection workflow prevents citizens from repeatedly reporting the same civic issue. It checks whether a similar complaint already exists in the system before creating a new complaint record.

The workflow receives the processed complaint data, searches existing complaints in Supabase, and determines whether the new complaint should be treated as a duplicate.

## Workflow

Prepare Complaint → Supabase — Get Many → IF — Duplicate?

### If Duplicate

IF — Duplicate? → Edit Fields — Duplicate Found → Respond to Webhook — Duplicate

### If New Complaint

IF — Duplicate? → Supabase — Create Row → Respond to Webhook — Created

## Input

The workflow uses the processed complaint information:

- `issue_type` — AI-determined civic issue category
- `severity` — AI-determined severity
- `description` — Citizen's complaint description
- `latitude` — Latitude of the complaint location
- `longitude` — Longitude of the complaint location
- `image_url` — URL of the supporting complaint image
- `department` — Suggested responsible department

## Supabase — Get Many

The workflow searches the `complaints` table in Supabase for an existing complaint with the same:

- `issue_type`

This helps identify potentially repeated reports of the same type of civic issue.

## Duplicate Check

The retrieved complaint data is compared with the newly processed complaint.

If a matching complaint is found, the complaint is treated as a duplicate.

If no matching complaint is found, the complaint continues to the creation stage.

## Duplicate Branch

When a duplicate is detected, the workflow prepares a response containing:

- `duplicate` — `true`
- `existing_complaint_id` — ID of the existing complaint
- `message` — Duplicate complaint detected

The workflow then returns the duplicate response without creating another complaint record.

## New Complaint Branch

When no duplicate is detected, the complaint is sent to the Supabase `complaints` table.

The following information is stored:

- `issue_type`
- `severity`
- `description`
- `image_url`
- `latitude`
- `longitude`
- `department`
- `status`

The complaint receives a unique ID automatically from Supabase.

## Expected Output

### Duplicate Complaint

```json
{
  "complaint_id": "existing-complaint-id",
  "duplicate": true,
  "message": "Duplicate complaint detected"
}

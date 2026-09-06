# Status Update Workflow

## Purpose

The Status Update workflow allows an authorized authority or department officer to update the status of an existing civic complaint.

It connects the complaint ID with the latest status and, when available, the resolution image so that the complaint record remains up to date.

## Workflow

When Executed by Another Workflow → Prepare Status Update → Supabase — Update a Row

## Input

The workflow receives:

- `complaint_id` — Unique ID of the complaint
- `new_status` — Updated complaint status
- `resolution_image_url` — URL of the authority's resolution image

## Prepare Status Update

The Prepare Status Update node organizes the incoming information before updating the complaint record.

The complaint ID is trimmed and validated before being used to identify the database row.

## Supabase — Update a Row

The workflow searches the `complaints` table using:

- `id` = `complaint_id`

The following fields are updated:

- `status` — New complaint status
- `resolution_image_url` — Authority's resolution image
- `resolved_at` — Timestamp of the resolution update

The original citizen `image_url` is preserved and is never overwritten.

## Status Flow

A complaint can progress through statuses such as:

```text
NEW
 ↓
IN_PROGRESS
 ↓
RESOLVED

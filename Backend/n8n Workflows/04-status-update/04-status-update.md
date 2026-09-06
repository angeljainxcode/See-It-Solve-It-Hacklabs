# Resolution Verification Workflow

## Purpose

The Resolution Verification workflow uses AI to verify whether a reported civic issue has actually been resolved.

It compares the original citizen complaint image with the resolution image uploaded by the responsible authority and determines whether the visible issue has been fixed.

## Workflow

When Executed by Another Workflow → Supabase — Get Many → Analyze Image 1 → Supabase — Update a Row 1

## Input

The workflow receives:

- `complaint_id` — Unique ID of the complaint

The complaint ID is used to retrieve the original complaint and its resolution information from Supabase.

## Supabase — Get Many

The workflow searches the `complaints` table using:

- `id` = `complaint_id`

The workflow retrieves:

- `image_url` — Original citizen complaint image
- `resolution_image_url` — Authority's resolution image
- `complaint_id` — Complaint identifier

## Analyze Image

Gemini compares the original complaint image with the authority's resolution image.

The AI determines whether the original reported issue appears to have been resolved.

The analysis considers:

- Whether the reported issue is still visible
- Whether the same problem appears to have been fixed
- Whether the resolution image provides sufficient visual evidence
- Whether the images correspond to the same reported problem

The AI returns only:

```text
VERIFIED

# Nearby Issues & Heatmap

## Purpose

The Nearby Issues feature helps citizens discover civic complaints reported around their current location.

It uses the user's GPS coordinates and complaint locations stored in Supabase to display nearby issues based on distance and severity.

## Workflow

Get User Location → Fetch Complaints → Filter Nearby Issues → Display Severity Markers → Generate Heatmap

## Input

The feature uses:

- `latitude` — User's current latitude
- `longitude` — User's current longitude
- `issue_type` — Type of civic issue
- `severity` — Complaint severity
- `status` — Current complaint status
- `latitude` — Complaint latitude
- `longitude` — Complaint longitude

## Nearby Issue Detection

The user's current GPS location is used as the center point.

Complaints within the configured nearby radius are retrieved and displayed.

The system calculates the approximate distance between the citizen and each complaint using its geographic coordinates.

## Severity Visualization

Nearby complaints are visually represented according to severity:

- 🔴 **High** — Critical or dangerous issues
- 🟠 **Medium** — Moderate civic issues
- 🟢 **Low** — Minor civic issues

The user's current position is displayed separately from complaint markers.

## Heatmap

Complaint coordinates are used to generate a heatmap showing areas with a high concentration of civic issues.

Areas with more complaints appear more prominent, helping citizens and authorities quickly identify problem hotspots.

## Complaint Details

Selecting a nearby complaint can display:

- Issue type
- Severity
- Description
- Status
- Approximate distance
- Complaint location
- Complaint image

## Data Source

Complaint information is retrieved from the Supabase `complaints` table.

The relevant fields are:

- `issue_type`
- `severity`
- `description`
- `latitude`
- `longitude`
- `image_url`
- `status`
- `created_at`

## Architecture

```text
Citizen GPS
     ↓
React Frontend
     ↓
Supabase
     ↓
Nearby Complaints
     ↓
Distance Filtering
     ↓
Severity Markers + Heatmap
     ↓
Citizen Views Local Civic Issues

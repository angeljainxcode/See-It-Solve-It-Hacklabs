-- sql
-- See It. Solve It. — Supabase Database Schema
-- Hacklabs | HackIndia Hack Synapse 2026
-- complaints: Stores citizen-reported civic complaints.
-- departments: Stores government departments handling complaints.
-- issue_clusters: Stores groups of geographically similar complaints.
-- users: Stores citizens, officers and administrators.
-- audit_log: Records actions performed on complaints.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE departments (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    category text,
    contact_email text
);

CREATE TABLE complaints (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    citizen_id uuid,
    issue_type text,
    severity text,
    priority text,
    description text,
    image_url text,
    latitude float8,
    longitude float8,
    ward text,
    address text,
    department text,
    status text DEFAULT 'new',
    assigned_to text,
    created_at timestamptz DEFAULT now(),
    resolved_at timestamptz,
    resolution_image_url text,
    verified boolean DEFAULT false
);

CREATE TABLE issue_clusters (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    latitude float8,
    longitude float8,
    radius float8,
    complaint_ids uuid[]
);

CREATE TABLE users (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text,
    role text,
    department_id uuid,
    email text,

    CONSTRAINT users_department_id_fkey
        FOREIGN KEY (department_id)
        REFERENCES departments(id),

    CONSTRAINT users_role_check
        CHECK (role IN ('citizen', 'officer', 'admin'))
);

CREATE TABLE audit_log (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    complaint_id uuid,
    action text,
    timestamp timestamptz DEFAULT now(),
    actor text,

    CONSTRAINT audit_log_complaint_id_fkey
        FOREIGN KEY (complaint_id)
        REFERENCES complaints(id)
);

-- Useful indexes for common queries
CREATE INDEX complaints_status_idx
    ON complaints(status);

CREATE INDEX complaints_issue_type_idx
    ON complaints(issue_type);

CREATE INDEX complaints_location_idx
    ON complaints(latitude, longitude);

CREATE INDEX audit_log_complaint_id_idx
    ON audit_log(complaint_id);

CREATE INDEX users_department_id_idx
    ON users(department_id);

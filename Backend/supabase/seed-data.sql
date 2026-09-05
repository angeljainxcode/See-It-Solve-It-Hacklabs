--sql
-- Seed data for demo purposes.
-- Hacklabs | See It. Solve It.
-- Demo-only data. No real citizen information.

-- Departments
INSERT INTO departments (id, name, category, contact_email)
VALUES
(
        '11111111-1111-1111-1111-111111111111',
        'Public Works Department',
        'Roads & Infrastructure',
        'pwd-demo@example.com'
    ),
    (
        '22222222-2222-2222-2222-222222222222',
        'Municipal Sanitation Department',
        'Waste Management',
        'sanitation-demo@example.com'
    ),
    (
        '33333333-3333-3333-3333-333333333333',
        'Water Supply Department',
        'Water & Drainage',
        'water-demo@example.com'
    ),
    (
        '44444444-4444-4444-4444-444444444444',
        'Electrical Department',
        'Street Lighting',
        'electricity-demo@example.com'
    );




    (
        'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        'Demo Citizen',
        'citizen',
        NULL,
        'citizen-demo@example.com'
    ),
    (
        'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        'Demo Road Officer',
        'officer',
        '11111111-1111-1111-1111-111111111111',
        'road-officer-demo@example.com'
    ),
    (
        'cccccccc-cccc-cccc-cccc-cccccccccccc',
        'Demo Sanitation Officer',
        'officer',
        '22222222-2222-2222-2222-222222222222',
        'sanitation-officer-demo@example.com'
    ),
    (
        'dddddddd-dddd-dddd-dddd-dddddddddddd',
        'Demo Administrator',
        'admin',
        NULL,
        'admin-demo@example.com'
    );

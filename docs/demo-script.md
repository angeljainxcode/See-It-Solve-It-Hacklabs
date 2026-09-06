# Demo Script — See It. Solve It.

## 1. Opening — The Problem

"Imagine you're walking down a road and see a huge pothole.

You want to report it, but then comes the usual process:
Where do I report it?
Which department handles it?
Will someone else report the same issue?
And most importantly—how do I know it was actually fixed?

That's the problem we're solving with **See It. Solve It.**"

---

## 2. Introduce the Solution

"See It. Solve It. turns a simple photo and location into an intelligent civic complaint.

The citizen doesn't need to know the department, category, or priority.

They simply **see an issue, capture it, and report it.**

Our AI handles the rest."

---

## 3. Citizen Demo

### Step 1 — Report an Issue

Show the Citizen Dashboard.

Say:

"Let's report a real example—a damaged road."

Enter:

**Description:**
`There are large potholes on the main road causing difficulty for vehicles.`

Capture/upload the issue image.

Allow location access.

Click **Submit Complaint**.

---

## 4. AI Analysis

Show the processing/result.

Say:

"Behind the scenes, the complaint is sent through our n8n automation pipeline.

The AI analyzes both the citizen's description and the uploaded image."

Show:

- Category: Potholes & Damaged Roads
- Severity: High
- Department: Public Works Department

Say:

"So instead of asking the citizen to figure out what department should handle this, the system automatically classifies and routes the complaint."

---

## 5. Duplicate Detection

Submit the same or a similar complaint again.

Say:

"Now let's try reporting the same issue again.

Our system checks existing complaints before creating another one."

Show:

**Duplicate complaint detected**

Say:

"This prevents multiple reports of the same issue from unnecessarily creating duplicate complaints."

---

## 6. Complaint Tracking

Show the complaint/status dashboard.

Say:

"Once created, every complaint receives a unique ID and moves through a clear lifecycle."

Show:

`NEW → IN PROGRESS → RESOLVED`

"Citizens can therefore see what is happening instead of submitting a complaint and forgetting about it."

---

## 7. Resolution Verification

Move to the authority/resolution side.

Upload a resolution image.

Say:

"But reporting the issue isn't the end.

The bigger question is: **Was it actually fixed?**"

"An authority can upload a resolution image, and our AI compares it with the original citizen image."

Show:

**Verified ✓**

Say:

"If the visual evidence shows that the original issue has been resolved, the complaint is marked as verified."

---

## 8. Tech Behind the Demo

Show the workflow briefly.

Say:

"The system is built using:

- React for the citizen interface
- Supabase for database and image storage
- n8n for workflow automation
- Gemini for multimodal AI analysis
- GitHub for version control"

"Instead of building a complicated backend from scratch, n8n connects the entire intelligence pipeline."

---

## 9. Why It Matters

"What's different here is that we're not just building another complaint form.

We're creating a feedback loop:

**See → Analyze → Route → Detect → Resolve → Verify**

The goal is to make civic reporting simpler for citizens and more actionable for authorities."

---

## 10. Closing

"So with **See It. Solve It.**, the process is simple:

**See it.**
**Report it.**
**Let AI handle the complexity.**
**And verify that it gets solved.**

Because a civic complaint shouldn't end when you press Submit.

It should end when the problem is actually solved."


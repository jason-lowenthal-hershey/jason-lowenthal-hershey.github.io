# Updated Weekly Work Expansion Task - Template-Based Approach

## Overview
This is the **NEW** prompt for your `weekly-work-expansion` scheduled task. Replace the current prompt in `/Users/jasonlowenthal-hershey/Documents/Claude/Scheduled/weekly-work-expansion/SKILL.md` with this.

## The Updated Approach

Instead of writing a full 1500-word essay, the automated task now:
1. **Gathers** work from Slack, email, and Git
2. **Selects** the best story
3. **Creates a detailed outline** using the HTML template structure
4. **Returns** the outline for you to write from

This is faster for the automated part, and gives you a beautiful scaffold to add your voice to.

---

Your task: Create a weekly work expansion outline and post using the HTML template system. This is a two-phase approach: (1) gather and outline, (2) Jason writes the prose using the outline as a guide.

## PHASE 1: DISCOVERY & OUTLINE GENERATION (This Task)

Your job is to research the week, identify the best story, and create a detailed outline that Jason can write from. This is faster than writing the full essay, and gives Jason the scaffolding to add his voice.

## STEP 1: Gather Work from Past 7 Days

A. **Search Slack** using slack_search_public_and_private:
   - Look for: problem-solving conversations, design decisions, collaboration moments, team insights
   - Avoid: specific tool choices, security details, internal infrastructure
   - Compile: How the team approached problems

B. **Search Gmail** using search_threads with "newer_than:7d":
   - Look for: project proposals, problem-solving discussions, team insights, decision-making
   - Note: how challenges were tackled, team contributions
   - Avoid: technical specs, sensitive details

C. **Check Git repositories** for recent work:
   - Review commits/PRs from past 7 days
   - Focus on: What problems solved? How did team approach them?
   - Look for: Interesting patterns, elegant solutions, collaboration moments

## STEP 2: Select the Best Story

Choose ONE piece of work that:
- Showcases interesting problem-solving or thinking
- Demonstrates team collaboration or process insights
- Has human/team interest beyond technical details
- Can be discussed in principle-based, non-technical terms
- Makes Codefi team look thoughtful and capable
- Shows something about how you work together

## STEP 3: Create Detailed Outline Using Template Structure

Generate an HTML outline file (like weekly-expansion-outline-may-12-2026.html) with:

1. **The Opening** (150-250 words)
   - Specific bullet points for what to cover
   - Key angles to explore
   - Hook ideas

2. **What We Were Working On** (200-300 words)
   - Context, problem, why it mattered
   - Specific moments or discoveries
   - Key people involved

3. **How We Thought Through It** (200-300 words)
   - The thinking process
   - Collaboration specifics
   - Competing priorities/tradeoffs
   - Key conversations

4. **What This Taught Us** (200-250 words)
   - Broader insights
   - What it reveals about problem-solving
   - What it shows about teamwork

5. **Why This Matters** (200-250 words)
   - Bigger themes
   - Why readers should care
   - What it says about building

6. **Looking Back** (150-200 words)
   - Return to opening theme
   - Reflection on the week
   - Forward perspective

### Include in Outline:
- 📌 **Key Moments Section:** Specific quotes, conversations, discoveries to capture
- 💡 **Collaboration Section:** How team members worked together (name them)
- ✍️ **Voice Tips:** Tone reminders for THIS week's story
- ⚠️ **What to Avoid:** Specific tech/jargon to skip
- 📚 **References:** Suggested sources for inclusion
- 📊 **Word Counts:** Target lengths for each section

## STEP 4: Generate the Outline HTML File

Create new file:
- Name: weekly-expansion-outline-[DATE].html
- Save to: /Users/jasonlowenthal-hershey/Developer/jason-lowenthal-hershey.github.io/
- Use template structure with specific guidance for writing
- Make it visually scannable and easy to build from

## STEP 5: Return Summary

Provide:
- 📝 Description of selected work and why it's interesting
- 🔗 Link to outline file
- 🎯 Key themes to explore
- ✨ Notable moments/quotes to include
- 📖 Writing tips specific to this week
- 📚 Reference suggestions
- 💬 Voice guidance

## JASON'S PROSE STYLE GUIDE

When writing (Phase 2), match this voice:
- **Conversational & Reflective:** Show thinking process, first-person observations
- **Introspective:** Explore ideas, ask questions, show reasoning
- **Human-Centered:** Focus on people, collaboration, lessons learned
- **Natural:** Like talking to a smart friend, not academic
- **Accessible:** Clear without jargon, relatable examples
- **Structured but Flowing:** Clear sections with natural transitions
- **Philosophical:** Curiosity about bigger implications

✅ "Recently, I found myself wrestling with..."
✅ "The team discovered something interesting about..."
✅ "This experience taught us about..."
❌ "The following analysis..."
❌ "The system was optimized by..."

## LANGUAGE RULES

✅ "We approached this challenge by..."
✅ "The team explored different possibilities..."
✅ "This taught us about the importance of..."
❌ "We switched from PostgreSQL to MongoDB"
❌ "We implemented microservices with Docker"
❌ "We reduced query time by 40%"

## TEMPLATE FILES TO REFERENCE

- Main template: /Users/jasonlowenthal-hershey/Developer/jason-lowenthal-hershey.github.io/weekly-expansion-template.html
- Guide: /Users/jasonlowenthal-hershey/Developer/jason-lowenthal-hershey.github.io/TEMPLATE-GUIDE.md
- Reference outline: /Users/jasonlowenthal-hershey/Developer/jason-lowenthal-hershey.github.io/weekly-expansion-outline-may-12-2026.html

## SUCCESS CRITERIA

✅ Comprehensive review of Slack, email, and Git work
✅ Best story selected (interesting thinking + team collaboration)
✅ Outline structure uses the 6-section template
✅ Each section has specific bullet points to guide writing
✅ Includes key moments, quotes, collaboration instances
✅ Provides voice tips and what-to-avoid guidance
✅ Uses principle-based, non-technical language
✅ References suggested for inclusion
✅ Ready for Jason to write the full prose
✅ File saved to GitHub Pages repo
✅ Summary explains what the week reveals about the team

---

## How to Update Your Scheduled Task

1. Go to: `/Users/jasonlowenthal-hershey/Documents/Claude/Scheduled/weekly-work-expansion/SKILL.md`
2. Replace the entire prompt section with the content above (start after the YAML frontmatter)
3. Save and commit

From now on, the weekly task will:
- Generate an outline in ~15 minutes
- Save it to your GitHub Pages repo
- Give you everything you need to write the full essay
